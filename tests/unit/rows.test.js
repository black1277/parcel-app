import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildRows, countEntries } from '../../src/core/rows.js';

const entry = { rus: 'Привет', eng: 'Hello', regEng: '/hello|hi/gm', regRus: '' };

test('русский показывается — ответ английский, шаблон regEng', () => {
  const [row] = buildRows([entry], 'rus');
  assert.equal(row.prompt, 'Привет');
  assert.equal(row.answer, 'Hello');
  assert.equal(row.pattern, '/hello|hi/gm');
  assert.ok(row.compiledPattern instanceof RegExp);
  assert.equal(row.pageNumber, undefined);

  // проверяем, что скомпилированный паттерн реально работает
  assert.ok(row.compiledPattern.test('hello'));
  assert.ok(row.compiledPattern.test('hi'));
  assert.ok(!row.compiledPattern.test('hey'));
});

test('английский показывается — ответ русский, пустой шаблон превращается в null', () => {
  const [row] = buildRows([entry], 'eng');
  assert.equal(row.prompt, 'Hello');
  assert.equal(row.answer, 'Привет');
  assert.equal(row.pattern, null);
  assert.equal(row.compiledPattern, null);
});

test('countEntries', () => {
  assert.equal(countEntries([[1, 2], [3]]), 3);
});
