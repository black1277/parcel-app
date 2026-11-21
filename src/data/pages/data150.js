// 10-14 > 11.1 > 10
const data = [
  {
    rus: 'В комнате было так мало стульев',
    eng: 'There were so few chairs in the room',
    regEng: ''
  },
  {
    rus: 'Сколько у нас времени?',
    eng: 'How much time do we have?',
    regEng: ''
  },
  {
    rus: 'У нас было слишком мало опыта в этой области',
    eng: 'We had too little experience in this field',
    regEng: '/We had too little experience in this (?:domain|field|area)/gm'
  },
  {
    rus: 'Он построил несколько домов в прошлом году',
    eng: 'He built a few houses last year',
    regEng: ''
  },
  {
    rus: 'Сколько у неё вопросов?',
    eng: 'How many questions does she have?',
    regEng: ''
  },
  {
    rus: 'Мне нужно немного помощи от тебя',
    eng: 'I need a little help from you',
    regEng: '/I need (?:a little|some) help from you/gm'
  },
  {
    rus: 'Сколько у вас детей?',
    eng: 'How many children do you have?',
    regEng: ''
  },
  {
    rus: 'В этой книге так мало информации',
    eng: 'There is so little information in this book',
    regEng: '/There(?: is|[`’\']s) so little information in this book/gm'
  }
]
export default data