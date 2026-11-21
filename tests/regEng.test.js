// Параметрические тесты для data1.js ... data373.js (файлы, которых нет в DATA_DIR, пропускаются)
//
// Запуск (Node 18+, без зависимостей), из корня проекта:
//   node --test tests/regEng.test.js
// Другая папка с данными:
//   DATA_DIR=/path/to/data node --test tests/regEng.test.js
// Один файл:
//   ONLY=data159.js node --test tests/regEng.test.js
//
// Для каждой фразы берутся ВСЕ варианты ответа из Ответы.txt (tests/variants.json) и проверяется:
//   1. eng совпадает с первым вариантом;
//   2. если вариантов > 1 – есть regEng, если один – regEng пустой;
//   3. regEng имеет вид /.../gm и компилируется;
//   4. regEng принимает каждый вариант целиком (флаги gm, re.exec, match[0] === вариант);
//   5. в rus нет скобок, номеров заданий и префиксов вида «мп)», «пп.».
//
// И регулярное выражение, и проверяемый ответ перед тестом приводятся к обычному
// апострофу ('), который есть на клавиатуре.

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(
  process.env.DATA_DIR || path.join(HERE, '..', 'src', 'data', 'pages'),
);

const ONLY = process.env.ONLY;
const fixture = JSON.parse(fs.readFileSync(path.join(HERE, 'variants.json'), 'utf8'));

function loadData(file) {
  const src = fs
    .readFileSync(path.join(DATA_DIR, file), 'utf8')
    .replace('export default data', 'return data');
  return new Function(src)();
}

// любой апостроф -> обычный '
const norm = (s) => s.replace(/[`’‘´]/g, "'");

function parseRe(str) {
  const m = /^\/([\s\S]*)\/([a-z]*)$/.exec(str);
  assert.ok(m, 'regEng должен иметь вид /.../флаги: ' + str.slice(0, 80));
  assert.equal(m[2], 'gm', 'ожидаются флаги gm');
  return norm(m[1]);
}

// проверка с флагами gm: найденное совпадение должно быть равно всей строке
function matches(body, s) {
  const patched_body = norm(body);
  const patched_s = norm(s);

  const m = new RegExp(body, 'gm').exec(s);
  if (!(!!m && m[0] === s)) console.log(patched_body, patched_s);
  return !!m && m[0] === s;
}

for (const [file, info] of Object.entries(fixture)) {
  if (ONLY && ONLY !== file) continue;
  const present = fs.existsSync(path.join(DATA_DIR, file));
  describe(`${file}  (${info.source})`, { skip: present ? false : 'нет файла в DATA_DIR' }, () => {
    const data = present ? loadData(file) : [];

    it('число фраз совпадает с исходниками', () => {
      assert.equal(data.length, info.items.length);
    });

    info.items.forEach((fx, i) => {
      const item = data[i];
      it(`#${i + 1} ${fx.rus.slice(0, 50)}`, () => {
        assert.ok(item, 'нет элемента в массиве');
        assert.equal(item.rus, fx.rus, 'rus');

        // 5. чистота rus
        assert.doesNotMatch(item.rus, /[()]/, 'скобки в rus');
        assert.doesNotMatch(
          item.rus,
          /^\s*[\d.]+|^[мп]п[.)]|^\)/i,
          'остатки номера/префикса в rus',
        );

        const variants = fx.variants.map(norm);

        // 1. eng
        assert.equal(norm(item.eng), variants[0], 'eng = первый вариант');

        // 2. наличие regEng
        if (variants.length === 1) {
          assert.ok(
            item.regEng === undefined || item.regEng === '',
            'regEng должен быть undefined или пустым',
          );
          return;
        }
        assert.ok(item.regEng, 'при нескольких вариантах нужен regEng');

        // 3. формат
        const body = parseRe(item.regEng);
        new RegExp(body, 'gm');

        // 4. все варианты принимаются
        const failures = variants.filter((v) => !matches(body, v));
        assert.deepEqual(failures.slice(0, 5), [], 'не принятые варианты');

      });
    });
  });
}
