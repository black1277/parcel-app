import { nextWordHint } from './wordHint.js';

/**
 * Какое действие предлагать у поля ответа на сенсорном устройстве.
 *  'speak' — озвучить правильный ответ (поле зелёное);
 *  'add'   — добавить следующее слово (поле пустое или набрано верное начало ответа);
 *  null    — действия нет (в поле неверный текст или озвучивание не поддерживается).
 * @param {{ isDone: boolean, input: string, answer: string, canSpeak: boolean }} params
 * @returns {'speak' | 'add' | null}
 */
export function resolveRowAction({ isDone, input, answer, canSpeak }) {
  if (isDone) return canSpeak ? 'speak' : null;
  return nextWordHint({ input, answer }) === null ? null : 'add';
}
