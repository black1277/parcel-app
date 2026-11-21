import assert from 'node:assert/strict';
import { test } from 'node:test';
import { commonPrefixLength, isAnswerCorrect } from '../../src/core/answerChecker.js';

test('точный ответ: регистр и лишние пробелы не важны', () => {
  assert.ok(
    isAnswerCorrect({ input: '  This   WOMAN watches TV ', answer: 'This woman watches TV' }),
  );
  assert.ok(!isAnswerCorrect({ input: 'This man watches TV', answer: 'This woman watches TV' }));
});

test('шаблон заменяет сравнение с эталоном', () => {
  const pattern = '/Her (?:child|kid) always listens to her/gm';
  const answer = 'Her child always listens to her';
  assert.ok(isAnswerCorrect({ input: 'her kid always listens to her', answer, pattern }));
  assert.ok(!isAnswerCorrect({ input: 'her dog always listens to her', answer, pattern }));
});

test('в шаблоне типографский апостроф заменяется на обратный', () => {
  const pattern = '/my brother’s car/gm';
  assert.ok(isAnswerCorrect({ input: 'my brother`s car', answer: '', pattern }));
});

test('пустой шаблон считается отсутствием шаблона', () => {
  assert.ok(isAnswerCorrect({ input: 'a', answer: 'A', pattern: '' }));
});

test('commonPrefixLength', () => {
  assert.equal(commonPrefixLength('hello', 'help'), 3);
  assert.equal(commonPrefixLength('abc', 'xyz'), 0);
  assert.equal(commonPrefixLength('abc', 'abcdef'), 3);
});
