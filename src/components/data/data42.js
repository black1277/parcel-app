// 01-05 > 5.1 > 6
const data = [
  {
    rus: 'Они обычно ужинают со своими коллегами в четверг',
    eng: 'They usually have dinner with their colleagues on Thursday',
    regEng: '/(?:They usually have dinner with their colleagues on Thursday)|(?:On Thursday they usually have dinner with their colleagues)/gm'
  },
  {
    rus: 'Они обычно не ужинают со своими коллегами в четверг',
    eng: 'They do not usually have dinner with their colleagues on Thursday',
    regEng: '/(?:They (?:do not|don’t) usually have dinner with their colleagues on Thursday)|(?:On Thursday they (?:do not|don’t) usually have dinner with their colleagues)/gm'
  },
  {
    rus: 'Ужинают ли они обычно со своими коллегами в четверг?',
    eng: 'Do they usually have dinner with their colleagues on Thursday?'
  },
  {
    rus: 'С кем они обычно ужинают в четверг?',
    eng: 'Who do they usually have dinner with on Thursday?',
    regEng: '/(?:(?:Whom|Who|With whom) do they usually have dinner with on Thursday\\?)/gm'
  },
  {
    rus: 'Она всегда слушает эти песни в среду',
    eng: 'She always listens to these songs on Wednesday',
    regEng: '/(?:She always listens to these songs on Wednesday)|(?:On Wednesday she always listens to these songs)/gm'
  },
  {
    rus: 'Она не всегда слушает эти песни в среду',
    eng: 'She does not always listen to these songs on Wednesday',
    regEng: '/(?:She (?:does not|doesn’t) always listen to these songs on Wednesday)|(?:On Wednesday she (?:does not|doesn’t) always listen to these songs)/gm'
  },
  {
    rus: 'Слушает ли она всегда эти песни в среду?',
    eng: 'Does she always listen to these songs on Wednesday?'
  },
  {
    rus: 'Что она всегда слушает в среду?',
    eng: 'What does she always listen to on Wednesday?'
  }
]
export default data