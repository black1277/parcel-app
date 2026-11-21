import {
  BUILT_IN_FONTS,
  FADE_DELAY_MS,
  MESSAGES,
  MIN_SEARCH_LENGTH,
  STORAGE_FIELDS,
  USER_FONT_CLASS,
} from '../../config/constants.js';
import { buildPageItems } from '../../core/pagination.js';
import { buildRows } from '../../core/rows.js';
import { searchPages } from '../../core/search.js';
import { shuffle } from '../../core/shuffle.js';
import { elements } from '../../ui/elements.js';
import { setControlsDisabled, setShowButtonDisabled } from '../../ui/views/controlsView.js';
import { renderNavigation } from '../../ui/views/navigationView.js';
import { showAllPagesShown, showRandomProgress } from '../../ui/views/progressView.js';
import { renderMessage, renderRows } from '../../ui/views/rowsView.js';
import { revealAllAnswers } from './answerRow.js';

/**
 * Контроллер тренажёра: единственное место, которое меняет состояние
 * (язык, перемешивание, страница, шрифт) и обновляет в ответ интерфейс.
 *
 * @param {object} deps
 * @param {Array<Array<Record<string, string>>>} deps.pages
 * @param {ReturnType<import('../../state/appState.js').createAppState>} deps.state
 * @param {{ get(key: string): unknown, set(key: string, value: unknown): void }} deps.storage
 * @param {{ next(): number | null, progress: { done: number, total: number }, isCycleComplete: boolean }} deps.picker
 * @param {() => boolean} deps.isFadeEnabled
 */
export function createTrainer({ pages, state, storage, picker, isFadeEnabled }) {
  function renderEntries(entries) {
    const ordered = state.mix ? shuffle(entries) : entries;
    renderRows(buildRows(ordered, state.lang));
    setShowButtonDisabled(false);
  }

  function renderCurrentPage() {
    const entries = pages[Math.max(state.currentPage - 1, 0)];
    if (!entries) {
      renderMessage(MESSAGES.NO_PAGE, 'div');
      return;
    }
    renderEntries(entries);
  }

  function renderPageNavigation() {
    renderNavigation(
      buildPageItems({
        totalPages: pages.length,
        currentPage: state.currentPage,
        collapsed: state.collapsedNavigation,
      }),
    );
  }

  /** Перерисовывает строки (с эффектом исчезновения, если он включён) и запоминает страницу. */
  function refreshPanel() {
    if (isFadeEnabled()) {
      document.body.classList.add('hide');
      setTimeout(() => {
        renderCurrentPage();
        document.body.classList.remove('hide');
      }, FADE_DELAY_MS);
    } else {
      renderCurrentPage();
    }
    storage.set(STORAGE_FIELDS.PAGE, state.currentPage);
    setControlsDisabled(false);
  }

  /** Первая отрисовка: страница берётся из сохранённых настроек. */
  function init() {
    state.currentPage = Number(storage.get(STORAGE_FIELDS.PAGE) ?? 1);
    renderCurrentPage();
    renderPageNavigation();
  }

  /**
   * @param {number} page номер страницы с единицы
   * @param {{ recordHistory?: boolean }} [options] false — при переходе по кнопкам браузера
   */
  function goToPage(page, { recordHistory = true } = {}) {
    if (state.currentPage === page) return;

    state.currentPage = page;
    refreshPanel();
    renderPageNavigation();
    if (recordHistory) {
      history.pushState({ page }, '', `#${page}`);
    }
  }

  function goToPreviousPage() {
    if (state.currentPage > 1) goToPage(state.currentPage - 1);
  }

  function goToNextPage() {
    if (state.currentPage < pages.length) goToPage(state.currentPage + 1);
  }

  /** Случайная страница; страницы не повторяются, пока не пройден полный круг. */
  function goToRandomPage() {
    const page = picker.next();
    if (page !== null) {
      goToPage(page);
    }

    if (picker.isCycleComplete) {
      showAllPagesShown();
    } else {
      showRandomProgress(picker.progress);
    }
  }

  function setLang(lang) {
    if (state.lang === lang) return;
    state.lang = lang;
    refreshPanel();
  }

  function setMix(mix) {
    if (state.mix === mix) return;
    state.mix = mix;
    refreshPanel();
  }

  function setFont(font) {
    if (state.font === font) return;
    state.font = font;

    const { panel } = elements;
    panel.classList.remove(...BUILT_IN_FONTS, USER_FONT_CLASS);
    panel.classList.add(font);
    storage.set(STORAGE_FIELDS.FONT, font);
  }

  function setCollapsedNavigation(collapsed) {
    if (state.collapsedNavigation === collapsed) return;
    state.collapsedNavigation = collapsed;
    renderPageNavigation();
  }

  /** Поиск по всем страницам на текущем языке. */
  function search() {
    const { search: input } = elements;
    const trimmedLength = input.value.trim().length;
    if (!trimmedLength) return;

    input.focus();
    if (trimmedLength < MIN_SEARCH_LENGTH) {
      renderMessage(MESSAGES.SEARCH_TOO_SHORT);
      return;
    }

    const results = searchPages(pages, input.value, state.lang);
    if (!results.length) {
      renderMessage(MESSAGES.NOT_FOUND);
      return;
    }
    renderEntries(results);
    setControlsDisabled(true);
  }

  return {
    init,
    goToPage,
    goToPreviousPage,
    goToNextPage,
    goToRandomPage,
    setLang,
    setMix,
    setFont,
    setCollapsedNavigation,
    search,
    revealAll: revealAllAnswers,
  };
}
