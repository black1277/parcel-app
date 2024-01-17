const data = [
  {
    rus: 'Эта женщина всегда готова помочь',
    eng: 'This woman is always ready to help',
    regEng: ''
  },
  {
    rus: 'Эта женщина не всегда готова помочь.',
    eng: 'This woman is not always ready to help',
    regEng: '/(?:This woman (?:is not|isn’t) always ready to help)/gm'
  },
  {
    rus: 'Готова ли эта женщина всегда помочь?',
    eng: 'Is this woman always ready to help?',
    regEng: ''
  },
  {
    rus: 'Что эта женщина всегда готова сделать?',
    eng: 'What is this woman always ready to do?',
    regEng: ''
  },
  {
    rus: 'Эти мужчины часто опаздывают',
    eng: 'These men are often late',
    regEng: ''
  },
  {
    rus: 'Эти мужчины не часто опаздывают',
    eng: 'These men are not often late',
    regEng: '/(?:These men (?:are not|aren’t) often late)/gm'
  },
  {
    rus: 'Опаздывают ли эти мужчины часто?',
    eng: 'Are these men often late?',
    regEng: ''
  },
  {
    rus: 'Почему эти мужчины часто опаздывают?',
    eng: 'Why are these men often late?',
    regEng: ''
  }
]
export default data