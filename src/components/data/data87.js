// 06-09 > 8.1 > 6
const data = [
  {
    rus: 'Чьи это платья? Они твои',
    eng: 'Whose dresses are these? They are yours',
    regEng: '/(?:Whose dresses are these\\? (?:They are|They’re) yours)/gm'
  },
  {
    rus: 'То твои книги? Нет, мои здесь',
    eng: 'Are those your books? No, mine are here',
    regEng: ''
  },
  {
    rus: 'Эти карандаши её, не твои',
    eng: 'These pencils are hers, not yours',
    regEng: '/(?:These pencils are hers,(?:(?:(?: they are| they’re)? not)|(?: these (?:are not|aren’t))) yours)/gm'
  },
  {
    rus: 'Это их дом? Нет, их там',
    eng: 'Is this their house? No, theirs is there',
    regEng: ''
  },
  {
    rus: 'Чья это сумка? Она моя',
    eng: 'Whose bag is this? It is mine',
    regEng: '/(?:Whose bag is this\\? (?:It is|It’s) mine)/gm'
  },
  {
    rus: 'Эта еда ваша, не наша',
    eng: 'This food is yours, not ours',
    regEng: '/(?:This food is yours,(?: it is| it’s)? not ours)/gm'
  },
  {
    rus: 'Чьи то серёжки? Они её',
    eng: 'Whose earrings are those? They are hers',
    regEng: '/(?:Whose earrings are those\\? (?:They(?: are|’re) hers|These are hers))/gm'
  },
  {
    rus: 'Эта одежда их, не наша',
    eng: 'These clothes are theirs, not ours',
    regEng: '/(?:These clothes are theirs,(?: not| (?:they(?: are|’re)? not|these (?:are not|aren’t))) ours)/gm'
  }
]
export default data