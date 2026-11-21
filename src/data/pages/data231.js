// 15-16 > 15.1 > 4
const data = [
  {
    rus: 'Как часто идёт дождь осенью?',
    eng: 'How often does it rain in autumn?',
    regEng: ''
  },
  {
    rus: 'Так чего мы ждём? Пойдём!',
    eng: 'So what are we waiting for? Let`s go!',
    regEng: '/So what are we waiting for\\? Let(?: us|[`’\']s) go!/gm'
  },
  {
    rus: 'Оставь свой зонтик здесь. Сейчас не идёт дождь',
    eng: 'Leave your umbrella here. It`s not raining now',
    regEng: '/Leave your umbrella here. (?:It(?: is not|[`’\']s not| isn[`’\']t) raining now|Now it(?: is not|[`’\']s not| isn[`’\']t) raining)/gm'
  },
  {
    rus: 'Пожалуйста, не беспокойся! Она уже идёт',
    eng: 'Please don`t worry! She`s already coming',
    regEng: '/(?:(?:Do not (?:be worried|worry)|Don[`’\']t (?:be worried|worry)), please|Please (?:do not|don[`’\']t) be worried|Please (?:do not|don[`’\']t) worry)! She(?: is|[`’\']s) already coming/gm'
  },
  {
    rus: 'Надень своё пальто, пожалуйста. Идёт снег',
    eng: 'Put on your coat, please. It`s snowing',
    regEng: '/(?:Put on your coat, please. It(?: is|[`’\']s)|Please put on your coat. It(?: is|[`’\']s)) snowing/gm'
  },
  {
    rus: 'На улице так жарко. Давайте останемся внутри',
    eng: 'It`s so hot outside. Let`s stay inside',
    regEng: '/It(?: is|[`’\']s) so hot outside. Let(?: us|[`’\']s) stay inside/gm'
  },
  {
    rus: 'Пожалуйста, не трогай меня. Я сплю',
    eng: 'Please don`t touch me. I`m sleeping',
    regEng: '/(?:Do not touch me, please. I(?: am|[`’\']m)|Please (?:do not|don[`’\']t) touch me. I(?: am|[`’\']m)|Don[`’\']t touch me, please. I(?: am|[`’\']m)) sleeping/gm'
  },
  {
    rus: 'Поспеши, пожалуйста! Мы уже ужинаем',
    eng: 'Hurry up, please! We`re already having dinner',
    regEng: '/(?:Hurry(?: up)?, please|Please hurry up|Please hurry)! We(?: are|[`’\']re) already having dinner/gm'
  }
]
export default data