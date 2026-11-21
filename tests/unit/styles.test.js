import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  BUILT_IN_FONTS,
  FONT_SIZE,
  THEMES,
  USER_FONT_CLASS,
  USER_FONT_CSS_VARIABLE,
} from '../../src/config/constants.js';

const STYLES_DIR = fileURLToPath(new URL('../../src/styles/', import.meta.url));

const listCss = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? listCss(path) : name.endsWith('.css') ? [path] : [];
  });

const read = (path) => readFileSync(path, 'utf8');
const stripComments = (css) => css.replace(/\/\*[\s\S]*?\*\//g, '');

const cssFiles = listCss(STYLES_DIR);
// «живой» CSS: закомментированные правила в расчёт не идут
const liveCss = cssFiles.map((file) => stripComments(read(file))).join('\n');

/** Простейший разбор: пары «селектор { тело }» (в т.ч. внутри @media). */
function parseRules(css) {
  return [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map(([, selector, body]) => ({
    selector: selector.trim(),
    body,
  }));
}
const rules = parseRules(liveCss);

const hasClass = (name) => new RegExp(`\\.${name}(?![\\w-])`).test(liveCss);
const hasId = (name) => new RegExp(`#${name}(?![\\w-])`).test(liveCss);

test('CSS: комментарии закрыты и не вложены, фигурные скобки сбалансированы', () => {
  for (const file of cssFiles) {
    const css = read(file);
    const name = relative(STYLES_DIR, file);
    let rest = css;
    while (rest.includes('/*')) {
      const open = rest.indexOf('/*');
      const close = rest.indexOf('*/', open + 2);
      assert.notEqual(close, -1, `${name}: незакрытый комментарий`);
      assert.ok(!rest.slice(open + 2, close).includes('/*'), `${name}: вложенный комментарий`);
      rest = rest.slice(close + 2);
    }
    const code = stripComments(css);
    assert.equal(code.split('{').length, code.split('}').length, `${name}: скобки { } не сбалансированы`);
  }
});

test('index.css подключает каждый файл стилей ровно один раз и не ссылается на отсутствующие', () => {
  const imported = [...stripComments(read(join(STYLES_DIR, 'index.css'))).matchAll(/@import\s+'(\.[^']+)'/g)].map(
    (m) => join(STYLES_DIR, m[1]),
  );
  const expected = cssFiles.filter((file) => !file.endsWith('index.css'));

  assert.equal(new Set(imported).size, imported.length, 'есть дубли @import');
  assert.deepEqual([...imported].sort(), [...expected].sort());
});

test('классы, которые JS назначает сам, имеют стили', () => {
  const classes = [
    ...BUILT_IN_FONTS, // шрифты панели и подписей
    USER_FONT_CLASS, // свой шрифт
    ...Object.values(THEMES), // тема на <html>
    'hide', // эффект исчезновения при смене страницы
    'grey', // блокировка переключателей при результатах поиска
    'fadeOpacity', // всплывающий прогресс случайной страницы
    'touch-actions', // панель на сенсорном устройстве
    'row-action', // кнопка 🔊 / +
    'help-btn', // кнопка help у неверного ответа
    'link-page', // ссылка на страницу
    'active', // активная ссылка
    'ellipsis', // «…» в свёрнутой навигации
    'editor', // поле ответа
    'done', // верный ответ
    'err', // неверный ответ
    'el', // строка тренажёра
    'editor-wrap', // обёртка поля ответа
  ];
  const missing = classes.filter((name) => !hasClass(name));
  assert.deepEqual(missing, [], `нет стилей для классов: ${missing.join(', ')}`);
});

test('элементы, на которые стили опираются по id, существуют в разметке', () => {
  const html = read(fileURLToPath(new URL('../../src/index.html', import.meta.url)));
  const templates = [
    'ui/templates/langToggle.js',
    'ui/templates/fontToggles.js',
    'ui/templates/panel.js',
    'ui/templates/navigation.js',
  ]
    .map((p) => read(fileURLToPath(new URL(`../../src/${p}`, import.meta.url))))
    .join('\n');
  const markup = html + templates;

  for (const id of ['show', 'main', 'panel', 'links', 'progress', 'side-checkbox', 'applyFontUrl']) {
    assert.ok(hasId(id), `в CSS нет правил для #${id}`);
    assert.match(markup, new RegExp(`id="${id}"`), `в разметке нет элемента #${id}`);
  }
});

test('обе темы определяют один и тот же набор переменных', () => {
  const variablesOf = (themeClass) => {
    const rule = rules.find((r) => r.selector === `.${themeClass}`);
    assert.ok(rule, `не найдено правило .${themeClass}`);
    return [...rule.body.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]).sort();
  };
  const light = variablesOf(THEMES.LIGHT);
  const dark = variablesOf(THEMES.DARK);
  assert.ok(light.length > 0);
  assert.deepEqual(dark, light);
});

test('каждая используемая переменная var(--x) определена в :root, в теме или задаётся из JS', () => {
  const defined = new Set([...liveCss.matchAll(/(--[\w-]+)\s*:/g)].map((m) => m[1]));
  const setByJs = new Set([USER_FONT_CSS_VARIABLE]);
  const used = [...new Set([...liveCss.matchAll(/var\(\s*(--[\w-]+)/g)].map((m) => m[1]))];

  const undefinedVars = used.filter((name) => !defined.has(name) && !setByJs.has(name));
  assert.deepEqual(undefinedVars, []);
});

test('переменная размера шрифта, которой управляет JS, определена в :root', () => {
  const root = rules.find((r) => r.selector === ':root');
  assert.ok(root, 'нет правила :root');
  assert.match(root.body, new RegExp(`${FONT_SIZE.CSS_VARIABLE}\\s*:\\s*\\d+`));
  // стартовое значение лежит в допустимых пределах, а в разметке показано то же число
  const initial = Number(new RegExp(`${FONT_SIZE.CSS_VARIABLE}\\s*:\\s*(\\d+(?:\\.\\d+)?)`).exec(root.body)[1]);
  assert.ok(initial >= FONT_SIZE.MIN && initial <= FONT_SIZE.MAX);
  const html = read(fileURLToPath(new URL('../../src/index.html', import.meta.url)));
  assert.match(html, new RegExp(`id="fsize"[^>]*>${initial}<`));
});

test('шрифт пользователя применяется через переменную, которую выставляет JS', () => {
  const rule = rules.find((r) => r.selector === `.${USER_FONT_CLASS}`);
  assert.ok(rule, `нет правила .${USER_FONT_CLASS}`);
  assert.ok(rule.body.includes(`var(${USER_FONT_CSS_VARIABLE}`));
});
