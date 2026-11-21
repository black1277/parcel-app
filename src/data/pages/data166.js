// 10-14 > 11.4 > 8
const data = [
  {
    rus: 'О чём она хочет поговорить?',
    eng: 'What does she want to talk about?',
    regEng: ''
  },
  {
    rus: 'Её лицо тоньше, чем у её сестры',
    eng: 'Her face is thinner than her sister`s',
    regEng: ''
  },
  {
    rus: 'Приедет ли она сюда со своей подругой через год?',
    eng: 'Will she come here with her friend in a year?',
    regEng: ''
  },
  {
    rus: 'Вы никогда не говорите об этом',
    eng: 'You never talk about it',
    regEng: '/You never (?:speak|talk) about (?:this|that|it)/gm'
  },
  {
    rus: 'У вас есть машина? Нет, нам не нужна машина. У нас есть велосипед',
    eng: 'Do you have a car? No, we do not need a car. We have a bicycle',
    regEng: '/Do you have a car\\? No, we (?:do not|don[`’\']t) need a car. We have a bicycle/gm'
  }
]
export default data