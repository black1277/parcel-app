// 10-14 > 13.2 > 9
const data = [
  {
    rus: 'От кого эти письма? Они от моих родственников в Англии',
    eng: 'Who are these letters from? They`re from my relatives in England',
    regEng: '/(?:(?:Whom? are these letters from\\?|From whom are these letters\\?) They are|(?:Whom? are these letters from\\?|From whom are these letters\\?) They[`’\']re) from my relatives in England/gm'
  },
  {
    rus: 'Моему сыну не нравятся собаки. Он их боится',
    eng: 'My son doesn`t like dogs. He`s afraid of them',
    regEng: '/My son (?:does not|doesn[`’\']t) like dogs. He(?: is|[`’\']s) afraid of them/gm'
  },
  {
    rus: 'Я хочу, чтобы мы поужинали вместе. Ты свободна сегодня вечером?',
    eng: 'I want us to have dinner together. Are you free tonight?',
    regEng: ''
  },
  {
    rus: 'Ваша статья детальнее и интереснее, чем у него',
    eng: 'Your article is more detailed and interesting than his',
    regEng: ''
  },
  {
    rus: 'Ты знаешь номер телефона её парня? Нет, но я знаю его адрес',
    eng: 'Do you know her boyfriend`s phone number? No, but I know his address',
    regEng: ''
  },
  {
    rus: 'Она хочет купить кое-какие книги, но у неё нет денег',
    eng: 'She wants to buy some books but she has no money',
    regEng: '/She wants to buy some books but she (?:does not have(?: any)?|doesn[`’\']t have(?: any)?|has no) money/gm'
  },
  {
    rus: 'То машина твоих родителей? Нет, она не их, она моего дяди',
    eng: 'Is that your parents` car? No, it`s not theirs, it`s my uncle`s',
    regEng: '/Is that your parents[`’\'] car\\? No, it(?: is not|[`’\']s not| isn[`’\']t) theirs, it(?: is|[`’\']s) my uncle[`’\']s/gm'
  },
  {
    rus: 'Нет причины торопиться. У нас осталось немного времени',
    eng: 'There`s no reason to hurry. We have some time left',
    regEng: '/There(?: is not any|[`’\']s not any| isn[`’\']t any| is no|[`’\']s no) reason to (?:hurry.|rush.) We have (?:a little|some) time left/gm'
  }
]
export default data