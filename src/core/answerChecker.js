import { normalizeInput } from './text.js';

/** «Умный» апостроф, который в шаблонах заменяется на обратный (так вводят апостроф в данных). */
const TYPOGRAPHIC_APOSTROPHE = '’';
const PLAIN_APOSTROPHE = '`';

/** Кэш скомпилированных шаблонов (паттерны статичны). */
const patternCache = new Map();

/**
 * Строит регулярное выражение из шаблона вида `/выражение/gm`.
 * Берётся только текст между первыми двумя слэшами, флаги игнорируются.
 * Результат кэшируется.
 * @param {string} pattern
 * @returns {RegExp}
 */
export function buildPatternRegExp(pattern) {
  if (patternCache.has(pattern)) {
    return patternCache.get(pattern);
  }

  const source = pattern
    .split('/')[1]
    .trim()
    .toLowerCase()
    .replaceAll(TYPOGRAPHIC_APOSTROPHE, PLAIN_APOSTROPHE);

  const re = new RegExp(source);
  patternCache.set(pattern, re);
  return re;
}

/**
 * Проверяет ответ пользователя.
 * Если передан уже скомпилированный паттерн — используется он.
 * Иначе (fallback) компилируется из строки pattern.
 * @param {{
 *   input: string,
 *   answer: string,
 *   pattern?: string | null,
 *   compiledPattern?: RegExp | null
 * }} params
 * @returns {boolean}
 */
export function isAnswerCorrect({ input, answer, pattern, compiledPattern }) {
  const normalizedInput = normalizeInput(input);

  if (compiledPattern) {
    return compiledPattern.test(normalizedInput);
  }

  if (pattern) {
    return buildPatternRegExp(pattern).test(normalizedInput);
  }

  return normalizeInput(answer) === normalizedInput;
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
