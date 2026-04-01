// 06-09 > 9.4 > 5
const data = [
  {
    rus: 'Чьи книги то были?',
    eng: 'Whose books were those?',
    regEng: ''
  },
  {
    rus: 'Он хочет, чтобы она поужинала с ним',
    eng: 'He wants her to have dinner with him',
    regEng: ''
  },
  {
    rus: 'Ваши истории интереснее наших',
    eng: 'Your stories are more interesting than ours',
    regEng: ''
  },
  {
    rus: 'Она без ума от своего нового парня',
    eng: 'She is crazy about her new boyfriend',
    regEng: '/(?:She(?: is|`s) crazy about her new boyfriend/gm'
  },
  {
    rus: 'На столе лежали книги',
    eng: 'There were books on the table',
    regEng: ''
  }
]
export default data