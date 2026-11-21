// 01-05 > 1.2 > 5
const data = [
  {
    rus: 'Он знает каждую красивую девушку здесь',
    eng: 'He knows every beautiful girl here'
  },
  {
    rus: 'У меня есть хороший вопрос',
    eng: 'I have a good question'
  },
  {
    rus: 'Она хочет купить новые дорогие туфли',
    eng: 'She wants to buy new expensive shoes'
  },
  {
    rus: 'Нам всегда нравится слышать твои истории',
    eng: 'We always like to hear your stories'
  },
  {
    rus: 'Кому нужно играть в эти видеоигры?',
    eng: 'Who needs to play these video games?'
  },
  {
    rus: 'Мы знаем такой интересный фильм!',
    eng: 'We know such an interesting film!',
    regEng: '/(?:We know such an interesting (?:film|movie)!)/gm'
  },
  {
    rus: 'Эти женщины редко носят такие брюки',
    eng: 'These women rarely wear such trousers',
    regEng: '/(?:These women (?:rarely|seldom) wear such (?:trousers|pants))/gm'
  }
]
export default data