// 10-14 > 10.2 > 2
const data = [
  {
    rus: 'Мой ответ лучше, чем у Кейт',
    eng: 'My answer is better than Kate`s',
    regEng: ''
  },
  {
    rus: 'Чья это комната? Она моей тёти',
    eng: 'Whose room is this? It is my aunt`s',
    regEng: '/Whose room is this\\? (?:It is|It’s) my aunt’s/gm'
  },
  {
    rus: 'Ты более стройная, чем она',
    eng: 'You are slimmer than her',
    regEng: '/(?:You are|You’re) slimmer than (?:she(?: is)?|her)/gm'
  },
  {
    rus: 'Это не моя идея, она моего отца',
    eng: 'This is not my idea, it is my father`s',
    regEng: '/This (?:is not|isn`t) my idea, (?:it is|it`s) my (?:father`s|dad`s)/gm'
  },
  {
    rus: 'Это ваши собаки? Нет, они наших соседей',
    eng: 'Are these your dogs? No, they are our neighbours`',
    regEng: '/Are these your dogs\\? No, (?:they are|they’re|these are) our neighbou?rs`/gm'
  },
  {
    rus: 'Мы более уставшие, чем он',
    eng: 'We are more tired than him',
    regEng: '/We(?: are|`re) more tired than (?:him|he(?: is)?)/gm'
  },
  {
    rus: 'Твоя одежда более стильная, чем её',
    eng: 'Your clothes are more stylish than hers',
    regEng: ''
  },
  {
    rus: 'Это деньги моего дяди, не мои',
    eng: 'This is my uncle`s money, not mine',
    regEng: '/This (?:is my uncle`s money|money is my uncle`s), not mine/gm'
  }
]
export default data