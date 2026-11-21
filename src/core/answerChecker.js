import { normalizeInput } from './text.js';

/** «Умный» апостроф, который в шаблонах заменяется на обратный (так вводят апостроф в данных). */
const TYPOGRAPHIC_APOSTROPHE = '’';
const PLAIN_APOSTROPHE = '`';

/**
 * Строит регулярное выражение из шаблона вида `/выражение/gm`.
 * Берётся только текст между первыми двумя слэшами, флаги игнорируются.
 * @param {string} pattern
 * @returns {RegExp}
 */
export function buildPatternRegExp(pattern) {
  const source = pattern
    .split('/')[1]
    .trim()
    .toLowerCase()
    .replaceAll(TYPOGRAPHIC_APOSTROPHE, PLAIN_APOSTROPHE);
  return new RegExp(source);
}

/**
 * Проверяет ответ пользователя.
 * Если у предложения есть шаблон — ответ сверяется с ним, иначе с эталонным текстом.
 * @param {{ input: string, answer: string, pattern?: string | null }} params
 * @returns {boolean}
 */
export function isAnswerCorrect({ input, answer, pattern }) {
  const normalizedInput = normalizeInput(input);

  if (pattern) {
    return buildPatternRegExp(pattern).test(normalizedInput);
  }
  return answer.trim().toLowerCase() === normalizedInput;
}

/**
 * Длина общего начала двух строк.
 * @param {string} first
 * @param {string} second
 * @returns {number}
 */
export function commonPrefixLength(first, second) {
  const limit = Math.min(first.length, second.length);
  let length = 0;
  while (length < limit && first[length] === second[length]) {
    length += 1;
  }
  return length;
}
