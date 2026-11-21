const data14 = [
  {
    rus: 'У нас всегда отличные вечеринки',
    eng: 'We always have excellent parties'
  },
  {
    rus: 'Вчера у нас была отличная вечеринка',
    eng: 'Yesterday we had an excellent party',
    regEng: '/(?:Yesterday we had an excellent party)|(?:We had an excellent party yesterday)/gm'
  },
  {
    rus: 'Завтра у нас будет отличная вечеринка',
    eng: 'Tomorrow we will have an excellent party',
    regEng: '/(?:Tomorrow (?:we will|we’ll) have an excellent party)|(?:(?:We will|We’ll) have an excellent party tomorrow)/gm'
  },
  {
    rus: 'Я прихожу сюда всё время',
    eng: 'I come here all the time',
    regEng: '/(?:I come here all the time)|(?:All the time I come here)/gm'
  },
  {
    rus: 'Вчера я пришёл сюда',
    eng: 'Yesterday I came here',
    regEng: '/(?:Yesterday I came here)|(?:I came here yesterday)/gm'
  },
  {
    rus: 'Завтра я приду сюда',
    eng: 'Tomorrow I will come here',
    regEng: '/(?:Tomorrow (?:I will|I’ll) come here)|(?:(?:I will|I’ll) come here tomorrow)/gm'
  }
]
export default data14