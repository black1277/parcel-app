// 01-05 > 2.1 > 5
const data = [
  {
    rus: 'Он часто приносит ей цветы',
    eng: 'He often brings her flowers'
  },
  {
    rus: 'Вчера он принёс ей цветы',
    eng: 'Yesterday he brought her flowers',
    regEng: '/(?:Yesterday he brought her flowers)|(?:He brought her flowers yesterday)/gm'
  },
  {
    rus: 'Завтра он принесёт ей цветы',
    eng: 'Tomorrow he will bring her flowers',
    regEng: '/(?:Tomorrow (?:he will|he’ll) bring her flowers)|(?:(?:he will|he’ll) bring her flowers tomorrow)/gm'
  },
  {
    rus: 'Она иногда берёт мою ручку',
    eng: 'She sometimes takes my pen'
  },
  {
    rus: 'Вчера она взяла мою ручку',
    eng: 'Yesterday she took my pen',
    regEng: '/(?:Yesterday she took my pen)|(?:She took my pen yesterday)/gm'
  },
  {
    rus: 'Завтра она возьмёт мою ручку',
    eng: 'Tomorrow she will take my pen',
    regEng: '/(?:Tomorrow (?:she will|she’ll) take my pen)|(?:(?:she will|she’ll) take my pen tomorrow)/gm'
  }
]
export default data