import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { test } from 'node:test';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isAnswerCorrect } from '../../src/core/answerChecker.js';
import { buildRows } from '../../src/core/rows.js';
import { LANGS } from '../../src/config/constants.js';

// Страницы читаются напрямую из src/data/pages, а не из генерируемого src/data/index.js —
// тест работает и на свежем клоне, где индекс ещё не создан.
const PAGES_DIR = new URL('../../src/data/pages/', import.meta.url);
const PAGE_FILE = /^data(\d+)\.js$/;

const files = readdirSync(fileURLToPath(PAGES_DIR))
  .filter((name) => PAGE_FILE.test(name))
  .sort((a, b) => Number(PAGE_FILE.exec(a)[1]) - Number(PAGE_FILE.exec(b)[1]));

const pages = await Promise.all(
  files.map(async (name) => [name, (await import(pathToFileURL(fileURLToPath(new URL(name, PAGES_DIR))))).default]),
);

test('есть хотя бы одна страница с данными', () => {
  assert.ok(pages.length > 0);
});

test('каждая страница — непустой массив предложений', () => {
  for (const [name, page] of pages) {
    assert.ok(Array.isArray(page) && page.length > 0, `${name}: ожидается непустой массив`);
  }
});

test('у каждого предложения непустые строки rus и eng', () => {
  for (const [name, page] of pages) {
    page.forEach((entry, i) => {
      for (const field of ['rus', 'eng']) {
        assert.equal(typeof entry[field], 'string', `${name}[${i}].${field} должно быть строкой`);
        assert.ok(entry[field].trim() !== '', `${name}[${i}].${field} пустое`);
      }
    });
  }
});

test('необязательные шаблоны regEng / regRus — строки вида /выражение/флаги', () => {
  for (const [name, page] of pages) {
    page.forEach((entry, i) => {
      for (const field of ['regEng', 'regRus']) {
        if (entry[field] === undefined || entry[field] === '') continue;
        assert.match(entry[field], /^\/.+\/[a-z]*$/s, `${name}[${i}].${field}: неверный формат «${entry[field]}»`);
      }
    });
  }
});

test('любой ответ принимается проверкой в обоих направлениях (ответ совпадает с собственным шаблоном)', () => {
  for (const [name, page] of pages) {
    for (const lang of Object.values(LANGS)) {
      buildRows(page, lang).forEach(({ answer, pattern }, i) => {
        assert.ok(
          isAnswerCorrect({ input: answer, answer, pattern }),
          `${name}[${i}] (${lang}): эталонный ответ «${answer}» не проходит проверку (шаблон: ${pattern})`,
        );
      });
    }
  }
});
