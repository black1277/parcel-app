// 01-05 > 2.2 > 3
const data = [
  {
    rus: 'Она часто покупает новые платья',
    eng: 'She often buys new dresses',
    regEng: ''
  },
  {
    rus: 'Вчера она купила новое платье',
    eng: 'Yesterday she bought a new dress',
    regEng: '/(?:Yesterday she bought a new dress)|(?:She bought a new dress yesterday)/gm'
  },
  {
    rus: 'Завтра она купит новое платье',
    eng: 'Tomorrow she will buy a new dress',
    regEng: '/(?:Tomorrow (?:she will|she’ll) buy a new dress)/gm'
  },
  {
    rus: 'Мы читаем интересные газеты каждую неделю',
    eng: 'We read interesting newspapers every week',
    regEng: '/(?:We read interesting newspapers every week)|(?:Every week we read interesting newspapers)/gm'
  },
  {
    rus: 'Вчера мы прочитали интересную газету',
    eng: 'Yesterday we read an interesting newspaper',
    regEng: '/(?:Yesterday we read an interesting newspaper)|(?:We read an interesting newspaper yesterday)/gm'
  },
  {
    rus: 'Завтра мы прочитаем интересную газету',
    eng: 'Tomorrow we will read an interesting newspaper',
    regEng: '/(?:Tomorrow (?:we will|we’ll) read an interesting newspaper)|(?:(?:We will|We’ll) read an interesting newspaper tomorrow)/gm'
  },
  {
    rus: 'Я всегда вижу этого человека здесь',
    eng: 'I always see this person here',
    regEng: ''
  },
  {
    rus: 'Вчера я видел этого человека здесь',
    eng: 'Yesterday I saw this person here',
    regEng: '/(?:Yesterday I saw this person here)|(?:I saw this person here yesterday)/gm'
  },
  {
    rus: 'Завтра я увижу этого человека здесь',
    eng: 'Tomorrow I will see this person here',
    regEng: '/(?:Tomorrow (?:I will|I’ll) see this person here)|(?:(?:I will|I’ll) see this person here tomorrow)/gm'
  }
]
export default data