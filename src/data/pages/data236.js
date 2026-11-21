// 15-16 > 15.2 > 2
const data = [
  {
    rus: 'Пожалуйста, поспешите. Мы уже ужинаем',
    eng: 'Please hurry up! We`re already having dinner',
    regEng: '/(?:Hurry(?: up)?, please|Please hurry up|Please hurry)! We(?: are|[`’\']re) already having dinner/gm'
  },
  {
    rus: 'Здесь так жарко. Давай откроем окно',
    eng: 'It`s so hot here. Let`s open the window',
    regEng: '/It(?: is|[`’\']s) so hot here. Let(?: us|[`’\']s) open the window/gm'
  },
  {
    rus: 'Оставайтесь внутри, пожалуйста. Идёт снег',
    eng: 'Stay inside, please. It`s snowing',
    regEng: '/(?:Stay inside, please. It(?: is|[`’\']s)|Please stay inside. It(?: is|[`’\']s)) snowing/gm'
  },
  {
    rus: 'Послушай! Она поёт песню',
    eng: 'Listen! She`s singing a song',
    regEng: '/Listen! She(?: is|[`’\']s) singing a song/gm'
  },
  {
    rus: 'Пожалуйста, возьми фонарик. На улице темно',
    eng: 'Please take the flashlight. It`s dark outside',
    regEng: '/(?:Take (?:the|a) flashlight, please. It(?: is|[`’\']s)|Please take (?:the|a) flashlight. It(?: is|[`’\']s)) dark outside/gm'
  },
  {
    rus: 'Летом идёт дождь очень часто',
    eng: 'In summer it rains very often',
    regEng: '/(?:In summer it rains very often|It rains very often in summer)/gm'
  },
  {
    rus: 'Позвони мне, пожалуйста. Я начинаю нервничать',
    eng: 'Call me, please. I`m getting nervous',
    regEng: '/(?:(?:Call me, please. I(?: am|[`’\']m)|Please call me. I(?: am|[`’\']m)) starting to get|(?:Call me, please. I(?: am|[`’\']m)|Please call me. I(?: am|[`’\']m)) getting) nervous/gm'
  },
  {
    rus: 'Не беспокойтесь! Я уже делаю обед',
    eng: 'Don`t worry! I`m already making lunch',
    regEng: '/(?:Don not (?:be worried|worry)! I am|Don[`’\']t (?:be worried|worry)! I(?: am|[`’\']m)|Do not (?:be worried|worry)! I[`’\']m) already making lunch/gm'
  }
]
export default data