// 10-14 > 11.1 > 9
const data = [
  {
    rus: 'На полке стоит несколько книг',
    eng: 'There are a few books on the shelf',
    regEng: '/There are (?:a few|some) books on the shelf/gm'
  },
  {
    rus: 'Сколько денег у тебя есть?',
    eng: 'How much money do you have?',
    regEng: ''
  },
  {
    rus: 'У их дочери слишком мало терпения',
    eng: 'Their daughter has too little patience',
    regEng: ''
  },
  {
    rus: 'У ваших сыновей так мало друзей',
    eng: 'Your sons have so few friends',
    regEng: ''
  },
  {
    rus: 'Сколько писем лежит на столе?',
    eng: 'How many letters are there on the table?',
    regEng: ''
  },
  {
    rus: 'В кофейнике есть немного кофе',
    eng: 'There is a little coffee in the coffee pot',
    regEng: '/(?:There(?: is|[`’\']s) a little|There(?: is|[`’\']s) some) coffee in the coffee pot/gm'
  },
  {
    rus: 'Сколько воды есть в бутылке?',
    eng: 'How much water is there in the bottle?',
    regEng: ''
  },
  {
    rus: 'Я обычно делаю очень мало ошибок',
    eng: 'I usually make very few mistakes',
    regEng: '/(?:(?:I usually|Usually I) make very few mistakes|I make very few mistakes usually)/gm'
  }
]
export default data