const data = [
  {
    rus: 'Я пишу вам сообщения каждый день',
    eng: 'I write you messages every day',
    regEng: '/(?:I write you messages every day)|(?:Every day I write you messages)/gm'
  },
  {
    rus: 'Вчера я написал вам сообщение',
    eng: 'Yesterday I wrote you a message',
    regEng: '/(?:Yesterday I wrote you a message)|(?:I wrote you a message yesterday)/gm'
  },
  {
    rus: 'Завтра я напишу вам сообщение',
    eng: 'Tomorrow I will write you a message',
    regEng: '/(?:Tomorrow (?:I will|I’ll) write you a message)|(?:(?:I will|I’ll) write you a message tomorrow)/gm'
  },
  {
    rus: 'Они редко играют в игры',
    eng: 'They rarely play games',
    regEng: '/They (?:rarely|seldom) play games/gm'
  },
  {
    rus: 'Вчера они поиграли в игры',
    eng: 'Yesterday they played games',
    regEng: '/(?:Yesterday they played games)|(?:They played games yesterday)/gm'
  },
  {
    rus: 'Завтра они поиграют в игры',
    eng: 'Tomorrow they will play games',
    regEng: '/(?:Tomorrow (?:they will|they’ll) play games)|(?:(?:They will|They’ll) play games tomorrow)/gm'
  }
]
export default data