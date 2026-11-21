// 10-14 > 14.1 > 3
const data = [
  {
    rus: 'Он устаётот тех людей',
    eng: 'He`s getting tired of those people',
    regEng: '/He(?: is|[`’\']s) getting tired of those people/gm'
  },
  {
    rus: 'Он не устаёт от тех людей',
    eng: 'He`s not getting tired of those people',
    regEng: '/He(?: is not|[`’\']s not| isn[`’\']t) getting tired of those people/gm'
  },
  {
    rus: 'Устаёт ли он от тех людей?',
    eng: 'Is he getting tired of those people?',
    regEng: ''
  },
  {
    rus: 'От кого он устаёт?',
    eng: 'Who is he getting tired of?',
    regEng: '/Whom? is he getting tired of\\?/gm'
  },
  {
    rus: 'Я готовлюсь к вечеринке',
    eng: 'I`m getting ready for a party',
    regEng: '/I(?: am|[`’\']m) getting ready for (?:the|a) party/gm'
  },
  {
    rus: 'Я не готовлюсь к вечеринке',
    eng: 'I`m not getting ready for a party',
    regEng: '/I(?: am|[`’\']m) not getting ready for (?:the|a) party/gm'
  },
  {
    rus: 'Готовлюсь ли я к вечеринке?',
    eng: 'Am I getting ready for a party?',
    regEng: '/Am I getting ready for (?:the|a) party\\?/gm'
  },
  {
    rus: 'К чему я готовлюсь?',
    eng: 'What am I getting ready for?',
    regEng: ''
  }
]
export default data