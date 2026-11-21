// 15-16 > 15.1 > 8
const data = [
  {
    rus: 'Вы верите в эту историю?',
    eng: 'Do you believe in this story?',
    regEng: ''
  },
  {
    rus: 'Я чиню свой компьютер в данный момент',
    eng: 'I`m fixing my computer at the moment',
    regEng: '/(?:At the moment I(?: am repairing|[`’\']m repairing| am fixing|[`’\']m fixing) my computer|(?:I(?: am|[`’\']m) repairing|I(?: am|[`’\']m) fixing) my computer at the moment)/gm'
  },
  {
    rus: 'Она не помнит тех людей',
    eng: 'She doesn`t remember those people',
    regEng: '/She (?:does not|doesn[`’\']t) remember those people/gm'
  },
  {
    rus: 'Он ищет работу',
    eng: 'He`s looking for a job',
    regEng: '/He(?: is|[`’\']s) looking for a job/gm'
  },
  {
    rus: 'Мне нужно, чтобы ты открыл окно',
    eng: 'I need you to open the window',
    regEng: ''
  },
  {
    rus: 'Эта книга состоит из четырёх частей',
    eng: 'This book consists of four parts',
    regEng: ''
  },
  {
    rus: 'Мы идём спать',
    eng: 'We`re going to bed',
    regEng: '/We(?: are|[`’\']re) going to (?:sleep|bed)/gm'
  },
  {
    rus: 'Всё зависит от тебя!',
    eng: 'Everything depends on you!',
    regEng: ''
  }
]
export default data