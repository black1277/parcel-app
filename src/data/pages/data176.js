// 10-14 > 12.1 > 6
const data = [
  {
    rus: 'У нас есть много времени, чтобы завершить эту задачу',
    eng: 'We have a lot of time to finish this task',
    regEng: '/We have (?:a lot|lots) of time to finish this (?:task|job)/gm'
  },
  {
    rus: 'У нас есть так много времени, чтобы завершить эту задачу',
    eng: 'We have so much time to finish this task',
    regEng: '/We have so much time to finish this (?:task|job)/gm'
  },
  {
    rus: 'У нас есть много времени, чтобы завершить эту задачу?',
    eng: 'Do we have much time to finish this task?',
    regEng: '/Do we have (?:a lot of|lots of|much) time to finish this (?:task|job)\\?/gm'
  },
  {
    rus: 'У нас нет много времени, чтобы завершить эту задачу',
    eng: 'We do not have much time to finish this task',
    regEng: '/We (?:do not|don[`’\']t) have (?:a lot of|lots of|much) time to finish this (?:task|job)/gm'
  },
  {
    rus: 'Есть много вещей, которые ему нужно сделать',
    eng: 'There are many things that he needs to do',
    regEng: '/There are (?:a lot of|lots of|many) things(?: that)? he needs to do/gm'
  },
  {
    rus: 'Есть слишком много вещей, которые ему нужно сделать',
    eng: 'There are too many things that he needs to do',
    regEng: '/There are too many things (?:that )?he needs to do/gm'
  },
  {
    rus: 'Есть много вещей, которые ему нужно сделать?',
    eng: 'Are there many things that he needs to do?',
    regEng: '/Are there (?:a lot of|lots of|many) things(?: that)? he needs to do\\?/gm'
  },
  {
    rus: 'Не имеется много вещей, которые ему нужно сделать',
    eng: 'There aren`t many things that he needs to do',
    regEng: '/There (?:are not (?:a lot of|lots of|many) things(?: that)? they are afraid of|aren[`’\']t (?:a lot of|lots of|many) things(?: that)? he needs to do)/gm'
  }
]
export default data