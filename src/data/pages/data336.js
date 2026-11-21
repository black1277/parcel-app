// 17-20 > 19.1 > 7
const data = [
  {
    rus: 'Я стараюсь понять этот предмет более усердно, чем она',
    eng: 'I`m trying to understand this subject harder than she is',
    regEng: '/I(?: am|[`’\']m) trying to understand this subject harder than (?:she is|she|her)/gm'
  },
  {
    rus: 'Вы делаете свою работу более профессионально, чем они',
    eng: 'You do your job more professionally than they do',
    regEng: '/You do your job more professionally than (?:they(?: do)?|them)/gm'
  },
  {
    rus: 'Вчера все проснулись раньше нас',
    eng: 'Yesterday everyone woke up earlier than we did',
    regEng: '/Yesterday (?:everybody|everyone) woke up earlier than (?:we did|we|us)/gm'
  },
  {
    rus: 'В прошлый раз она слушала меня более внимательно, чем он',
    eng: 'Last time she was listening to me more carefully than he was',
    regEng: '/Last time she (?:was listening to me more carefully than (?:he was|him|he)|listened to me more carefully than (?:he did|him|he))/gm'
  },
  {
    rus: 'Она играет в шахматы хуже, чем её муж',
    eng: 'She plays chess worse than her husband does',
    regEng: '/She plays chess worse than her husband(?: does)?/gm'
  },
  {
    rus: 'Сегодня все идут спать позже, чем я',
    eng: 'Today everyone`s going to bed later than I am',
    regEng: '/Today (?:(?:everybody|everyone) is|(?:everybody|everyone)[`’\']s) going to (?:sleep|bed) later than (?:I am|me|I)/gm'
  },
  {
    rus: 'Мы тренируемся более энергично, чем вы',
    eng: 'We`re exercising more energetically than you are',
    regEng: '/(?:We (?:are exercising more energetically than you(?: are)?|exercise more energetically than you(?: do)?)|We[`’\']re exercising more energetically than you(?: are)?)/gm'
  },
  {
    rus: 'В понедельник я ответил на вопросы более точно, чем они',
    eng: 'On Monday I answered the questions more accurately than they did',
    regEng: '/On Monday I answered the questions more accurately than (?:they(?: did)?|them)/gm'
  }
]
export default data