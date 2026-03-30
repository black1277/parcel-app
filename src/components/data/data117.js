// 06-09 > 9.4 > 7
const data = [
  {
    rus: 'С кем он обычно ходит туда?',
    eng: 'Who does he usually go there with?',
    regEng: ''
  },
  {
    rus: 'Результаты моего брата лучше, чем мои',
    eng: 'My brother’s results are better than mine',
    regEng: ''
  },
  {
    rus: 'В декабре они редко ездят на работу на велосипеде',
    eng: 'In December they rarely go to work by bicycle',
    regEng: '/In December they (?:rarely|seldom) go to work by bicycle/gm'
  },
  {
    rus: 'Этот зелёный зонтик наш, не их',
    eng: 'This green umbrella is ours, not theirs',
    regEng: ''
  },
  {
    rus: 'С кем вы хотите, чтобы я поговорил?',
    eng: 'Who do you want me to talk to?',
    regEng: '/Who do you want me to talk (?:to|with)\\?/gm'
  }
]
export default data