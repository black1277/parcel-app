// 10-14 > 11.4 > 6
const data = [
  {
    rus: 'Волосы моей сестры темнее, чем мои',
    eng: 'My sister`s hair is darker than mine',
    regEng: ''
  },
  {
    rus: 'Когда вы открыли свой магазин? Мы открыли свой магазин месяц назад',
    eng: 'When did you open your shop? We opened our shop a month ago',
    regEng: ''
  },
  {
    rus: 'Твой брат женат? Нет, он холост',
    eng: 'Is your brother married? No, he is single',
    regEng: '/Is your brother married\\? No, he(?: is|[`’\']s) single/gm'
  },
  {
    rus: 'Чей это телефон? Он мой',
    eng: 'Whose phone is this? It is mine',
    regEng: '/Whose (?:telephone|phone) is this\\? It(?: is|[`’\']s) mine/gm'
  },
  {
    rus: 'С кем вы хотите, чтобы я поговорил?',
    eng: 'Who do you want me to talk to?',
    regEng: '/Who do you want me to talk (?:with|to)\\?/gm'
  }
]
export default data