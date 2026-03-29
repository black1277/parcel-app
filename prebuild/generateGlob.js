import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// аналог __dirname в ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// путь к папке с данными
const dataDir = path.join(__dirname, '../src/components/data');

// читаем файлы
const files = fs.readdirSync(dataDir)
  .filter(f => f.startsWith('data') && f.endsWith('.js'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || 0, 10);
    const numB = parseInt(b.match(/\d+/)?.[0] || 0, 10);
    return numA - numB;
  });

// генерируем импорты
const imports = files.map(file => {
  const dt = file.split(".")
  return `import ${dt[0]} from './${dt[0]}'; data.push(${dt[0]})`;
});

const content = `
const data = [];
${imports.join(';\n')}
export default data;
`;

const outputPath = path.join(__dirname, '../src/components/data/index.js');

fs.writeFileSync(outputPath, content);
