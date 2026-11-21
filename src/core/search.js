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
