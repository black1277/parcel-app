// 15-16 > 15.2 > 9
const data = [
  {
    rus: 'Я так сожалею, что опоздал. Всё в порядке. Давайте просто начнём прямо сразу',
    eng: 'I`m so sorry that I`m late. Everything is alright. Let`s just get started right away',
    regEng: '/I(?: am|[`’\']m) so sorry (?:that I(?: am|[`’\']m)|I am|I[`’\']m) late. Everything is (?:all right.|alright.|okay.|OK.) Let[`’\']s just (?:get started|start|begin) right away/gm'
  },
  {
    rus: 'Что вы празднуете? Мы сдали все свои экзамены на прошлой неделе',
    eng: 'What are you celebrating? We passed all our exams last week',
    regEng: '/What are you celebrating\\? (?:We passed all our exams last week|Last week we passed all our exams)/gm'
  },
  {
    rus: 'Она обычно много красится? Она никогда не красится',
    eng: 'Does she usually wear much make-up? She never wears any make-up',
    regEng: '/Does she usually wear (?:(?:lots of make-up\\? She (?:does not ever wear(?: any)?|doesn[`’\']t ever wear(?: any)?|never wears(?: any)?)|much make-up\\? She (?:does not ever wear(?: any)?|doesn[`’\']t ever wear(?: any)?|never wears(?: any)?)|a lot of make-up\\? She (?:does not ever(?: any)?|doesn[`’\']t ever(?: any)?|never wears(?: any)?)) make-up|(?:a lot of|lots of|much) make-up\\? She wears no make-up ever)/gm'
  },
  {
    rus: 'Мне нужно, чтобы ты позвонил мне прямо сейчас. У меня есть кое-какие ценные идеи, чтобы обсудить с тобой',
    eng: 'I need you to call me right now. I have some valuable ideas to discuss with you',
    regEng: '/I need you to call me right now. I have (?:a few|some) valuable ideas to discuss with you/gm'
  },
  {
    rus: 'Ты хочешь пойти на концерт с нами? Нет, есть более важные вещи, которые мне нужно сделать',
    eng: 'Do you want to go to the concert with us? No, there are more important things that I need to do',
    regEng: '/Do you want to go to (?:the|a) concert with us\\? No, there are more important things(?: that)? I need to do/gm'
  },
  {
    rus: 'Что она делала в три часа ночи во вторник? Ну, она спала',
    eng: 'What was she doing at three o`clock at night on Tuesday? Well, she was sleeping',
    regEng: '/What was she doing at three o[`’\']clock (?:in the morning|at night) on Tuesday\\? Well, she was sleeping/gm'
  },
  {
    rus: 'Ты идёшь? Да, я почти готов. Мне нужно лишь несколько минут',
    eng: 'Are you coming? Yes, I`m almost ready. I need just a few minutes',
    regEng: '/Are you coming\\? Yes, I(?: am almost ready. I need just| am almost ready. I just need|[`’\']m almost ready. I need just|[`’\']m almost ready. I just need) a few minutes/gm'
  },
  {
    rus: 'Ты придёшь завтра? Так много красивых фотографий, которые я хочу показать тебе!',
    eng: 'Will you come tomorrow? There are so many beautiful photos that I want to show you!',
    regEng: '/Will you come tomorrow\\? There are so many beautiful (?:photographs(?: that)?|pictures(?: that)?|photos(?: that)?) I want to show you!/gm'
  }
]
export default data