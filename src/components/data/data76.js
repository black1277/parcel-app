// 06-09 > 7.2 > 8
const data = [
  {
    rus: 'Моя сестра отличный доктор',
    eng: 'My sister is an excellent doctor',
    regEng: ''
  },
  {
    rus: 'Тебе нравится играть в игры? Да, мне нравится играть в карты',
    eng: 'Do you like to play games? Yes, I like to play cards',
    regEng: '/Do you like to (?:play|playing) games\\? Yes, I like to play cards/gm'
  },
  {
    rus: 'На прошлой неделе они поужинали вместе',
    eng: 'Last week they had dinner together',
    regEng: '/(?:Last week they had dinner together)|(?:They had dinner together last week)/gm'
  },
  {
    rus: 'Когда вы открыли свой магазин? Мы открыли свой магазин месяц назад',
    eng: 'When did you open your shop? We opened our shop a month ago',
    regEng: ''
  },
  {
    rus: 'Где живёт твоя подруга?',
    eng: 'Where does your friend live?',
    regEng: ''
  },
  {
    rus: 'С кем вы хотите, чтобы я поговорил?',
    eng: 'Who do you want me to talk to?',
    regEng: '/(?:Whom? do you want me to (?:talk|speak) (?:to|with)\\?)|(?:(?:To|With) whom do you want me to (?:talk|speak)\\?)/gm'
  },
  {
    rus: 'Когда её муж пришёл домой?',
    eng: 'When did her husband come home?',
    regEng: ''
  }
]
export default data