import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  BUILT_IN_FONTS,
  FONT_SIZE,
  LANGS,
  MESSAGES,
  MIN_SEARCH_LENGTH,
  ROW_EVENTS,
  SPEECH,
  STORAGE_FIELDS,
  STORAGE_KEY,
  THEME_BACKGROUNDS,
  THEMES,
} from '../../src/config/constants.js';

test('формат localStorage не менялся: под этими ключами уже лежат данные пользователей', () => {
  assert.equal(STORAGE_KEY, 'userData');
  assert.deepEqual(
    { ...STORAGE_FIELDS },
    {
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
      USER_FONTS: 'userFonts',
    },
  );
});

test('константы заморожены, значения полей хранилища уникальны', () => {
  for (const frozen of [STORAGE_FIELDS, LANGS, THEMES, THEME_BACKGROUNDS, BUILT_IN_FONTS, FONT_SIZE, SPEECH]) {
    assert.ok(Object.isFrozen(frozen));
  }
  const values = Object.values(STORAGE_FIELDS);
  assert.equal(new Set(values).size, values.length);
});

test('языки и темы: значения совпадают с атрибутами разметки и CSS-классами', () => {
  assert.deepEqual({ ...LANGS }, { RUS: 'rus', ENG: 'eng' });
  assert.deepEqual({ ...THEMES }, { LIGHT: 'theme-light', DARK: 'theme-dark' });
});

test('фон для каждой темы задан корректным HSL', () => {
  assert.deepEqual(Object.keys(THEME_BACKGROUNDS).sort(), Object.values(THEMES).sort());
  for (const { h, s, l } of Object.values(THEME_BACKGROUNDS)) {
    assert.ok(h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100);
  }
});

test('встроенные шрифты: уникальные имена, пригодные для id и CSS-класса; первый — по умолчанию', () => {
  assert.equal(BUILT_IN_FONTS[0], 'source');
  assert.equal(new Set(BUILT_IN_FONTS).size, BUILT_IN_FONTS.length);
  for (const font of BUILT_IN_FONTS) assert.match(font, /^[a-z][a-z0-9]*$/);
});

test('размер шрифта: границы и шаг согласованы', () => {
  assert.ok(FONT_SIZE.MIN < FONT_SIZE.MAX);
  assert.ok(FONT_SIZE.STEP > 0);
  assert.equal(FONT_SIZE.CSS_VARIABLE, '--max_size');
});

test('тексты сообщений (на них опираются e2e-тесты) и минимальная длина поиска', () => {
  assert.equal(MIN_SEARCH_LENGTH, 3);
  assert.equal(MESSAGES.SEARCH_TOO_SHORT, 'Нужно минимум 3 символа для поиска!');
  assert.equal(MESSAGES.NOT_FOUND, 'Ничего не найдено!');
  assert.equal(MESSAGES.NO_PAGE, 'Нет страницы или данных');
  assert.ok(MESSAGES.SEARCH_TOO_SHORT.includes(String(MIN_SEARCH_LENGTH)));
});

test('настройки озвучивания заданы для обоих языков в допустимых диапазонах', () => {
  assert.deepEqual(Object.keys(SPEECH).sort(), Object.values(LANGS).sort());
  assert.equal(SPEECH[LANGS.ENG].lang, 'en-US');
  assert.equal(SPEECH[LANGS.RUS].lang, 'ru-RU');
  for (const { rate, pitch, volume } of Object.values(SPEECH)) {
    assert.ok(rate >= 0.1 && rate <= 10);
    assert.ok(pitch >= 0 && pitch <= 2);
    assert.ok(volume >= 0 && volume <= 1);
  }
});

test('имена событий строки различаются', () => {
  const names = Object.values(ROW_EVENTS);
  assert.equal(new Set(names).size, names.length);
});
