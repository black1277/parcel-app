// 10-14 > 10.2 > 7
const data = [
  {
    rus: 'Нам нужно, чтобы вы принесли документы в среду',
    eng: 'We need you to bring the documents on Wednesday',
    regEng: ''
  },
  {
    rus: 'Луна такая яркая и воздух такой тёплый сегодня ночью',
    eng: 'The moon is so bright and the air is so warm tonight',
    regEng: ''
  },
  {
    rus: 'Где ключ? Я не знаю',
    eng: 'Where is the key? I do not know',
    regEng: '/Where is the key\\? I (?:do not|don[`’\']t) know/gm'
  },
  {
    rus: 'В прошлом месяце они нашли новое место. Место понравилось им',
    eng: 'Last month they found a new place. They liked the place',
    regEng: ''
  },
  {
    rus: 'Кто откроет окно и закроет дверь?',
    eng: 'Who will open the window and close the door?',
    regEng: ''
  },
  {
    rus: 'Я хочу, чтобы вы попробовали пирожные сегодня',
    eng: 'I want you to try the cakes today',
    regEng: ''
  },
  {
    rus: 'На полке стоят книги. Книги мои',
    eng: 'There are books on the shelf. The books are mine',
    regEng: '/There are (?:some )?books on the shelf. The books are mine/gm'
  },
  {
    rus: 'Мы увидим океан в следующем году',
    eng: 'We will see the ocean next year',
    regEng: '/We(?: will|[`’\']ll) see the ocean next year/gm'
  }
]
export default data