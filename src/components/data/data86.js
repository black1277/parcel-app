// 06-09 > 8.1 > 3 06-09 > 8.1 > 5
const data = [
  {
    rus: 'Чей это дом? Это дом моего соседа',
    eng: 'Whose house is this? This is my neighbour`s house',
    regEng: '/(?:Whose house is this? This is my neighbou?r’s house)/gm'
  },
  {
    rus: 'То были документы его коллеги? Нет, то были документы не его коллеги',
    eng: 'Were those his colleague`s documents? No, those were not his colleague`s documents',
    regEng: '/(?:Were those his colleague’s documents? No, those (?:were not|weren’t) his colleague’s documents)/gm'
  },
  {
    rus: 'Чьи это туфли? Это туфли нашей бабушки',
    eng: 'Whose shoes are these? These are our grandmother’s shoes',
    regEng: '/(?:Whose shoes are these? These are our grandmother’s shoes)|(?:)/gm'
  },
  {
    rus: 'Это ручка твоей подруги? Нет, это ручка не моей подруги',
    eng: 'Is this your friend`s pen? No, this is not my friend`s pen',
    regEng: '/(?:Is this your friend’s pen? No, this is not my friend’s pen)|(?:)/gm'
  },
  {
    rus: '',
    eng: '',
    regEng: ''
  },
  {
    rus: '',
    eng: '',
    regEng: ''
  },
  {
    rus: '',
    eng: '',
    regEng: ''
  },
  {
    rus: '',
    eng: '',
    regEng: ''
  },
  {
    rus: '',
    eng: '',
    regEng: ''
  },
  {
    rus: '',
    eng: '',
    regEng: ''
  }
]
export default data