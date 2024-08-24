// 01-05 > 4.2 > 3
const data36 = [
  {
    rus: 'Она часто тренируется перед работой',
    eng: 'She often exercises before work'
  },
  {
    rus: 'Она не тренируется перед работой',
    eng: 'She does not exercise before work',
    regEng: '/(?:She (?:does not|doesn’t) exercise before work)/gm'
  },
  {
    rus: 'Тренируется ли она перед работой?',
    eng: 'Does she exercise before work?'
  },
  {
    rus: 'Что она делает перед работой?',
    eng: 'What does she do before work?'
  },
  {
    rus: 'Вчера они съели все ваши пирожные',
    eng: 'Yesterday they ate all your cakes',
    regEng: '/(?:Yesterday they ate all your cakes)|(?:They ate all your cakes yesterday)/gm'
  },
  {
    rus: 'Вчера они не съели все ваши пирожные',
    eng: 'Yesterday they did not eat all your cakes',
    regEng: '/(?:Yesterday they (?:did not|didn’t) eat all your cakes)|(?:They (?:did not|didn’t) eat all your cakes yesterday)/gm'
  },
  {
    rus: 'Съели ли они все ваши пирожные вчера?',
    eng: 'Did they eat all your cakes yesterday?'
  },
  {
    rus: 'Когда они съели все ваши пирожные?',
    eng: 'When did they eat all your cakes?'
  }
]
export default data36