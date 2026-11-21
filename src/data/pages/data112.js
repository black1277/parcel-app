// 06-09 > 9.4 > 2
const data = [
  {
    rus: 'Они часто слушают этих людей',
    eng: 'They often listen to these people',
    regEng: ''
  },
  {
    rus: 'В замке будет ключ',
    eng: 'There will be a key in the lock',
    regEng: '/(?:There(?:’ll| will) be a key in the lock)/gm'
  },
  {
    rus: 'Я видел твою сестру час назад. Она спешила',
    eng: 'I saw your sister an hour ago. She was in a hurry',
    regEng: ''
  },
  {
    rus: 'Мои руки сильнее, чем его',
    eng: 'My arms are stronger than his',
    regEng: ''
  },
  {
    rus: 'Чей это телефон? Он мой',
    eng: 'Whose phone is this? It is mine',
    regEng: '/(?:Whose (?:phone|telephone) is this\\? It(?: is|’s) mine)/gm'
  }
]
export default data