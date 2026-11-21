// 17-20 > 18.2 > 7
const data = [
  {
    rus: 'Я учу иностранные языки быстрее и легче, чем они',
    eng: 'I learn foreign languages faster and more easily than they do',
    regEng: '/I learn foreign languages (?:more quickly|faster) and more easily than (?:they(?: do)?|them)/gm'
  },
  {
    rus: 'Смотри! Они двигаются медленнее нас',
    eng: 'Look! They`re moving more slowly than we are',
    regEng: '/Look! They[`’\']re moving more slowly than (?:we are|we|us)/gm'
  },
  {
    rus: 'Ты обычно просыпаешься раньше меня',
    eng: 'You usually wake up earlier than I do',
    regEng: '/(?:You usually|Usually you) wake up earlier than (?:I do|me|I)/gm'
  },
  {
    rus: 'Вчера её муж пришёл домой позже, чем она',
    eng: 'Yesterday her husband came home later than she did',
    regEng: '/(?:Yesterday her husband came home later than (?:she did|she|her)|Her husband came home later than (?:she did|she|her) yesterday)/gm'
  },
  {
    rus: 'Она всегда поступает более легкомысленно, чем он',
    eng: 'She always acts more carelessly than he does',
    regEng: '/She always acts more carelessly than (?:he does|him|he)/gm'
  },
  {
    rus: 'Он понимает этот предмет лучше, чем ты',
    eng: 'He understands this subject better than you do',
    regEng: '/He understands this subject better than you(?: do)?/gm'
  },
  {
    rus: 'Прямо сейчас ты помогаешь мне с этим проектом активнее, чем мой коллега',
    eng: 'Right now you`re helping me with this project more actively than my colleague is',
    regEng: '/Right now you(?: are|[`’\']re) helping me with this project more actively than my colleague(?: is)?/gm'
  },
  {
    rus: 'Он танцует сальсу хуже, чем его жена',
    eng: 'He dances salsa worse than his wife does',
    regEng: '/He dances salsa worse than his wife(?: does)?/gm'
  }
]
export default data