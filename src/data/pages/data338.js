// 17-20 > 19.1 > 11
const data = [
  {
    rus: 'Ты уже сделал свою домашнюю работу',
    eng: 'You`ve already done your homework',
    regEng: '/You(?: have|[`’\']ve) already done your homework/gm'
  },
  {
    rus: 'Ты ещё не сделал свою домашнюю работу',
    eng: 'You haven`t done your homework yet',
    regEng: '/You (?:have not|haven[`’\']t) done your homework yet/gm'
  },
  {
    rus: 'Ты уже сделал свою домашнюю работу?',
    eng: 'Have you done your homework yet?',
    regEng: ''
  },
  {
    rus: 'Самолёт только что прибыл',
    eng: 'The plane has just arrived',
    regEng: ''
  },
  {
    rus: 'Самолёт ещё не прибыл',
    eng: 'The plane hasn`t arrived yet',
    regEng: '/The plane (?:has not|hasn[`’\']t) arrived yet/gm'
  },
  {
    rus: 'Самолёт уже прибыл?',
    eng: 'Has the plane arrived yet?',
    regEng: ''
  },
  {
    rus: 'Они уже купили новый дом',
    eng: 'They`ve already bought a new house',
    regEng: '/They(?: have|[`’\']ve) already bought a new house/gm'
  },
  {
    rus: 'Они ещё не купили новый дом',
    eng: 'They haven`t bought a new house yet',
    regEng: '/They (?:have not|haven[`’\']t) bought a new house yet/gm'
  },
  {
    rus: 'Они уже купили новый дом?',
    eng: 'Have they bought a new house yet?',
    regEng: ''
  }
]
export default data