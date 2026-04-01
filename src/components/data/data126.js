// 10-14 > 10.1 > 2
const data = [
  {
    rus: 'Чьи это брюки? Они Джона',
    eng: 'Whose trousers are these? They are John`s',
    regEng: '/Whose (?:trousers|pants) are these\\? (?:They are|They’re|These are) John`s/gm'
  },
  {
    rus: 'Она более активная, чем я',
    eng: 'She is more active than me',
    regEng: '/(?:She(?: is|`s)) more active than me/gm'
  },
  {
    rus: 'Чья это ручка? Она моей сестры',
    eng: 'Whose pen is this? It is my sister`s',
    regEng: '/Whose pen is this\\? (?:It is|It’s) my sister`s/gm'
  },
  {
    rus: 'Твои волосы темнее, чем у твоего брата',
    eng: 'Your hair is darker than your brother`s',
    regEng: ''
  },
  {
    rus: 'Они более грустные, чем мы',
    eng: 'They are sadder than us',
    regEng: '/(?:They are|They’re) sadder than (?:us|we are|we)/gm'
  },
  {
    rus: 'Дети этих женщин спокойнее наших',
    eng: 'These women`s children are calmer than ours',
    regEng: ''
  },
  {
    rus: 'Это твоя машина? Нет, она моих родителей',
    eng: 'Is this your car? No, it is my parents`',
    regEng: '/Is this (?:your car|car yours)\\? No, (?:it is|it’s) my parents`/gm'
  },
  {
    rus: 'Чей это компьютер? Он Мэри',
    eng: 'Whose computer is this? It is Mary`s',
    regEng: '/Whose computer is this\\? (?:It is|It’s) Mary`s/gm'
  }
]
export default data