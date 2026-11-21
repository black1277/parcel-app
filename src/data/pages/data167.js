// 10-14 > 11.4 > 9
const data = [
  {
    rus: 'Я всегда счастлив поговорить с вами. Вы такой интересный человек',
    eng: 'I am always happy to talk to you. You are such an interesting person',
    regEng: '/I(?: am|[`’\']m) always happy to (?:speak (?:with|to)|talk (?:with|to)) you. You(?: are|[`’\']re) such an interesting person/gm'
  },
  {
    rus: 'Кого этот мужчина всегда рад видеть?',
    eng: 'Who is this man always glad to see?',
    regEng: ''
  },
  {
    rus: 'Чего она боится? Она боится всего',
    eng: 'What is she afraid of? She is afraid of everything',
    regEng: '/What is she afraid of\\? She(?: is|[`’\']s) afraid of everything/gm'
  },
  {
    rus: 'Чем занимается её муж? Её муж повар',
    eng: 'What does her husband do? Her husband is a cook',
    regEng: ''
  },
  {
    rus: 'Родители хотят, чтобы их дети ели хорошую еду',
    eng: 'Parents want their children to eat good food',
    regEng: ''
  }
]
export default data