// 17-20 > 19.4 > 14
const data = [
  {
    rus: 'Зачем тебе нужно одолжить мой чемодан? Я собираюсь переезжать в новую квартиру',
    eng: 'Why do you need to borrow my suitcase? I`m going to move to a new flat',
    regEng: '/(?:Why do you need to borrow my suitcase\\? I(?: am going to move|[`’\']m going to move| am moving|[`’\']m moving) to a new apartment|Why do you need to borrow my suitcase\\? I(?: am going to move|[`’\']m going to move| am moving|[`’\']m moving) to a new flat)/gm'
  },
  {
    rus: 'Я не думаю, что эта команда выиграет матч. А ты что думаешь? Я не уверен. Посмотрим',
    eng: 'I don`t think that this team will win the match. And what do you think? I`m not sure. We`ll see',
    regEng: '/I (?:do not think (?:that )?this team will win the match. And what do you think\\? I am not sure. We will|don[`’\']t think(?: that)? this team will win the match. And what do you think\\? I(?: am|[`’\']m) not sure. We[`’\']ll) see/gm'
  },
  {
    rus: 'В моём кошельке осталось мало наличных, но на моём банковском счёте много денег',
    eng: 'There`s little cash left in my wallet but there`s a lot of money on my bank account',
    regEng: '/(?:There is little cash left in my wallet but there is (?:a lot|lots) of money on my bank account|There[`’\']s little cash left in my wallet but there(?: is a lot|[`’\']s a lot| is lots|[`’\']s lots) of money on my bank account)/gm'
  },
  {
    rus: 'Они в очень сложных отношениях. Для них почти невозможно понять друг друга',
    eng: 'They`re in a very complicated relationship. It`s almost impossible for them to understand each other',
    regEng: '/(?:They are in a very (?:(?:complicated relationship. It(?: is|[`’\']s)|difficult relationship. It is) almost not possible|(?:complicated|difficult) relationship. It(?: is|[`’\']s) almost impossible) for them to understand each other|They[`’\']re in a very (?:complicated|difficult) relationship. It(?: is|[`’\']s) almost (?:not possible|impossible) for them to understand each other)/gm'
  },
  {
    rus: 'Джейн часто заболевает зимой. Так что ей полезно носить тёплую одежду и принимать витамин С',
    eng: 'Jane often gets sick in winter. So it`s useful for her to wear warm clothes and take vitamin C',
    regEng: '/Jane often (?:fall ill|gets) sick in winter. So it(?: is|[`’\']s) useful for her to wear warm clothes and(?: to)? take vitamin C/gm'
  }
]
export default data