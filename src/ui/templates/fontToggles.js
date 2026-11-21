/**
 * @param {readonly string[]} fonts
 * @param {string} activeFont
 * @param {boolean} visible
 */
export function fontTogglesTemplate(fonts, activeFont, visible) {
  const items = fonts
    .map((font) => {
      const checked = font === activeFont ? 'checked' : '';
      return `
  <li><input type="radio" name="fonts" value="${font}" id="${font}" ${checked}>
    <label class="${font} flexrow" for="${font}" tabindex="0">${font}</label>
  </li>`;
    })
    .join('');

  return `
<section class="flexcol" id="fontToggles" style="display: ${visible ? 'flex' : 'none'}">
 <ul class="flexrow">
${items}
 </ul>
</section>`;
}
