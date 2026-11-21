import assert from 'node:assert/strict';
import { test } from 'node:test';
import { buildPageItems } from '../../src/core/pagination.js';

const label = (items) =>
  items
    .map((i) => (i.type === 'ellipsis' ? '…' : i.active ? `[${i.page}]` : String(i.page)))
    .join(' ');

test('полная навигация показывает все страницы', () => {
  assert.equal(
    label(buildPageItems({ totalPages: 5, currentPage: 2, collapsed: false })),
    '1 [2] 3 4 5',
  );
});

test('короткий список не сворачивается', () => {
  assert.equal(buildPageItems({ totalPages: 15, currentPage: 1, collapsed: true }).length, 15);
});

test('свёрнутая навигация: начало, середина, конец', () => {
  assert.equal(
    label(buildPageItems({ totalPages: 133, currentPage: 1, collapsed: true })),
    '[1] 2 3 4 … 130 131 132 133',
  );
  assert.equal(
    label(buildPageItems({ totalPages: 133, currentPage: 60, collapsed: true })),
    '1 2 3 4 … 57 58 59 [60] 61 62 63 … 130 131 132 133',
  );
  assert.equal(
    label(buildPageItems({ totalPages: 133, currentPage: 133, collapsed: true })),
    '1 2 3 4 … 130 131 132 [133]',
  );
});
