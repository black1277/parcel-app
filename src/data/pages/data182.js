// 10-14 > 12.2 > 4
const data = [
  {
    rus: 'У него много работы, чтобы сделать сегодня',
    eng: 'He has a lot of work to do today',
    regEng: '/He has (?:a lot|lots) of work to do today/gm'
  },
  {
    rus: 'У него слишком много работы, чтобы сделать сегодня',
    eng: 'He has too much work to do today',
    regEng: ''
  },
  {
    rus: 'У него много работы, чтобы сделать сегодня?',
    eng: 'Does he have much work to do today?',
    regEng: '/Does he have (?:a lot of|lots of|much) work to do today\\?/gm'
  },
  {
    rus: 'У него не много работы, чтобы сделать сегодня',
    eng: 'He does not have much work to do today',
    regEng: '/He (?:does not|doesn[`’\']t) have (?:a lot of|lots of|much) work to do today/gm'
  },
  {
    rus: 'Есть много вещей, которых они боятся',
    eng: 'There are many things that they are afraid of',
    regEng: '/There are (?:a lot of|lots of|many) things(?: that)? they are afraid of/gm'
  },
  {
    rus: 'Есть так много вещей, которых они боятся',
    eng: 'There are so many things that they are afraid of',
    regEng: '/There are so many things (?:that )?they are afraid of/gm'
  },
  {
    rus: 'Есть много вещей, которых они боятся?',
    eng: 'Are there many things that they are afraid of?',
    regEng: '/Are there (?:a lot of|lots of|many) things(?: that)? they are afraid of\\?/gm'
  },
  {
    rus: 'Есть не много вещей, которых они боятся',
    eng: 'There aren`t many things that they are afraid of',
    regEng: '/There (?:are not (?:a lot of|lots of|many)|aren[`’\']t (?:a lot of|lots of|many)) things (?:that they(?: are|[`’\']re)|they are|they[`’\']re) afraid of/gm'
  }
]
export default data