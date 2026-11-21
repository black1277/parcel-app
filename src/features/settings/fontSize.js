import { FONT_SIZE } from '../../config/constants.js';
import { elements } from '../../ui/elements.js';

/** Кнопки изменения базового размера шрифта (в пределах MIN…MAX). */
export function initFontSize() {
  const root = document.documentElement;

  function adjust(delta) {
    const current = Number(getComputedStyle(root).getPropertyValue(FONT_SIZE.CSS_VARIABLE));
    const next = current + delta;
    if (next < FONT_SIZE.MIN || next > FONT_SIZE.MAX) return;

    root.style.setProperty(FONT_SIZE.CSS_VARIABLE, String(next));
    elements.fontSizeValue.textContent = next;
  }

  elements.increaseFont.addEventListener('click', () => adjust(FONT_SIZE.STEP));
  elements.decreaseFont.addEventListener('click', () => adjust(-FONT_SIZE.STEP));
}
