// 10-14 > 13.4 > 15
const data = [
  {
    rus: 'Сколько фруктов мне нужно кушать каждый день?',
    eng: 'How much fruit do I need to eat every day?',
    regEng: ''
  },
  {
    rus: 'Они разговаривают со своими друзьями сейчас',
    eng: 'They`re talking to their friends now',
    regEng: '/(?:They are (?:speaking (?:with|to)|talking (?:with|to))|They[`’\']re (?:speaking (?:with|to)|talking (?:with|to))) their friends now/gm'
  },
  {
    rus: 'Кем этот мужчина будет всегда гордиться?',
    eng: 'Who will this man always be proud of?',
    regEng: ''
  },
  {
    rus: 'Мы всегда завтракаем рано',
    eng: 'We always have breakfast early',
    regEng: ''
  },
  {
    rus: 'У меня такая удивительная и счастливая жизнь!',
    eng: 'I have such an amazing and happy life!',
    regEng: ''
  }
]
export default data