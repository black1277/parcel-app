import { GOOGLE_FONTS_URL_PATTERN, USER_FONT_CSS_VARIABLE } from '../config/constants.js';

const GOOGLE_FONT_LINK_ID = 'googleFontLink';
const FALLBACK_FONT_FAMILY = 'sans-serif';

/** Имена шрифтов, загруженных с компьютера пользователя в текущем сеансе. */
const registeredLocalFonts = new Set();

/**
 * @param {unknown} url
 * @returns {boolean} true, если это ссылка на css2-стили Google Fonts
 */
export function isValidGoogleFontUrl(url) {
  return typeof url === 'string' && GOOGLE_FONTS_URL_PATTERN.test(url);
}

/**
 * Имя шрифта из параметра `family` ссылки Google Fonts.
 * @param {string} fontUrl
 * @returns {string}
 */
export function extractFontName(fontUrl) {
  const family = new URL(fontUrl).searchParams.get('family');
  return family ? family.split(':')[0].replace(/\+/g, ' ') : FALLBACK_FONT_FAMILY;
}

/**
 * Подключает стили Google Fonts; единственный <link> переиспользуется.
 * @param {string} fontUrl
 */
export function loadGoogleFont(fontUrl) {
  let link = document.getElementById(GOOGLE_FONT_LINK_ID);
  if (!link) {
    link = document.createElement('link');
    link.id = GOOGLE_FONT_LINK_ID;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.crossOrigin = 'anonymous';
  link.href = fontUrl;
}

/**
 * Регистрирует @font-face для файла шрифта с компьютера пользователя.
 * @param {File} file
 * @param {string} fontName
 * @returns {boolean} false, если шрифт с таким именем уже был добавлен
 */
export function registerLocalFont(file, fontName) {
  if (registeredLocalFonts.has(fontName)) {
    console.log(`Шрифт ${fontName} уже добавлен`);
    return false;
  }

  const safeName = fontName.replace(/[\\']/g, '\\$&');
  const style = document.createElement('style');
  style.textContent = `
        @font-face {
            font-family: '${safeName}';
            src: url('${URL.createObjectURL(file)}');
        }
    `;
  document.head.appendChild(style);
  registeredLocalFonts.add(fontName);
  return true;
}

/**
 * Задаёт семейство шрифта, которое применяет класс `.userfont`.
 * @param {string} fontName
 */
export function setUserFontFamily(fontName) {
  document.documentElement.style.setProperty(USER_FONT_CSS_VARIABLE, fontName);
}
