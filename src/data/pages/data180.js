// 10-14 > 12.2 > 2
const data = [
  {
    rus: 'Сколько фильмов они посмотрели на прошлой неделе?',
    eng: 'How many films did they watch last week?',
    regEng: '/How many (?:movies|films) did they watch last week\\?/gm'
  },
  {
    rus: 'У меня было несколько удивительных идей, чтобы поделиться с вами',
    eng: 'I had a few amazing ideas to share with you',
    regEng: ''
  },
  {
    rus: 'Осталось слишком мало времени, чтобы сделать это',
    eng: 'There is too little time left to do it',
    regEng: '/There is too little time left to do (?:this|that|it)/gm'
  },
  {
    rus: 'У нас слишком мало чашек для наших гостей',
    eng: 'We have too few cups for our guests',
    regEng: ''
  },
  {
    rus: 'Сколько времени ты хочешь, чтобы я дал тебе?',
    eng: 'How much time do you want me to give you?',
    regEng: ''
  },
  {
    rus: 'Сколько детей у этой женщины?',
    eng: 'How many children does this woman have?',
    regEng: '/How many (?:children|babies|kids) does this woman have\\?/gm'
  },
  {
    rus: 'Было немножко воды в чайнике',
    eng: 'There was a little water in the kettle',
    regEng: ''
  },
  {
    rus: 'Сколько денег на вашем банковском счёте?',
    eng: 'How much money is there on your bank account?',
    regEng: ''
  }
]
export default data