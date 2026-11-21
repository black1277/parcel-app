// 10-14 > 10.2 > 8
const data = [
  {
    rus: 'Куда они ездили прошлым летом? Они ездили в Англию',
    eng: 'Where did they go last summer? They went to England',
    regEng: ''
  },
  {
    rus: 'Я помог ей с этой проблемой месяц назад. Она была очень счастлива',
    eng: 'I helped her with this problem a month ago. She was very happy',
    regEng: ''
  },
  {
    rus: 'Когда ты купил эти брюки? Я купил их прошлой весной',
    eng: 'When did you buy these trousers? I bought them last spring',
    regEng: '/When did you buy these (?:trousers|pants)\\? I bought them last spring/gm'
  },
  {
    rus: 'Будешь ли ты вовремя завтра? Нет, я опоздаю. Я сожалею',
    eng: 'Will you be on time tomorrow? No, I will be late. I am sorry',
    regEng: '/Will you be on time tomorrow\\? No, I(?: will|[`’\']ll) be late. I(?: am|[`’\']m) sorry/gm'
  },
  {
    rus: 'Каждую зиму она ездит в это место на поезде',
    eng: 'Every winter she goes to this place by train',
    regEng: ''
  },
  {
    rus: 'Что он хочет, чтобы мы сделали? Он хочет, чтобы мы прочитали это сообщение',
    eng: 'What does he want us to do? He wants us to read this message',
    regEng: ''
  },
  {
    rus: 'Это удивительная песня! Я хочу, чтобы вы послушали её',
    eng: 'This is an amazing song! I want you to listen to it',
    regEng: '/(?:This is|It is|It[`’\']s) an amazing song! I want you to listen to it/gm'
  }
]
export default data