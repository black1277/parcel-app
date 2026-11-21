// 06-09 > 9.1 > 9
const data = [
  {
    rus: 'На столе лежали книги',
    eng: 'There were books on the table',
    regEng: ''
  },
  {
    rus: 'Лежали ли книги на столе?',
    eng: 'Were there books on the table?',
    regEng: ''
  },
  {
    rus: 'В комнате будет кресло',
    eng: 'There will be an armchair in the room',
    regEng: '/(?:There(?:’ll| will) be an armchair in the room)/gm'
  },
  {
    rus: 'Будет ли в комнате кресло?',
    eng: 'Will there be an armchair in the room',
    regEng: ''
  },
  {
    rus: 'На полу лежит ковёр',
    eng: 'There is a carpet on the floor',
    regEng: '/(?:There(?:’s| is) a carpet on the floor)/gm'
  },
  {
    rus: 'Лежит ли на полу ковёр?',
    eng: 'Is there a carpet on the floor?',
    regEng: ''
  },
  {
    rus: 'На стенах будут картины',
    eng: 'There will be pictures on the walls',
    regEng: '/(?:There(?:’ll| will) be pictures on the walls)/gm'
  },
  {
    rus: 'Будут ли на стенах картины?',
    eng: 'Will there be pictures on the walls?',
    regEng: ''
  }
]
export default data