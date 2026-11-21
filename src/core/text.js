/**
 * Приводит ответ пользователя к виду, пригодному для сравнения:
 * без крайних пробелов, в нижнем регистре, с одинарными пробелами между словами.
 * @param {string} text
 * @returns {string}
 */
export function normalizeInput(text) {
  return text.trim().toLowerCase().replace(/\s+/g, ' ');
}
