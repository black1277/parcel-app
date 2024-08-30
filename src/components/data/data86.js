// 06-09 > 8.1 > 3 06-09 > 8.1 > 5
const data = [
  {
    rus: 'Чей это дом? Это дом моего соседа',
    eng: 'Whose house is this? This is my neighbour`s house',
    regEng: '/(?:Whose house is this\\? This is my neighbou?r’s house)/gm'
  },
  {
    rus: 'То были документы его коллеги? Нет, то были документы не его коллеги',
    eng: 'Were those his colleague`s documents? No, those were not his colleague`s documents',
    regEng: '/(?:Were those his colleague’s documents\\? No, those (?:were not|weren’t) his colleague’s documents)/gm'
  },
  {
    rus: 'Чьи это туфли? Это туфли нашей бабушки',
    eng: 'Whose shoes are these? These are our grandmother`s shoes',
    regEng: '/(?:Whose shoes are these\\? These are our (?:grandmother\\’s|granny\\’s) (?:shoes|boots))/gm'
  },
  {
    rus: 'Это ручка твоей подруги? Нет, это ручка не моей подруги',
    eng: 'Is this your friend`s pen? No, this is not my friend`s pen',
    regEng: '/(?:Is this your friend’s pen\\? No, this (?:is not|isn’t) my friend’s pen)/gm'
  },
  {
    rus: 'Это моё пальто. Это пальто моё',
    eng: 'This is my coat. This coat is mine',
    regEng: ''
  },
  {
    rus: 'Это твои брюки? Эти брюки твои?',
    eng: 'Are these your trousers? Are these trousers yours?',
    regEng: '/(?:Are these your (?:trousers|pants)\\? Are these (?:trousers|pants) yours\\?)/gm'
  },
  {
    rus: 'Это наши новые рубашки. Эти новые рубашки наши',
    eng: 'These are our new shirts. These new shirts are ours',
    regEng: ''
  },
  {
    rus: 'То было моё золотое кольцо? То золотое кольцо было моё?',
    eng: 'Was that my golden ring? Was that golden ring mine?',
    regEng: ''
  },
  {
    rus: 'Это наша одежда. Эта одежда наша',
    eng: 'These are our clothes. These clothes are ours',
    regEng: ''
  },
  {
    rus: 'То были их серебряные серёжки? Те серебряные серёжки были их?',
    eng: 'Were those their silver earrings? Were those silver earrings theirs?',
    regEng: ''
  },
  {
    rus: 'Это его старые часы. Эти старые часы его',
    eng: 'This is his old watch. This old watch is his',
    regEng: ''
  },
  {
    rus: 'Это её юбка? Эта юбка её?',
    eng: 'Is this her skirt? Is this skirt hers?',
    regEng: ''
  }
]
export default data