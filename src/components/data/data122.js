// 06-09 > 9.4 > 12
const data = [
  {
    rus: 'О чём был тот фильм?',
    eng: 'What was that film about?',
    regEng: '/What was that (?:film|movie) about?/gm'
  },
  {
    rus: 'Он будет очень успешным в следующем году',
    eng: 'He will be very successful next year',
    regEng: '/(?:He will|He’ll) be very successful next year/gm'
  },
  {
    rus: 'Чей то родственник? То родственник его жены',
    eng: 'Whose relative is that? That is his wife’s relative',
    regEng: ''
  },
  {
    rus: 'Он всегда ждёт этих вечеринок',
    eng: 'He always waits for these parties',
    regEng: ''
  },
  {
    rus: 'С кем она приедет сюда через год?',
    eng: 'Who will she come here with in a year?',
    regEng: ''
  }
]
export default data