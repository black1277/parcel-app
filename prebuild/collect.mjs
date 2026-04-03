import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

(async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const dataDir = path.join(__dirname, '../src/components/data');

  const files = fs.readdirSync(dataDir)
    .filter(f => f.startsWith('data') && f.endsWith('.js'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || 0, 10);
      const numB = parseInt(b.match(/\d+/)?.[0] || 0, 10);
      return numA - numB;
    });

  const dataArray = [];

  for (const file of files) {
    const filePath = path.join(dataDir, file);

    const module = await import(pathToFileURL(filePath));
    dataArray.push(module.default);
  }

  const content = `
export default ${JSON.stringify(dataArray, null, 2)};
`;

  const outputPath = path.join(dataDir, 'index.js');
  fs.writeFileSync(outputPath, content);

})();