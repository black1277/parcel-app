const data = [
  {
    rus: 'Они иногда обедают здесь во вторник',
    eng: 'They sometimes have lunch here on Tuesday',
    regEng: '/(?:They sometimes have lunch here on Tuesday)|(?:On Tuesday they sometimes have lunch here)/gm'
  },
  {
    rus: 'Они не обедают здесь во вторник',
    eng: 'They do not have lunch here on Tuesday',
    regEng: '/(?:They (?:do not|don’t) have lunch here on Tuesday)|(?:On Tuesday they (?:do not|don’t) have lunch here)/gm'
  },
  {
    rus: 'Обедают ли они иногда здесь во вторник?',
    eng: 'Do they sometimes have lunch here on Tuesday?'
  },
  {
    rus: 'Почему они иногда обедают здесь во вторник?',
    eng: 'Why do they sometimes have lunch here on Tuesday?'
  },
  {
    rus: 'Он часто ужинает там в понедельник',
    eng: 'He often has dinner there on Monday'
  },
  {
    rus: 'Он не часто ужинает там в понедельник',
    eng: 'He does not often have dinner there on Monday',
    regEng: '/(?:He (?:does not|doesn’t) often have dinner there on Monday)|(?:On Monday he (?:does not|doesn’t) often have dinner there)/gm'
  },
  {
    rus: 'Ужинает ли он там часто в понедельник?',
    eng: 'Does he often have dinner there on Monday?'
  },
  {
    rus: 'Почему он часто ужинает там в понедельник?',
    eng: 'Why does he often have dinner there on Monday?'
  }
]
export default data