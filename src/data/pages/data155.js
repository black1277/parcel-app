// 10-14 > 11.2 > 6
const data = [
  {
    rus: 'У неё есть несколько хороших идей',
    eng: 'She has a few good ideas',
    regEng: ''
  },
  {
    rus: 'Сколько людей в комнате?',
    eng: 'How many people are there in the room?',
    regEng: ''
  },
  {
    rus: 'У них есть немного информации об этом человеке',
    eng: 'They have a little information about this person',
    regEng: ''
  },
  {
    rus: 'Сколько времени вам нужно?',
    eng: 'How much time do you need?',
    regEng: ''
  },
  {
    rus: 'В той квартире было очень мало мебели',
    eng: 'There was very little furniture in that flat',
    regEng: '/There was very little furniture in (?:(?:that|the) apartment|(?:that|the) flat)/gm'
  },
  {
    rus: 'Сколько у нее работ?',
    eng: 'How many jobs does she have?',
    regEng: ''
  },
  {
    rus: 'Твой ребёнок пьёт слишком мало воды',
    eng: 'Your child drinks too little water',
    regEng: '/Your (?:child|kid) drinks too little water/gm'
  },
  {
    rus: 'В той книге было так мало заданий',
    eng: 'There were so few exercises in that book',
    regEng: '/There were so few exercises in (?:that|the) book/gm'
  }
]
export default data