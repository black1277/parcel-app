import {
  BUILT_IN_FONTS,
  DEFAULT_USER_FONT,
  STORAGE_FIELDS,
  USER_FONT_CLASS,
} from '../../config/constants.js';
import {
  extractFontName,
  isValidGoogleFontUrl,
  loadGoogleFont,
  registerLocalFont,
  setUserFontFamily,
} from '../../services/fontService.js';
import { qsa } from '../../ui/dom.js';
import { elements } from '../../ui/elements.js';

/** @typedef {{ name: string, url: string }} SavedFont */

/** Включает на панели шрифт пользователя вместо одного из встроенных. */
function applyUserFont(fontName) {
  const { panel } = elements;
  panel.classList.remove(...BUILT_IN_FONTS);
  setUserFontFamily(fontName);
  panel.classList.add(USER_FONT_CLASS);

  // снимаются ВСЕ радиокнопки шрифтов страницы
  qsa('input[name="fonts"]').forEach((radio) => {
    radio.checked = false;
  });
}

/**
 * Читает список сохранённых шрифтов из storage.
 * Всегда возвращает хотя бы один элемент (Roboto по умолчанию).
 * @param {{ get(key: string): unknown }} storage
 * @returns {SavedFont[]}
 */
function readSavedFonts(storage) {
  const raw = storage.get(STORAGE_FIELDS.USER_FONTS);
  if (Array.isArray(raw) && raw.length > 0) {
    const valid = raw.filter(
      (item) =>
        item &&
        typeof item.name === 'string' &&
        typeof item.url === 'string' &&
        isValidGoogleFontUrl(item.url),
    );
    if (valid.length > 0) return valid;
  }
  return [{ ...DEFAULT_USER_FONT }];
}

/**
 * Записывает список шрифтов в storage.
 * @param {{ set(key: string, value: unknown): void }} storage
 * @param {SavedFont[]} fonts
 */
function writeSavedFonts(storage, fonts) {
  storage.set(STORAGE_FIELDS.USER_FONTS, fonts);
}

/**
 * Добавляет шрифт в список (без дубликатов по url). Возвращает обновлённый список.
 * @param {SavedFont[]} fonts
 * @param {SavedFont} font
 * @returns {SavedFont[]}
 */
function upsertFont(fonts, font) {
  const exists = fonts.some((f) => f.url === font.url);
  if (exists) return fonts;
  return [...fonts, font];
}

/**
 * Заполняет <select> списком шрифтов и выделяет текущий.
 * @param {HTMLSelectElement} select
 * @param {SavedFont[]} fonts
 * @param {string} [selectedUrl]
 */
function populateSelect(select, fonts, selectedUrl) {
  select.innerHTML = '';
  for (const font of fonts) {
    const option = document.createElement('option');
    option.value = font.url;
    option.textContent = font.name;
    if (selectedUrl && font.url === selectedUrl) {
      option.selected = true;
    }
    select.appendChild(option);
  }
  // если ничего не выбрано — первый пункт
  if (select.selectedIndex < 0 && select.options.length > 0) {
    select.selectedIndex = 0;
  }
}

/**
 * Применяет Google Font по url: загружает стили, ставит семейство, обновляет UI.
 * @param {string} fontUrl
 * @param {string} [string} [fontName]
 */
function applyGoogleFont(fontUrl, fontName) {
  const name = fontName ?? extractFontName(fontUrl);
  loadGoogleFont(fontUrl);
  applyUserFont(name);
  return name;
}

/**
 * Свой шрифт: по ссылке на Google Fonts или файлом с компьютера.
 * Список валидных загруженных шрифтов хранится в localStorage и доступен в выпадающем списке.
 * @param {{ get(key: string): unknown, set(key: string, value: unknown): void }} storage
 */
export function initUserFont(storage) {
  const { fontUrlInput, applyFontUrl, fontUpload, savedFontsSelect } = elements;

  let savedFonts = readSavedFonts(storage);

  // последняя ссылка в textarea (для удобства)
  const lastUrl = storage.get(STORAGE_FIELDS.FONT_URL);
  // миграция: старая одиночная ссылка urlFonts → в список userFonts
  if (typeof lastUrl === 'string' && isValidGoogleFontUrl(lastUrl)) {
    const name = extractFontName(lastUrl);
    savedFonts = upsertFont(savedFonts, { name, url: lastUrl });
    writeSavedFonts(storage, savedFonts);
  }

  fontUrlInput.value =
    typeof lastUrl === 'string' && lastUrl
      ? lastUrl
      : (savedFonts[0]?.url ?? DEFAULT_USER_FONT.url);

  // текущий выбранный url для select
  const initialSelected =
    typeof lastUrl === 'string' && savedFonts.some((f) => f.url === lastUrl)
      ? lastUrl
      : savedFonts[0].url;

  populateSelect(savedFontsSelect, savedFonts, initialSelected);

  // если в storage уже был user-шрифт (FONT === userfont) или есть сохранённый url — применяем
  const storedFont = storage.get(STORAGE_FIELDS.FONT);
  if (
    storedFont === USER_FONT_CLASS ||
    (typeof lastUrl === 'string' && isValidGoogleFontUrl(lastUrl))
  ) {
    const urlToApply =
      typeof lastUrl === 'string' && isValidGoogleFontUrl(lastUrl) ? lastUrl : initialSelected;
    applyGoogleFont(urlToApply);
    storage.set(STORAGE_FIELDS.FONT, USER_FONT_CLASS);
  }

  // выбор из выпадающего списка
  savedFontsSelect.addEventListener('change', () => {
    const url = savedFontsSelect.value;
    const entry = savedFonts.find((f) => f.url === url);
    if (!entry) return;

    fontUrlInput.value = entry.url;
    storage.set(STORAGE_FIELDS.FONT_URL, entry.url);
    applyGoogleFont(entry.url, entry.name);
    storage.set(STORAGE_FIELDS.FONT, USER_FONT_CLASS);
  });

  // кнопка «Применить шрифт»
  applyFontUrl.addEventListener('click', () => {
    const fontUrl = fontUrlInput.value.trim();
    if (!fontUrl || !isValidGoogleFontUrl(fontUrl)) return;

    const name = extractFontName(fontUrl);
    const entry = { name, url: fontUrl };

    savedFonts = upsertFont(savedFonts, entry);
    writeSavedFonts(storage, savedFonts);
    populateSelect(savedFontsSelect, savedFonts, fontUrl);

    storage.set(STORAGE_FIELDS.FONT_URL, fontUrl);
    applyGoogleFont(fontUrl, name);
    storage.set(STORAGE_FIELDS.FONT, USER_FONT_CLASS);
  });

  // загрузка файла с компьютера (сессионно, в persistent-список не попадает)
  fontUpload.addEventListener('change', (event) => {
    const [file] = event.target.files;
    if (!file) return;

    const fileName = event.target.closest('.input-file')?.querySelector('.input-file-text');
    if (fileName) {
      fileName.textContent = file.name;
    }

    const fontName = file.name.split('.')[0];
    applyUserFont(fontName);
    registerLocalFont(file, fontName);
    storage.set(STORAGE_FIELDS.FONT, USER_FONT_CLASS);
  });
}
