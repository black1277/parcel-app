import { MESSAGES } from '../../config/constants.js';
import { elements } from '../elements.js';

/** Показывает плашку по центру и запускает её анимацию заново. */
function showPopup(...content) {
  const popup = elements.progress;
  popup.classList.remove('fadeOpacity');
  // принудительная перерисовка, чтобы анимация запустилась заново
  void popup.offsetWidth;

  popup.replaceChildren(...content);
  popup.classList.add('fadeOpacity');
}

/**
 * Ненадолго показывает по центру прогресс случайного обхода страниц.
 * @param {{ done: number, total: number }} progress
 */
export function showRandomProgress({ done, total }) {
  const caption = document.createElement('span');
  caption.textContent = 'Random progress:';
  showPopup(caption, document.createElement('br'), `${done}/${total}`);
}

/** Ненадолго показывает по центру сообщение о том, что круг случайных страниц пройден. */
export function showAllPagesShown() {
  showPopup(MESSAGES.ALL_PAGES_SHOWN);
}
