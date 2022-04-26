// 01-05 > 1.2 > 3
const data = [
  {
    rus: 'Этот мужчина иногда работает здесь',
    eng: 'This man sometimes works here'
  },
  {
    rus: 'Эти мужчины иногда работают здесь',
    eng: 'These men sometimes work here'
  },
  {
    rus: 'Ваш ребёнок никогда не играет в карты',
    eng: 'Your child never plays cards',
    regEng: '/(?:Your (?:child|kid) never plays cards)/gm'
  },
  {
    rus: 'Ваши дети никогда не играют в карты',
    eng: 'Your children never play cards',
    regEng: '/(?:Your (?:children|kids) never play cards)/gm'
  },
  {
    rus: 'Этот человек редко смотрит такие шоу',
    eng: 'This person rarely watches such shows',
    regEng: '/(?:This person (?:rarely|seldom) watches such shows)/gm'
  },
  {
    rus: 'Эти люди редко смотрят такие шоу',
    eng: 'These people rarely watch such shows'
  }
]
export default data