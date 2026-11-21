// 10-14 > 12.2 > 9
const data = [
  {
    rus: 'Имеются ли какие-нибудь проблемы с вашим компьютером? Нет, не имеется никаких проблем',
    eng: 'Are there any problems with your computer? No, there are no problems',
    regEng: '/Are there any problems with your computer\\? No, there (?:aren[`’\']t any|are no) problems/gm'
  },
  {
    rus: 'Мои результаты лучше, чем у Мэри, но хуже, чем твои',
    eng: 'My results are better than Mary`s, but worse than yours',
    regEng: ''
  },
  {
    rus: 'Мой брат работает доктором. Он женат и у него есть ребёнок',
    eng: 'My brother works as a doctor. He is married and has a child',
    regEng: '/My brother works as a doctor. He(?: is|[`’\']s) married and(?: he)? has a (?:child|baby|kid)/gm'
  },
  {
    rus: 'Твои волосы длиннее, чем у неё? Я не знаю',
    eng: 'Is your hair longer than hers? I do not know',
    regEng: '/Is your hair longer than hers\\? I (?:do not|don[`’\']t) know/gm'
  },
  {
    rus: 'Куда ты ездил прошлым летом? - Я ездил в Россию',
    eng: 'Where did you go last summer? I went to Russia',
    regEng: ''
  },
  {
    rus: 'Я взял машину вчера. Извини, что я не сказал тебе',
    eng: 'I took the car yesterday. I am sorry that I did not tell you',
    regEng: '/I took the car yesterday. I(?: am|[`’\']m) sorry(?: that)? I (?:did not|didn[`’\']t) tell you/gm'
  },
  {
    rus: 'У неё есть хобби? Ну, она интересуется одеждой и модой',
    eng: 'Does she have a hobby? Well, she is interested in clothes and fashion',
    regEng: '/Does she have a hobby\\? Well, she(?: is|[`’\']s) interested in clothes and fashion/gm'
  },
  {
    rus: 'Вы всегда так опаздываете? Нет, я обычно прихожу вовремя, но сегодня у меня было ЧП',
    eng: 'Are you always so late? No, I am usually on time, but today I had an accident',
    regEng: '/Are you always so late\\? No, I(?: am|[`’\']m) usually on time, but today I had an accident/gm'
  }
]
export default data