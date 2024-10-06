// 06-09 > 9.4 > 1
const data = [
  {
    rus: 'Вчера ты пришел домой рано',
    eng: 'Yesterday you came home early',
    regEng: '/(?:Yesterday you came home early)|(?:You came home early yesterday)/gm'
  },
  {
    rus: 'Мы более успешны, чем они',
    eng: 'We are more successful than they are',
    regEng: '/(?:We(?: are|’re) more successful than (?:they(?: are)?|them))/gm'
  },
  {
    rus: 'То были часы его дедушки?',
    eng: 'Was that his grandfather`s watch?',
    regEng: '/Was that his (?:grandfather’s|grandpa’s) watch\\?/gm'
  },
  {
    rus: 'Ему не нужно искать новую работу',
    eng: 'He does not need to look for a new job',
    regEng: '/(?:He (?:does not|doesn’t) need to (?:look|search) for a new job)/gm'
  },
  {
    rus: 'Я спокойнее, чем она',
    eng: 'I am calmer than she is',
    regEng: '/(?:(?:I am|I’m) calmer than (?:she(?: is)?|her))/gm'
  }
]
export default data