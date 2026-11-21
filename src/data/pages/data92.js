// 06-09 > 8.2 > 4
const data = [
  {
    rus: 'Чей это телефон? Он мой',
    eng: 'Whose phone is this? It is mine',
    regEng: '/(?:Whose (?:phone|telephone) is this\\? It(?: is|’s) mine)/gm'
  },
  {
    rus: 'Те сумки их, не наши',
    eng: 'Those bags are theirs, not ours',
    regEng: ''
  },
  {
    rus: 'То её одежда? Нет, её здесь',
    eng: 'Are those her clothes? No, hers are here',
    regEng: '/(?:Are those (?:her clothes|clothes hers)\\? No, hers are here)/gm'
  },
  {
    rus: 'Чьи это рубашки? Они ваши',
    eng: 'Whose shirts are these? They are yours',
    regEng: '/(?:Whose shirts are these\\? (?:They are|They’re) yours)/gm'
  },
  {
    rus: 'Это его машина? Нет, его чёрная',
    eng: 'Is this his car? No, his is black',
    regEng: '/(?:Is this (?:his car|car his)\\? No, his is black)/gm'
  },
  {
    rus: 'Чья это чашка? Она моя',
    eng: 'Whose cup is this? It is mine',
    regEng: '/(?:Whose cup is this\\? It(?: is|’s) mine)/gm'
  },
  {
    rus: 'Этот зелёный зонтик наш, не их',
    eng: 'This green umbrella is ours, not theirs',
    regEng: ''
  },
  {
    rus: 'Это её дом? Нет, её там',
    eng: 'Is this her house? No, hers is there',
    regEng: '/(?:Is this (?:her house|house hers)\\? No, hers is there)/gm'
  }
]
export default data