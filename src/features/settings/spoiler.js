import { elements } from '../../ui/elements.js';

/** Раскрывающаяся подсказка «Как пользоваться»: синхронизирует aria-expanded. */
export function initSpoiler() {
  elements.spoilerTitle.addEventListener('click', (event) => {
    const details = event.currentTarget.parentElement;
    // к моменту клика состояние `open` ещё прежнее, поэтому новое — противоположное
    details.setAttribute('aria-expanded', details.open ? 'false' : 'true');
  });
}
