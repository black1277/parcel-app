// 10-14 > 10.4 > 1
const data = [
  {
    rus: 'Ты носишь юбки? Нет, я всегда ношу брюки',
    eng: 'Do you wear skirts? No, I always wear trousers',
    regEng: '/Do you wear skirts\\? No, I always wear (?:trousers|pants)/gm'
  },
  {
    rus: 'Вы спешите? Да, я очень опаздываю',
    eng: 'Are you in a hurry? Yes, I am very late',
    regEng: '/Are you in a hurry\\? Yes, I(?: am|[`’\']m) very late/gm'
  },
  {
    rus: 'Я не получил её письмо во вторник',
    eng: 'I did not get her letter on Tuesday',
    regEng: '/I (?:did not|didn[`’\']t) get her letter on Tuesday/gm'
  },
  {
    rus: 'Что ваш сын часто слушает? Он часто слушает эти песни',
    eng: 'What does your son often listen to? He often listens to these songs',
    regEng: ''
  },
  {
    rus: 'Куда они поедут в следующем месяце? Они поедут в Россию',
    eng: 'Where will they go next month? They will go to Russia',
    regEng: '/Where will they go next month\\? They(?: will|[`’\']ll) go to Russia/gm'
  }
]
export default data