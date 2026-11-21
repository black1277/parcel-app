/**
 * Ключ в localStorage, под которым все пользовательские настройки
 * хранятся одним JSON-объектом.
 */
export const STORAGE_KEY = 'userData';

/**
 * Поля внутри объекта настроек.
 * Значения менять нельзя: под ними уже сохранены данные у текущих пользователей.
 */
export const STORAGE_FIELDS = Object.freeze({
  THEME: 'theme',
  BACKGROUND_COLOR: 'bgColor',
  FADE: 'fade',
  SHOW_TITLE: 'showTitle',
  SHOW_SEARCH: 'showSearch',
  SHOW_FONTS: 'showFonts',
  FONT: 'font',
  COLLAPSED_NAVIGATION: 'links',
  PAGE: 'page',
  FONT_URL: 'urlFonts',
  /** Массив сохранённых пользовательских шрифтов: [{ name, url }, ...] */
  USER_FONTS: 'userFonts',
});

export const LANGS = Object.freeze({ RUS: 'rus', ENG: 'eng' });

export const THEMES = Object.freeze({ LIGHT: 'theme-light', DARK: 'theme-dark' });

/** Цвет фона (HSL), который выставляется при переключении темы. */
export const THEME_BACKGROUNDS = Object.freeze({
  [THEMES.DARK]: Object.freeze({ h: 200, s: 40, l: 12 }),
  [THEMES.LIGHT]: Object.freeze({ h: 128, s: 100, l: 90 }),
});

/** Шрифты из блока выбора шрифта; имя совпадает с CSS-классом и id радиокнопки. */
export const BUILT_IN_FONTS = Object.freeze([
  'source',
  'lora',
  'philosopher',
  'literata',
  'vollkorn',
  'firacode',
]);

/** CSS-класс панели со своим шрифтом и переменная, в которой хранится его имя. */
export const USER_FONT_CLASS = 'userfont';
export const USER_FONT_CSS_VARIABLE = '--user-font';

export const FONT_SIZE = Object.freeze({
  MIN: 12,
  MAX: 30,
  STEP: 0.5,
  CSS_VARIABLE: '--max_size',
});

export const MIN_SEARCH_LENGTH = 3;

/** Пауза перед перерисовкой строк при включённом эффекте исчезновения. */
export const FADE_DELAY_MS = 145;

/** Сколько страниц у краёв показывает свёрнутая навигация. */
export const VISIBLE_PAGES = 4;

export const MESSAGES = Object.freeze({
  SEARCH_TOO_SHORT: 'Нужно минимум 3 символа для поиска!',
  NOT_FOUND: 'Ничего не найдено!',
  NO_PAGE: 'Нет страницы или данных',
  ALL_PAGES_SHOWN: 'Все страницы показаны!',
});

/** Через сколько миллисекунд после окончания круга случайных страниц можно начать следующий. */
export const RANDOM_CYCLE_PAUSE_MS = 5000;

/**
 * Допускает типичные ссылки Google Fonts css2, в том числе с весами через @ и ; :
 * https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap
 */
export const GOOGLE_FONTS_URL_PATTERN =
  /^https:\/\/fonts\.googleapis\.com\/css2\?family=[A-Za-z0-9+:&=\d,%@;\s._-]+$/;

/** Шрифт по умолчанию в выпадающем списке сохранённых (если в localStorage пусто). */
export const DEFAULT_USER_FONT = Object.freeze({
  name: 'Roboto',
  url: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
});

/**
 * Озвучивание правильного ответа (Ctrl + клик по зелёному полю) через Web Speech API.
 * Настройки заданы по языку ОТВЕТА: при показе русских предложений отвечают по-английски (eng).
 *
 *  lang      — язык речи (BCP 47), используется и для автоподбора голоса;
 *  voiceName — точное имя голоса или null, чтобы выбрать подходящий по языку автоматически.
 *              Список доступных голосов: в консоли браузера выполните
 *              speechSynthesis.getVoices().map((voice) => voice.name)
 *  rate / pitch / volume — скорость (0.1–10), тон (0–2), громкость (0–1).
 */
export const SPEECH = Object.freeze({
  [LANGS.ENG]: Object.freeze({ lang: 'en-US', voiceName: null, rate: 1, pitch: 1, volume: 1 }),
  [LANGS.RUS]: Object.freeze({ lang: 'ru-RU', voiceName: null, rate: 1, pitch: 1, volume: 1 }),
});

/** Сенсорные устройства без мыши: на них вместо Ctrl + клик показываются кнопки действий у поля. */
export const TOUCH_MEDIA_QUERY = '(hover: none) and (pointer: coarse)';

/** События строки тренажёра (всплывают до панели). */
export const ROW_EVENTS = Object.freeze({
  /** ответ в строке проверен: изменился текст или цвет поля */
  VALIDATED: 'row:validated',
  /** панель получила новый набор строк */
  RENDERED: 'rows:rendered',
});
