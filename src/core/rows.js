import { LANGS } from '../config/constants.js';
import { buildPatternRegExp } from './answerChecker.js';

/**
 * @typedef {{ rus: string, eng: string, regEng?: string, regRus?: string, pageNumber?: number }} Entry
 * @typedef {{
 *   prompt: string,
 *   answer: string,
 *   pattern: string | null,
 *   compiledPattern: RegExp | null,
 *   pageNumber?: number
 * }} Row
 */

/**
 * Превращает предложения в строки тренажёра для выбранного направления перевода.
 * Регулярные выражения компилируются один раз здесь.
 * @param {Entry[]} entries
 * @param {string} lang язык, который показывается пользователю
 * @returns {Row[]}
 */
export function buildRows(entries, lang) {
  const isRussianPrompt = lang === LANGS.RUS;

  return entries.map((entry) => {
    const patternStr = (isRussianPrompt ? entry.regEng : entry.regRus) || null;

    return {
      prompt: isRussianPrompt ? entry.rus : entry.eng,
      answer: isRussianPrompt ? entry.eng : entry.rus,
      pattern: patternStr,
      compiledPattern: patternStr ? buildPatternRegExp(patternStr) : null,
      pageNumber: entry.pageNumber,
    };
  });
}

/**
 * Общее количество предложений во всех страницах.
 * @param {Entry[][]} pages
 * @returns {number}
 */
export function countEntries(pages) {
  return pages.reduce((total, page) => total + page.length, 0);
}
