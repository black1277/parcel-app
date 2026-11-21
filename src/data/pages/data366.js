// 17-20 > 19.4 > 19
const data = [
  {
    rus: 'Когда он пришёл домой? Он пришёл домой в одиннадцать часов вечера',
    eng: 'When did he come home? He came home at eleven o`clock at night',
    regEng: '/When did he come home\\? He came home at eleven o[`’\']clock (?:in the evening|at night)/gm'
  },
  {
    rus: 'Она станет учителем, когда закончит школу. Я думаю, что она будет замечательным учителем',
    eng: 'She`s going to become a teacher when she finishes school. I think that she`ll be a great teacher',
    regEng: '/(?:(?:When she finishes school, she is going to become a teacher. I think(?: that)?|She is going to become a teacher when she finishes school. I think(?: that)?) she will|(?:(?:When she finishes school, she(?: is|[`’\']s) going to become a teacher.|She(?: is|[`’\']s) going to become a teacher when she finishes school.) I think that|(?:When she finishes school, she(?: is|[`’\']s) going to become a teacher.|She(?: is|[`’\']s) going to become a teacher when she finishes school.) I think) she[`’\']ll) be a great teacher/gm'
  },
  {
    rus: 'Сколько денег на вашем банковском счёте?',
    eng: 'How much money is there on your bank account?',
    regEng: ''
  },
  {
    rus: 'Кто хочет помочь мне сделать салат на обед? Но у нас осталось много салата со вчерашнего дня',
    eng: 'Who wants to help me make salad for lunch? But we have a lot of salad left from yesterday',
    regEng: '/Who wants to help me(?: to)? make salad for lunch\\? But we have (?:a lot|lots) of salad left from yesterday/gm'
  },
  {
    rus: 'Я купила очень вкусного сока вчера. Ты хочешь пить? Да, но я предпочитаю воду',
    eng: 'I bought some delicious juice yesterday. Are you thirsty? Yes, but I prefer water',
    regEng: '/(?:I bought (?:(?:some )?very tasty|some delicious|delicious) juice yesterday.|Yesterday I bought (?:(?:some )?very tasty|some delicious|delicious) juice.) Are you thirsty\\? Yes, but I prefer water/gm'
  }
]
export default data