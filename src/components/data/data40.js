// 01-05 > 5.1 > 2
const data = [
  {
    rus: 'Она часто завтракает поздно в субботу',
    eng: 'She often has breakfast late on Saturday',
    regEng: '/(?:She often has breakfast late on Saturday)|(?:On Saturday she often has breakfast late)/gm'
  },
  {
    rus: 'Она не часто завтракает поздно в субботу',
    eng: 'She does not often have breakfast late on Saturday',
    regEng: '/(?:She (?:does not|doesn’t) often have breakfast late on Saturday)|(?:On Saturday she (?:does not|doesn’t) often have breakfast late)/gm'
  },
  {
    rus: 'Завтракает ли она часто поздно в субботу?',
    eng: 'Does she often have breakfast late on Saturday?'
  },
  {
    rus: 'Почему она часто завтракает поздно в субботу?',
    eng: 'Why does she often have breakfast late on Saturday?'
  },
  {
    rus: 'Они всегда ужинают рано в воскресенье',
    eng: 'They always have dinner early on Sunday',
    regEng: '/(?:They always have dinner early on Sunday)|(?:On Sunday they always have dinner early)/gm'
  },
  {
    rus: 'Они не всегда ужинают рано в воскресенье',
    eng: 'They do not always have dinner early on Sunday',
    regEng: '/(?:They (?:do not|don’t) always have dinner early on Sunday)|(?:On Sunday they (?:do not|don’t) always have dinner early)/gm'
  },
  {
    rus: 'Ужинают ли они всегда рано в воскресенье?',
    eng: 'Do they always have dinner early on Sunday?'
  },
  {
    rus: 'Почему они всегда ужинают рано в воскресенье?',
    eng: 'Why do they always have dinner early on Sunday?'
  }
]
export default data