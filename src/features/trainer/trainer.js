import {
  BUILT_IN_FONTS,
  FADE_DELAY_MS,
  MESSAGES,
  LANGS,
  MIN_SEARCH_LENGTH,
  STORAGE_FIELDS,
  USER_FONT_CLASS,
  SEARCH_HASH_PREFIX,
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
  let fadeTimer = null;
  function refreshPanel() {
    if (fadeTimer) clearTimeout(fadeTimer); // перелистывание подряд не наслаивает отрисовки
    if (isFadeEnabled()) {
      document.body.classList.add('hide');
      fadeTimer = setTimeout(() => {
        fadeTimer = null;
        renderCurrentPage();
        document.body.classList.remove('hide');
      }, FADE_DELAY_MS);
    } else {
      renderCurrentPage();
    }
    storage.set(STORAGE_FIELDS.PAGE, state.currentPage);
    setControlsDisabled(false);
  }
  /** Активирует флажок rus/eng по состоянию: установка checked событие change не вызывает. */
  function syncLangToggle() {
    (state.lang === LANGS.ENG ? elements.eng : elements.rus).checked = true;
  }

  /** Честная ссылка на результаты: запрос + направление перевода. */
  function buildSearchHash(query) {
    return `${SEARCH_HASH_PREFIX}${encodeURIComponent(query.trim())}&lang=${state.lang}`;
  }
  /** Первая отрисовка: страница берётся из хеша, затем из сохранённых настроек. */
  /** Первая отрисовка: разбираем URL — ссылка на поиск или на страницу. */
  function init() {
    state.mode = 'train';

    const params = new URLSearchParams(
      location.hash.startsWith(SEARCH_HASH_PREFIX) ? location.hash.slice(1) : '',
    );

    if (params.has('search')) {
      // 1. СНАЧАЛА направление перевода: searchPages ищет ровно по одному полю (rus или eng).
      state.lang = params.get('lang') === LANGS.ENG ? LANGS.ENG : LANGS.RUS;
      syncLangToggle();

      // 2. ТЕПЕРЬ поиск. URLSearchParams уже раскодировал %XX — decodeURIComponent не нужен.
      const query = params.get('search').trim();
      elements.search.value = query;
      search(query);

      // 3. Страница — сохранённая: из поиска можно уйти навигацией на «своё» место.
      state.currentPage = clampPage(Number(storage.get(STORAGE_FIELDS.PAGE) ?? 1));
      renderPageNavigation();
      return;
    }

    // #<страница> — прямая ссылка, иначе сохранённая страница
    state.currentPage = clampPage(Number(location.hash.slice(1)) || Number(storage.get(STORAGE_FIELDS.PAGE) ?? 1));
    history.replaceState({ page: state.currentPage }, '', `#${state.currentPage}`);
    renderCurrentPage();
    renderPageNavigation();
  }
  const clampPage = (page) => Math.min(Math.max(Math.trunc(page) || 1, 1), pages.length);

  /**
   * @param {number} page номер страницы с единицы
   * @param {{ recordHistory?: boolean }} [options] false — при переходе по кнопкам браузера
   */
  function goToPage(page, { recordHistory = true } = {}) {
    const wasSearch = state.mode === 'search';
    if (!wasSearch && state.currentPage === page) return;

    state.mode = 'train';

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
    syncLangToggle();

    // Показаны результаты поиска: тот же запрос в новом направлении, ссылка обновится в search().
    if (location.hash.startsWith(SEARCH_HASH_PREFIX)) {
      const query = new URLSearchParams(location.hash.slice(1)).get('search')?.trim();
      if (query) {
        search(query);
        return;
      }
    }

    refreshPanel();
    history.replaceState({ page: state.currentPage }, '', `#${state.currentPage}`);
  }
  // function setLang(lang) {
  //   if (state.lang === lang) return;
  //   state.lang = lang;
  //   refreshPanel();
  // }

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
  /** Поиск по всем страницам на текущем языке; query можно передать сразу (из ссылки в init). */
  function search(query) {
    const { search: input } = elements;
    const value = (query ?? input.value).trim();
    if (!value.length) return;

    if (!query) input.focus(); // фокус — только при поиске с клавиатуры, не при открытии ссылки

    if (value.length < MIN_SEARCH_LENGTH) {
      renderMessage(MESSAGES.SEARCH_TOO_SHORT);
      return;
    }

    const results = searchPages(pages, value, state.lang);
    state.mode = 'search';
    if (!results.length) {
      renderMessage(MESSAGES.NOT_FOUND);
    } else {
      renderRows(buildRows(results, state.lang), value);
      setControlsDisabled(true);
    }

    // Ссылка обновляется при каждом поиске — в т.ч. после «ничего не найдено».
    history.replaceState({ search: value }, '', buildSearchHash(value));
  }
// function search(rawQuery = elements.search.value) {
//     const query = String(rawQuery).trim();
//     if (!query) return;

//       elements.search.focus();
//     if (query.length < MIN_SEARCH_LENGTH) {
//       renderMessage(MESSAGES.SEARCH_TOO_SHORT);
//       return;
//     }

//     const results = searchPages(pages, query, state.lang);
//     state.mode = 'search';
//     if (results.length) renderRows(buildRows(results, state.lang), query);
//     else renderMessage(MESSAGES.NOT_FOUND);
//     setControlsDisabled(true);
//     history.pushState({ search: query, lang: state.lang }, '',
//         SEARCH_HASH_PREFIX + encodeURIComponent(query));
//   }
    /** Выходит из режима поиска и возвращает текущую страницу. */
function exitSearch() {
    if (state.mode !== 'search') return;
    state.mode = 'train';
    renderCurrentPage();
    setControlsDisabled(false);
    history.pushState({ page: state.currentPage }, '', `#${state.currentPage}`);
}
  return {
    init,
    exitSearch,
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
