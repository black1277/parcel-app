import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSpeechService } from '../../src/services/speechService.js';

class FakeUtterance {
  constructor(text) {
    this.text = text;
  }
}

function fakeSynth(voices = []) {
  const calls = [];
  return {
    calls,
    getVoices: () => voices,
    cancel: () => calls.push('cancel'),
    speak: (utterance) => calls.push(utterance),
  };
}

test('озвучивает текст выбранным голосом и прерывает предыдущую озвучку', () => {
  const synth = fakeSynth([{ name: 'Samantha', lang: 'en-US' }]);
  const service = createSpeechService(synth, FakeUtterance);

  service.speak('Hello', { lang: 'en-US', voiceName: null, rate: 0.9, pitch: 1, volume: 1 });

  assert.equal(synth.calls[0], 'cancel');
  const utterance = synth.calls[1];
  assert.equal(utterance.text, 'Hello');
  assert.equal(utterance.lang, 'en-US');
  assert.equal(utterance.voice.name, 'Samantha');
  assert.equal(utterance.rate, 0.9);
});

test('без подходящего голоса остаётся голос браузера по умолчанию', () => {
  const synth = fakeSynth([]);
  createSpeechService(synth, FakeUtterance).speak('Hi', { lang: 'en-US' });
  assert.equal(synth.calls[1].voice, undefined);
});

test('пустой текст не озвучивается', () => {
  const synth = fakeSynth();
  createSpeechService(synth, FakeUtterance).speak('', { lang: 'en-US' });
  assert.equal(synth.calls.length, 0);
});

test('без поддержки Web Speech API ничего не происходит', () => {
  const service = createSpeechService(undefined, undefined);
  assert.equal(service.isSupported, false);
  assert.doesNotThrow(() => service.speak('Hi', { lang: 'en-US' }));
});
