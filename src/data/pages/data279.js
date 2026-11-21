// 15-16 > 16.2 > 3
const data = [
  {
    rus: 'Вы осознаёте, что это очень важная задача? Да, конечно',
    eng: 'Do you realize that it`s a very important task? Yes, of course!',
    regEng: '/Do you (?:realize (?:that (?:this is|that is|that[`’\']s|it is|it[`’\']s|is)|this is|that[`’\']s|it is|it[`’\']s)|realise (?:that (?:this is|that is|that[`’\']s|it is|it[`’\']s|is)|this is|that[`’\']s|it is|it[`’\']s)) a very important task\\? Yes, of course!/gm'
  },
  {
    rus: 'Что ты там делаешь? Я пробую эти макароны, и они на вкус восхитительны',
    eng: 'What are you doing there? I`m tasting this pasta and it tastes delicious',
    regEng: '/What are you doing there\\? I(?: am tasting|[`’\']m tasting| am trying|[`’\']m trying) this pasta and it tastes delicious/gm'
  },
  {
    rus: 'Из скольких уроков состоит курс? Он состоит всего из нескольких уроков',
    eng: 'How many lessons does the course consist of? It consists of just a few lessons',
    regEng: ''
  },
  {
    rus: 'Я понимаю всё, но я не согласен с некоторыми пунктами',
    eng: 'I understand everything but I don`t agree with some points',
    regEng: '/I understand everything but I (?:do not|don[`’\']t) agree with some points/gm'
  },
  {
    rus: 'О чём ты думаешь? О, я мечтаю о своём следующем отпуске',
    eng: 'What are you thinking about? Oh, I`m dreaming about my next holiday',
    regEng: '/What are you thinking about\\? Oh, I(?: am|[`’\']m) dreaming about my next (?:vacation|holiday)/gm'
  },
  {
    rus: 'Она нюхает соус и на её лице странное выражение. Поэтому я предполагаю, что он пахнет плохо',
    eng: 'She`s smelling the sauce and there`s a strange look on her face. So I suppose that it smells bad',
    regEng: '/She(?: is|[`’\']s) smelling the sauce and there(?: is|[`’\']s) a strange look on her face. So I suppose(?: that)? it smells bad/gm'
  },
  {
    rus: 'Что он обещает сделать? Он обещает помочь тебе с твоей домашней работой',
    eng: 'What does he promise to do? He promises to help you with your homework',
    regEng: ''
  },
  {
    rus: 'Эта юбка идёт мне? Я думаю, что она идёт тебе, но не подходит тебе по размеру, она слишком маленькая',
    eng: 'Does this skirt suit me? I think that it suits you but it doesn`t fit you, it`s too small',
    regEng: '/Does this skirt suit me\\? I think(?: that)? it suits you but it (?:does not|doesn[`’\']t) fit you, it(?: is|[`’\']s) too small/gm'
  }
]
export default data