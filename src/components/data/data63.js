const data = [
  {
    rus: 'У меня есть отличное решение',
    eng: 'I have an excellent solution',
    regEng: ''
  },
  {
    rus: 'Хочет ли она пойти на эту вечеринку?',
    eng: 'Does she want to go to this party?',
    regEng: ''
  },
  {
    rus: 'В понедельник мы посмотрели интересный фильм',
    eng: 'On Monday we watched an interesting film',
    regEng: '/(?:On Monday we watched an interesting film)|(?:We watched an interesting film on Monday)/gm'
  },
  {
    rus: 'В прошлое воскресенье мы пообедали вместе',
    eng: 'Last Sunday we had lunch together',
    regEng: '/(?:Last Sunday we had lunch together)|(?:We had lunch together last Sunday)/gm'
  },
  {
    rus: 'Что ты хочешь, чтобы я сделал?',
    eng: 'What do you want me to do?',
    regEng: ''
  },
  {
    rus: 'Летом я обычно езжу на работу на велосипеде',
    eng: 'In summer I usually go to work by bicycle',
    regEng: '/(?:In summer I usually go to work by bicycle)|(?:I usually go to work by bicycle in summer)/gm'
  },
  {
    rus: 'Поехали ли они на работу на общественном транспорте вчера?',
    eng: 'Did they go to work by public transport yesterday?',
    regEng: ''
  },
  {
    rus: 'О чём она хочет поговорить?',
    eng: 'What does she want to talk about?',
    regEng: '/(?:What does she want to talk about\\?)|(?:What does she want to speak about\\?)/gm'
  }
]
export default data