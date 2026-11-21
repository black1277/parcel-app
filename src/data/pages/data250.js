// 15-16 > 15.4 > 7
const data = [
  {
    rus: 'От кого он устаёт?',
    eng: 'Who is he getting tired of?',
    regEng: '/Whom? is he getting tired of\\?/gm'
  },
  {
    rus: 'Сколько дней в неделе?',
    eng: 'How many days are there in a week?',
    regEng: '/How many days are there in (?:one|a) week\\?/gm'
  },
  {
    rus: 'Кто готов встретить гостей?',
    eng: 'Who is ready to meet the guests?',
    regEng: '/Who(?: is|[`’\']s) ready to meet the guests\\?/gm'
  },
  {
    rus: 'Пожалуйста, подождите меня! Я иду!',
    eng: 'Please wait for me! I`m coming!',
    regEng: '/(?:Wait for me, please! I(?: am|[`’\']m)|Please wait for me! I(?: am|[`’\']m)) coming!/gm'
  },
  {
    rus: 'Посмотри! Мальчики играют в футбол',
    eng: 'Look! The boys are playing football',
    regEng: ''
  }
]
export default data