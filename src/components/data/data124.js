// 06-09 > 9.4 > 14
const data = [
  {
    rus: 'Эта одежда их, не наша',
    eng: 'These clothes are theirs, not ours',
    regEng: '/These clothes are theirs, (?:not ours|they are not ours|they’re not ours|these are not ours|these aren’t ours)/gm'
  },
  {
    rus: 'Этот мужчина не всегда будет гордиться своей дочерью',
    eng: 'This man will not always be proud of his daughter',
    regEng: '/This man (?:will not|won’t) always be proud of his daughter/gm'
  },
  {
    rus: 'Завтра я попытаюсь закончить это упражнение',
    eng: 'Tomorrow I will try to finish this exercise',
    regEng: '/Tomorrow (?:I will|I’ll) try to finish this exercise/gm'
  },
  {
    rus: 'Ей нравится шоколад?',
    eng: 'Does she like chocolate?',
    regEng: ''
  },
  {
    rus: 'Чьи это платья? Они твои',
    eng: 'Whose dresses are these? They are yours',
    regEng: '/Whose dresses are these\\? (?:They are|They’re) yours/gm'
  }
]
export default data