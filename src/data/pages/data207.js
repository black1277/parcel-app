// 10-14 > 13.4 > 6
const data = [
  {
    rus: 'Твои волосы длиннее, чем у неё? Я не знаю',
    eng: 'Is your hair longer than hers? I don`t know',
    regEng: '/Is your hair longer than hers\\? I (?:do not|don[`’\']t) know/gm'
  },
  {
    rus: 'Я обычно делаю очень мало ошибок',
    eng: 'I usually make very few mistakes',
    regEng: '/(?:(?:I usually|Usually I) make very few mistakes|I make very few mistakes usually)/gm'
  },
  {
    rus: 'Ваш сын такой чудесный студент. Все восхищаются им',
    eng: 'Your son is such a wonderful student. Everybody admires him',
    regEng: '/Your son is such a wonderful student. (?:Everybody|Everyone) admires him/gm'
  },
  {
    rus: 'Мы делаем торт сейчас',
    eng: 'We`re making a cake now',
    regEng: '/We(?: are|[`’\']re) making a cake now/gm'
  },
  {
    rus: 'Она никогда не обращает много внимания на детали',
    eng: 'She never pays much attention to details',
    regEng: '/She (?:does not ever pay (?:a lot of|lots of|much)|doesn[`’\']t ever pay (?:a lot of|lots of|much)|never pays (?:a lot of|lots of|much)) attention to details/gm'
  }
]
export default data