import { ROW_EVENTS, TOUCH_MEDIA_QUERY } from '../../config/constants.js';
import { resolveRowAction } from '../../core/rowAction.js';
import { qsa } from '../../ui/dom.js';
import { elements } from '../../ui/elements.js';
import { addNextWord } from './addWordHint.js';
import { getEditor } from './answerRow.js';

const ACTION_CLASS = 'row-action';
const TOUCH_PANEL_CLASS = 'touch-actions';

const ACTIONS = Object.freeze({
  speak: { label: '🔊', title: 'Озвучить ответ' },
  add: { label: '+', title: 'Добавить следующее слово' },
});

/**
 * Кнопка у поля ответа для сенсорных устройств — замена Ctrl + клик:
 *  🔊 у зелёного поля озвучивает ответ, + у пустого или жёлтого — добавляет следующее слово.
 * На устройствах с мышью кнопок в разметке нет.
 * @param {{ speaker: ReturnType<typeof import('./speakAnswer.js').createAnswerSpeaker> }} deps
 */
export function initTouchActions({ speaker }) {
  const { panel } = elements;
  const touchQuery = window.matchMedia(TOUCH_MEDIA_QUERY);

  /** Приводит кнопку строки в соответствие с состоянием поля. */
  function syncRow(row) {
    let button = row.querySelector(`.${ACTION_CLASS}`);
    const editor = getEditor(row);
    const action = touchQuery.matches
      ? resolveRowAction({
          isDone: editor.classList.contains('done'),
          input: editor.innerText,
          answer: row.dataset.lang,
          canSpeak: speaker.isSupported,
        })
      : null;

    if (!action) {
      button?.remove();
      return;
    }

    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = ACTION_CLASS;
      const div = row.querySelector('.editor-wrap');
      div.append(button);
    }
    button.dataset.action = action;
    button.textContent = ACTIONS[action].label;
    button.title = ACTIONS[action].title;
    button.setAttribute('aria-label', ACTIONS[action].title);
  }

  const syncAll = () => {
    panel.classList.toggle(TOUCH_PANEL_CLASS, touchQuery.matches);
    qsa('.el', panel).forEach(syncRow);
  };

  panel.addEventListener(ROW_EVENTS.RENDERED, syncAll);
  panel.addEventListener(ROW_EVENTS.VALIDATED, (event) => syncRow(event.target));
  touchQuery.addEventListener('change', syncAll);

  panel.addEventListener('click', (event) => {
    const button = event.target.closest(`.${ACTION_CLASS}`);
    if (!button) return;

    const row = button.closest('.el');
    if (button.dataset.action === 'speak') {
      speaker.speak(getEditor(row));
    } else {
      addNextWord(row, { keepFocus: false });
    }
  });

  syncAll();
}
