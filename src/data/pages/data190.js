// 10-14 > 13.1 > 5
const data = [
  {
    rus: 'Я думаю, что у вас слишком мало терпения, чтобы работать с детьми',
    eng: 'I think that you have too little patience to work with children',
    regEng: '/I think(?: that)? you have too little patience to work with (?:children|kids)/gm'
  },
  {
    rus: 'Сколько дней в неделе?',
    eng: 'How many days are there in a week?',
    regEng: '/How many days are there in (?:one|a) week\\?/gm'
  },
  {
    rus: 'Тебе много работы делать на выходных?',
    eng: 'Do you have much work to do at the weekend?',
    regEng: '/Do you have (?:a lot of|lots of|much) work to do at the weekend\\?/gm'
  },
  {
    rus: 'Есть несколько важных фактов, о которых я хочу тебе рассказать',
    eng: 'There are a few important facts that I want to tell you about',
    regEng: '/There are a few important facts (?:that )?I want to tell you about/gm'
  },
  {
    rus: 'Сколько сахара мне нужно добавить в кашу?',
    eng: 'How much sugar do I need to add to the porridge?',
    regEng: ''
  },
  {
    rus: 'Я уже сыт, а в коробке осталось много мороженого',
    eng: 'I`m already full and there`s a lot of ice cream left in the box',
    regEng: '/I(?: am|[`’\']m) already full and there(?: is a lot|[`’\']s a lot| is lots|[`’\']s lots) of (?:ice cream|ice-cream) left in the box/gm'
  },
  {
    rus: 'Мы не много слышали новостей об этом мероприятии вчера',
    eng: 'We didn`t hear much news about this event yesterday',
    regEng: '/We (?:did not|didn[`’\']t) hear (?:a lot of|lots of|much) news about this event yesterday/gm'
  },
  {
    rus: 'Есть много интересных мест, в которые мы хотим поехать',
    eng: 'There are many interesting places that we want to go to',
    regEng: '/There are (?:a lot of|lots of|many) interesting places(?: that)? we want to go to/gm'
  }
]
export default data