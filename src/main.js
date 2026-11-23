import { RANDOM_CYCLE_PAUSE_MS } from './config/constants.js';
import { RandomPagePicker } from './core/randomPagePicker.js';
import { countEntries } from './core/rows.js';
import pages from './data/index.js';
import { bindKeyboardActivation } from './features/a11y/keyboardActivation.js';
import { initPlainTextPaste } from './features/clipboard/plainTextPaste.js';
import { initBackgroundColor } from './features/settings/backgroundColor.js';
import { initFontSize } from './features/settings/fontSize.js';
import { initNavigationMode } from './features/settings/navigationMode.js';
import { initResetSettings } from './features/settings/reset.js';
import { initSpoiler } from './features/settings/spoiler.js';
import { initTheme } from './features/settings/theme.js';
import { initUserFont } from './features/settings/userFont.js';
import { initVisibilitySettings } from './features/settings/visibility.js';
import { bindTrainerControls } from './features/trainer/controls.js';
import { bindHotkeys } from './features/trainer/hotkeys.js';
import { initAddWordHint } from './features/trainer/addWordHint.js';
import { createAnswerSpeaker, initSpeakAnswer } from './features/trainer/speakAnswer.js';
import { initTouchActions } from './features/trainer/touchActions.js';
import { createTrainer } from './features/trainer/trainer.js';
import { userStorage } from './services/storage.js';
import { createAppState } from './state/appState.js';
import { elements } from './ui/elements.js';
import { renderShell } from './ui/shell.js';
import { bindSwipeNavigation } from './features/trainer/swipeNavigation.js';

function bootstrap() {
  console.log('Всего', countEntries(pages), ' выражений');

  const storage = userStorage;
  const state = createAppState(storage);

  renderShell(elements.main, { state, storage });

  // тренажёр
  const visibility = initVisibilitySettings(storage);
  const trainer = createTrainer({
    pages,
    state,
    storage,
    picker: new RandomPagePicker(pages.length, Math.random, { cooldownMs: RANDOM_CYCLE_PAUSE_MS }),
    isFadeEnabled: visibility.isFadeEnabled,
  });
  trainer.init();
  bindTrainerControls(trainer);
  bindHotkeys(trainer);
  bindSwipeNavigation(trainer);
  const speaker = createAnswerSpeaker(state);
  initSpeakAnswer(speaker);
  initAddWordHint();
  initTouchActions({ speaker });
  // панель настроек
  initNavigationMode(storage, trainer);
  initFontSize();
  const backgroundColor = initBackgroundColor(storage);
  initTheme(storage, backgroundColor);
  initUserFont(storage);
  initResetSettings(storage);

  // прочее
  initSpoiler();
  initPlainTextPaste();
  bindKeyboardActivation(elements.settingsLabel);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
