import { BUILT_IN_FONTS, STORAGE_FIELDS } from '../config/constants.js';
import { fontTogglesTemplate } from './templates/fontToggles.js';
import { langToggleTemplate } from './templates/langToggle.js';
import { navigationTemplate } from './templates/navigation.js';
import { panelTemplate } from './templates/panel.js';
import { searchPanelTemplate } from './templates/searchPanel.js';

/**
 * Рисует каркас тренажёра внутри контейнера.
 * Блоки поиска и выбора шрифта показываются в соответствии с сохранёнными настройками.
 * @param {HTMLElement} container
 * @param {{ state: { font: string }, storage: { get(key: string): unknown } }} params
 */
export function renderShell(container, { state, storage }) {
  const isVisible = (field) => storage.get(field) !== false;

  container.innerHTML =
    langToggleTemplate() +
    searchPanelTemplate(isVisible(STORAGE_FIELDS.SHOW_SEARCH)) +
    fontTogglesTemplate(BUILT_IN_FONTS, state.font, isVisible(STORAGE_FIELDS.SHOW_FONTS)) +
    panelTemplate(state.font) +
    navigationTemplate();
}
