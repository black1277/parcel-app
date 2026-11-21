// 10-14 > 12.1 > 9
const data = [
  {
    rus: 'Я пишу письмо сейчас',
    eng: 'I am writing a letter now',
    regEng: '/I(?: am|[`’\']m) writing a letter now/gm'
  },
  {
    rus: 'Я не пишу письмо сейчас',
    eng: 'I am not writing a letter now',
    regEng: '/I(?: am|[`’\']m) not writing a letter now/gm'
  },
  {
    rus: 'Пишу ли я письмо сейчас?',
    eng: 'Am I writing a letter now?',
    regEng: ''
  },
  {
    rus: 'Что я делаю сейчас?',
    eng: 'What am I doing now?',
    regEng: ''
  },
  {
    rus: 'Она смотрит телевизор в данный момент',
    eng: 'She is watching TV at the moment',
    regEng: '/She(?: is|[`’\']s) watching TV at the moment/gm'
  },
  {
    rus: 'Она не смотрит телевизор в данный момент',
    eng: 'She is not watching TV at the moment',
    regEng: '/She(?: is not|[`’\']s not| isn[`’\']t) watching TV at the moment/gm'
  },
  {
    rus: 'Смотрит ли она телевизор в данный момент?',
    eng: 'Is she watching TV at the moment?',
    regEng: ''
  },
  {
    rus: 'Что она делает в данный момент?',
    eng: 'What is she doing at the moment?',
    regEng: '/What(?: is|[`’\']s) she doing at the moment\\?/gm'
  }
]
export default data