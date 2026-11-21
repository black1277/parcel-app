// 15-16 > 15.4 > 1
const data = [
  {
    rus: 'Ты пошёл на ту вечеринку вчера? Нет, я решил закончить кое-какую работу',
    eng: 'Did you go to that party yesterday? No, I decided to finish some work',
    regEng: '/Did you go to (?:that|the) party yesterday\\? No, I decided to finish some work/gm'
  },
  {
    rus: 'Мой дядя часто даёт мне много полезных советов',
    eng: 'My uncle often gives me a lot of useful advice',
    regEng: '/My uncle often gives me (?:a lot|lots) of useful advice/gm'
  },
  {
    rus: 'Помоги мне! Чего ты ждёшь?',
    eng: 'Help me! What are you waiting for?',
    regEng: ''
  },
  {
    rus: 'Сколько наличных у тебя осталось? Ну, у меня осталось лишь несколько долларов',
    eng: 'How much cash do you have left? Well, I have just a few dollars left',
    regEng: ''
  },
  {
    rus: 'Я готовлюсь к вечеринке',
    eng: 'I`m getting ready for a party',
    regEng: '/I(?: am|[`’\']m) getting ready for (?:the|a) party/gm'
  }
]
export default data