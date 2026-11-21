/**
 * Собирает src/data/index.js из файлов страниц src/data/pages/dataN.js.
 * Порядок страниц — по числу N в имени файла. Запускается автоматически
 * перед `npm start` и `npm run build` (см. package.json).
 */
import { readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PAGES_DIR = join(dirname(fileURLToPath(import.meta.url)), '../src/data/pages');
const OUTPUT_FILE = join(PAGES_DIR, '../index.js');
const PAGE_FILE_PATTERN = /^(data(\d+))\.js$/;

const pages = readdirSync(PAGES_DIR)
  .map((fileName) => PAGE_FILE_PATTERN.exec(fileName))
  .filter(Boolean)
  .map(([, moduleName, number]) => ({ moduleName, number: Number(number) }))
  .sort((a, b) => a.number - b.number);

const content = `// Файл создаётся скриптом scripts/generate-data-index.mjs — вручную не редактировать.
${pages.map(({ moduleName }) => `import ${moduleName} from './pages/${moduleName}.js';`).join('\n')}

export default [
${pages.map(({ moduleName }) => `  ${moduleName},`).join('\n')}
];
`;

writeFileSync(OUTPUT_FILE, content);
console.log(`Сгенерирован ${OUTPUT_FILE}: страниц — ${pages.length}`);
