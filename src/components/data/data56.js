const data = [
  {
    rus: 'Я был здесь минуту назад',
    eng: 'I was here a minute ago',
    regEng: '/(?:I was here a minute ago)|(?:A minute ago I was here)/gm'
  },
  {
    rus: 'Я не был здесь минуту назад',
    eng: 'I was not here a minute ago',
    regEng: '/(?:I (?:was not|wasn’t) here a minute ago)|(?:A minute ago I (?:was not|wasn’t) here)/gm'
  },
  {
    rus: 'Был ли я здесь минуту назад?',
    eng: 'Was I here a minute ago?'
  },
  {
    rus: 'Где я был минуту назад?',
    eng: 'Where was I a minute ago?'
  },
  {
    rus: 'Они были там час назад',
    eng: 'They were there an hour ago',
    regEng: '/(?:They were there an hour ago)|(?:An hour ago they were there)/gm'
  },
  {
    rus: 'Они не были там час назад',
    eng: 'They were not there an hour ago',
    regEng: '/(?:They (?:were not|weren’t) there an hour ago)|(?:An hour ago they (?:were not|weren’t) there)/gm'
  },
  {
    rus: 'Были ли они там час назад?',
    eng: 'Were they there an hour ago?'
  },
  {
    rus: 'Где они были час назад?',
    eng: 'Where were they an hour ago?'
  }
]
export default data