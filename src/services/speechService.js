import { selectVoice } from '../core/voice.js';

/**
 * Озвучивание текста через Web Speech API.
 * @param {SpeechSynthesis | undefined} [synth]
 * @param {typeof SpeechSynthesisUtterance | undefined} [Utterance]
 */
export function createSpeechService(
  synth = globalThis.speechSynthesis,
  Utterance = globalThis.SpeechSynthesisUtterance,
) {
  const isSupported = Boolean(synth && Utterance);

  return {
    isSupported,

    /**
     * Произносит текст; предыдущая озвучка прерывается.
     * @param {string} text
     * @param {{ lang: string, voiceName?: string | null, rate?: number, pitch?: number, volume?: number }} settings
     */
    speak(text, { lang, voiceName, rate, pitch, volume }) {
      if (!isSupported || !text) return;

      const utterance = new Utterance(text);
      utterance.lang = lang;
      const voice = selectVoice(synth.getVoices(), { voiceName, lang });
      if (voice) utterance.voice = voice;
      if (rate !== undefined) utterance.rate = rate;
      if (pitch !== undefined) utterance.pitch = pitch;
      if (volume !== undefined) utterance.volume = volume;

      synth.cancel();
      synth.speak(utterance);
    },
  };
}

export const speechService = createSpeechService();
