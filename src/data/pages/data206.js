// 10-14 > 13.4 > 5
const data = [
  {
    rus: 'Моё хобби приносит мне много радости',
    eng: 'My hobby brings me a lot of joy',
    regEng: ''
  },
  {
    rus: 'Они очень сожалеют',
    eng: 'They`re very sorry',
    regEng: '/They(?: are|[`’\']re) very sorry/gm'
  },
  {
    rus: 'Мир такой большой и красивый',
    eng: 'The world is so big and beautiful',
    regEng: ''
  },
  {
    rus: 'Мои каблуки выше, чем у Энни',
    eng: 'My heels are higher than Annie`s',
    regEng: ''
  },
  {
    rus: 'У меня нет никаких вопросов. Я всё понимаю',
    eng: 'I have no questions. I understand everything',
    regEng: '/I (?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions. I understand everything/gm'
  }
]
export default data