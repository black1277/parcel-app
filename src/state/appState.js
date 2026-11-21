import { BUILT_IN_FONTS, LANGS, STORAGE_FIELDS } from '../config/constants.js';

/**
 * Состояние тренажёра, которое не живёт в DOM.
 * @param {{ get(key: string): unknown }} storage
 */
export function createAppState(storage) {
  return {
    lang: LANGS.RUS,
    font: storage.get(STORAGE_FIELDS.FONT) ?? BUILT_IN_FONTS[0],
    mix: false,
    collapsedNavigation: storage.get(STORAGE_FIELDS.COLLAPSED_NAVIGATION) ?? false,
    currentPage: 1,
  };
}
