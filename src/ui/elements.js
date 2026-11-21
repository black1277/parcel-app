import { byId, qs } from './dom.js';

/**
 * Единый реестр элементов страницы.
 * Геттеры вычисляются при обращении: часть элементов создаётся уже после загрузки страницы.
 */
export const elements = {
  // каркас страницы
  get main() {
    return byId('main');
  },
  get progress() {
    return byId('progress');
  },
  get spoilerTitle() {
    return byId('spoiler-title');
  },

  // тренажёр (создаётся при отрисовке каркаса)
  get panel() {
    return byId('panel');
  },
  get navigation() {
    return byId('links');
  },
  get langToggles() {
    return byId('langToggles');
  },
  get rus() {
    return byId('rus');
  },
  get eng() {
    return byId('eng');
  },
  get mix() {
    return byId('mix');
  },
  get show() {
    return byId('show');
  },
  get search() {
    return byId('search');
  },
  get searchButton() {
    return qs('button.go');
  },
  get fontToggles() {
    return byId('fontToggles');
  },

  // панель настроек
  get settingsLabel() {
    return qs('.side-button-1-wr .icon-button');
  },
  get showTitle() {
    return byId('showTitle');
  },
  get showSearch() {
    return byId('showSearch');
  },
  get showLinks() {
    return byId('showLinks');
  },
  get showFonts() {
    return byId('showFonts');
  },
  get fade() {
    return byId('fade');
  },
  get increaseFont() {
    return byId('increaseFont');
  },
  get decreaseFont() {
    return byId('decreaseFont');
  },
  get fontSizeValue() {
    return byId('fsize');
  },
  get hue() {
    return byId('hue');
  },
  get saturation() {
    return byId('saturation');
  },
  get lightness() {
    return byId('lightness');
  },
  get hueValue() {
    return byId('hueVal');
  },
  get saturationValue() {
    return byId('saturationVal');
  },
  get lightnessValue() {
    return byId('lightnessVal');
  },
  get fontUrlInput() {
    return byId('fontUrlInput');
  },
  get applyFontUrl() {
    return byId('applyFontUrl');
  },
  get fontUpload() {
    return byId('fontUpload');
  },
  get themeCheckbox() {
    return byId('slider');
  },
  get themeSwitch() {
    return byId('switch');
  },
  get resetButton() {
    return qs('button[title="Delete"]');
  },
  get savedFontsSelect() {
    return byId('savedFonts');
  }, //
};
