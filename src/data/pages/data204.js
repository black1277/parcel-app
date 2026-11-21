// 10-14 > 13.4 > 3
const data = [
  {
    rus: 'Солнце за облаками сейчас',
    eng: 'The sun is behind the clouds now',
    regEng: ''
  },
  {
    rus: 'Сколько денег у тебя есть?',
    eng: 'How much money do you have?',
    regEng: ''
  },
  {
    rus: 'Они готовы начать через минуту',
    eng: 'They`re ready to start in a minute',
    regEng: '/They(?: are|[`’\']re) ready to start in a minute/gm'
  },
  {
    rus: 'Что они делают сейчас?',
    eng: 'What are they doing now?',
    regEng: ''
  },
  {
    rus: 'У меня всегда много энергии',
    eng: 'I always have a lot of energy',
    regEng: '/I always have (?:a lot|lots) of energy/gm'
  }
]
export default data