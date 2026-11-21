// 10-14 > 10.4 > 3
const data = [
  {
    rus: 'Это его одежда? Нет, его здесь',
    eng: 'Are these clothes his? No, his are here',
    regEng: '/Are these (?:clothes his\\?|his clothes\\?) No, his are here/gm'
  },
  {
    rus: 'На столе лежит яблоко',
    eng: 'There is an apple on the table',
    regEng: '/There(?: is|[`’\']s) an apple on the table/gm'
  },
  {
    rus: 'Мы не закончили этот проект вчера. Нам нужно, чтобы вы помогли нам',
    eng: 'We did not finish this project yesterday. We need you to help us',
    regEng: '/We (?:did not|didn[`’\']t) finish this project yesterday. We need you to help us/gm'
  },
  {
    rus: 'Наши бутерброды вкуснее, чем их',
    eng: 'Our sandwiches are tastier than theirs',
    regEng: '/Our sandwiches are (?:more delicious|tastier) than theirs/gm'
  },
  {
    rus: 'Твоя дочь пьёт чай? Нет, она пьёт кофе',
    eng: 'Does your daughter drink tea? No, she drinks coffee',
    regEng: ''
  }
]
export default data