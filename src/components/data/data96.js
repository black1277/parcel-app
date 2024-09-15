// 06-09 > 8.2 > 8
const data = [
  {
    rus: 'Чем интересуется ваш муж? Он интересуется литературой и музыкой',
    eng: 'What is your husband interested in? He is interested in literature and music',
    regEng: '/(?:What is your husband interested in\\? (?:He is|He’s) interested in literature and music)/gm'
  },
  {
    rus: 'Вашему малышу холодно? Нет, ему жарко',
    eng: 'Is your baby cold? No, he is hot',
    regEng: '/(?:Is your baby cold\\? No, (?:he is|he’s) hot)/gm'
  },
  {
    rus: 'Он хочет, чтобы мы познакомились с его новой девушкой',
    eng: 'He wants us to meet his new girlfriend',
    regEng: ''
  },
  {
    rus: 'Кто готов помочь нам сегодня?',
    eng: 'Who is ready to help us today?',
    regEng: ''
  },
  {
    rus: 'Почему ты всё время опаздываешь? Я не знаю',
    eng: 'Why are you late all the time? I do not know',
    regEng: '/(?:Why are you late all the time\\? I (?:do not|don’t) know)/gm'
  },
  {
    rus: 'Кого вы хотите, чтобы я слушал?',
    eng: 'Who do you want me to listen to?',
    regEng: ''
  },
  {
    rus: 'Он такой серьёзный человек. Он всегда приходит вовремя',
    eng: 'He is such a serious person. He is always on time',
    regEng: '/(?:(?:He is|He’s) such a serious person. (?:He is|He’s) always on time)/gm'
  }
]
export default data