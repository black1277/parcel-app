//  01-05 > 3.1 > 4
const data = [
  {
    rus: 'Я обычно прихожу сюда в понедельник, чтобы увидеть всех своих друзей',
    eng: 'I usually come here on Monday to see all my friends',
    regEng: '/(?:I usually come here on Monday to see all my friends)|(?:On Monday I usually come here to see all my friends)|(?:I usually come here to see all my friends on Monday)/gm'
  },
  {
    rus: 'Я пришёл сюда в прошлый понедельник, чтобы увидеть всех своих друзей',
    eng: 'I came here last Monday to see all my friends',
    regEng: '/(?:I came here last Monday to see all my friends)|(?:Last Monday I came here to see all my friends)|(?:I came here to see all my friends last Monday)/gm'
  },
  {
    rus: 'Я приду сюда в следующий понедельник, чтобы увидеть всех своих друзей',
    eng: 'I will come here next Monday to see all my friends',
    regEng: ''
  },
  {
    rus: 'Мы всегда приносим тебе эти документы во вторник',
    eng: 'We always bring you these documents on Tuesday',
    regEng: ''
  },
  {
    rus: 'Мы принесли тебе эти документы в прошлый вторник',
    eng: 'We brought you these documents last Tuesday',
    regEng: ''
  },
  {
    rus: 'Мы принесём тебе эти документы в следующий вторник',
    eng: 'We will bring you these documents next Tuesday',
    regEng: '/(?:We will|We’ll) bring you these documents next Tuesday/gm'
  }
]
export default data