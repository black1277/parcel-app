// 06-09 > 9.2 > 3
const data = [
  {
    rus: 'Вы более дружелюбны, чем они',
    eng: 'You are friendlier than they are',
    regEng: '/(?:You(?: are|`re) friendlier than (?:they(?: are)?|them))/gm'
  },
  {
    rus: 'Они более серьезные, чем я',
    eng: 'They are more serious than I am',
    regEng: '/(?:They(?: are|`re) more serious than (?:I(?: am)?|me))/gm'
  },
  {
    rus: 'Она ниже, чем ты',
    eng: 'She is shorter than you are',
    regEng: '/(?:She(?: is|`s) shorter than you(?: are)?)/gm'
  },
  {
    rus: 'Я сильнее, чем он',
    eng: 'I am stronger than he is',
    regEng: '/(?:(?:I am|I’m) stronger than (?:he(?: is)?|him))/gm'
  },
  {
    rus: 'Ты тоньше, чем она',
    eng: 'You are thinner than she is',
    regEng: '/(?:You(?: are|`re) thinner than (?:she(?: is)?|her))/gm'
  },
  {
    rus: 'Они более обеспокоены, чем я',
    eng: 'They are more worried than I am',
    regEng: '/(?:They(?: are|`re) more worried than (?:I(?: am)?|me))/gm'
  },
  {
    rus: 'Он красивее тебя',
    eng: 'He is more handsome than you are',
    regEng: '/(?:(?:He is|He’s) more handsome than you(?: are)?)/gm'
  },
  {
    rus: 'Она моложе, чем он',
    eng: 'She is younger than he is',
    regEng: '/(?:She(?: is|`s) younger than (?:he(?: is)?|him))/gm'
  }
]
export default data