const data = [
  {
    rus: 'Он хороший доктор',
    eng: 'He is a good doctor',
    regEng: '/(?:(?:He is|He’s) a good doctor)/gm'
  },
  {
    rus: 'Он не хороший доктор',
    eng: 'He is not a good doctor',
    regEng: '/(?:(?:He is|He’s) not a good doctor)|(?:He isn’t a good doctor)/gm'
  },
  {
    rus: 'Он хороший доктор?',
    eng: 'Is he a good doctor?'
  },
  {
    rus: 'Кто он?',
    eng: 'Who is he?'
  },
  {
    rus: 'Вы замечательный учитель',
    eng: 'You are a great teacher',
    regEng: '/(?:(?:You are|You’re) a great teacher)/gm'
  },
  {
    rus: 'Вы не замечательный учитель',
    eng: 'You are not a great teacher',
    regEng: '/(?:(?:You are|You’re) not a great teacher)|(?:You aren’t a great teacher)/gm'
  },
  {
    rus: 'Вы замечательный учитель?',
    eng: 'Are you a great teacher?'
  },
  {
    rus: 'Кто вы?',
    eng: 'Who are you?'
  }
]
export default data