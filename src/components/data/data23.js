// 01-05 > 3.1 > 7
const data = [
  {
    rus: 'Она обычно ездит в этот город в пятницу',
    eng: 'She usually goes to this city on Friday',
    regEng: '/(?:She usually goes to this city on Friday)|(?:On Friday she usually goes to this city)/gm'
  },
  {
    rus: 'Она поехала в этот город в прошлую пятницу',
    eng: 'She went to this city last Friday',
    regEng: '/(?:She went to this city last Friday)|(?:Last Friday she went to this city)/gm'
  },
  {
    rus: 'Она поедет в этот город в следующую пятницу',
    eng: 'She will go to this city next Friday',
    regEng: '/(?:(?:She will|She’ll) go to this city next Friday)|(?:Next Friday (?:she will|she’ll) go to this city)/gm'
  },
  {
    rus: 'Мы иногда играем в теннис в среду',
    eng: 'We sometimes play tennis on Wednesday',
    regEng: '/(?:We sometimes play tennis on Wednesday)|(?:On Wednesday we sometimes play tennis)/gm'
  },
  {
    rus: 'Мы играли в теннис в прошлую среду',
    eng: 'We played tennis last Wednesday',
    regEng: '/(?:We played tennis last Wednesday)|(?:Last Wednesday We played tennis)/gm'
  },
  {
    rus: 'Мы поиграем в теннис в следующую среду',
    eng: 'We will play tennis next Wednesday',
    regEng: '/(?:(?:We will|We’ll) play tennis next Wednesday)|(?:Next Wednesday (?:we will|we’ll) play tennis)/gm'
  }
]
export default data