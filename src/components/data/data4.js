// 01-05 > 1.1 > 6
const data = [
  {
    rus: 'Чтобы быть здоровым, тебе нужно есть хорошую еду',
    eng: 'To be healthy you need to eat good food',
    regEng: '/(?:To be healthy you need to eat good food)|(?:You need to eat good food to be healthy)/gm'
  },
  {
    rus: 'Мне нравится мыть свои ботинки каждый день',
    eng: 'I like to wash my shoes every day',
    regEng: '/(?:I like to wash my (?:shoes|boots) every day)|(?:I like washing my (?:shoes|boots) every day)/gm'
  },
  {
    rus: 'Она хочет иметь отличную работу',
    eng: 'She wants to have an excellent job'
  },
  {
    rus: 'Я хочу пить зелёный чай каждый день',
    eng: 'I want to drink green tea every day'
  },
  {
    rus: 'Нам нравится помогать своим друзьям всё время',
    eng: 'We like to help our friends all the time'
  },
  {
    rus: 'Чтобы быть сильным и здоровым, ему нужно тренироваться',
    eng: 'To be strong and healthy he needs to exercise',
    regEng: '/(?:To be strong and healthy he needs to exercise)|(?:He needs to exercise to be strong and healthy)/gm'
  }
]
export default data