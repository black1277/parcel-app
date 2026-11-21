import assert from 'node:assert/strict';
import { test } from 'node:test';
import { searchPages } from '../../src/core/search.js';

const pages = [
  [{ rus: 'Жизнь прекрасна', eng: 'Life is beautiful' }],
  [
    { rus: 'Другое', eng: 'Other' },
    { rus: 'Моя жизнь', eng: 'My life' },
  ],
];

test('ищет без учёта регистра и добавляет номер страницы', () => {
  const found = searchPages(pages, 'ЖИЗНЬ', 'rus');
  assert.deepEqual(
    found.map((e) => e.pageNumber),
    [1, 2],
  );
  assert.equal(found[1].eng, 'My life');
});

test('исходные данные не изменяются', () => {
  searchPages(pages, 'life', 'eng');
  assert.equal(pages[0][0].pageNumber, undefined);
});

test('ищет только в выбранном языке', () => {
  assert.equal(searchPages(pages, 'life', 'rus').length, 0);
});
