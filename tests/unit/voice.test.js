import assert from 'node:assert/strict';
import { test } from 'node:test';
import { selectVoice } from '../../src/core/voice.js';

const voices = [
  { name: 'Anna', lang: 'de-DE' },
  { name: 'Daniel', lang: 'en-GB' },
  { name: 'Samantha', lang: 'en-US' },
  { name: 'Milena', lang: 'ru_RU' },
];

test('голос с указанным именем имеет приоритет', () => {
  assert.equal(selectVoice(voices, { voiceName: 'Daniel', lang: 'en-US' }).name, 'Daniel');
});

test('без имени берётся голос с тем же языком', () => {
  assert.equal(selectVoice(voices, { voiceName: null, lang: 'en-US' }).name, 'Samantha');
});

test('неизвестное имя — откат к подбору по языку', () => {
  assert.equal(selectVoice(voices, { voiceName: 'Nobody', lang: 'ru-RU' }).name, 'Milena');
});

test('подходит голос того же основного языка', () => {
  assert.equal(selectVoice([{ name: 'Daniel', lang: 'en-GB' }], { lang: 'en-US' }).name, 'Daniel');
});

test('нет подходящего голоса — undefined', () => {
  assert.equal(selectVoice(voices, { lang: 'fr-FR' }), undefined);
});
