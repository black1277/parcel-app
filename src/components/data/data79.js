// 06-09 > 7.4 > 3  06-09 > 7.4 > 4
const data = [
  {
    rus: 'Вчера они поиграли в игры',
    eng: 'Yesterday they played games',
    regEng: ''
  },
  {
    rus: 'Завтра он не позвонит своему другу',
    eng: 'Tomorrow he will not call his friend',
    regEng: '/(?:Tomorrow he (?:will not|won’t) call his friend)|(?:He (?:will not|won’t) call his friend tomorrow)/gm'
  },
  {
    rus: 'Чтобы сделать это, тебе нужно быть сильным',
    eng: 'To do this you need to be strong',
    regEng: '/(?:To do (?:this|it|that) you need to be strong)|(?:You need to be strong to do (?:this|it|that))/gm'
  },
  {
    rus: 'Поехали ли они домой на поезде месяц назад?',
    eng: 'Did they go home by train a month ago?',
    regEng: ''
  },
  {
    rus: 'Она хочет иметь отличную работу',
    eng: 'She wants to have an excellent job',
    regEng: ''
  },
  {
    rus: 'Завтра я увижу этого человека здесь',
    eng: 'Tomorrow I will see this person here',
    regEng: '/(?:Tomorrow (?:I will|I’ll) see this person here)|(?:(?:I will|I’ll) see this person here tomorrow)/gm'
  },
  {
    rus: 'Мы съездили в это место в прошлом феврале',
    eng: 'We went to this place last February',
    regEng: ''
  },
  {
    rus: 'Наш ребёнок никогда не ест гамбургеры',
    eng: 'Our child never eats hamburgers',
    regEng: ''
  },
  {
    rus: 'Будем ли мы готовы на следующей неделе?',
    eng: 'Will we be ready next week?',
    regEng: ''
  },
  {
    rus: 'Почему тебе так холодно?',
    eng: 'Why are you so cold?',
    regEng: ''
  }  
]
export default data