// 06-09 > 7.2 > 3
const data = [
  {
    rus: 'Этот мужчина всегда рад видеть её',
    eng: 'This man is always glad to see her',
    regEng: ''
  },
  {
    rus: 'Этот мужчина не всегда рад видеть её',
    eng: 'This man is not always glad to see her',
    regEng: '/This man (?:is not|isn’t) always glad to see her/gm'
  },
  {
    rus: 'Рад ли этот мужчина всегда видеть её?',
    eng: 'Is this man always glad to see her?',
    regEng: ''
  },
  {
    rus: 'Кого этот мужчина всегда рад видеть?',
    eng: 'Who is this man always glad to see?',
    regEng: '/Whom? is this man always glad to see\\?/gm'
  },
  {
    rus: 'Эти люди обычно приходят вовремя',
    eng: 'These people are usually on time',
    regEng: ''
  },
  {
    rus: 'Эти люди обычно не приходят вовремя',
    eng: 'These people are not usually on time',
    regEng: '/These people (?:are not|aren’t) usually on time/gm'
  },
  {
    rus: 'Приходят ли эти люди обычно вовремя?',
    eng: 'Are these people usually on time?',
    regEng: ''
  },
  {
    rus: 'Почему эти люди обычно приходят вовремя?',
    eng: 'Why are these people usually on time?',
    regEng: ''
  }
]
export default data