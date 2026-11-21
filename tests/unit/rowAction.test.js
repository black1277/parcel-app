import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveRowAction } from '../../src/core/rowAction.js';

const answer = 'This woman watches TV';
const base = { isDone: false, input: '', answer, canSpeak: true };

test('зелёное поле — озвучить (если поддерживается)', () => {
  assert.equal(resolveRowAction({ ...base, isDone: true, input: answer }), 'speak');
  assert.equal(resolveRowAction({ ...base, isDone: true, input: answer, canSpeak: false }), null);
});

test('пустое поле и верное начало — добавить слово', () => {
  assert.equal(resolveRowAction(base), 'add');
  assert.equal(resolveRowAction({ ...base, input: 'this woman' }), 'add');
});

test('неверный текст — действия нет', () => {
  assert.equal(resolveRowAction({ ...base, input: 'this man' }), null);
});
