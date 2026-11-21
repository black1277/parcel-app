// 15-16 > 15.4 > 8
const data = [
  {
    rus: 'Что я делал в одиннадцать часов утра вчера?',
    eng: 'What was I doing at eleven o`clock in the morning yesterday?',
    regEng: '/What was I doing (?:at eleven o[`’\']clock in the morning yesterday\\?|yesterday at eleven o[`’\']clock in the morning\\?)/gm'
  },
  {
    rus: 'Не разговаривайте! Я пытаюсь сконцентрироваться',
    eng: 'Don`t talk! I`m trying to concentrate',
    regEng: '/(?:Do not|Don[`’\']t) talk! I(?: am|[`’\']m) trying to concentrate/gm'
  },
  {
    rus: 'Она ленивая, у неё мало мотивации работать',
    eng: 'She`s lazy, she has little motivation to work',
    regEng: '/She(?: is|[`’\']s) lazy, she has little motivation to work/gm'
  },
  {
    rus: 'Есть очень мало вещей, которых я боюсь',
    eng: 'There are very few things that I`m afraid of',
    regEng: '/There are very few things that I(?: am|[`’\']m) afraid of/gm'
  },
  {
    rus: 'Что ты ищешь?',
    eng: 'What are you looking for?',
    regEng: '/What are you (?:searching|looking) for\\?/gm'
  }
]
export default data