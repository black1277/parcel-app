// 17-20 > 19.1 > 13
const data = [
  {
    rus: 'Вы только что вернулись домой',
    eng: 'You`ve just come back home',
    regEng: '/You(?: have|[`’\']ve) just come back home/gm'
  },
  {
    rus: 'Вы ещё не вернулись домой',
    eng: 'You haven`t come back home yet',
    regEng: '/You (?:have not|haven[`’\']t) come back home yet/gm'
  },
  {
    rus: 'Вы уже вернулись домой?',
    eng: 'Have you come back home yet?',
    regEng: ''
  },
  {
    rus: 'Вы вернулись домой до того, как мы проснулись',
    eng: 'You had come back home before we woke up',
    regEng: '/You(?: had|[`’\']d) come back home before we woke up/gm'
  },
  {
    rus: 'Вы не вернулись домой до того, как мы проснулись',
    eng: 'You hadn`t come back home before we woke up',
    regEng: '/You(?: had not| hadn[`’\']t|[`’\']d not) come back home before we woke up/gm'
  },
  {
    rus: 'Вы вернулись домой до того, как мы проснулись?',
    eng: 'Had you come back home before we woke up?',
    regEng: ''
  },
  {
    rus: 'Вы вернётесь домой до того, как мы проснёмся',
    eng: 'You`ll have come back home before we wake up',
    regEng: '/You(?: will|[`’\']ll) have come back home before we wake up/gm'
  },
  {
    rus: 'Вы не вернётесь домой до того, как мы проснёмся',
    eng: 'You won`t have come back home before we wake up',
    regEng: '/You (?:will not|won[`’\']t) have come back home before we wake up/gm'
  },
  {
    rus: 'Вы вернётесь домой до того, как мы проснёмся?',
    eng: 'Will you have come back home before we wake up?',
    regEng: ''
  }
]
export default data