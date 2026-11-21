import { elements } from '../elements.js';

function createPageLink({ page, active }) {
  const link = document.createElement('a');
  link.href = '#';
  link.className = active ? 'link-page active' : 'link-page';
  if (active) {
    link.setAttribute('aria-current', 'page');
  }
  link.setAttribute('aria-label', `Страница ${page}`);
  link.dataset.page = String(page);
  link.textContent = String(page);
  return link;
}

function createEllipsis() {
  const ellipsis = document.createElement('span');
  ellipsis.className = 'ellipsis';
  ellipsis.textContent = '...';
  return ellipsis;
}

/** @param {import('../../core/pagination.js').PageItem[]} items */
export function renderNavigation(items) {
  elements.navigation.replaceChildren(
    ...items.map((item) => (item.type === 'page' ? createPageLink(item) : createEllipsis())),
  );
}
