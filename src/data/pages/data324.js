// 17-20 > 18.1 > 10
const data = [
  {
    rus: 'Пожалуйста, послушайте меня внимательно. У меня есть кое-что важное, чтобы рассказать вам',
    eng: 'Please listen to me carefully. I have something important to tell you',
    regEng: '/(?:Listen to me carefully, please. I(?: have got|[`’\']ve got| have)|Please listen to me carefully. I(?: have got|[`’\']ve got| have)) something important to tell you/gm'
  },
  {
    rus: 'Мой отец всегда усердно работает. Он очень трудолюбивый мужчина. Все восхищаются им',
    eng: 'My father always works hard. He`s a very hard-working man. Everybody admires him',
    regEng: '/My (?:father|daddy|dad) always works hard. He(?: is|[`’\']s) a very hard-working man. (?:Everybody|Everyone) admires him/gm'
  },
  {
    rus: 'Остановись! Ты неправильно это делаешь. Я покажу тебе, как это правильно делать',
    eng: 'Stop! You`re doing it wrong. I`ll show you how to do it right',
    regEng: '/(?:(?:Stop! You(?: are doing this wrong. I will|[`’\']re doing this wrong. I[`’\']ll) show you how to do this|Stop! You(?: are doing this wrong. I will|[`’\']re doing this wrong. I[`’\']ll) show you how to do that|Stop! You(?: are doing it wrong. I will|[`’\']re doing it wrong. I[`’\']ll) show you how to do it) correctly|(?:Stop! You(?: are doing this wrong. I will|[`’\']re doing this wrong. I[`’\']ll) show you how to do this|Stop! You(?: are doing this wrong. I will|[`’\']re doing this wrong. I[`’\']ll) show you how to do that|Stop! You(?: are doing it wrong. I will|[`’\']re doing it wrong. I[`’\']ll) show you how to do it) right)/gm'
  },
  {
    rus: 'Почему ты так серьёзно смотришь на меня? Я просто пытаюсь прочитать твои мысли',
    eng: 'Why are you looking at me so seriously? I`m just trying to read your mind',
    regEng: '/Why are you looking at me so seriously\\? I(?: am|[`’\']m) just trying to read your mind/gm'
  },
  {
    rus: 'Малыш спит. Так что закрывай дверь тихо, пожалуйста',
    eng: 'The baby is sleeping. So close the door quietly, please',
    regEng: '/(?:The baby(?: is|[`’\']s) sleeping. So (?:close|shut) the door quietly, please|The baby(?: is|[`’\']s) sleeping. So please (?:close|shut) the door quietly)/gm'
  },
  {
    rus: 'Давай не идти так быстро. У меня ступни и ноги болят',
    eng: 'Let`s not go so fast. My feet and legs hurt',
    regEng: '/Let(?: us|[`’\']s) not go so (?:quickly.|fast.) My feet and legs (?:are (?:hurting|aching)|hurt|ache)/gm'
  },
  {
    rus: 'Ты легко просыпаешься по утрам? Ну, это зависит от множества разных факторов',
    eng: 'Do you wake up easily in the mornings? Well, it depends on a lot of different factors',
    regEng: '/Do you wake up easily in the mornings?\\? Well, it depends on (?:a lot of|lots of|many) different factors/gm'
  },
  {
    rus: 'Наша команда успешно выполнила задачу вчера. Поэтому сегодня мы празднуем!',
    eng: 'Our team completed the task successfully yesterday. So today we`re celebrating!',
    regEng: '/Our team (?:completed (?:the|a)|finished (?:the|a)) task successfully yesterday. So today we(?: are|[`’\']re) celebrating!/gm'
  }
]
export default data