// 01-05 > 3.2 > 6
const data28 = [
  {
    rus: 'Мы никогда не пишем коротких писем',
    eng: 'We never write short letters',
    regEng: ''
  },
  {
    rus: 'Они прочитали её важное сообщение вчера',
    eng: 'They read her important message yesterday',
    regEng: '/(?:They read her important message yesterday)|(?:Yesterday they read her important message)/gm'
  },
  {
    rus: 'У этих женщин здоровые и красивые тела',
    eng: 'These women have healthy and beautiful bodies',
    regEng: ''
  },
  {
    rus: 'У неё есть дорогое красное платье',
    eng: 'She has an expensive red dress',
    regEng: ''
  },
  {
    rus: 'Я видел вашу дочь вчера',
    eng: 'I saw your daughter yesterday',
    regEng: '/(?:I saw your daughter yesterday)|(?:Yesterday I saw your daughter)/gm'
  },
  {
    rus: 'Эта женщина всегда старается быть дружелюбной',
    eng: 'This woman always tries to be friendly',
    regEng: ''
  },
  {
    rus: 'Вчера они купили новую большую сумку',
    eng: 'Yesterday they bought a new big bag',
    regEng: '/(?:Yesterday they bought a new (?:big|large) bag)|(?:They bought a new (?:big|large) bag yesterday)/gm'
  },
  {
    rus: 'Этот ребёнок хочет найти новых друзей',
    eng: 'This child wants to find new friends',
    regEng: '/This (?:child|kid) wants to find new friends/gm'
  }
]
export default data28