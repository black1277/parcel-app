import { STORAGE_FIELDS } from '../../config/constants.js';
import { qsa } from '../../ui/dom.js';
import { elements } from '../../ui/elements.js';

/** Элементы, которые скрывает опция «Заголовок». */
const TITLE_SELECTOR = 'h3.center, a.repo, div.spoiler';

/**
 * Привязывает чекбокс к сохраняемой настройке.
 * @returns {boolean} начальное значение
 */
function bindPreference({ storage, checkbox, field, defaultValue, onChange }) {
  checkbox.checked = storage.get(field) ?? defaultValue;
  checkbox.addEventListener('input', (event) => {
    onChange?.(event.target.checked);
    storage.set(field, event.target.checked);
  });
  return checkbox.checked;
}

/**
 * Опции панели настроек, управляющие видимостью блоков и эффектом смены страницы.
 * @param {{ get(key: string): unknown, set(key: string, value: unknown): void }} storage
 * @returns {{ isFadeEnabled(): boolean }}
 */
export function initVisibilitySettings(storage) {
  bindPreference({
    storage,
    checkbox: elements.fade,
    field: STORAGE_FIELDS.FADE,
    defaultValue: true,
  });

  const titles = qsa(TITLE_SELECTOR);
  const titleShown = bindPreference({
    storage,
    checkbox: elements.showTitle,
    field: STORAGE_FIELDS.SHOW_TITLE,
    defaultValue: true,
    onChange: (checked) => titles.forEach((el) => (el.style.display = checked ? 'block' : 'none')),
  });
  if (!titleShown) {
    titles.forEach((el) => (el.style.display = 'none'));
  }

  bindPreference({
    storage,
    checkbox: elements.showSearch,
    field: STORAGE_FIELDS.SHOW_SEARCH,
    defaultValue: true,
    onChange: (checked) => {
      elements.search.parentNode.style.display = checked ? 'flex' : 'none';
    },
  });

  bindPreference({
    storage,
    checkbox: elements.showFonts,
    field: STORAGE_FIELDS.SHOW_FONTS,
    defaultValue: true,
    onChange: (checked) => {
      elements.fontToggles.style.display = checked ? 'flex' : 'none';
    },
  });

  return { isFadeEnabled: () => elements.fade.checked };
}
