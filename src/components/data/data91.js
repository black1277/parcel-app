// 06-09 > 8.2 > 3
const data = [
  {
    rus: 'Это её серебряное кольцо. Это серебряное кольцо её',
    eng: 'This is her silver ring. This silver ring is hers',
    regEng: ''
  },
  {
    rus: 'То были ваши деньги. Те деньги были ваши',
    eng: 'That was your money. That money was yours',
    regEng: ''
  },
  {
    rus: 'Это мои золотые серёжки. Эти золотые серёжки мои',
    eng: 'These are my golden earrings. These golden earrings are mine',
    regEng: ''
  },
  {
    rus: 'Это его бутерброд. Этот бутерброд его',
    eng: 'This is his sandwich. This sandwich is his',
    regEng: ''
  },
  {
    rus: 'То их новая одежда. Та новая одежда их',
    eng: 'Those are their new clothes. Those new clothes are theirs',
    regEng: ''
  },
  {
    rus: 'Это наши жёлтые платья. Эти жёлтые платья наши',
    eng: 'These are our yellow dresses. These yellow dresses are ours',
    regEng: ''
  },
  {
    rus: 'То были мои старые ботинки. Те старые ботинки были мои',
    eng: 'Those were my old shoes. Those old shoes were mine',
    regEng: '/(?:Those were my old (?:shoes|boots)\\. Those old (?:shoes|boots) were mine)/gm'
  },
  {
    rus: 'То её синяя машина. Та синяя машина её',
    eng: 'That is her blue car. That blue car is hers',
    regEng: ''
  }
]
export default data