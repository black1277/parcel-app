// 10-14 > 11.1 > 2
const data = [
  {
    rus: 'Твои результаты хуже, чем у Фрэнка',
    eng: 'Your results are worse than Frank`s',
    regEng: ''
  },
  {
    rus: 'Чья это машина? Она моих родителей',
    eng: 'Whose car is this? It is my parents`',
    regEng: '/Whose car is this\\? It(?: is|[`’\']s) my parents[`’\']/gm'
  },
  {
    rus: 'Мои каблуки выше, чем у Энни',
    eng: 'My heels are higher than Annie`s',
    regEng: ''
  },
  {
    rus: 'Ваш муж более красивый, чем её',
    eng: 'Your husband is more handsome than hers',
    regEng: '/Your husband(?: is|[`’\']s) more handsome than hers/gm'
  },
  {
    rus: 'Её лицо тоньше, чем у её сестры',
    eng: 'Her face is thinner than her sister`s',
    regEng: ''
  },
  {
    rus: 'Его ступни грязнее, чем у Джона',
    eng: 'His feet are dirtier than John`s',
    regEng: ''
  },
  {
    rus: 'Твои билеты дешевле, чем их',
    eng: 'Your tickets are cheaper than theirs',
    regEng: ''
  },
  {
    rus: 'Чьи то документы? Они моего друга',
    eng: 'Whose documents are those? They are my friend`s',
    regEng: '/Whose documents are those\\? They(?: are|[`’\']re) my friend[`’\']s/gm'
  }
]
export default data