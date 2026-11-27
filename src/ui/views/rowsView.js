import { elements } from '../elements.js';
import { splitByMatch } from '../../core/search.js';

/**
 * Строка тренажёра: предложение слева и поле для ответа справа.
 * Эталонный ответ и шаблон лежат в data-атрибутах строки.
 * Скомпилированный RegExp хранится на элементе.
 * @param {import('../../core/rows.js').Row} row
 * @returns {HTMLElement}
 */
export function createRow({ prompt, answer, pattern, compiledPattern, pageNumber, query }) {
  const article = document.createElement('article');
  article.className = 'el';
  article.dataset.lang = answer;

  if (pattern) {
    article.dataset.pattern = pattern; // оставляем для отладки / совместимости
  }

  // Предкомпилированный RegExp (не попадает в dataset)
  if (compiledPattern) {
    article._compiledPattern = compiledPattern;
  }

  const promptElement = document.createElement('span');
  const strong = document.createElement('span');
  appendHighlighted(strong, prompt, query);
  promptElement.append(strong);
  if (pageNumber !== undefined) {
    const pageMark = document.createElement('small');
    pageMark.textContent = `[${pageNumber}]`;
    promptElement.append(' ', pageMark);
  }

  const editor = document.createElement('span');
  editor.className = 'editor';
  editor.contentEditable = 'true';
  editor.spellcheck = false;

  const wrapper = document.createElement('div');
  wrapper.className = 'editor-wrap';
  wrapper.append(editor);

  article.append(promptElement, wrapper);
  return article;
}

/** @param {import('../../core/rows.js').Row[]} rows */
export function renderRows(rows, query = '') {
  elements.panel.replaceChildren(...rows.map((row) => createRow({ ...row, query })));
}

/** Вставляет текст, оборачивая совпадения с запросом в <mark>. */
function appendHighlighted(element, text, query) {
    for (const part of splitByMatch(text, query)) {
        if (part.match) {
            const mark = document.createElement('mark');
            mark.textContent = part.text;
            element.append(mark);
          } else {
            element.append(part.text);
          }
      }
}

/**
 * Заменяет содержимое панели коротким сообщением.
 * @param {string} text
 * @param {'span' | 'div'} [tag]
 */
export function renderMessage(text, tag = 'span') {
  const message = document.createElement(tag);
  message.textContent = text;
  elements.panel.replaceChildren(message);
}
