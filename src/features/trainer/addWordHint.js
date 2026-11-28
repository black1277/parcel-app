import { nextWordHint } from '../../core/wordHint.js';
import { elements } from '../../ui/elements.js';
import { getEditor, validateRow } from './answerRow.js';

/** Ставит курсор в конец текста поля. */
function moveCaretToEnd(editor) {
  const range = document.createRange();
  range.selectNodeContents(editor);
  range.collapse(false);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
}

/**
 * Добавляет в поле следующее слово правильного ответа, если поле пустое
 * или в нём уже набрано верное начало ответа.
 * @param {HTMLElement} row
 * @param {{ keepFocus?: boolean }} [options] keepFocus — вернуть курсор в конец поля
 *   (на телефоне это открыло бы экранную клавиатуру, поэтому для кнопки выключено)
 * @returns {boolean} true, если слово добавлено
 */
export function addNextWord(row, { keepFocus = true } = {}) {
  const editor = getEditor(row);
  const hint = nextWordHint({ input: editor.innerText, answer: row.dataset.lang });
  if (hint === null) return false;

  editor.innerText = hint;
  validateRow(row);
  if (keepFocus) moveCaretToEnd(editor);
  return true;
}

/**
 * Ctrl + клик по пустому или жёлтому полю добавляет следующее слово правильного ответа,
 * если всё уже набранное — правильное начало ответа. Несколько щелчков подряд
 * набирают ответ целиком. (По зелёному полю Ctrl + клик озвучивает ответ — см. speakAnswer.js.)
 */
export function initAddWordHint() {
  elements.panel.addEventListener('click', (event) => {
    if (!event.ctrlKey) return;

    const editor = event.target.closest('span[contenteditable="true"]');
    if (!editor || editor.classList.contains('done')) return;
    addNextWord(editor.closest('.el'), { keepFocus: true });
    // const row = editor.closest('.el');
    // const hint = nextWordHint({ input: editor.innerText, answer: row.dataset.lang });
    // if (hint === null) return;

    // editor.innerText = hint;
    // validateRow(row);
    // moveCaretToEnd(editor);
  });
}
