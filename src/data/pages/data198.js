// 10-14 > 13.2 > 6
const data = [
  {
    rus: 'Мы будем делать обед завтра в три часа дня',
    eng: 'We`ll be making lunch tomorrow at three o`clock in the afternoon',
    regEng: '/(?:(?:At three o[`’\']clock in the afternoon tomorrow we(?: will|[`’\']ll)|Tomorrow at three o[`’\']clock in the afternoon we(?: will|[`’\']ll)) be making lunch|We(?: will|[`’\']ll) be making lunch tomorrow at three o[`’\']clock in the afternoon|We(?: will|[`’\']ll) be making lunch at three o[`’\']clock in the afternoon tomorrow)/gm'
  },
  {
    rus: 'Мы не будем делать обед завтра в три часа дня',
    eng: 'We won`t be making lunch tomorrow at three o`clock in the afternoon',
    regEng: '/(?:(?:Tomorrow at three o[`’\']clock in the afternoon we(?: will not|[`’\']ll not| won[`’\']t)|At three o[`’\']clock in the afternoon tomorrow we(?: will not|[`’\']ll not| won[`’\']t)) be making lunch|We(?: will not|[`’\']ll not| won[`’\']t) be making lunch tomorrow at three o[`’\']clock in the afternoon|We(?: will not|[`’\']ll not| won[`’\']t) be making lunch at three o[`’\']clock in the afternoon tomorrow)/gm'
  },
  {
    rus: 'Будем ли мы делать обед завтра в три часа дня?',
    eng: 'Will we be making lunch tomorrow at three o`clock in the afternoon?',
    regEng: '/Will we be making lunch (?:tomorrow at three o[`’\']clock in the afternoon\\?|at three o[`’\']clock in the afternoon tomorrow\\?)/gm'
  },
  {
    rus: 'Что мы будем делать завтра в три часа дня?',
    eng: 'What will we be doing tomorrow at three o`clock in the afternoon?',
    regEng: '/What will we be doing (?:tomorrow at three o[`’\']clock in the afternoon\\?|at three o[`’\']clock in the afternoon tomorrow\\?)/gm'
  },
  {
    rus: 'Они тренировались в восемь часов утра',
    eng: 'They were exercising at eight o`clock in the morning',
    regEng: '/(?:They were exercising at eight o[`’\']clock in the morning|At eight o[`’\']clock in the morning they were exercising)/gm'
  },
  {
    rus: 'Они не тренировались в восемь часов утра',
    eng: 'They weren`t exercising at eight o`clock in the morning',
    regEng: '/(?:They (?:were not|weren[`’\']t) exercising at eight o[`’\']clock in the morning|At eight o[`’\']clock in the morning they (?:were not|weren[`’\']t) exercising)/gm'
  },
  {
    rus: 'Тренировались ли они в восемь часов утра?',
    eng: 'Were they exercising at eight o`clock in the morning?',
    regEng: ''
  },
  {
    rus: 'Что они делали в восемь часов утра?',
    eng: 'What were they doing at eight o`clock in the morning?',
    regEng: ''
  }
]
export default data