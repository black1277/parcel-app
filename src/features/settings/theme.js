import { STORAGE_FIELDS, THEMES, THEME_BACKGROUNDS } from '../../config/constants.js';
import { elements } from '../../ui/elements.js';
import { bindKeyboardActivation } from '../a11y/keyboardActivation.js';

/**
 * Переключатель светлой/тёмной темы. Тема запоминается между сеансами,
 * а при переключении выставляется фон, подходящий теме.
 * @param {{ get(key: string): unknown, set(key: string, value: unknown): void }} storage
 * @param {{ apply(color: { h: number, s: number, l: number }): void }} backgroundColor
 */
export function initTheme(storage, backgroundColor) {
  const checkbox = elements.themeCheckbox;
  let current = storage.get(STORAGE_FIELDS.THEME) === THEMES.DARK ? THEMES.DARK : THEMES.LIGHT;

  // чекбокс «включён» для светлой темы
  checkbox.checked = current === THEMES.LIGHT;
  if (current === THEMES.DARK) {
    document.documentElement.className = THEMES.DARK;
  }

  function applyTheme(theme) {
    current = theme;
    storage.set(STORAGE_FIELDS.THEME, theme);
    document.documentElement.className = theme;
    backgroundColor.apply(THEME_BACKGROUNDS[theme]);
  }

  checkbox.addEventListener('change', () => {
    applyTheme(current === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  });
  bindKeyboardActivation(elements.themeSwitch);
}
