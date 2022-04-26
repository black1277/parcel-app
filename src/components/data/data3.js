// 01-05 > 1.1 > 5
const data = [
  {
    rus: 'Они хотят купить хорошую машину',
    eng: 'They want to buy a good car'
  },
  {
    rus: 'Чтобы закончить свою работу, ему нужно спешить',
    eng: 'To finish his work he needs to hurry',
    regEng: '/(?:To finish his work he needs to (?:hurry(?: up)?|rush))|(?:He needs to (?:hurry(?: up)?|rush) to finish his work)/gm'
  },
  {
    rus: 'Ему нравится посещать интересные места каждый год',
    eng: 'He likes to visit interesting places every year'
  },
  {
    rus: 'Нам нужно найти новую квартиру',
    eng: 'We need to find a new flat',
    regEng: '/We need to find a new (?:flat|apartment)/gm'
  },
  {
    rus: 'Мне нравится приходить сюда каждую неделю',
    eng: 'I like to come here every week'
  },
  {
    rus: 'Чтобы сделать это, тебе нужно быть сильным',
    eng: 'To do this you need to be strong',
    regEng: '/(?:To do (?:this|it|that) you need to be strong)|(?:You need to be strong to do (?:this|it|that))/gm'
  }
]
export default data