// 10-14 > 12.2 > 8
const data = [
  {
    rus: 'То твои туфли? Нет, мои здесь',
    eng: 'Are those your shoes? No, mine are here',
    regEng: ''
  },
  {
    rus: 'Его девушка удивительный человек. Он без ума от неё',
    eng: 'His girlfriend is an amazing person. He is crazy about her',
    regEng: '/His girlfriend(?: is|[`’\']s) an amazing person. He(?: is|[`’\']s) crazy about her/gm'
  },
  {
    rus: 'Я думаю, что я тоньше, чем он, но толще, чем она',
    eng: 'I think that I am thinner than him, but thicker than her',
    regEng: '/I think (?:(?:that I(?: am|[`’\']m)|I am|I[`’\']m) thinner than he is, but thicker than she is|(?:that I(?: am|[`’\']m)|I am|I[`’\']m) thinner than him, but thicker than her|(?:that I(?: am|[`’\']m)|I am|I[`’\']m) thinner than he, but thicker than she)/gm'
  },
  {
    rus: 'Нам нужно, чтобы вы одолжили нам немного денег завтра',
    eng: 'We need you to lend us some money tomorrow',
    regEng: '/We need you to lend us (?:a little|some) money tomorrow/gm'
  },
  {
    rus: 'Чьё это кресло? Оно нашего дедушки',
    eng: 'Whose armchair is this? It is our grandfather`s',
    regEng: '/Whose armchair is this\\? It(?: is|[`’\']s) our (?:grandfather|granddad|grandad|grandpa)[`’\']s/gm'
  },
  {
    rus: 'У меня нет никаких вопросов. Я всё понимаю',
    eng: 'I have no questions. I understand everything',
    regEng: '/I (?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions. I understand everything/gm'
  },
  {
    rus: 'Это книга, которую я прочитал год назад. Я хочу, чтобы ты её прочитал',
    eng: 'This is the book that I read a year ago. I want you to read it',
    regEng: '/This is the book (?:that )?I read a year ago. I want you to read it/gm'
  }
]
export default data