const EDITABLE_CLASSES = ['editor', 'done', 'err'];

// NOTE: вставляемый текст экранируется как HTML, хотя затем добавляется как текстовый узел
// (то есть символы &, <, > и кавычки вставляются в виде сущностей).
//const HTML_ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
//const escapeText = (text) => text.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);

/** В поля ответов вставляется только обычный текст — без форматирования. */
export function initPlainTextPaste() {
  document.body.addEventListener('paste', (event) => {
    if (!EDITABLE_CLASSES.some((cssClass) => event.target.classList.contains(cssClass))) return;

    event.preventDefault();
    const text = (event.clipboardData || window.clipboardData).getData('text/plain');
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(document.createTextNode(text));
  });
}
