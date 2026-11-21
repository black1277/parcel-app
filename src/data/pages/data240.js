// 15-16 > 15.2 > 6
const data = [
  {
    rus: 'Они хотят иметь хорошую семью',
    eng: 'They want to have a good family',
    regEng: ''
  },
  {
    rus: 'С кем она разговаривает?',
    eng: 'Who is she talking to?',
    regEng: '/(?:(?:With|To) whom is she talking\\?|Whom? is she talking with\\?|Whom? is she talking to\\?)/gm'
  },
  {
    rus: 'Все заслуживают быть здоровыми и счастливыми',
    eng: 'Everybody deserves to be healthy and happy',
    regEng: '/(?:(?:Everybody|Everyone) deserves to be healthy and happy|(?:Everybody|Everyone) deserves to be happy and healthy)/gm'
  },
  {
    rus: 'Кто помнит ту поговорку?',
    eng: 'Who remembers that saying?',
    regEng: ''
  },
  {
    rus: 'Я предпочитаю путешествовать на машине',
    eng: 'I prefer to travel by car',
    regEng: ''
  },
  {
    rus: 'Что ты пытаешься сделать?',
    eng: 'What are you trying to do?',
    regEng: ''
  },
  {
    rus: 'Вы согласны с ними?',
    eng: 'Do you agree with them?',
    regEng: ''
  },
  {
    rus: 'Это кольцо принадлежит моей сестре',
    eng: 'This ring belongs to my sister',
    regEng: ''
  }
]
export default data