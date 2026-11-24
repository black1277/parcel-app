import { SWIPE } from '../../config/constants.js';
import { canTurnPage, dragOffset, isHorizontalDrag, resolveSwipe } from '../../core/swipe.js';
import { elements } from '../../ui/elements.js';

/** Жест, начавшийся на интерактивном элементе (поле, кнопка, ссылка), свайпом не считаем. */
const INTERACTIVE_SELECTOR = 'a, button, input, select, textarea, label, .editor';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Перелистывание страниц свайпом по панели на устройствах без мыши.
 * Панель следует за пальцем; при отпускании «улетает», новая страница «въезжает» с пружиной.
 * Без анимаций: если включён «Эффект исчезновения», prefers-reduced-motion или нет WAAPI.
 * Слушатели пассивные: прокрутка, двойной тап и ввод ответа работают как раньше.
 * @param {ReturnType<typeof import('./trainer.js').createTrainer>} trainer
 * @param {object} deps
 * @param {ReturnType<typeof import('../../state/appState.js').createAppState>} deps.state
 * @param {number} deps.totalPages
 * @param {() => boolean} deps.isFadeEnabled
 */
export function bindSwipeNavigation(trainer, { state, totalPages, isFadeEnabled }) {
  const { main: panel } = elements;
  const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);

  let start = null; // начало жеста: { id, x, y, time }
  let dragging = false; // жест признан горизонтальным, панель следует за пальцем
  let offset = 0; // текущее смещение панели, px
  let flight = null; // текущая анимация улёта / пружины
  let commit = null; // смена страницы, отложенная на время улёта

  const animated = () =>
    !isFadeEnabled() && !reducedMotion.matches && typeof panel.animate === 'function';

  const canGo = (direction) =>
    canTurnPage({ direction, currentPage: state.currentPage, totalPages });

  function turn(direction) {
    if (direction === 'next') trainer.goToNextPage();
    else trainer.goToPreviousPage();
  }

  function clearDrag() {
    dragging = false;
    offset = 0;
    panel.style.transform = '';
    panel.style.willChange = '';
  }

  /** Прерывает анимацию и немедленно завершает отложенную смену страницы. */
  function settle() {
    flight?.cancel();
    flight = null;
    const pending = commit;
    commit = null;
    pending?.();
    clearDrag();
  }

  /** Возврат панели на место с пружиной (жест не дотянул до свайпа или упёрся в границу). */
  function springBack(fromPx) {
    flight?.cancel();
    clearDrag();
    const back = panel.animate(
      [{ transform: `translateX(${fromPx}px)` }, { transform: 'translateX(0)' }],
      { duration: SWIPE.IN_MS, easing: SWIPE.EASING_SPRING },
    );
    flight = back;
    back.onfinish = () => {
      if (flight === back) flight = null;
    };
  }

  /** Панель улетает в сторону свайпа, страница меняется, новая въезжает с противоположной. */
  function flyOut(direction, fromPx) {
    const sign = direction === 'next' ? -1 : 1;
    clearDrag();
    commit = () => turn(direction);
    const out = panel.animate(
      [
        { transform: `translateX(${fromPx}px)`, opacity: 1 },
        { transform: `translateX(${sign * SWIPE.FLY_OUT_PX}px)`, opacity: 0.25 },
      ],
      { duration: SWIPE.OUT_MS, easing: 'ease-out', fill: 'forwards' },
    );
    flight = out;
    out.onfinish = () => {
      const pending = commit;
      commit = null;
      out.cancel(); // снимаем fill: forwards — панель возвращается в базовое положение
      pending(); // строки перерисовываются синхронно (эффект исчезновения выключен)
      const enter = panel.animate(
        [
          { transform: `translateX(${-sign * SWIPE.ENTER_PX}px)`, opacity: 0.25 },
          { transform: 'translateX(0)', opacity: 1 },
        ],
        { duration: SWIPE.IN_MS, easing: SWIPE.EASING_SPRING },
      );
      flight = enter;
      enter.onfinish = () => {
        if (flight === enter) flight = null;
      };
    };
  }

  function cancelGesture() {
    start = null;
    if (dragging) springBack(offset);
  }

  panel.addEventListener(
    'touchstart',
    (event) => {
      settle(); // новый жест прерывает анимацию и доводит отложенный переход до конца
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      if (event.target.closest(INTERACTIVE_SELECTOR)) return;
      // у самых краёв экрана жест «назад/вперёд» принадлежит браузеру
      if (touch.clientX < SWIPE.EDGE_GUARD_PX) return;
      if (touch.clientX > window.innerWidth - SWIPE.EDGE_GUARD_PX) return;
      start = { id: touch.identifier, x: touch.clientX, y: touch.clientY, time: event.timeStamp };
    },
    { passive: true },
  );

  panel.addEventListener(
    'touchmove',
    (event) => {
      if (!start) return;
      if (event.touches.length > 1) {
        cancelGesture(); // второй палец — уже не свайп
        return;
      }
      const touch = [...event.touches].find((item) => item.identifier === start.id);
      if (!touch || !animated()) return;
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      if (!dragging) {
        if (!isHorizontalDrag({ dx, dy })) return;
        dragging = true;
        panel.style.willChange = 'transform';
      }
      offset = dragOffset({ dx, canGo: canGo(dx < 0 ? 'next' : 'prev') });
      panel.style.transform = `translateX(${offset}px)`;
    },
    { passive: true },
  );

  panel.addEventListener(
    'touchend',
    (event) => {
      if (!start) return;
      const touch = [...event.changedTouches].find((item) => item.identifier === start.id);
      if (!touch) return;

      const direction = resolveSwipe({
        dx: touch.clientX - start.x,
        dy: touch.clientY - start.y,
        durationMs: event.timeStamp - start.time,
      });
      const wasDragging = dragging;
      const fromPx = offset;
      start = null;
      clearDrag();

      if (direction && canGo(direction)) {
        if (animated()) flyOut(direction, fromPx);
        else turn(direction);
      } else if (wasDragging) {
        springBack(fromPx); // не дотянули или дальше страниц нет — панель пружинит назад
      }
    },
    { passive: true },
  );

  panel.addEventListener('touchcancel', cancelGesture, { passive: true });
}