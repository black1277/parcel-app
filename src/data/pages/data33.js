// 01-05 > 4.1 > 7
const data33 = [
  {
    rus: 'Вчера ты пришел домой рано',
    eng: 'Yesterday you came home early',
    regEng: '/(?:Yesterday you came home early)|(?:You came home early yesterday)/gm'
  },
  {
    rus: 'Вчера ты не пришел домой рано',
    eng: 'Yesterday you did not come home early',
    regEng: '/(?:Yesterday you (?:did not|didn’t) come home early)|(?:You (?:did not|didn’t) come home early yesterday)/gm'
  },
  {
    rus: 'Пришел ли ты домой рано вчера?',
    eng: 'Did you come home early yesterday?'
  },
  {
    rus: 'Когда ты пришел домой вчера?',
    eng: 'When did you come home yesterday?'
  },
  {
    rus: 'Вчера он выпил весь мой чай',
    eng: 'Yesterday he drank all my tea',
    regEng: '/(?:Yesterday he drank all my tea)|(?:He drank all my tea yesterday)/gm'
  },
  {
    rus: 'Вчера он не выпил весь мой чай',
    eng: 'Yesterday he did not drink all my tea',
    regEng: '/(?:Yesterday he (?:did not|didn’t) drink all my tea)|(?:He (?:did not|didn’t) drink all my tea yesterday)/gm'
  },
  {
    rus: 'Выпил ли он весь мой чай вчера?',
    eng: 'Did he drink all my tea yesterday?'
  },
  {
    rus: 'Что он сделал вчера?',
    eng: 'What did he do yesterday?'
  }
]
export default data33