// 01-05 > 2.2 > 2
const data = [
  {
    rus: 'Ей нужно, чтобы я нашёл новую работу',
    eng: 'She needs me to find a new job',
    regEng: ''
  },
  {
    rus: 'Я хочу, чтобы этот мужчина помог мне',
    eng: 'I want this man to help me',
    regEng: ''
  },
  {
    rus: 'Этим женщинам нужно, чтобы вы послушали их',
    eng: 'These women need you to listen to them',
    regEng: ''
  },
  {
    rus: 'Он хочет, чтобы его ребенок почистил свои зубы',
    eng: 'He wants his child to brush his teeth',
    regEng: '/He wants his (?:child|kid) to brush his teeth/gm'
  },
  {
    rus: 'Нам нужно, чтобы этот человек дал нам хорошую идею',
    eng: 'We need this person to give us a good idea',
    regEng: ''
  },
  {
    rus: 'Ваши дети хотят, чтобы вы поиграли с ними',
    eng: 'Your children want you to play with them',
    regEng: '/Your (?:children|kids) want you to play with them/gm'
  }
]
export default data