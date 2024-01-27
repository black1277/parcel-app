// 06-09 > 7.2 > 9
const data = [
  {
    rus: 'Мы всегда завтракаем рано',
    eng: 'We always have breakfast early',
    regEng: ''
  },
  {
    rus: 'Что она хочет послушать? Я не знаю',
    eng: 'What does she want to listen to? I do not know',
    regEng: '/What does she want to listen to\\? I (?:do not|don’t) know/gm'
  },
  {
    rus: 'Он встретил свою жену год назад',
    eng: 'He met his wife a year ago',
    regEng: '/(?:He met his wife a year ago)|(?:A year ago he met his wife)/gm'
  },
  {
    rus: 'Почему тебе нужно пойти туда?',
    eng: 'Why do you need to go there?',
    regEng: ''
  },
  {
    rus: 'Её брат такой успешный',
    eng: 'Her brother is so successful',
    regEng: ''
  },
  {
    rus: 'Вчера мы поехали на работу на такси',
    eng: 'Yesterday we went to work by taxi',
    regEng: '/(?:Yesterday we went to work by taxi)|(?:We went to work by taxi yesterday)/gm'
  },
  {
    rus: 'Что она пьёт каждое утро? Каждое утро она пьёт кофе',
    eng: 'What does she drink every morning? Every morning she drinks coffee',
    regEng: '/What does she drink every morning\\? (?:Every morning she drinks coffee|She drinks coffee every morning)/gm'
  },
  {
    rus: 'Эти люди такие добрые и дружелюбные',
    eng: 'These people are so kind and friendly',
    regEng: ''
  }
]
export default data