// 01-05 > 3.2 > 3
const data = [
  {
    rus: 'Он часто ездит в эти удивительные страны зимой',
    eng: 'He often goes to these amazing countries in winter',
    regEng: '/(?:He often goes to these amazing countries in winter)|(?:In winter he often goes to these amazing countries)/gm'
  },
  {
    rus: 'Он съездил в эти удивительные страны прошлой зимой',
    eng: 'He went to these amazing countries last winter',
    regEng: '/(?:He went to these amazing countries last winter)|(?:Last winter he went to these amazing countries)/gm'
  },
  {
    rus: 'Он съездит в эти удивительные страны следующей зимой',
    eng: 'He will go to these amazing countries next winter',
    regEng: '/(?:(?:He will|He’ll) go to these amazing countries next winter)|(?:Next winter (?:he will|he’ll) go to these amazing countries)/gm'
  },
  {
    rus: 'Они всегда покупают интересные книги в июне',
    eng: 'They always buy interesting books in June',
    regEng: '/(?:They always buy interesting books in June)|(?:In June they always buy interesting books)/gm'
  },
  {
    rus: 'Они купили интересную книгу в прошлом июне',
    eng: 'They bought an interesting book last June',
    regEng: '/(?:They bought an interesting book last June)|(?:Last June they bought an interesting book)/gm'
  },
  {
    rus: 'Они купят интересную книгу в следующем июне',
    eng: 'They will buy an interesting book next June',
    regEng: '/(?:They will buy an interesting book next June)|(?:Next June they will buy an interesting book)/gm'
  }
]
export default data