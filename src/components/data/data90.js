// 06-09 > 8.2 > 2
const data = [
  {
    rus: 'Чьи это малыши? Это малыши моего соседа',
    eng: 'Whose babies are these? These are my neighbour’s babies',
    regEng: '/(?:Whose babies are these? These are my neighbour’s babies)/gm'
  },
  {
    rus: 'То была сумка вашей дочери? Нет, то не была сумка нашей дочери',
    eng: 'Was that your daughter’s bag? No, that was not our daughter’s bag',
    regEng: '/(?:Was that your daughter’s bag? No, that was not our daughter’s bag)/gm'
  },
  {
    rus: 'Чей то родственник? То родственник его жены',
    eng: 'Whose relative is that? That is his wife’s relative',
    regEng: ''
  },
  {
    rus: 'То была одежда её мужа? Нет, то не была одежда её мужа',
    eng: 'Were those her husband’s clothes? No, those were not her husband’s clothes',
    regEng: '/(?:Were those her husband’s clothes? No, those were not her husband’s clothes)/gm'
  },
  {
    rus: 'Чьи это коты? Это коты нашей бабушки',
    eng: 'Whose cats are these? These are our grandmother’s cats',
    regEng: ''
  },
  {
    rus: 'Это часы их дедушки? Нет, это часы не их дедушки',
    eng: 'Is this their grandfather’s watch? No, this is not their grandfather’s watch',
    regEng: '/(?:Is this their grandfather’s watch? No, this is not their grandfather’s watch)/gm'
  },
  {
    rus: 'Чей то был магазин? То был магазин моей семьи',
    eng: 'Whose shop was that? That was my family’s shop',
    regEng: '/(?:Whose shop was that? That was my family’s shop)/gm'
  },
  {
    rus: 'То туфли её друга? Нет, то туфли не её друга',
    eng: 'Are those her friend’s shoes? No, those are not her friend’s shoes',
    regEng: '/(?:Are those her friend’s shoes? No, those are not her friend’s shoes)/gm'
  }
]
export default data