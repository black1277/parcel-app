// 06-09 > 7.2 > 2
const data = [
  {
    rus: 'Тебе очень холодно',
    eng: 'You are very cold',
    regEng: '/(?:You are|You’re) very cold/gm'
  },
  {
    rus: 'Тебе не очень холодно',
    eng: 'You are not very cold',
    regEng: '/(?:You are|You’re) not very cold/gm'
  },
  {
    rus: 'Очень ли тебе холодно?',
    eng: 'Are you very cold?',
    regEng: ''
  },
  {
    rus: 'Почему тебе так холодно?',
    eng: 'Why are you so cold?',
    regEng: ''
  },
  {
    rus: 'Мне очень жарко',
    eng: 'I am very hot',
    regEng: '/(?:I am|I’m) very hot/gm'
  },
  {
    rus: 'Мне не очень жарко',
    eng: 'I am not very hot',
    regEng: '/(?:I am|I’m) not very hot/gm'
  },
  {
    rus: 'Очень ли мне жарко?',
    eng: 'Am I very hot?',
    regEng: ''
  },
  {
    rus: 'Почему мне так жарко?',
    eng: 'Why am I so hot?',
    regEng: ''
  }
]
export default data