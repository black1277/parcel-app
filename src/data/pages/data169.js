// 10-14 > 11.4 > 11
const data = [
  {
    rus: 'Они готовы идти? Нет, нам нужно подождать их',
    eng: 'Are they ready to go? No, we need to wait for them',
    regEng: ''
  },
  {
    rus: 'Кто готов встретить гостей?',
    eng: 'Who is ready to meet the guests?',
    regEng: '/Who(?: is|[`’\']s) ready to meet the guests\\?/gm'
  },
  {
    rus: 'Что она пьёт каждое утро? Каждое утро она пьёт кофе',
    eng: 'What does she drink every morning? Every morning she drinks coffee',
    regEng: ''
  },
  {
    rus: 'Мы поиграем в теннис в следующую среду',
    eng: 'We will play tennis next Wednesday',
    regEng: '/We(?: will|[`’\']ll) play tennis next Wednesday/gm'
  },
  {
    rus: 'Для неё не было никаких сообщений',
    eng: 'There were no messages for her',
    regEng: ''
  }
]
export default data