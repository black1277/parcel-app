// 06-09 > 7.1 > 7
const data = [
  {
    rus: 'Это машина твоего друга',
    eng: 'This is your friend`s car',
    regEng: ''
  },
  {
    rus: 'Это не машина твоего друга',
    eng: 'This is not your friend`s car',
    regEng: '/This (?:is not|isn’t) your friend’s car/gm'
  },
  {
    rus: 'Это машина твоего друга?',
    eng: 'Is this your friend`s car?',
    regEng: ''
  },
  {
    rus: 'Чья это машина?',
    eng: 'Whose car is this?',
    regEng: ''
  },
  {
    rus: 'Это туфли моей сестры',
    eng: 'These are my sister`s shoes',
    regEng: ''
  },
  {
    rus: 'Это не туфли моей сестры',
    eng: 'These are not my sister`s shoes',
    regEng: '/These (?:are not|aren’t) my sister’s shoes/gm'
  },
  {
    rus: 'Это туфли моей сестры?',
    eng: 'Are these my sister`s shoes?',
    regEng: ''
  },
  {
    rus: 'Чьи это туфли?',
    eng: 'Whose shoes are these?',
    regEng: ''
  }
]
export default data