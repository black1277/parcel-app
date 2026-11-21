// 10-14 > 10.1 > 10
const data = [
  {
    rus: 'Где дети? Я видел их в саду минуту назад',
    eng: 'Where are the children? I saw them in the garden a minute ago',
    regEng: ''
  },
  {
    rus: 'У окна стоит кресло. Кресло синее',
    eng: 'There is an armchair by the window. The armchair is blue',
    regEng: '/There(?: is|`s) an armchair by the window. The armchair is blue/gm'
  },
  {
    rus: 'Ты закрыл дверь? Я не помню',
    eng: 'Did you close the door? I do not remember',
    regEng: '/Did you close the door\\? I (?:do not|don’t) remember/gm'
  },
  {
    rus: 'Мы хотим, чтобы они наслаждались солнцем и морем',
    eng: 'We want them to enjoy the sun and the sea',
    regEng: ''
  },
  {
    rus: 'Где сумка? Она в машине',
    eng: 'Where is the bag? It is in the car',
    regEng: '/Where(?: is|`s) the bag\\? (?:It is|It’s) in the car/gm'
  },
  {
    rus: 'На прошлой неделе она купила новое платье. Платье было очень дорогое',
    eng: 'Last week she bought a new dress. The dress was very expensive',
    regEng: ''
  },
  {
    rus: 'Мне нужно, чтобы вы закончили задания через час',
    eng: 'I need you to finish the exercises in an hour',
    regEng: ''
  },
  {
    rus: 'Ветер сильный сегодня, вчера он был слабее',
    eng: 'The wind is strong today, yesterday it was weaker',
    regEng: ''
  }
]
export default data