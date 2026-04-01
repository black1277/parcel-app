// 10-14 > 10.1 > 3
const data = [
  {
    rus: 'Я счастливее, чем они',
    eng: 'I am happier than them',
    regEng: '/(?:I am|I’m) happier than (?:them|they are|they)/gm'
  },
  {
    rus: 'Чья это одежда? Она наших сыновей',
    eng: 'Whose clothes are these? They are our sons`',
    regEng: '/Whose clothes are these\\? (?:They are|They’re|These) our sons’/gm'
  },
  {
    rus: 'Ты более талантливый, чем она',
    eng: 'You are more talented than her',
    regEng: '/(?:You are|You’re) more talented than (?:she(?: is)?|her)/gm'
  },
  {
    rus: 'Их дом больше, чем у их соседей',
    eng: 'Their house is bigger than their neighbours`',
    regEng: '/Their house is (?:bigger|larger) than their neighbou?rs`/gm'
  },
  {
    rus: 'Чьи то туфли? Они моей матери',
    eng: 'Whose shoes are those? They are my mother`s',
    regEng: '/Whose shoes are those\\? (?:They(?:`re)?|Those) are my (?:mother|mom|mum)`s/gm'
  },
  {
    rus: 'Эти часы не мои, они моего отца',
    eng: 'This watch is not mine, it is my father`s',
    regEng: '/This(?: watch)? (?:is not|isn`t) (?:mine|my watch), it(?: is|`s) my (?:father|dad|daddy)`s/gm'
  },
  {
    rus: 'Журналы твоих друзей интереснее, чем твои',
    eng: 'Your friends` magazines are more interesting than yours',
    regEng: ''
  }
]
export default data