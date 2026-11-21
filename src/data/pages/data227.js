// 10-14 > 14.2 > 7
const data = [
  {
    rus: 'На кого она смотрит? Она смотрит на него',
    eng: 'Who is she looking at? She`s looking at him',
    regEng: '/(?:Whom? is|Who[`’\']s) she looking at\\? She(?: is|[`’\']s) looking at him/gm'
  },
  {
    rus: 'Вы поехали домой вчера? Нет, мы остались здесь',
    eng: 'Did you go home yesterday? No, we stayed here',
    regEng: ''
  },
  {
    rus: 'Что ты будешь делать между двумя и тремя часами дня завтра? Я буду делать пасту на ужин',
    eng: 'What will you be doing between two and three o`clock in the afternoon tomorrow? I`ll be making pasta for dinner',
    regEng: '/What will you be doing (?:between two and three o[`’\']clock in the afternoon tomorrow\\? I(?: will|[`’\']ll)|tomorrow between two and three o[`’\']clock in the afternoon\\? I(?: will|[`’\']ll)) be making pasta for dinner/gm'
  },
  {
    rus: 'Они обычно завтракают рано? Нет, они обычно завтракают поздно',
    eng: 'Do they usually have breakfast early? No, they usually have breakfast late',
    regEng: ''
  },
  {
    rus: 'О чём ты думаешь? Я думаю о своей семье',
    eng: 'What are you thinking about? I`m thinking about my family',
    regEng: '/What are you thinking about\\? I(?: am|[`’\']m) thinking (?:about|of) my family/gm'
  },
  {
    rus: 'Вы пойдёте на концерт с нами в четверг? Ну, мы решим завтра',
    eng: 'Will you go to the concert with us on Thursday? Well, we`ll decide tomorrow',
    regEng: '/(?:Are you going to (?:the|a) concert with us on Thursday\\? Well, we(?: will|[`’\']ll)|Will you go to (?:the|a) concert with us on Thursday\\? Well, we(?: will|[`’\']ll)) decide tomorrow/gm'
  },
  {
    rus: 'Я закончил тот проект вчера, и сегодня я не работаю',
    eng: 'I finished that project yesterday and today I`m not working',
    regEng: '/I (?:completed|finished) that project yesterday and today I(?: am|[`’\']m) not working/gm'
  },
  {
    rus: 'Мы ждём тебя! Да, я уже иду!',
    eng: 'We`re waiting for you! Yes, I`m already coming',
    regEng: '/We(?: are|[`’\']re) waiting for you! Yes, I(?: am|[`’\']m) already coming/gm'
  }
]
export default data