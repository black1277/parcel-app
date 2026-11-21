// 10-14 > 10.2 > 5
const data = [
  {
    rus: 'В коробке есть немного шоколада',
    eng: 'There is some chocolate in the box',
    regEng: '/There(?: is|[`’\']s) some chocolate in the box/gm'
  },
  {
    rus: 'Есть ли в коробке сколько-нибудь шоколада?',
    eng: 'Is there any chocolate in the box?',
    regEng: ''
  },
  {
    rus: 'В коробке нет никакого шоколада',
    eng: 'There isn`t any chocolate in the box',
    regEng: '/There (?:is not|isn[`’\']t) any chocolate in the box/gm'
  },
  {
    rus: 'В коробке нет никакого шоколада',
    eng: 'There is no chocolate in the box',
    regEng: '/There(?: is|[`’\']s) no chocolate in the box/gm'
  },
  {
    rus: 'На столе лежали какие-то письма',
    eng: 'There were some letters on the table',
    regEng: ''
  },
  {
    rus: 'Лежали ли на столе какие-то письма?',
    eng: 'Were there any letters on the table?',
    regEng: ''
  },
  {
    rus: 'На столе не было никаких писем',
    eng: 'There weren`t any letters on the table',
    regEng: '/There (?:were not|weren[`’\']t) any letters on the table/gm'
  },
  {
    rus: 'На столе не было никаких писем',
    eng: 'There were no letters on the table',
    regEng: ''
  }
]
export default data