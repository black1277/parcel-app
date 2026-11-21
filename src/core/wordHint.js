const splitWords = (text) => text.trim().split(/\s+/).filter(Boolean);

/**
 * Подсказка «следующее слово».
 * Если в поле пусто или уже набраны целиком и правильно первые слова ответа (регистр не важен),
 * возвращает текст с добавленным следующим словом; иначе — null.
 * @param {{ input: string, answer: string }} params
 * @returns {string | null}
 */
export function nextWordHint({ input, answer }) {
  const answerWords = splitWords(answer);
  const typedWords = splitWords(input);

  if (typedWords.length >= answerWords.length) return null;

  const typedCorrectly = typedWords.every(
    (word, index) => word.toLowerCase() === answerWords[index].toLowerCase(),
  );
  return typedCorrectly ? answerWords.slice(0, typedWords.length + 1).join(' ') : null;
}
