/**
 * Ищет подстроку (без учёта регистра) в предложениях всех страниц.
 * Каждому найденному предложению добавляется номер страницы, на которой оно лежит.
 * @param {Array<Array<Record<string, string>>>} pages
 * @param {string} query
 * @param {string} lang поле, по которому ищем: 'rus' или 'eng'
 * @returns {Array<Record<string, string | number>>}
 */
export function searchPages(pages, query, lang) {
  const needle = query.toLowerCase();

  return pages.flatMap((page, index) =>
    page
      .filter((entry) => entry[lang].toLowerCase().includes(needle))
      .map((entry) => ({ ...entry, pageNumber: index + 1 })),
  );
}

/**
 * Разбивает текст на фрагменты: обычные и совпавшие с запросом (без учёта регистра).
 * @returns {Array<{ text: string, match: boolean }>}
*/
export function splitByMatch(text, query) {
    if (!query) return [{ text, match: false }];
    const lower = text.toLowerCase();
    const needle = query.toLowerCase();
    const parts = [];
    let pos = 0;
    let index = lower.indexOf(needle);
    while (index !== -1) {
        if (index > pos) parts.push({ text: text.slice(pos, index), match: false });
        parts.push({ text: text.slice(index, index + needle.length), match: true });
        pos = index + needle.length;
        index = lower.indexOf(needle, pos);
      }
    if (pos < text.length) parts.push({ text: text.slice(pos), match: false });
    return parts;
  }
