import { STORAGE_FIELDS } from '../../config/constants.js';
import { parseRgb, rgbToHsl } from '../../core/color.js';
import { elements } from '../../ui/elements.js';

const toCssColor = ({ h, s, l }) => `hsl(${h}, ${s}%, ${l}%)`;

/** Цвет фона страницы, каким его сейчас видит браузер. */
function readCurrentBackground() {
  return rgbToHsl(...parseRgb(getComputedStyle(document.body).backgroundColor));
}

/**
 * Ползунки цвета фона (H, S, L). Цвет запоминается между сеансами.
 * @param {{ get(key: string): unknown, set(key: string, value: unknown): void }} storage
 * @returns {{ apply(color: { h: number, s: number, l: number }): void }}
 */
export function initBackgroundColor(storage) {
  const sliders = [elements.hue, elements.saturation, elements.lightness];
  const labels = [elements.hueValue, elements.saturationValue, elements.lightnessValue];

  function show({ h, s, l }) {
    [h, s, l].forEach((value, index) => {
      labels[index].textContent = value;
    });
    document.body.style.backgroundColor = toCssColor({ h, s, l });
  }

  function saveFromSliders() {
    const [h, s, l] = sliders.map((slider) => slider.value);
    show({ h, s, l });
    storage.set(STORAGE_FIELDS.BACKGROUND_COLOR, { h, s, l });
  }

  const initial = storage.get(STORAGE_FIELDS.BACKGROUND_COLOR) ?? readCurrentBackground();
  [initial.h, initial.s, initial.l].forEach((value, index) => {
    sliders[index].value = value;
  });
  show(initial);

  sliders.forEach((slider) => slider.addEventListener('input', saveFromSliders));

  return {
    apply({ h, s, l }) {
      [h, s, l].forEach((value, index) => {
        sliders[index].value = value;
      });
      saveFromSliders();
    },
  };
}
