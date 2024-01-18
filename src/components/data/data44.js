const data = [
  {
    rus: 'Мы часто ищем интересные книги здесь',
    eng: 'We often look for interesting books here',
    regEng: '/(?:We often (?:look|search) for interesting books here)/gm'
  },
  {
    rus: 'Мы не часто ищем интересные книги здесь',
    eng: 'We do not often look for interesting books here',
    regEng: '/(?:We (?:do not|don’t) often (?:look|search) for interesting books here)/gm'
  },
  {
    rus: 'Ищем ли мы часто интересные книги здесь?',
    eng: 'Do we often look for interesting books here?',
    regEng: '/(?:Do we often (?:look|search) for interesting books here\\?)/gm'
  },
  {
    rus: 'Что мы часто ищем здесь?',
    eng: 'What do we often look for here?',
    regEng: '/(?:What do we often (?:look|search) for here\\?)/gm'
  },
  {
    rus: 'Он обычно ходит туда со своими родителями',
    eng: 'He usually goes there with his parents.'
  },
  {
    rus: 'Он обычно не ходит туда со своими родителями',
    eng: 'He does not usually go there with his parents',
    regEng: '/(?:He (?:does not|doesn’t) usually go there with his parents)/gm'
  },
  {
    rus: 'Ходит ли он обычно туда со своими родителями?',
    eng: 'Does he usually go there with his parents?'
  },
  {
    rus: 'С кем он обычно ходит туда?',
    eng: 'Who does he usually go there with?'
  }
]
export default data