import { LANGS, SPEECH } from '../../config/constants.js';
import { speechService } from '../../services/speechService.js';
import { elements } from '../../ui/elements.js';

/**
 * Озвучивание ответов на языке ответа: он противоположен языку показанных предложений.
 * @param {{ lang: string }} state состояние тренажёра
 * @param {typeof speechService} [speech]
 */
export function createAnswerSpeaker(state, speech = speechService) {
  return {
    isSupported: speech.isSupported,

    /** @param {HTMLElement} editor поле с правильным ответом */
    speak(editor) {
      const answerLang = state.lang === LANGS.RUS ? LANGS.ENG : LANGS.RUS;
      speech.speak(editor.innerText.trim(), SPEECH[answerLang]);
    },
  };
}

/**
 * Ctrl + клик по правильному (зелёному) ответу озвучивает его.
 * На сенсорных устройствах то же делает кнопка у поля (см. touchActions.js).
 * @param {ReturnType<typeof createAnswerSpeaker>} speaker
 */
export function initSpeakAnswer(speaker) {
  if (!speaker.isSupported) return;

  elements.panel.addEventListener('click', (event) => {
    if (!event.ctrlKey) return;

    const editor = event.target.closest('span[contenteditable="true"]');
    if (editor?.classList.contains('done')) {
      speaker.speak(editor);
    }
  });
}
