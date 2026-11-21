import assert from 'node:assert/strict';
import { test } from 'node:test';
import { nextWordHint } from '../../src/core/wordHint.js';

const answer = 'This woman sometimes watches TV';

test('пустое поле — первое слово', () => {
  assert.equal(nextWordHint({ input: '', answer }), 'This');
  assert.equal(nextWordHint({ input: '   ', answer }), 'This');
});

test('набраны правильные слова — добавляется следующее', () => {
  assert.equal(nextWordHint({ input: 'This', answer }), 'This woman');
  assert.equal(nextWordHint({ input: 'this  woman ', answer }), 'This woman sometimes');
});

test('последовательные щелчки собирают ответ целиком', () => {
  let text = '';
  const steps = [];
  for (let i = 0; i < 5; i += 1) {
    text = nextWordHint({ input: text, answer });
    steps.push(text);
  }
  assert.equal(steps.at(-1), answer);
  assert.equal(nextWordHint({ input: text, answer }), null);
});

test('неверное слово или недописанное слово — подсказки нет', () => {
  assert.equal(nextWordHint({ input: 'This man', answer }), null);
  assert.equal(nextWordHint({ input: 'This wom', answer }), null);
  assert.equal(nextWordHint({ input: 'This woman sometimes watches TV extra', answer }), null);
});
