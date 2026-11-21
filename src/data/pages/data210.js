// 10-14 > 13.4 > 9
const data = [
  {
    rus: 'Это их дом? Нет, их там',
    eng: 'Is this their house? No, theirs is there',
    regEng: ''
  },
  {
    rus: 'Это цветы, которые он принёс в понедельник',
    eng: 'These are the flowers that he brought on Monday',
    regEng: '/These are the flowers (?:that )?he brought on Monday/gm'
  },
  {
    rus: 'Он не играет в теннис в данный момент',
    eng: 'He`s not playing tennis at the moment',
    regEng: '/(?:He(?: is not|[`’\']s not| isn[`’\']t) playing tennis at the moment|At the moment he(?: is not|[`’\']s not| isn[`’\']t) playing tennis)/gm'
  },
  {
    rus: 'Их бутерброды вкуснее, чем мои',
    eng: 'Their sandwiches are tastier than mine',
    regEng: '/Their sandwiches are (?:more (?:delicious|tasty)|tastier) than mine/gm'
  },
  {
    rus: 'О чём ты беспокоишься? Я беспокоюсь о своих экзаменах',
    eng: 'What are you worried about? I`m worried about my exams',
    regEng: '/What are you worried about\\? I(?: am|[`’\']m) worried about my exams/gm'
  }
]
export default data