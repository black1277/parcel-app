// 15-16 > 15.4 > 2
const data = [
  {
    rus: 'Мы не будем пытаться починить свою машину между двумя и четырьмя часами дня завтра',
    eng: 'We won`t be trying to fix our car between two and four o`clock in the afternoon tomorrow',
    regEng: '/(?:We(?: will not|[`’\']ll not| won[`’\']t) be trying to fix our car between two and four o[`’\']clock in the afternoon tomorrow|We(?: will not|[`’\']ll not| won[`’\']t) be trying to fix our car tomorrow between two and four o[`’\']clock in the afternoon)/gm'
  },
  {
    rus: 'Я буду делать ужин, когда он позвонит',
    eng: 'I`ll be making dinner when he calls',
    regEng: '/I(?: will|[`’\']ll) be making dinner when he calls/gm'
  },
  {
    rus: 'Я так хочу пить, мне нужно купить воды прямо сейчас',
    eng: 'I`m so thirsty, I need to buy some water right now',
    regEng: '/I(?: am|[`’\']m) so thirsty, I need to buy(?: some)? water right now/gm'
  },
  {
    rus: 'Что ты обычно делаешь после работы? Я обычно иду домой, чтобы поужинать со своей семьёй',
    eng: 'What do you usually do after work? I usually go home to have dinner with my family',
    regEng: ''
  },
  {
    rus: 'У них всего несколько простых вопросов задать тебе',
    eng: 'They have just a few simple questions to ask you',
    regEng: ''
  }
]
export default data