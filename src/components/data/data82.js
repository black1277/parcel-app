// 06-09 > 7.4 > 9  06-09 > 7.4 > 10
const data = [
  {
    rus: 'Они начали новый проект прошлой весной',
    eng: 'They started a new project last spring',
    regEng: ''
  },
  {
    rus: 'Мы позавтракаем с вами через час',
    eng: 'We will have breakfast with you in an hour',
    regEng: '/(?:We will|We’ll) have breakfast with you in an hour/gm'
  },
  {
    rus: 'Кто вы?',
    eng: 'Who are you?',
    regEng: ''
  },
  {
    rus: 'Её дети всегда слушают её',
    eng: 'Her children always listen to her',
    regEng: ''
  },
  {
    rus: 'Женщины хотят, чтобы мужчины любили их',
    eng: 'Women want men to love them',
    regEng: ''
  },
  {
    rus: 'Что ты делаешь после работы?',
    eng: 'What do you do after work?',
    regEng: ''
  },
  {
    rus: 'Чтобы быть сильным и здоровым, ему нужно тренироваться',
    eng: 'To be strong and healthy he needs to exercise',
    regEng: '/(?:To be strong and healthy he needs to exercise)|(?:He needs to exercise to be strong and healthy)/gm'
  },
  {
    rus: 'С кем он поговорит через неделю?',
    eng: 'Who will he talk to in a week?',
    regEng: '/Who will he (?:talk|speak) (?:to|with) in a week\\?/gm'
  },
  {
    rus: 'Тот человек интересовался музыкой',
    eng: 'That person was interested in music',
    regEng: ''
  },
  {
    rus: 'Этим женщинам нужно, чтобы вы послушали их',
    eng: 'These women need you to listen to them',
    regEng: ''
  }
]
export default data