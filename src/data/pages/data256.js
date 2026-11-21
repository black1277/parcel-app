// 15-16 > 15.4 > 13
const data = [
  {
    rus: 'Надень своё пальто, пожалуйста. Идёт снег',
    eng: 'Put on your coat, please. It`s snowing',
    regEng: '/(?:Put on your coat, please. It(?: is|[`’\']s)|Please put on your coat. It(?: is|[`’\']s)) snowing/gm'
  },
  {
    rus: 'Что ты будешь делать между двумя и тремя часами дня завтра? Я буду делать пасту на ужин',
    eng: 'What will you be doing between two and three o`clock in the afternoon tomorrow? I`ll be making pasta for dinner',
    regEng: '/What will you be doing (?:between two and three o[`’\']clock in the afternoon tomorrow\\? I(?: will|[`’\']ll)|tomorrow between two and three o[`’\']clock in the afternoon\\? I(?: will|[`’\']ll)) be making pasta for dinner/gm'
  },
  {
    rus: 'Кто помнит ту поговорку?',
    eng: 'Who remembers that saying?',
    regEng: ''
  },
  {
    rus: 'Как часто идёт дождь осенью?',
    eng: 'How often does it rain in autumn?',
    regEng: ''
  },
  {
    rus: 'Кого они ждут в данный момент?',
    eng: 'Who are they waiting for at the moment?',
    regEng: '/(?:(?:Whom? are they waiting for|For whom are they waiting) at the moment\\?|Whom? are they waiting for\\?|For whom are they waiting\\?)/gm'
  }
]
export default data