// 06-09 > 9.2 > 8
const data = [
  {
    rus: 'Откуда твоя подруга? Она из Англии',
    eng: 'Where is your friend from? She is from England',
    regEng: '/(?:Where is your friend from\\? She(?: is|`s) from England)/gm'
  },
  {
    rus: 'Когда она купила это платье? Она купила его во вторник',
    eng: 'When did she buy this dress? She bought it on Tuesday',
    regEng: ''
  },
  {
    rus: 'Я горжусь своей семьей и своими друзьями!',
    eng: 'I am proud of my family and my friends!',
    regEng: '/(?:(?:I am|I’m) proud of my family and my friends!)/gm'
  },
  {
    rus: 'Чем занимается её муж? Её муж повар',
    eng: 'What does her husband do? Her husband is a cook',
    regEng: ''
  },
  {
    rus: 'Девушка моего брата никогда не приходит вовремя. Вчера она опоздала опять',
    eng: 'My brother`s girlfriend is never on time. Yesterday she was late again',
    regEng: ''
  },
  {
    rus: 'Что тебе нужно, чтобы она сделала? Мне нужно, чтобы она позвонила мне завтра',
    eng: 'What do you need her to do? I need her to call me tomorrow',
    regEng: ''
  },
  {
    rus: 'Каждый месяц она ездит туда, чтобы увидеть их',
    eng: 'Every month she goes there to see them',
    regEng: ''
  }
]
export default data