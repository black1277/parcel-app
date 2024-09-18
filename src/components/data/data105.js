// 06-09 > 9.2 > 4
const data = [
  {
    rus: 'Его руки слабее, чем мои',
    eng: 'His arms are weaker than mine',
    regEng: ''
  },
  {
    rus: 'Чьи это билеты? Они наши',
    eng: 'Whose tickets are these? They are ours',
    regEng: '/(?:Whose tickets are these\\? They(?: are|`re) ours)/gm'
  },
  {
    rus: 'Они более пассивны, чем мы',
    eng: 'They are more passive than we are',
    regEng: '/(?:They(?: are|`re) more passive than (?:we(?: are)?|us))/gm'
  },
  {
    rus: 'Мой отчёт более подробный, чем ваш',
    eng: 'My report is more detailed than yours',
    regEng: ''
  },
  {
    rus: 'Мы более привлекательны, чем они',
    eng: 'We are more attractive than they are',
    regEng: '/(?:We(?: are|`re) more attractive than they are)/gm'
  },
  {
    rus: 'То ваши документы? Нет, мои здесь',
    eng: 'Are these your documents? No, mine are here',
    regEng: '/(?:Are these (?:your documents|documents yours)\\? No, mine are here)/gm'
  },
  {
    rus: 'Твои волосы более короткие, чем её',
    eng: 'Your hair is shorter than hers',
    regEng: ''
  },
  {
    rus: 'Вы более терпеливы, чем я',
    eng: 'You are more patient than I am',
    regEng: '/(?:You(?: are|`re) more patient than (?:I(?: am)?|me))/gm'
  }
]
export default data