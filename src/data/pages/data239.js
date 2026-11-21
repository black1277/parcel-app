// 15-16 > 15.2 > 5
const data = [
  {
    rus: 'Я обещаю, что вернусь завтра',
    eng: 'I promise that I`ll be back tomorrow',
    regEng: '/(?:I promise (?:that I(?: will come|[`’\']ll come| will be|[`’\']ll be)|I will (?:come|be)|I[`’\']ll (?:come|be)) back tomorrow|I promise(?: that)? tomorrow I(?: will come|[`’\']ll come| will be|[`’\']ll be) back)/gm'
  },
  {
    rus: 'Она делает салат на ужин',
    eng: 'She`s making salad for dinner',
    regEng: '/(?:She(?: is|[`’\']s) cooking|She(?: is|[`’\']s) making) salad for dinner/gm'
  },
  {
    rus: 'Что значит это слово?',
    eng: 'What does this word mean?',
    regEng: ''
  },
  {
    rus: 'Я ищу кое-какую информацию',
    eng: 'I`m looking for some information',
    regEng: '/(?:I(?: am|[`’\']m) searching|I(?: am|[`’\']m) looking) for some information/gm'
  },
  {
    rus: 'Это не имеет значения вообще',
    eng: 'That doesn`t matter at all',
    regEng: '/(?:(?:That|This|It) does not|(?:That|This|It) doesn[`’\']t) matter at all/gm'
  },
  {
    rus: 'Кого ты ждешь?',
    eng: 'Who are you waiting for?',
    regEng: '/(?:Whom? are you waiting for\\?|For whom are you waiting\\?)/gm'
  },
  {
    rus: 'От чего это зависит?',
    eng: 'What does it depend on?',
    regEng: '/(?:What does (?:this|that|it) depend on\\?|On what does (?:this|that|it) depend\\?)/gm'
  },
  {
    rus: 'Кто знает, как открыть эту дверь?',
    eng: 'Who knows how to open this door?',
    regEng: ''
  }
]
export default data