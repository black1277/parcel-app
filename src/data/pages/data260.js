// 15-16 > 15.4 > 17
const data = [
  {
    rus: 'Кому принадлежит эта вещь?',
    eng: 'Who does this thing belong to?',
    regEng: '/(?:Whom? does this thing belong to\\?|To whom does this thing belong\\?)/gm'
  },
  {
    rus: 'Летом идёт дождь очень часто',
    eng: 'In summer it rains very often',
    regEng: '/(?:In summer it rains very often|It rains very often in summer)/gm'
  },
  {
    rus: 'Я обещаю, что вернусь завтра',
    eng: 'I promise that I`ll be back tomorrow',
    regEng: '/(?:I promise (?:that I(?: will come|[`’\']ll come| will be|[`’\']ll be)|I will (?:come|be)|I[`’\']ll (?:come|be)) back tomorrow|I promise(?: that)? tomorrow I(?: will come|[`’\']ll come| will be|[`’\']ll be) back)/gm'
  },
  {
    rus: 'К чему они готовятся?',
    eng: 'What are they getting ready for?',
    regEng: ''
  },
  {
    rus: 'Что на тебе надето сегодня? Сегодня на мне надетыбрюки и футболку',
    eng: 'What are you wearing today? Today I`m wearing trousers and a T-shirt',
    regEng: '/What are you wearing today\\? (?:Today I(?: am|[`’\']m) wearing (?:trousers|pants) and a T-shirt|I(?: am|[`’\']m) wearing (?:trousers|pants) and a T-shirt today)/gm'
  }
]
export default data