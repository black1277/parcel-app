import assert from 'node:assert/strict';
import { test } from 'node:test';
import { parseRgb, rgbToHsl } from '../../src/core/color.js';

test('parseRgb', () => {
  assert.deepEqual(parseRgb('rgb(204, 255, 211)'), [204, 255, 211]);
});

test('rgbToHsl для стартового фона страницы #ccffd3', () => {
  assert.deepEqual(rgbToHsl(204, 255, 211), { h: 128, s: 100, l: 90 });
});

test('rgbToHsl: серый цвет — без оттенка и насыщенности', () => {
  assert.deepEqual(rgbToHsl(128, 128, 128), { h: 0, s: 0, l: 50 });
});
