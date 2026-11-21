/** @param {boolean} visible */
export function searchPanelTemplate(visible) {
  return `<section class="flexrow w100" style="display: ${visible ? 'flex' : 'none'}">
  <input autocomplete="off" type="text" name="search" id="search" class="search" aria-label="Введите текст для поиска" title="Введите текст для поиска"><button type="button" class="go" aria-label="Поиск">GO</button></section>`;
}
