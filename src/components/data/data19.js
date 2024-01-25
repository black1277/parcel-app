//  01-05 > 3.1 > 2
const data = [
  {
    rus: 'Мне нужно, чтобы ты пошёл туда завтра',
    eng: 'I need you to go there tomorrow',
    regEng: ''
  },
  {
    rus: 'Она хочет, чтобы мы купили ей новое платье',
    eng: 'She wants us to buy her a new dress',
    regEng: ''
  },
  {
    rus: 'Детям нужно, чтобы их родители разговаривали с ними',
    eng: 'Children need their parents to talk to them',
    regEng: '/(?:Children|Kids) need their parents to (?:talk|speak) (?:to|with) them/gm'
  },
  {
    rus: 'Мы хотим, чтобы вы показали нам ту картинку',
    eng: 'We want you to show us that picture',
    regEng: ''
  },
  {
    rus: 'Ему нужно, чтобы этот человек пришёл сюда завтра',
    eng: 'He needs this person to come here tomorrow',
    regEng: ''
  },
  {
    rus: 'Они хотят, чтобы я сделал это для них',
    eng: 'They want me to do it for them',
    regEng: '/They want me to do (?:it|that) for them/gm'
  }
]
export default data