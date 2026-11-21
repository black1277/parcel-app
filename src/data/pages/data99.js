// 06-09 > 9.1 > 5
const data = [
  {
    rus: 'Твои ресницы длиннее моих',
    eng: 'Your eyelashes are longer than mine',
    regEng: ''
  },
  {
    rus: 'Он слабее, чем ты',
    eng: 'He is weaker than you are',
    regEng: '/(?:(?:He is|He’s) weaker than you(?: are)?)/gm'
  },
  {
    rus: 'Они более уставшие, чем я',
    eng: 'They are more tired than I am',
    regEng: '/(?:(?:They are|They’re) more tired than (?:I(?: am)?|me))/gm'
  },
  {
    rus: 'Чья то машина? Она наша',
    eng: 'Whose car is that? It is ours',
    regEng: '/(?:Whose car is that\\? (?:It is|It’s) ours)/gm'
  },
  {
    rus: 'Мы более успешны, чем они',
    eng: 'We are more successful than they are',
    regEng: '/(?:(?:We are|We’re) more successful than (?:they(?: are)?|them))/gm'
  },
  {
    rus: 'Это её волосы? Нет, её светлее',
    eng: 'Is this her hair? No, hers is lighter',
    regEng: ''
  },
  {
    rus: 'Его еда вкуснее, чем моя',
    eng: 'His food is tastier than mine',
    regEng: '/(?:His food is (?:tastier|more delicious) than mine)/gm'
  },
  {
    rus: 'Я спокойнее, чем она',
    eng: 'I am calmer than she is',
    regEng: '/(?:(?:I am|I’m) calmer than (?:she(?: is)?|her))/gm'
  }
]
export default data