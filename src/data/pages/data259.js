// 15-16 > 15.4 > 16
const data = [
  {
    rus: 'На кого она смотрит? Она смотрит на него',
    eng: 'Who is she looking at? She`s looking at him',
    regEng: '/(?:Whom? is|Who[`’\']s) she looking at\\? She(?: is|[`’\']s) looking at him/gm'
  },
  {
    rus: 'Оставайтесь внутри, пожалуйста. Идёт снег',
    eng: 'Stay inside, please. It`s snowing',
    regEng: '/(?:Stay inside, please. It(?: is|[`’\']s)|Please stay inside. It(?: is|[`’\']s)) snowing/gm'
  },
  {
    rus: 'Как пахнет тот сыр? О, он пахнет ужасно',
    eng: 'How does that cheese smell? Oh, it smells awful',
    regEng: ''
  },
  {
    rus: 'Она обычно ест очень мало мяса',
    eng: 'She usually eats very little meat',
    regEng: ''
  },
  {
    rus: 'Что она будет делать завтра в четыре часа дня?',
    eng: 'What will she be doing tomorrow at four o`clock in the afternoon?',
    regEng: '/What will she be doing (?:tomorrow at four o[`’\']clock in the afternoon\\?|at four o[`’\']clock in the afternoon tomorrow\\?)/gm'
  }
]
export default data