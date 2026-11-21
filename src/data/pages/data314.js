// 17-20 > 17.4 > 15
const data = [
  {
    rus: 'Есть ли что-нибудь важное, что вам нужно, чтобы я сделал? Да, мне нужно, чтобы ты сделал обед',
    eng: 'Is there anything important that you need me to do? Yes, I need you to make lunch',
    regEng: '/Is there anything important (?:that )?you need me to do\\? Yes, I need you to make lunch/gm'
  },
  {
    rus: 'Возможно ли забронировать рейс в Лондон прямо сейчас? Да, конечно. Минуточку',
    eng: 'Is it possible to book a flight to London right now? Yes, of course. Just a minute',
    regEng: '/Is it possible to book a flight to London right now\\? Yes, of course. Just a (?:minute|moment)/gm'
  },
  {
    rus: 'Что значит это предложение? Я не знаю. Я всё ещё пытаюсь понять его',
    eng: 'What does this sentence mean? I don`t know. I`m still trying to understand it',
    regEng: '/What does this sentence mean\\? I (?:do not|don[`’\']t) know. I(?: am|[`’\']m) still trying to understand it/gm'
  },
  {
    rus: 'Вы наслаждаетесь своей жизнью, в общем? О, да! Я благодарен за каждый день!',
    eng: 'Do you enjoy your life in general? Oh yes, I`m thankful for every day!',
    regEng: '/Do you enjoy your life in general\\? Oh yes, I(?: am thankful| am grateful|[`’\']m thankful|[`’\']m grateful) for (?:every|each) day!/gm'
  },
  {
    rus: 'Все думают, что английский сложный, но я думаю, что английский – веселье!',
    eng: 'Everybody thinks that English is difficult but I think that English is fun!',
    regEng: '/(?:(?:Everybody|Everyone) thinks(?: that)? English is (?:complicated|difficult) but I think that|(?:(?:Everyone thinks(?: that)?|Everybody thinks) English is complicated|(?:Everybody|Everyone) thinks(?: that)? English is difficult) but I think) English is fun!/gm'
  }
]
export default data