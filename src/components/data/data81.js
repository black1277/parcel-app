// 06-09 > 7.4 > 7  06-09 > 7.4 > 8
const data = [
  {
    rus: 'У тебя такие белые зубы!',
    eng: 'You have such white teeth!',
    regEng: ''
  },
  {
    rus: 'Поехала ли она на работу на машине час назад?',
    eng: 'Did she go to work by car an hour ago?',
    regEng: ''
  },
  {
    rus: 'Где они были час назад?',
    eng: 'Where were they an hour ago?',
    regEng: ''
  },
  {
    rus: 'Чтобы быть здоровым, тебе нужно есть хорошую еду',
    eng: 'To be healthy you need to eat good food',
    regEng: ''
  },
  {
    rus: 'Что вы принесёте ему завтра?',
    eng: 'What will you bring him tomorrow?',
    regEng: ''
  },
  {
    rus: 'Они прочитали её важное сообщение вчера',
    eng: 'They read her important message yesterday',
    regEng: '/(?:They read her important message yesterday)|(?:Yesterday they read her important message)/gm'
  },
  {
    rus: 'Они готовы начать через минуту',
    eng: 'They are ready to start in a minute',
    regEng: '/(?:They are|They’re) ready to start in a minute/gm'
  },
  {
    rus: 'У этой семьи огромный дом',
    eng: 'This family has a huge house',
    regEng: ''
  },
  {
    rus: 'Он не часто ужинает там в понедельник',
    eng: 'He does not often have dinner there on Monday',
    regEng: '/He (?:does not|doesn’t) often have dinner there on Monday/gm'
  },
  {
    rus: 'О чём был тот фильм?',
    eng: 'What was that film about?',
    regEng: '/What was that (?:film|movie) about\\?/gm'
  }  
]
export default data