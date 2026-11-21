import { STORAGE_FIELDS } from '../../config/constants.js';
import { elements } from '../../ui/elements.js';

/**
 * Опция «Свернутая навигация».
 * @param {{ get(key: string): unknown, set(key: string, value: unknown): void }} storage
 * @param {{ setCollapsedNavigation(collapsed: boolean): void }} trainer
 */
export function initNavigationMode(storage, trainer) {
  const checkbox = elements.showLinks;
  checkbox.checked = storage.get(STORAGE_FIELDS.COLLAPSED_NAVIGATION) ?? false;

  checkbox.addEventListener('change', (event) => {
    storage.set(STORAGE_FIELDS.COLLAPSED_NAVIGATION, event.target.checked);
    trainer.setCollapsedNavigation(event.target.checked);
  });
}
