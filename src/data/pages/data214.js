// 10-14 > 13.4 > 13
const data = [
  {
    rus: 'Ты голоден? Нет, я сыт. Но я хочу пить',
    eng: 'Are you hungry? No, I`m full. But I`m thirsty',
    regEng: '/Are you hungry\\? No, I(?: am|[`’\']m) full. But I(?: am|[`’\']m) thirsty/gm'
  },
  {
    rus: 'Его тело более здоровое, чем её',
    eng: 'His body is healthier than hers',
    regEng: '/His body(?: is more healthy|[`’\']s more healthy| is healthier|[`’\']s healthier) than hers/gm'
  },
  {
    rus: 'То было платье его матери',
    eng: 'That was his mother`s dress',
    regEng: '/That was his (?:mother|mom|mum)[`’\']s dress/gm'
  },
  {
    rus: 'Сколько багажа она хочет взять с собой?',
    eng: 'How much luggage does she want to take with her?',
    regEng: ''
  },
  {
    rus: 'Чего боялись те дети?',
    eng: 'What were those children afraid of?',
    regEng: '/What were those children (?:afraid|scared) of\\?/gm'
  }
]
export default data