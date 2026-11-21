// 10-14 > 14.1 > 11
const data = [
  {
    rus: 'Вчера мой сын сдал все свои экзамены, и сегодня он празднует',
    eng: 'Yesterday my son passed all his exams and today he`s celebrating',
    regEng: '/Yesterday my son passed all his exams (?:yesterday and today he is|and today he[`’\']s) celebrating/gm'
  },
  {
    rus: 'Что ты обычно делаешь после работы? Я обычно иду домой, чтобы поужинать со своей семьёй',
    eng: 'What do you usually do after work? I usually go home to have dinner with my family',
    regEng: ''
  },
  {
    rus: 'Что ты делал, когда я тебе позвонил? Я спал',
    eng: 'What were you doing when I called you? I was sleeping',
    regEng: ''
  },
  {
    rus: 'Ты пошёл на ту вечеринку вчера? Нет, я решил закончить кое-какую работу',
    eng: 'Did you go to that party yesterday? No, I decided to finish some work',
    regEng: '/Did you go to (?:that|the) party yesterday\\? No, I decided to finish some work/gm'
  },
  {
    rus: 'Где твоя сумка? Я ищу её сейчас',
    eng: 'Where is your bag? I`m looking for it now',
    regEng: '/Where is your bag\\? I(?: am|[`’\']m) looking for it now/gm'
  },
  {
    rus: 'Когда она приедет домой? Она приедет домой через неделю',
    eng: 'When will she come home? She`ll come home in a week',
    regEng: '/When will she come home\\? She(?: will|[`’\']ll) come home in a week/gm'
  },
  {
    rus: 'Я тренировался, в то время как дети играли в видео игры',
    eng: 'I was exercising while the children were playing video games',
    regEng: '/I was (?:exercising|practicing|training) while the children were playing video games/gm'
  },
  {
    rus: 'Завтра в десять часов вечера мы будем ждать тебя здесь',
    eng: 'Tomorrow at ten o`clock in the evening we`ll be waiting for you here',
    regEng: '/Tomorrow at ten o[`’\']clock (?:in the evening we(?: will|[`’\']ll)|at night we(?: will|[`’\']ll)) be waiting for you here/gm'
  }
]
export default data