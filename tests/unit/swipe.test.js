import assert from 'node:assert/strict';
import { test } from 'node:test';
import { SWIPE } from '../../src/config/constants.js';
import { resolveSwipe, canTurnPage, dragOffset, isHorizontalDrag } from '../../src/core/swipe.js';

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

test('панель следует за пальцем после порога и только по горизонтали', () => {
  assert.equal(isHorizontalDrag({ dx: -SWIPE.DRAG_SLOP_PX, dy: 0 }), true);
  assert.equal(isHorizontalDrag({ dx: -(SWIPE.DRAG_SLOP_PX - 1), dy: 0 }), false);
  assert.equal(isHorizontalDrag({ dx: -40, dy: -40 }), false);
});

test('смещение панели — с демпфером и пределом', () => {
  assert.equal(dragOffset({ dx: -100, canGo: true }), -100 * SWIPE.DRAG_FACTOR);
  assert.equal(dragOffset({ dx: -1000, canGo: true }), -SWIPE.MAX_DRAG_PX);
  assert.equal(dragOffset({ dx: 1000, canGo: true }), SWIPE.MAX_DRAG_PX);
});

test('у границ страниц панель сопротивляется', () => {
  assert.equal(dragOffset({ dx: -100, canGo: false }), -100 * SWIPE.EDGE_DRAG_FACTOR);
  assert.equal(dragOffset({ dx: -1000, canGo: false }), -SWIPE.EDGE_MAX_DRAG_PX);
});

test('границы перелистывания совпадают с контроллером', () => {
  assert.equal(canTurnPage({ direction: 'prev', currentPage: 1, totalPages: 372 }), false);
  assert.equal(canTurnPage({ direction: 'next', currentPage: 372, totalPages: 372 }), false);
  assert.equal(canTurnPage({ direction: 'next', currentPage: 1, totalPages: 372 }), true);
  assert.equal(canTurnPage({ direction: 'prev', currentPage: 372, totalPages: 372 }), true);
});