import assert from 'node:assert/strict';
import { test } from 'node:test';
import { extractFontName, isValidGoogleFontUrl } from '../../src/services/fontService.js';

test('isValidGoogleFontUrl', () => {
  assert.ok(isValidGoogleFontUrl('https://fonts.googleapis.com/css2?family=Neucha'));
  assert.ok(isValidGoogleFontUrl('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'));
  // типичные ссылки с @ и ;
  assert.ok(
    isValidGoogleFontUrl(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
    ),
  );
  assert.ok(
    isValidGoogleFontUrl(
      'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap',
    ),
  );
  assert.ok(!isValidGoogleFontUrl('http://fonts.googleapis.com/css2?family=Neucha'));
  assert.ok(!isValidGoogleFontUrl('https://evil.example/css2?family=Neucha'));
  assert.ok(!isValidGoogleFontUrl(null));
});

test('extractFontName', () => {
  assert.equal(extractFontName('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght'), 'Balsamiq Sans');
  assert.equal(
    extractFontName(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap',
    ),
    'Roboto',
  );
  assert.equal(extractFontName('https://fonts.googleapis.com/css2?display=swap'), 'sans-serif');
});
