// 10-14 > 12.2 > 6
const data = [
  {
    rus: 'Они разговаривают со своими друзьями сейчас',
    eng: 'They are talking to their friends now',
    regEng: '/(?:They are (?:speaking (?:with|to)|talking (?:with|to))|They[`’\']re (?:speaking (?:with|to)|talking (?:with|to))) their friends now/gm'
  },
  {
    rus: 'Они не разговаривают со своими друзьями сейчас',
    eng: 'They are not talking to their friends now',
    regEng: '/(?:They (?:are not (?:speaking (?:with|to)|talking (?:with|to))|aren[`’\']t (?:speaking (?:with|to)|talking (?:with|to)))|They[`’\']re not (?:speaking (?:with|to)|talking (?:with|to))) their friends now/gm'
  },
  {
    rus: 'Разговаривают ли они со своими друзьями сейчас?',
    eng: 'Are they talking to their friends now?',
    regEng: '/Are they (?:speaking (?:with|to)|talking (?:with|to)) their friends now\\?/gm'
  },
  {
    rus: 'Что они делают сейчас?',
    eng: 'What are they doing now?',
    regEng: ''
  },
  {
    rus: 'Я принимаю душ в данный момент',
    eng: 'I am having a shower at the moment',
    regEng: '/(?:I(?: am|[`’\']m) having|I(?: am|[`’\']m) taking) a shower at the moment/gm'
  },
  {
    rus: 'Я не принимаю душ в данный момент',
    eng: 'I am not having a shower at the moment',
    regEng: '/I(?: am|[`’\']m) not (?:having|taking) a shower at the moment/gm'
  },
  {
    rus: 'Принимаю ли я душ в данный момент?',
    eng: 'Am I having a shower at the moment?',
    regEng: '/Am I (?:having|taking) a shower at the moment\\?/gm'
  },
  {
    rus: 'Что я делаю в данный момент?',
    eng: 'What am I doing at the moment?',
    regEng: ''
  }
]
export default data