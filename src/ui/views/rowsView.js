import { elements } from '../elements.js';

/**
 * Строка тренажёра: предложение слева и поле для ответа справа.
 * Эталонный ответ и шаблон лежат в data-атрибутах строки.
 * @param {import('../../core/rows.js').Row} row
 * @returns {HTMLElement}
 */
export function createRow({ prompt, answer, pattern, pageNumber }) {
  const article = document.createElement('article');
  article.className = 'el';
  article.dataset.lang = answer;
  if (pattern) {
    article.dataset.pattern = pattern;
  }

  const promptElement = document.createElement('span');
  promptElement.append(prompt);
  if (pageNumber !== undefined) {
    // в результатах поиска показываем, на какой странице лежит предложение
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
export function renderRows(rows) {
  elements.panel.replaceChildren(...rows.map(createRow));
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
