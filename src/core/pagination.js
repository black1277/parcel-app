import { VISIBLE_PAGES } from '../config/constants.js';

/**
 * @typedef {{ type: 'page', page: number, active: boolean } | { type: 'ellipsis' }} PageItem
 */

const ELLIPSIS = Object.freeze({ type: 'ellipsis' });

const range = (start, end, activePage) => {
  const items = [];
  for (let page = start; page <= end; page += 1) {
    items.push({ type: 'page', page, active: page === activePage });
  }
  return items;
};

/**
 * Список элементов навигации по страницам.
 * @param {{ totalPages: number, currentPage: number, collapsed: boolean }} params
 *   collapsed — свёрнутый вид с многоточиями вместо полного списка страниц
 * @returns {PageItem[]}
 */
export function buildPageItems({ totalPages, currentPage, collapsed }) {
  if (!collapsed || totalPages <= 4 * VISIBLE_PAGES - 1) {
    return range(1, totalPages, currentPage);
  }

  const head = range(1, VISIBLE_PAGES);
  const tail = range(totalPages - VISIBLE_PAGES + 1, totalPages);

  if (currentPage < VISIBLE_PAGES * 2) {
    return [...range(1, VISIBLE_PAGES + currentPage - 1, currentPage), ELLIPSIS, ...tail];
  }
  if (currentPage > totalPages - VISIBLE_PAGES * 2) {
    return [...head, ELLIPSIS, ...range(currentPage - VISIBLE_PAGES + 1, totalPages, currentPage)];
  }
  return [
    ...head,
    ELLIPSIS,
    ...range(currentPage - VISIBLE_PAGES + 1, currentPage + VISIBLE_PAGES - 1, currentPage),
    ELLIPSIS,
    ...tail,
  ];
}
