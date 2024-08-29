// 01-05 > 5.1 > 4
const data = [
  {
    rus: 'Они пообедали час назад',
    eng: 'They had lunch an hour ago',
    regEng: '/(?:They had lunch an hour ago)|(?:An hour ago they had lunch)/gm'
  },
  {
    rus: 'Они не пообедали час назад',
    eng: 'They did not have lunch an hour ago',
    regEng: '/(?:They (?:did not|didn’t) have lunch an hour ago)|(?:An hour ago they (?:did not|didn’t) have lunch)/gm'
  },
  {
    rus: 'Пообедали ли они час назад?',
    eng: 'Did they have lunch an hour ago?'
  },
  {
    rus: 'Когда они пообедали?',
    eng: 'When did they have lunch?'
  },
  {
    rus: 'Она поехала на работу на машине час назад',
    eng: 'She went to work by car an hour ago',
    regEng: '/(?:She went to work by car an hour ago)|(?:An hour ago she went to work by car)/gm'
  },
  {
    rus: 'Она не поехала на работу на машине час назад',
    eng: 'She did not go to work by car an hour ago',
    regEng: '/(?:She (?:did not|didn’t) go to work by car an hour ago)|(?:An hour ago she (?:did not|didn’t) go to work by car)/gm'
  },
  {
    rus: 'Поехала ли она на работу на машине час назад?',
    eng: 'Did she go to work by car an hour ago?'
  },
  {
    rus: 'Когда она поехала на работу на машине?',
    eng: 'When did she go to work by car?'
  }
]
export default data