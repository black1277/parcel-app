// 15-16 > 15.4 > 15
const data = [
  {
    rus: 'В этой статье слишком мало информации. Она бесполезна',
    eng: 'There`s too little information in this article. It`s useless',
    regEng: '/There(?: is|[`’\']s) too little information in this article. It(?: is|[`’\']s) useless/gm'
  },
  {
    rus: 'Эта одежда не подходит мне по размеру',
    eng: 'These clothes don`t fit me',
    regEng: '/These clothes (?:do not|don[`’\']t) fit me/gm'
  },
  {
    rus: 'Вы поехали домой вчера? Нет, мы остались здесь',
    eng: 'Did you go home yesterday? No, we stayed here',
    regEng: ''
  },
  {
    rus: 'Дедушка будет читать газету, пока бабушка будет делать кофе',
    eng: 'Grandpa will be reading a newspaper while Grandma is making coffee',
    regEng: '/(?:While (?:Grandmother(?: is|[`’\']s) making coffee, Grandfather|Grandma(?: is|[`’\']s) making coffee, Grandpa) will be reading a newspaper|(?:Grandfather will be reading a newspaper while Grandmother(?: is|[`’\']s)|Grandpa will be reading a newspaper while Grandma(?: is|[`’\']s)) making coffee)/gm'
  },
  {
    rus: 'Что ты думаешь об этой картине? Я думаю, что она удивительная!',
    eng: 'What do you think about this picture? I think that it`s amazing',
    regEng: '/What do you think about this (?:painting|picture)\\? I think (?:that it(?: is|[`’\']s)|it is|it[`’\']s) amazing/gm'
  }
]
export default data