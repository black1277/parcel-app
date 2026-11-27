/**
 * Приводит ответ пользователя к виду, пригодному для сравнения:
 * без крайних пробелов, в нижнем регистре, с одинарными пробелами между словами.
/** Все виды апострофов (’ ʼ ' ´) приравниваются к обычному `
 * @param {string} text
 * @returns {string}
 */
const APOSTROPHES = /[\u2019\u02BC\u0027\u00B4]/g;
export function normalizeInput(text) {
    return text
        .trim()
        .toLowerCase()
        .replace(APOSTROPHES, "`")
        .replace(/\s+/g, ' ');
}
