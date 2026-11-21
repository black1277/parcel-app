// 15-16 > 15.2 > 7
const data = [
  {
    rus: 'Как тот чай пахнет? О, он пахнет чудесно',
    eng: 'How does that tea smell? Oh, it smells wonderful',
    regEng: ''
  },
  {
    rus: 'Так тебе нравятся мои новые духи? Подожди, я их нюхаю',
    eng: 'So do you like my new perfume? Wait, I`m smelling it',
    regEng: '/So do you like my new perfume\\? Wait, I(?: am|[`’\']m) smelling it/gm'
  },
  {
    rus: 'У них есть какие-нибудь идеи? Да, у них есть несколько отличных идей',
    eng: 'Do they have any ideas? Yes, they have a few excellent ideas',
    regEng: '/Do they have any ideas\\? Yes, they have (?:a few|some) excellent ideas/gm'
  },
  {
    rus: 'Ты уже завтракаешь? Нет, я всё ещё принимаю душ',
    eng: 'Are you already having breakfast? No, I`m still having a shower',
    regEng: '/Are you already having breakfast\\? No, I(?: am|[`’\']m) still (?:having|taking) a shower/gm'
  },
  {
    rus: 'Что она там делает? Она пробует какую-то экзотическую еду',
    eng: 'What is she doing there? She`s tasting some exotic food',
    regEng: '/What is she doing there\\? She(?: is tasting|[`’\']s tasting| is trying|[`’\']s trying) some exotic food/gm'
  },
  {
    rus: 'Торт на вкус хороший? О, он на вкус замечательный!',
    eng: 'Does the cake taste good? Oh, it tastes great!',
    regEng: ''
  },
  {
    rus: 'О чём ты думаешь? Я всё ещё думаю о том фильме',
    eng: 'What are you thinking about? I`m still thinking about that film',
    regEng: '/What are you thinking about\\? I(?: am|[`’\']m) still thinking about that (?:movie|film)/gm'
  },
  {
    rus: 'Ты думаешь, что я толстая? О нет, я думаю, что ты очень красивая!',
    eng: 'Do you think that I`m fat? Oh no, I think that you`re very beautiful!',
    regEng: '/Do you think (?:that I(?: am|[`’\']m)|I am|I[`’\']m) fat\\? Oh no, I think (?:that you(?: are|[`’\']re)|you are|you[`’\']re) very beautiful!/gm'
  }
]
export default data