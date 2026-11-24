import { SWIPE } from '../config/constants.js';

/**
 * Направление перелистывания по параметрам жеста.
 *  'next' — свайп влево: следующая страница;
 *  'prev' — свайп вправо: предыдущая страница;
 *  null   — не свайп: короткий, медленный или преимущественно вертикальный жест.
 * @param {{ dx: number, dy: number, durationMs: number }} gesture
 *   dx/dy — смещение пальца от начала жеста, px; durationMs — длительность жеста.
 * @returns {'next' | 'prev' | null}
 */
export function resolveSwipe({ dx, dy, durationMs }) {
  if (durationMs <= 0 || durationMs > SWIPE.MAX_DURATION_MS) return null;
  if (Math.abs(dx) < SWIPE.MIN_DISTANCE_PX) return null;
  if (Math.abs(dx) < Math.abs(dy) * SWIPE.AXIS_RATIO) return null;
  return dx < 0 ? 'next' : 'prev';
}

/**
 * Жест достаточно длинный и горизонтальный, чтобы панель начала следовать за пальцем.
 * @param {{ dx: number, dy: number }} gesture
 */
export function isHorizontalDrag({ dx, dy }) {
  return Math.abs(dx) >= SWIPE.DRAG_SLOP_PX && Math.abs(dx) > Math.abs(dy) * SWIPE.AXIS_RATIO;
}

/**
 * Смещение панели за пальцем: с демпфером и пределом;
 * у первой/последней страницы — заметное сопротивление («дальше некуда»).
 * @param {{ dx: number, canGo: boolean }} params
 */
export function dragOffset({ dx, canGo }) {
  const factor = canGo ? SWIPE.DRAG_FACTOR : SWIPE.EDGE_DRAG_FACTOR;
  const limit = canGo ? SWIPE.MAX_DRAG_PX : SWIPE.EDGE_MAX_DRAG_PX;
  return Math.max(-limit, Math.min(limit, dx * factor));
}

/**
 * Есть ли страница в направлении свайпа (границы повторяют goToPreviousPage/goToNextPage).
 * @param {{ direction: 'next' | 'prev', currentPage: number, totalPages: number }} params
 */
export function canTurnPage({ direction, currentPage, totalPages }) {
  return direction === 'next' ? currentPage < totalPages : currentPage > 1;
}