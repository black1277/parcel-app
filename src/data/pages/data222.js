// 10-14 > 14.2 > 2
const data = [
  {
    rus: 'Я начинаю нервничатьпо поводу экзамена',
    eng: 'I`m getting nervous about the exam',
    regEng: '/I(?: am|[`’\']m) getting nervous about the exam/gm'
  },
  {
    rus: 'Я не начинаю нервничатьпо поводу экзамена',
    eng: 'I`m not getting nervous about the exam',
    regEng: '/I(?: am|[`’\']m) not getting nervous about the exam/gm'
  },
  {
    rus: 'Начинаю ли я нервничатьпо поводу экзамена?',
    eng: 'Am I getting nervous about the exam?',
    regEng: ''
  },
  {
    rus: 'О чём я начинаю нервничать?',
    eng: 'What am I getting nervous about?',
    regEng: ''
  },
  {
    rus: 'Они готовятся к путешествию',
    eng: 'They`re getting ready for a trip',
    regEng: '/They(?: are|[`’\']re) getting ready for (?:the|a) trip/gm'
  },
  {
    rus: 'Они не готовятся к путешествию',
    eng: 'They`re not getting ready for a trip',
    regEng: '/They(?: are not|[`’\']re not| aren[`’\']t) getting ready for (?:the|a) trip/gm'
  },
  {
    rus: 'Готовятся ли они к путешествию?',
    eng: 'Are they getting ready for a trip?',
    regEng: '/Are they getting ready for (?:the|a) trip\\?/gm'
  },
  {
    rus: 'К чему они готовятся?',
    eng: 'What are they getting ready for?',
    regEng: ''
  }
]
export default data