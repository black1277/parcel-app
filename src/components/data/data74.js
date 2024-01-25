// 06-09 > 7.2 > 6
const data = [
  {
    rus: 'Это сумка вашей тёти',
    eng: 'This is your aunt`s bag',
    regEng: ''
  },
  {
    rus: 'Это сумка не вашей тёти',
    eng: 'This is not your aunt`s bag',
    regEng: '/This (?:is not|isn’t) your aunt’s bag/gm'
  },
  {
    rus: 'Это сумка вашей тёти?',
    eng: 'Is this your aunt’s bag?',
    regEng: ''
  },
  {
    rus: 'Чья это сумка?',
    eng: 'Whose bag is this?',
    regEng: ''
  },
  {
    rus: 'Это одежда нашего брата',
    eng: 'These are our brother`s clothes',
    regEng: ''
  },
  {
    rus: 'Это одежда не нашего брата',
    eng: 'These are not our brother`s clothes',
    regEng: '/These (?:are not|aren’t) our brother`s clothes/gm'
  },
  {
    rus: 'Это одежда нашего брата?',
    eng: 'Are these our brother`s clothes?',
    regEng: ''
  },
  {
    rus: 'Чья это одежда?',
    eng: 'Whose clothes are these?',
    regEng: ''
  }
]
export default data