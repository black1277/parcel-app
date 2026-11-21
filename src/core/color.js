/**
 * Достаёт числа r, g, b из строки вида `rgb(204, 255, 211)`.
 * @param {string} cssColor
 * @returns {[number, number, number]}
 */
export function parseRgb(cssColor) {
  const [r, g, b] = cssColor.match(/\d+/g).map(Number);
  return [r, g, b];
}

/**
 * Перевод RGB (0–255) в HSL (h: 0–360, s и l: 0–100), значения округляются.
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @returns {{ h: number, s: number, l: number }}
 */
export function rgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;
  let hue = 0;
  let saturation = 0;

  if (max !== min) {
    const delta = max - min;
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        hue = (g - b) / delta + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / delta + 2;
        break;
      default:
        hue = (r - g) / delta + 4;
    }
    hue /= 6;
  }

  return {
    h: Math.round(hue * 360),
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100),
  };
}
