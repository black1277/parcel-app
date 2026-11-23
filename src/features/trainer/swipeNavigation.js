import { SWIPE } from '../../config/constants.js';
import { resolveSwipe } from '../../core/swipe.js';
import { elements } from '../../ui/elements.js';

/** Жест, начавшийся на интерактивном элементе (поле, кнопка, ссылка), свайпом не считаем. */
const INTERACTIVE_SELECTOR = 'a, button, input, select, textarea, label, .editor';

/**
 * Перелистывание страниц свайпом по панели на устройствах без мыши.
 * Слушатели пассивные и ничего не блокируют: вертикальная прокрутка,
 * двойной тап по предложению и ввод ответа работают как раньше.
 * @param {ReturnType<typeof import('./trainer.js').createTrainer>} trainer
 */
export function bindSwipeNavigation(trainer) {
  const { main } = elements;
  /** @type {{ id: number, x: number, y: number, time: number } | null} */
  let start = null;

  main.addEventListener(
    'touchstart',
    (event) => {
      start = null;
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

  main.addEventListener(
    'touchmove',
    (event) => {
      // второй палец — уже не свайп (например, попытка масштабирования)
      if (event.touches.length > 1) start = null;
    },
    { passive: true },
  );

  main.addEventListener(
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
      start = null;
      if (direction === 'next') trainer.goToNextPage();
      if (direction === 'prev') trainer.goToPreviousPage();
    },
    { passive: true },
  );

  main.addEventListener(
    'touchcancel',
    () => {
      start = null;
    },
    { passive: true },
  );
}