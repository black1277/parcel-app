// 01-05 > 3.2 > 2
const data = [
  {
    rus: 'Я хочу, чтобы вы говорили по-английски',
    eng: 'I want you to speak English',
    regEng: ''
  },
  {
    rus: 'Этим людям нужно, чтобы мы поговорили с ними',
    eng: 'These people need us to talk to them',
    regEng: '/These people need us to (?:talk|speak) (?:to|with) them/gm'
  },
  {
    rus: 'Она хочет, чтобы я тренировался каждый день',
    eng: 'She wants me to exercise every day',
    regEng: ''
  },
  {
    rus: 'Этому человеку нужно, чтобы они помнили те слова',
    eng: 'This person needs them to remember those words',
    regEng: ''
  },
  {
    rus: 'Родители хотят, чтобы их дети ели хорошую еду',
    eng: 'Parents want their children to eat good food',
    regEng: '/Parents want their (?:children|kids) to eat good food/gm'
  },
  {
    rus: 'Нам нужно, чтобы она слушала нас',
    eng: 'We need her to listen to us',
    regEng: ''
  }
]
export default data
