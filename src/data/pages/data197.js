// 10-14 > 13.2 > 5
const data = [
  {
    rus: 'Ты ищешь свой ключ',
    eng: 'You`re looking for your key',
    regEng: '/(?:You(?: are|[`’\']re) searching|You(?: are|[`’\']re) looking) for your key/gm'
  },
  {
    rus: 'Ты не ищешь свой ключ',
    eng: 'You`re not looking for your key',
    regEng: '/(?:You(?: are not|[`’\']re not| aren[`’\']t) searching|You(?: are not|[`’\']re not| aren[`’\']t) looking) for your key/gm'
  },
  {
    rus: 'Ты ищешь свой ключ?',
    eng: 'Are you looking for your key?',
    regEng: '/Are you (?:searching|looking) for your key\\?/gm'
  },
  {
    rus: 'Что ты ищешь?',
    eng: 'What are you looking for?',
    regEng: '/What are you (?:searching|looking) for\\?/gm'
  },
  {
    rus: 'Я смотрю на тебя',
    eng: 'I`m looking at you',
    regEng: '/I(?: am|[`’\']m) looking at you/gm'
  },
  {
    rus: 'Я не смотрю на тебя',
    eng: 'I`m not looking at you',
    regEng: '/I(?: am|[`’\']m) not looking at you/gm'
  },
  {
    rus: 'Смотрю ли я на тебя?',
    eng: 'Am I looking at you?',
    regEng: ''
  },
  {
    rus: 'На кого я смотрю?',
    eng: 'Who am I looking at?',
    regEng: '/(?:(?:Whom am I looling|Who am I looking) at\\?|At whom am I looking\\?)/gm'
  }
]
export default data