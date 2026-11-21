import { elements } from '../../ui/elements.js';

/**
 * Кнопка «Удалить настройки»: очищает сохранённые данные и перезагружает страницу.
 * @param {{ clear(): void }} storage
 */
export function initResetSettings(storage) {
  elements.resetButton.addEventListener('click', () => {
    storage.clear();
    location.reload();
  });
}
