import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildRows, countEntries } from '../../src/core/rows.js';

const entry = { rus: 'Привет', eng: 'Hello', regEng: '/hello|hi/gm', regRus: '' };

test('русский показывается — ответ английский, шаблон regEng', () => {
  const [row] = buildRows([entry], 'rus');
  assert.deepEqual(row, {
    prompt: 'Привет',
    answer: 'Hello',
    pattern: '/hello|hi/gm',
    pageNumber: undefined,
  });
});

test('английский показывается — ответ русский, пустой шаблон превращается в null', () => {
  const [row] = buildRows([entry], 'eng');
  assert.equal(row.prompt, 'Hello');
  assert.equal(row.answer, 'Привет');
  assert.equal(row.pattern, null);
});

test('countEntries', () => {
  assert.equal(countEntries([[1, 2], [3]]), 3);
});
