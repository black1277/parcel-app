// 06-09 > 9.2 > 9
const data = [
  {
    rus: 'Я всегда счастлив поговорить с вами. Вы такой интересный человек',
    eng: 'I am always happy to talk to you. You are such an interesting person',
    regEng: '/(?:(?:I am|I’m) always happy to (?:talk|speak) (?:to|with) you. You(?: are|`re) such an interesting person)/gm'
  },
  {
    rus: 'Ваши дети ходят в школу каждый день? Нет, по выходным они не ходят в школу',
    eng: 'Do your children go to school every day? No, at weekends they do not go to school',
    regEng: '/(?:Do your children go to school every day\\? No, at weekends they (?:do not|don’t) go to school)/gm'
  },
  {
    rus: 'Ты пошёл спать поздно вчера? Нет, я пошёл спать рано',
    eng: 'Did you go to bed late yesterday? No, I went to bed early',
    regEng: '/(?:Did you go to (?:bed|sleep) late yesterday\\? No, I went to (?:bed|sleep) early)/gm'
  },
  {
    rus: 'Чего она боится? Она боится всего',
    eng: 'What is she afraid of? She is afraid of everything',
    regEng: '/(?:What is she afraid of\\? She(?: is|`s) afraid of everything)/gm'
  },
  {
    rus: 'Как вы обычно путешествуете? Я обычно путешествую самолётом',
    eng: 'How do you usually travel? I usually travel by plane',
    regEng: ''
  },
  {
    rus: 'Я так голоден. Мне нужно пообедать',
    eng: 'I am so hungry. I need to have lunch',
    regEng: '/(?:(?:I am|I’m) so hungry. I need to have lunch)/gm'
  },
  {
    rus: 'О чём вы часто думаете? Я часто думаю о своей семье',
    eng: 'What do you often think about? I often think about my family',
    regEng: ''
  },
  {
    rus: 'Мы не хотим, чтобы вы сожалели. Всё в порядке',
    eng: 'We do not want you to be sorry. Everything is alright',
    regEng: '/(?:We (?:do not|don’t) want you to be sorry. Everything is alright)/gm'
  }
]
export default data