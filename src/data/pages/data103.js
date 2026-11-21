// 06-09 > 9.2 > 2
const data = [
  {
    rus: 'Диета твоих родителей более здоровая, чем твоя',
    eng: 'Your parents` diet is healthier than yours',
    regEng: ''
  },
  {
    rus: 'Это его деньги, не её',
    eng: 'This is his money, not hers',
    regEng: '/(?:This (?:is his money|money is his), not hers)/gm'
  },
  {
    rus: 'Результаты этих людей хуже, чем его',
    eng: 'These people`s results are worse than his',
    regEng: ''
  },
  {
    rus: 'Это комната твоих детей? Нет, она моя',
    eng: 'Is this your children`s room? No, it is mine',
    regEng: '/(?:Is this your children`s room\\? No, (?:it is|it’s) mine)/gm'
  },
  {
    rus: 'Её волосы темнее или светлее, чем твои?',
    eng: 'Is her hair darker or lighter than yours?',
    regEng: ''
  },
  {
    rus: 'Чей это телефон? Это телефон моего мужа',
    eng: 'Whose phone is this? This is my husband`s phone',
    regEng: '/(?:Whose (?:tele)?phone is this\\? This is my husband`s (?:tele)?phone)/gm'
  },
  {
    rus: 'Собака наших соседей больше, чем наша',
    eng: 'Our neighbours` dog is bigger than ours',
    regEng: '/(?:Our neighbou?rs` dog is bigger than ours)/gm'
  },
  {
    rus: 'Ваша одежда более дешёвая, чем их',
    eng: 'Your clothes are cheaper than theirs',
    regEng: ''
  }
]
export default data