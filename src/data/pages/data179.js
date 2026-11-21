// 10-14 > 12.1 > 10
const data = [
  {
    rus: 'Мы делаем торт сейчас',
    eng: 'We are making a cake now',
    regEng: '/We(?: are|[`’\']re) making a cake now/gm'
  },
  {
    rus: 'Мы не делаем торт сейчас',
    eng: 'We are not making a cake now',
    regEng: '/We(?: are not|[`’\']re not| aren[`’\']t) making a cake now/gm'
  },
  {
    rus: 'Делаем ли мы торт сейчас?',
    eng: 'Are we making a cake now?',
    regEng: ''
  },
  {
    rus: 'Что мы делаем сейчас?',
    eng: 'What are we doing now?',
    regEng: ''
  },
  {
    rus: 'Он играет в теннис в данный момент',
    eng: 'He is playing tennis at the moment',
    regEng: '/He(?: is|[`’\']s) playing tennis at the moment/gm'
  },
  {
    rus: 'Он не играет в теннис в данный момент',
    eng: 'He is not playing tennis at the moment',
    regEng: '/He(?: is not|[`’\']s not| isn[`’\']t) playing tennis at the moment/gm'
  },
  {
    rus: 'Играет ли он в теннис в данный момент?',
    eng: 'Is he playing tennis at the moment?',
    regEng: ''
  },
  {
    rus: 'Что он делает в данный момент?',
    eng: 'What is he doing at the moment?',
    regEng: '/What(?: is|[`’\']s) he doing at the moment\\?/gm'
  }
]
export default data