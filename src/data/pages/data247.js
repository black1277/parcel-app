// 15-16 > 15.4 > 4
const data = [
  {
    rus: 'Я не начинаю нервничать по поводу экзамена',
    eng: 'I`m not getting nervous about the exam',
    regEng: '/I(?: am|[`’\']m) not getting nervous about the exam/gm'
  },
  {
    rus: 'Мы не много слышали новостей об этом мероприятии вчера',
    eng: 'We didn`t hear much news about this event yesterday',
    regEng: '/We (?:did not|didn[`’\']t) hear (?:a lot of|lots of|much) news about this event yesterday/gm'
  },
  {
    rus: 'Давайте поможем ей. Она пытается открыть дверь',
    eng: 'Let`s help her. She`s trying to open the door',
    regEng: '/Let(?: us|[`’\']s) help her. She(?: is|[`’\']s) trying to open the door/gm'
  },
  {
    rus: 'Я закончил тот проект вчера, и сегодня я не работаю',
    eng: 'I finished that project yesterday and today I`m not working',
    regEng: '/I (?:completed|finished) that project yesterday and today I(?: am|[`’\']m) not working/gm'
  },
  {
    rus: 'Где он? Я хочу поговорить с ним. Он вернётся через несколько минут. Просто подождите здесь',
    eng: 'Where is he? I want to talk to him. He`ll be back in a few minutes. Just wait here',
    regEng: '/Where is he\\? I want to talk (?:with|to) him. He(?: will come|[`’\']ll come| will be|[`’\']ll be) back in a few minutes. Just wait here/gm'
  }
]
export default data