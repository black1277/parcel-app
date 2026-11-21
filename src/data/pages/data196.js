// 10-14 > 13.2 > 4
const data = [
  {
    rus: 'У них всего несколько простых вопросов задать тебе',
    eng: 'They have just a few simple questions to ask you',
    regEng: ''
  },
  {
    rus: 'Она ленивая, у неё мало мотивации работать',
    eng: 'She`s lazy, she has little motivation to work',
    regEng: '/She(?: is|[`’\']s) lazy, she has little motivation to work/gm'
  },
  {
    rus: 'Сколько соли ты хочешь, чтобы я добавил в салат?',
    eng: 'How much salt do you want me to add to the salad?',
    regEng: ''
  },
  {
    rus: 'Мои дети приносят мне много любви и счастья',
    eng: 'My children bring me a lot of love and happiness',
    regEng: '/My (?:children|kids) bring me (?:a lot|lots) of love and happiness/gm'
  },
  {
    rus: 'Мне только чуть-чуть работы делать на выходных',
    eng: 'I have just a little work to do at the weekend',
    regEng: ''
  },
  {
    rus: 'Встреча не займёт много времени, лишь несколько минут',
    eng: 'The meeting won`t take much time, just a few minutes',
    regEng: '/The meeting (?:will not|won[`’\']t) take (?:a lot of|lots of|much) time, just a few minutes/gm'
  },
  {
    rus: 'Сколько страниц в этой книге?',
    eng: 'How many pages are there in this book?',
    regEng: ''
  },
  {
    rus: 'Извини, но в твоих словах не много логики и смысла',
    eng: 'I`m sorry but there isn`t much logic and sense in your words',
    regEng: '/I(?: am|[`’\']m) sorry but there(?: is not a lot of| isn[`’\']t a lot of|[`’\']s not a lot of| is not lots of| isn[`’\']t lots of|[`’\']s not lots of| is not much| isn[`’\']t much|[`’\']s not much) logic and sense in your words/gm'
  }
]
export default data