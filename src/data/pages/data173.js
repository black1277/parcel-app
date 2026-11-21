// 10-14 > 11.4 > 15
const data = [
  {
    rus: 'Где живёт твоя подруга?',
    eng: 'Where does your friend live?',
    regEng: ''
  },
  {
    rus: 'Ваша одежда более дешёвая, чем их',
    eng: 'Your clothes are cheaper than theirs',
    regEng: ''
  },
  {
    rus: 'Будет ли в холодильнике какая-нибудь еда?',
    eng: 'Will there be any food in the fridge?',
    regEng: '/Will there be any food in the (?:refrigerator|fridge)\\?/gm'
  },
  {
    rus: 'Твой лоб горячее, чем мой',
    eng: 'Your forehead is hotter than mine',
    regEng: ''
  },
  {
    rus: 'На полу лежит ковёр',
    eng: 'There is a carpet on the floor',
    regEng: '/There(?: is|[`’\']s) a carpet on the floor/gm'
  },
  {
    rus: 'Я хочу путешествовать по миру и видеть разные красивые места',
    eng: 'I want to travel the world and see different beautiful places',
    regEng: '/I want to travel(?: around)? the world and(?: to)? see different beautiful places/gm'
  }
]
export default data