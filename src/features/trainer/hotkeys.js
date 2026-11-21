import { BUILT_IN_FONTS, LANGS } from '../../config/constants.js';
import { elements } from '../../ui/elements.js';

/** Подписи (label), которые можно переключать с клавиатуры пробелом или Enter. */
const KEYBOARD_TOGGLE_TARGETS = [LANGS.ENG, LANGS.RUS, ...BUILT_IN_FONTS];

/**
 * Горячие клавиши:
 *  Ctrl+Alt+← / → — предыдущая / следующая страница;
 *  Ctrl+Alt+Space — случайная страница;
 *  Enter в поле поиска — поиск;
 *  Enter / Space на подписях переключателей — переключение.
 * @param {ReturnType<typeof import('./trainer.js').createTrainer>} trainer
 */
export function bindHotkeys(trainer) {
  // фаза перехвата: обработчик срабатывает раньше обработчиков на самих элементах
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.ctrlKey && event.altKey) {
        handlePageHotkey(event, trainer);
        return;
      }

      if (event.key === 'Enter' && event.target === elements.search) {
        trainer.search();
        return;
      }

      if (event.key === ' ' || event.key === 'Enter') {
        const target = event.target;
        if (KEYBOARD_TOGGLE_TARGETS.includes(target.getAttribute?.('for'))) {
          target.click();
          event.preventDefault();
        }
      }
    },
    true,
  );

  // кнопки «назад/вперёд» браузера возвращают на ранее посещённые страницы
  window.addEventListener('popstate', (event) => {
    if (event.state?.page) {
      trainer.goToPage(event.state.page, { recordHistory: false });
    }
  });
}

function handlePageHotkey(event, trainer) {
  if (event.key === 'ArrowLeft') {
    trainer.goToPreviousPage();
  } else if (event.key === 'ArrowRight') {
    trainer.goToNextPage();
  } else if (event.code === 'Space') {
    // иначе пробел «нажимает» кнопку, на которой стоит фокус
    event.preventDefault();
    event.stopImmediatePropagation();
    document.activeElement?.blur?.();
    trainer.goToRandomPage();
  }
}
