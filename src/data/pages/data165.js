// 10-14 > 11.4 > 7
const data = [
  {
    rus: 'Мне очень жарко',
    eng: 'I am very hot',
    regEng: '/I(?: am|[`’\']m) very hot/gm'
  },
  {
    rus: 'Эти мужчины всегда носят такие брюки',
    eng: 'These men always wear such trousers',
    regEng: '/These men always wear such (?:trousers|pants)/gm'
  },
  {
    rus: 'Этот мужчина всегда будет гордиться своей дочерью',
    eng: 'This man will always be proud of his daughter',
    regEng: ''
  },
  {
    rus: 'Ходит ли он обычно туда со своими родителями?',
    eng: 'Does he usually go there with his parents?',
    regEng: ''
  },
  {
    rus: 'Чьи то куртки? Они наших детей',
    eng: 'Whose jackets are those? They are our children`s',
    regEng: '/Whose jackets are those\\? (?:(?:These|They) are|They[`’\']re) our children[`’\']s/gm'
  }
]
export default data