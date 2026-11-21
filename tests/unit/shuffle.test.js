import assert from 'node:assert/strict';
import { test } from 'node:test';
import { shuffle } from '../../src/core/shuffle.js';

test('сохраняет элементы и не меняет исходный массив', () => {
  const source = [1, 2, 3, 4, 5];
  const result = shuffle(source);
  assert.deepEqual([...result].sort(), source);
  assert.deepEqual(source, [1, 2, 3, 4, 5]);
});

test('детерминирован при заданном генераторе', () => {
  assert.deepEqual(
    shuffle([1, 2, 3], () => 0),
    [2, 3, 1],
  );
});
