import { ROW_EVENTS } from '../../config/constants.js';
import { commonPrefixLength, isAnswerCorrect } from '../../core/answerChecker.js';
import { normalizeInput } from '../../core/text.js';
import { qsa } from '../../ui/dom.js';
import { elements } from '../../ui/elements.js';
import { setShowButtonDisabled } from '../../ui/views/controlsView.js';

export const getEditor = (row) => row.querySelector('span[contenteditable="true"]');

/**
 * Показывает в поле ответа правильный вариант.
 * Прежний текст поля остаётся во всплывающей подсказке — чтобы сравнить со своим ответом.
 * @param {HTMLElement} row
 */
export function revealAnswer(row) {
  const editor = getEditor(row);
  editor.title = editor.innerText;
  editor.innerText = row.dataset.lang;
  validateRow(row);
}

/** Подставляет правильные ответы во все строки. */
export function revealAllAnswers() {
  setShowButtonDisabled(true);
  qsa('.el', elements.panel).forEach(revealAnswer);
}

/**
 * Проверяет ответ в строке: зелёный фон — верно, жёлтый — неверно.
 * Для неверного ответа появляется кнопка «help».
 * @param {HTMLElement} row
 */
export function validateRow(row) {
  applyValidation(row);
  row.dispatchEvent(new CustomEvent(ROW_EVENTS.VALIDATED, { bubbles: true }));
}

function applyValidation(row) {
  const editor = getEditor(row);
  row.querySelector('.help-btn')?.remove();

  if (editor.innerText.trim() === '') {
    editor.classList.remove('err', 'done');
    return;
  }

  const isCorrect = isAnswerCorrect({
    input: editor.innerText,
    answer: row.dataset.lang,
    pattern: row.dataset.pattern,
    compiledPattern: row._compiledPattern ?? null,   // ← добавлено
  });

  editor.className = isCorrect ? 'done' : 'err';
  editor.classList.add('editor');
  if (!isCorrect) {
    const div = row.querySelector('.editor-wrap');
    div.append(
      createHelpButton(
        editor,
        row.dataset.lang.trim().toLowerCase(),
        normalizeInput(editor.innerText),
      ),
    );
  }
}

function createHelpButton(editor, answer, input) {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'help';
  button.classList.add('help-btn');

  // уводим фокус из поля, чтобы подсветка совпавшей части не конфликтовала с курсором
  button.addEventListener('mouseover', () => editor.blur());
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    highlightMatchingPrefix(editor, answer, input);
  });
  return button;
}

function capitalizeSentences(text) {
  return text.replace(
    /(^\s*|[.!?]\s*)(\p{L})/gu,
    (_, prefix, letter) => prefix + letter.toUpperCase(),
  );
}

/** Подчёркивает начало ответа пользователя, которое совпадает с правильным ответом. */
function highlightMatchingPrefix(editor, answer, input) {
  const matchedLength = commonPrefixLength(answer, input);

  const matched = document.createElement('u');
  matched.contentEditable = 'false';
  matched.textContent = capitalizeSentences(input.slice(0, matchedLength));

  editor.replaceChildren(matched, input.slice(matchedLength));
}

/**
 * Навешивает на панель обработчики строк (делегирование событий — строки перерисовываются).
 * @param {HTMLElement} panel
 */
export function bindRowInteractions(panel) {
  panel.addEventListener('dblclick', (event) => {
    const prompt = event.target.closest('.el > span:first-child');
    if (prompt && panel.contains(prompt)) {
      revealAnswer(prompt.parentElement);
    }
  });

  const validateOnEdit = (event) => {
    if (event.target.matches('span[contenteditable="true"]')) {
      validateRow(event.target.closest('.el'));
    }
  };
  panel.addEventListener('input', validateOnEdit);
  panel.addEventListener('focusout', validateOnEdit);
}
