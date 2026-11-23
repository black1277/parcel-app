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