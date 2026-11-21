// 15-16 > 15.4 > 9
const data = [
  {
    rus: 'Что ты имеешь в виду?',
    eng: 'What do you mean?',
    regEng: ''
  },
  {
    rus: 'Завтра в десять часов вечера мы будем ждать тебя здесь',
    eng: 'Tomorrow at ten o`clock in the evening we`ll be waiting for you here',
    regEng: '/Tomorrow at ten o[`’\']clock (?:in the evening we(?: will|[`’\']ll)|at night we(?: will|[`’\']ll)) be waiting for you here/gm'
  },
  {
    rus: 'Сколько соли ты хочешь, чтобы я добавил в салат?',
    eng: 'How much salt do you want me to add to the salad?',
    regEng: ''
  },
  {
    rus: 'Как эта еда на вкус? О, она на вкус восхитительна',
    eng: 'How does this food taste? Oh, it tastes delicious',
    regEng: ''
  },
  {
    rus: 'Здесь так жарко. Давай откроем окно',
    eng: 'It`s so hot here. Let`s open the window',
    regEng: '/It(?: is|[`’\']s) so hot here. Let(?: us|[`’\']s) open the window/gm'
  }
]
export default data