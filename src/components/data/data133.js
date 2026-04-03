// 10-14 > 10.2 > 3
const data = [
  {
    rus: 'То твой ключ? Нет, он Пола или Джека',
    eng: 'Is that your key? No, it is Paul`s or Jack`s',
    regEng: '/Is that your key\\? No, (?:it is|it`s) Paul`s or Jack`s/gm'
  },
  {
    rus: 'Я более успешный, чем они',
    eng: 'I am more successful than them',
    regEng: '/(?:I am|I’m) more successful than (?:them|they are|they)/gm'
  },
  {
    rus: 'Глаза их дочерей светлее, чем у них',
    eng: 'Their daughters` eyes are lighter than theirs',
    regEng: ''
  },
  {
    rus: 'Его жена терпеливее, чем он',
    eng: 'His wife is more patient than him',
    regEng: '/His wife(?: is|`s) more patient than (?:him|he(?: is)?)/gm'
  },
  {
    rus: 'Волосы Кейт длиннее, чем у тебя',
    eng: 'Kate`s hair is longer than yours',
    regEng: ''
  },
  {
    rus: 'Чьи то куртки? Они наших детей',
    eng: 'Whose jackets are those? They are our children`s',
    regEng: '/Whose jackets are those\\? (?:They are|They’re|These) our children`s/gm'
  },
  {
    rus: 'Мой друг младше (моложе) меня',
    eng: 'My friend is younger than me',
    regEng: '/My friend(?: is|`s) younger than (?:I(?: am)?|me)/gm'
  }
]
export default data