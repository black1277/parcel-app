import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SWIPE } from '../../src/config/constants.js';
import { resolveSwipe } from '../../src/core/swipe.js';

const swipeLeft = { dx: -120, dy: 10, durationMs: 250 };

test('свайп влево — следующая страница, вправо — предыдущая', () => {
  assert.equal(resolveSwipe(swipeLeft), 'next');
  assert.equal(resolveSwipe({ ...swipeLeft, dx: 120 }), 'prev');
});

test('короткий жест — не свайп', () => {
  assert.equal(resolveSwipe({ ...swipeLeft, dx: -(SWIPE.MIN_DISTANCE_PX - 1) }), null);
  assert.equal(resolveSwipe({ ...swipeLeft, dx: -SWIPE.MIN_DISTANCE_PX }), 'next');
});

test('медленный жест — не свайп', () => {
  assert.equal(resolveSwipe({ ...swipeLeft, durationMs: SWIPE.MAX_DURATION_MS + 1 }), null);
  assert.equal(resolveSwipe({ ...swipeLeft, durationMs: 0 }), null);
});

test('вертикальный жест — прокрутка, а не перелистывание', () => {
  assert.equal(resolveSwipe({ dx: 10, dy: -200, durationMs: 250 }), null);
});

test('диагональный жест — не свайп, пока горизонталь не доминирует', () => {
  assert.equal(resolveSwipe({ ...swipeLeft, dx: -80, dy: -60 }), null);
  assert.equal(resolveSwipe({ ...swipeLeft, dx: -90, dy: -60 }), 'next');
});