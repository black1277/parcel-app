import assert from 'node:assert/strict';
import { test } from 'node:test';
import { normalizeInput } from '../../src/core/text.js';

test('normalizeInput: убирает крайние пробелы и приводит к нижнему регистру', () => {
  assert.equal(normalizeInput('  Hello World  '), 'hello world');
});

test('normalizeInput: приравнивает все виды апострофов', () => {
  assert.equal(normalizeInput("Don`t"), normalizeInput("don't"));
  assert.equal(normalizeInput("don’t"), normalizeInput("don't"));
});

test('normalizeInput: любые последовательности пробельных символов становятся одним пробелом', () => {
  assert.equal(normalizeInput('a   b\t\tc\n\nd'), 'a b c d');
  // contenteditable подставляет неразрывные пробелы при наборе нескольких пробелов подряд
  assert.equal(normalizeInput('a\u00a0\u00a0b'), 'a b');
});

test('normalizeInput: кириллица и пустые значения', () => {
  assert.equal(normalizeInput('  ПРИВЕТ   Мир '), 'привет мир');
  assert.equal(normalizeInput(''), '');
  assert.equal(normalizeInput(' \n\t '), '');
});
