// 10-14 > 13.4 > 14
const data = [
  {
    rus: 'У неё есть хобби? Ну, она интересуется одеждой и модой',
    eng: 'Does she have a hobby? Well, she`s interested in clothes and fashion',
    regEng: '/Does she have a hobby\\? Well, she(?: is|[`’\']s) interested in clothes and fashion/gm'
  },
  {
    rus: 'Было немножко воды в чайнике',
    eng: 'There was a little water in the kettle',
    regEng: ''
  },
  {
    rus: 'Он выше меня',
    eng: 'He`s taller than me',
    regEng: '/He(?: is|[`’\']s) taller than (?:I am|me|I)/gm'
  },
  {
    rus: 'Эта одежда их, не наша',
    eng: 'These clothes are theirs, not ours',
    regEng: '/These clothes are theirs, (?:(?:(?:these|they) are|they[`’\']re) not|these aren[`’\']t|not) ours/gm'
  },
  {
    rus: 'Я принимаю душ в данный момент',
    eng: 'I`m having a shower at the moment',
    regEng: '/(?:I(?: am|[`’\']m) having|I(?: am|[`’\']m) taking) a shower at the moment/gm'
  }
]
export default data