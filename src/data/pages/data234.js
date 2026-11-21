// 15-16 > 15.1 > 9
const data = [
  {
    rus: 'Эта одежда не подходит мне по размеру',
    eng: 'These clothes don`t fit me',
    regEng: '/These clothes (?:do not|don[`’\']t) fit me/gm'
  },
  {
    rus: 'Я ужинаю со своим братом',
    eng: 'I`m having dinner with my brother',
    regEng: '/I(?: am|[`’\']m) having dinner with my brother/gm'
  },
  {
    rus: 'Кому принадлежит эта вещь?',
    eng: 'Who does this thing belong to?',
    regEng: '/(?:Whom? does this thing belong to\\?|To whom does this thing belong\\?)/gm'
  },
  {
    rus: 'Она не слышит меня',
    eng: 'She doesn`t hear me',
    regEng: '/She (?:does not|doesn[`’\']t) hear me/gm'
  },
  {
    rus: 'Кого они ждут?',
    eng: 'Who are they waiting for?',
    regEng: '/(?:Whom? are they waiting for\\?|For whom are they waiting\\?)/gm'
  },
  {
    rus: 'Я согласен с тем человеком',
    eng: 'I agree with that person',
    regEng: ''
  },
  {
    rus: 'Что ты имеешь в виду?',
    eng: 'What do you mean?',
    regEng: ''
  },
  {
    rus: 'Он хочет поесть каши',
    eng: 'He wants to eat some porridge',
    regEng: '/He wants to eat (?:a little|some) porridge/gm'
  }
]
export default data