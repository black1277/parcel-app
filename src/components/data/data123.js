// 06-09 > 9.4 > 13
const data = [
  {
    rus: 'Что ему нужно искать?',
    eng: 'What does he need to look for?',
    regEng: '/What does he need to (?:look|search) for\\?/gm'
  },
  {
    rus: 'Это твои брюки? Эти брюки твои?',
    eng: 'Are these your trousers? Are these trousers yours?',
    regEng: '/Are these your (?:trousers|pants)\\? Are these (?:trousers|pants) yours\\?/gm'
  },
  {
    rus: 'Их бутерброды вкуснее, чем мои',
    eng: 'Their sandwiches are tastier than mine',
    regEng: '/Their sandwiches are (?:tastier|more delicious) than mine/gm'
  },
  {
    rus: 'Вы не опоздали в понедельник',
    eng: 'You were not late on Monday',
    regEng: '/(?:You (?:were not|weren’t) late on Monday)|(?:On Monday You (?:were not|weren’t) late)/gm'
  },
  {
    rus: 'Я хочу, чтобы мы пошли в это место вместе в четверг',
    eng: 'I want us to go to this place together on Thursday',
    regEng: '/(?:I want us to go to this place together on Thursday)|(?:On Thursday I want is to go to this place together)/gm'
  }
]
export default data