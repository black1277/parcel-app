import { qsa } from '../dom.js';
import { elements } from '../elements.js';

/** Сколько первых блоков `.blk` (rus, eng, «перемешать») подсвечиваются серым при блокировке. */
const LOCKABLE_BLOCKS = 3;

/**
 * Блокирует или разблокирует переключатель языка и «перемешать».
 * @param {boolean} disabled
 */
export function setControlsDisabled(disabled) {
  qsa('.blk')
    .slice(0, LOCKABLE_BLOCKS)
    .forEach((block) => block.classList.toggle('grey', disabled));

  elements.rus.disabled = disabled;
  elements.eng.disabled = disabled;
  elements.mix.disabled = disabled;
}

/** @param {boolean} disabled */
export function setShowButtonDisabled(disabled) {
  elements.show.disabled = disabled;
}
