import assert from 'node:assert/strict';
import { test } from 'node:test';
import { BUILT_IN_FONTS, LANGS } from '../../src/config/constants.js';
import { createAppState } from '../../src/state/appState.js';

const storageWith = (data = {}) => ({ get: (key) => data[key] });

test('значения по умолчанию при пустом хранилище', () => {
  assert.deepEqual(createAppState(storageWith()), {
    mode: 'train',
    lang: LANGS.RUS,
    font: BUILT_IN_FONTS[0],
    mix: false,
    collapsedNavigation: false,
    currentPage: 1,
  });
});

test('шрифт и режим навигации берутся из сохранённых настроек (ключи font и links)', () => {
  const state = createAppState(storageWith({ font: 'lora', links: true }));
  assert.equal(state.font, 'lora');
  assert.equal(state.collapsedNavigation, true);
});

test('сохранённое false не заменяется значением по умолчанию', () => {
  assert.equal(createAppState(storageWith({ links: false })).collapsedNavigation, false);
});

test('каждый вызов возвращает независимое состояние', () => {
  const first = createAppState(storageWith());
  const second = createAppState(storageWith());
  first.lang = LANGS.ENG;
  assert.equal(second.lang, LANGS.RUS);
});
