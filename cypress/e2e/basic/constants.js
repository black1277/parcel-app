import data from '../../../src/components/data/index'
const totalLinks = data.length; // Задаем количество ссылок
const LastTap = 10 // будем проверять последние n
const Start = LastTap > 0 ? totalLinks - LastTap : 1

const fonts = [
  { id: 'lora', name: 'Lora' },
  { id: 'philosopher', name: 'Philosopher' },
  { id: 'literata', name: 'Literata' },
  { id: 'vollkorn', name: 'Vollkorn' },
  { id: 'firacode', name: 'Fira Code' },
];

export { fonts, totalLinks, Start }