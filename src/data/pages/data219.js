// 10-14 > 14.1 > 7
const data = [
  {
    rus: 'Она готовилась к экзамену в девять часов утра вчера',
    eng: 'She was getting ready for an exam at nine o`clock in the morning yesterday',
    regEng: '/She was getting ready for (?:(?:the|an) exam at nine o[`’\']clock in the morning yesterday|(?:the|an) exam yesterday at nine o[`’\']clock in the morning)/gm'
  },
  {
    rus: 'Она не готовилась к экзамену в девять часов утра вчера',
    eng: 'She wasn`t getting ready for an exam at nine o`clock in the morning yesterday',
    regEng: '/She (?:(?:was not|wasn[`’\']t) getting ready for (?:the|an) exam at nine o[`’\']clock in the morning yesterday|(?:was not|wasn[`’\']t) getting ready for (?:the|an) exam yesterday at nine o[`’\']clock in the morning)/gm'
  },
  {
    rus: 'Готовилась ли она к экзамену в девять часов утра вчера?',
    eng: 'Was she getting ready for an exam at nine o`clock in the morning yesterday?',
    regEng: '/Was she getting ready for (?:(?:the|an) exam at nine o[`’\']clock in the morning yesterday\\?|(?:the|an) yesterday at nine o[`’\']clock in the morning\\?)/gm'
  },
  {
    rus: 'Что она делала в девять часов утра вчера?',
    eng: 'What was she doing at nine o`clock in the morning yesterday?',
    regEng: '/What was she doing (?:at nine o[`’\']clock in the morning yesterday\\?|yesterday at nine o[`’\']clock in the morning\\?)/gm'
  },
  {
    rus: 'Мы будем пытаться починить свою машину между двумя и четырьмя часами дня завтра',
    eng: 'We`ll be trying to fix our car between two and four o`clock in the afternoon tomorrow',
    regEng: '/(?:We(?: will|[`’\']ll) be trying to fix our car between two and four o[`’\']clock in the afternoon tomorrow|We(?: will|[`’\']ll) be trying to fix our car tomorrow between two and four o[`’\']clock in the afternoon)/gm'
  },
  {
    rus: 'Мы не будем пытаться починить свою машину между двумя и четырьмя часами дня завтра',
    eng: 'We won`t be trying to fix our car between two and four o`clock in the afternoon tomorrow',
    regEng: '/(?:We(?: will not|[`’\']ll not| won[`’\']t) be trying to fix our car between two and four o[`’\']clock in the afternoon tomorrow|We(?: will not|[`’\']ll not| won[`’\']t) be trying to fix our car tomorrow between two and four o[`’\']clock in the afternoon)/gm'
  },
  {
    rus: 'Будем ли мы пытаться починить свою машину между двумя и четырьмя часами дня завтра?',
    eng: 'Will we be trying to fix our car between two and four o`clock in the afternoon tomorrow?',
    regEng: '/Will we be trying to fix our car (?:between two and four o[`’\']clock in the afternoon tomorrow\\?|tomorrow between two and four o[`’\']clock in the afternoon\\?)/gm'
  },
  {
    rus: 'Что мы будем делать между двумя и четырьмя часами дня завтра?',
    eng: 'What will we be doing between two and four o`clock in the afternoon tomorrow?',
    regEng: '/What will we be doing (?:between two and four o[`’\']clock in the afternoon tomorrow\\?|tomorrow between two and four o[`’\']clock in the afternoon\\?)/gm'
  }
]
export default data