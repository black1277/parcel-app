/**
 * Перемешивание Фишера — Йетса. Исходный массив не изменяется.
 * @template T
 * @param {T[]} items
 * @param {() => number} [random] источник случайных чисел из [0, 1)
 * @returns {T[]}
 */
export function shuffle(items, random = Math.random) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
