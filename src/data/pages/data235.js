// 15-16 > 15.1 > 11
const data = [
  {
    rus: 'О чем ты думаешь? Я думаю о моей следующей поездке',
    eng: 'What are you thinking about? I`m thinking about my next trip',
    regEng: '/What are you thinking about\\? I(?: am|[`’\']m) thinking about my next trip/gm'
  },
  {
    rus: 'Что ты думаешь об этой картине? Я думаю, что она удивительная!',
    eng: 'What do you think about this picture? I think that it`s amazing',
    regEng: '/What do you think about this (?:painting|picture)\\? I think (?:that it(?: is|[`’\']s)|it is|it[`’\']s) amazing/gm'
  },
  {
    rus: 'У него есть какие-нибудь вопросы? Нет, у него нет никаких вопросов',
    eng: 'Does he have any questions? No, he has no questions',
    regEng: '/Does he have any questions\\? No, he (?:does not have(?: any)?|doesn[`’\']t have(?: any)?|has no) questions/gm'
  },
  {
    rus: 'Что они там делают? Они просто веселятся',
    eng: 'What are they doing there? They`re just having fun',
    regEng: '/What are they doing there\\? They(?: are|[`’\']re) just having fun/gm'
  },
  {
    rus: 'Как эта еда на вкус? О, она на вкус восхитительна',
    eng: 'How does this food taste? Oh, it tastes delicious',
    regEng: ''
  },
  {
    rus: 'Что ты делаешь? Я пробую эти пироженки',
    eng: 'What are you doing? I`m tasting these cakes',
    regEng: '/What are you doing\\? I(?: am tasting|[`’\']m tasting| am trying|[`’\']m trying) these cakes/gm'
  },
  {
    rus: 'Что она нюхает? Она нюхает твои духи',
    eng: 'hat is she smelling? She`s smelling your perfume',
    regEng: '/(?:What is she smelling\\? She is|hat is she smelling\\? She[`’\']s) smelling your perfume/gm'
  },
  {
    rus: 'Как пахнет тот сыр? О, он пахнет ужасно',
    eng: 'How does that cheese smell? Oh, it smells awful',
    regEng: ''
  }
]
export default data