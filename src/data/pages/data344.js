// 17-20 > 19.2 > 6
const data = [
  {
    rus: 'Она уже виделась со своим братом сегодня',
    eng: 'She`s already seen her brother today',
    regEng: '/(?:She(?: has|[`’\']s) already seen her brother today|Today She(?: has|[`’\']s) already seen her brother)/gm'
  },
  {
    rus: 'Она ещё не виделась со своим братом сегодня',
    eng: 'She hasn`t seen her brother today yet',
    regEng: '/(?:(?:She(?: has not| hasn[`’\']t|[`’\']s not) seen her brother today|Today she(?: has not| hasn[`’\']t|[`’\']s not) seen her brother) yet|She(?: has not| hasn[`’\']t|[`’\']s not) seen her brother yet today)/gm'
  },
  {
    rus: 'Она уже виделась со своим братом сегодня?',
    eng: 'Has she seen her brother today yet?',
    regEng: '/Has she seen her brother (?:today yet\\?|yet today\\?)/gm'
  },
  {
    rus: 'Фильм только что начался',
    eng: 'The film has just started',
    regEng: '/The film(?: has|[`’\']s) just (?:started|begun)/gm'
  },
  {
    rus: 'Фильм ещё не начался',
    eng: 'The film hasn`t started yet',
    regEng: '/The film(?: has not started| hasn[`’\']t started|[`’\']s not started| has not begun| hasn[`’\']t begun|[`’\']s not begun) yet/gm'
  },
  {
    rus: 'Фильм уже начался?',
    eng: 'Has the film started yet?',
    regEng: '/Has the film (?:started|begun) yet\\?/gm'
  },
  {
    rus: 'Вы уже сделали ужин',
    eng: 'You`ve already made dinner',
    regEng: '/You(?: have|[`’\']ve) already made dinner/gm'
  },
  {
    rus: 'Вы ещё не сделали ужин',
    eng: 'You haven`t made dinner yet',
    regEng: '/You(?: have not| haven[`’\']t|[`’\']ve not) made dinner yet/gm'
  },
  {
    rus: 'Вы уже сделали ужин?',
    eng: 'Have you made dinner yet?',
    regEng: ''
  }
]
export default data