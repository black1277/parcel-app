import assert from 'node:assert/strict';
import { test } from 'node:test';
import { RandomPagePicker } from '../../src/core/randomPagePicker.js';

test('страницы не повторяются в пределах круга, потом круг начинается заново', () => {
  const picker = new RandomPagePicker(5);
  const round = Array.from({ length: 5 }, () => picker.next());
  assert.deepEqual([...round].sort(), [1, 2, 3, 4, 5]);
  assert.deepEqual(picker.progress, { done: 5, total: 5 });

  const next = picker.next();
  assert.ok(next >= 1 && next <= 5);
  assert.deepEqual(picker.progress, { done: 1, total: 5 });
});
