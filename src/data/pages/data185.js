// 10-14 > 12.2 > 7
const data = [
  {
    rus: 'Она завтракает в данный момент',
    eng: 'She is having breakfast at the moment',
    regEng: '/She(?: is|[`’\']s) having breakfast at the moment/gm'
  },
  {
    rus: 'Она не завтракает в данный момент',
    eng: 'She is not having breakfast at the moment',
    regEng: '/She(?: is not|[`’\']s not| isn[`’\']t) having breakfast at the moment/gm'
  },
  {
    rus: 'Завтракает ли она в данный момент?',
    eng: 'Is she having breakfast at the moment?',
    regEng: ''
  },
  {
    rus: 'Что она делает в данный момент?',
    eng: 'What is she doing at the moment?',
    regEng: ''
  },
  {
    rus: 'Мы делаем ужин сейчас',
    eng: 'We are making dinner now',
    regEng: '/We(?: are|[`’\']re) making dinner now/gm'
  },
  {
    rus: 'Мы не делаем ужин сейчас',
    eng: 'We are not making dinner now',
    regEng: '/We(?: are not|[`’\']re not| aren[`’\']t) making dinner now/gm'
  },
  {
    rus: 'Делаем ли мы ужин сейчас?',
    eng: 'Are we making dinner now?',
    regEng: ''
  },
  {
    rus: 'Что мы делаем сейчас?',
    eng: 'What are we doing now?',
    regEng: ''
  }
]
export default data