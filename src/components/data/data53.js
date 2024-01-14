const data = [
  {
    rus: 'Они часто слушают этих людей',
    eng: 'They often listen to these people'
  },
  {
    rus: 'Они не часто слушают этих людей',
    eng: 'They do not often listen to these people',
    regEng: '/(?:They (?:do not|don’t) often listen to these people)/gm'
  },
  {
    rus: 'Слушают ли они часто этих людей?',
    eng: 'Do they often listen to these people?'
  },
  {
    rus: 'Кого они часто слушают?',
    eng: 'Who do they often listen to?',
    regEng: '/(?:(?:Who|whom|to whom) do they often listen to\\?)/gm'
  },
  {
    rus: 'Она всегда слушает такую музыку',
    eng: 'She always listens to such music'
  },
  {
    rus: 'Она не всегда слушает такую музыку',
    eng: 'She does not always listen to such music',
    regEng: '/(?:She (?:does not|doesn’t) always listen to such music)/gm'
  },
  {
    rus: 'Слушает ли она всегда такую музыку?',
    eng: 'Does she always listen to such music?'
  },
  {
    rus: 'Что она всегда слушает?',
    eng: 'What does she always listen to?'
  }
]
export default data