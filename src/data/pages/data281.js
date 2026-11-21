// 15-16 > 16.2 > 5
const data = [
  {
    rus: 'Она идёт на концерт с ними сегодня вечером? Нет, она слишком занята',
    eng: 'Is she going to the concert with them tonight? No, she`s too busy',
    regEng: '/Is she going to the concert with them tonight\\? No, she(?: is|[`’\']s) too busy/gm'
  },
  {
    rus: 'Когда прибывает самолёт? Он прибывает в одиннадцать часов ночи',
    eng: 'When does the plane arrive? It arrives at eleven o`clock at night',
    regEng: '/When does the (?:airplane|plane) arrive\\? It arrives at eleven o[`’\']clock at night/gm'
  },
  {
    rus: 'Чем ты занимаешься на следующей неделе? На следующей неделе я просто отдыхаю',
    eng: 'What are you doing next week? Next week I`m just having a rest',
    regEng: '/What are you doing next week\\? (?:I(?: am|[`’\']m) just (?:(?:having|taking) a rest|resting) next week|Next week I(?: am|[`’\']m) just (?:having|taking) a rest|Next week I(?: am|[`’\']m) just resting)/gm'
  },
  {
    rus: 'Мы встречаем наших родственников через несколько часов. Их автобус прибывает в четыре часа',
    eng: 'We`re meeting our relatives in a few hours. Their bus arrives at four o`clock',
    regEng: '/We(?: are|[`’\']re) meeting our relatives in a few hours. Their bus arrives at four o[`’\']clock/gm'
  },
  {
    rus: 'Когда ты уходишь? Я ухожу через пять минут. Я спешу',
    eng: 'When are you leaving? I`m leaving in five minutes. I`m in a hurry',
    regEng: '/When are you leaving\\? I(?: am|[`’\']m) leaving in five minutes. I(?: am in a hurry|[`’\']m in a hurry| am hurrying|[`’\']m hurrying)/gm'
  },
  {
    rus: 'Урок заканчивается в два часа? Нет, он заканчивается в три',
    eng: 'Does the class finish at two o`clock? No, it finishes at three',
    regEng: '/Does the class finish at two o[`’\']clock\\? No, it finishes at three(?: o[`’\']clock)?/gm'
  },
  {
    rus: 'Наша компания начинает новый проект в следующем году. Это замечательные новости!',
    eng: 'Our company is starting a new project next year. That`s great news!',
    regEng: '/Our company is (?:beginning|starting) a new project next year. (?:(?:That|This|It) is|(?:That|It)[`’\']s) great news!/gm'
  },
  {
    rus: 'Я знаю, что ты едешь домой в следующем месяце. Как ты туда доберёшься? Я еду на машине',
    eng: 'I know that you`re going home next month. How are you getting there? I`m going by car',
    regEng: '/I know that you(?: are|[`’\']re) going home next month. How are you getting there\\? I(?: am|[`’\']m) going by car/gm'
  }
]
export default data