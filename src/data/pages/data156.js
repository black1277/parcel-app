// 10-14 > 11.2 > 7
const data = [
  {
    rus: 'Сколько машин у твоего мужа?',
    eng: 'How many cars does your husband have?',
    regEng: ''
  },
  {
    rus: 'У него очень мало знаний в этой области',
    eng: 'He has very little knowledge in this field',
    regEng: '/He has very little knowledge in this (?:domain|field|area)/gm'
  },
  {
    rus: 'Сколько сахара ты хочешь?',
    eng: 'How much sugar do you want?',
    regEng: ''
  },
  {
    rus: 'Она купила несколько новых юбок вчера',
    eng: 'She bought a few new skirts yesterday',
    regEng: ''
  },
  {
    rus: 'Мне нужно, чтобы ты принёс мне чуть-чуть молока',
    eng: 'I need you to bring me a little milk',
    regEng: ''
  },
  {
    rus: 'Для тебя было мало важных сообщений',
    eng: 'There were few important messages for you',
    regEng: ''
  },
  {
    rus: 'Сколько шоколада вы обычно едите?',
    eng: 'How much chocolate do you usually eat?',
    regEng: '/How much chocolate do you (?:usually eat\\?|eat usually\\?)/gm'
  },
  {
    rus: 'На тарелке есть немного сыра',
    eng: 'There is a little cheese on the plate',
    regEng: '/There(?: is|[`’\']s) a little cheese on the plate/gm'
  }
]
export default data