const data = [
  {
    rus: 'Мне нужно, чтобы вы показали мне эти журналы',
    eng: 'I need you to show me these magazines'
  },
  {
    rus: 'Она пьёт этот вкусный кофе каждое утро',
    eng: 'She drinks this tasty coffee every morning',
    regEng: '/(?:She drinks this tasty coffee every morning)|(?:Every morning she drinks this tasty coffee)/gm'
  },
  {
    rus: 'Ей нравится шоколад?',
    eng: 'Does she like chocolate?'
  },
  {
    rus: 'Мы посетим такое интересное место в следующем году',
    eng: 'We will visit such an interesting place next year',
    regEng: '/(?:(?:We will|We’ll) visit such an interesting place next year)|(?:Next year (?:we will|we’ll) visit such an interesting place)/gm'
  },
  {
    rus: 'Они подарили мне удивительный подарок на прошлой неделе',
    eng: 'They gave me an amazing present last week',
    regEng: '/(?:They gave me an amazing (?:present|gift) last week)|(?:Last week they gave me an amazing (?:present|gift))/gm'
  },
  {
    rus: 'Я слышал ту песню в прошлом году',
    eng: 'I heard that song last year',
    regEng: '/(?:I heard that song last year)|(?:Last year I heard that song)/gm'
  },
  {
    rus: 'Ты знаешь тех людей?',
    eng: 'Do you know those people?'
  },
  {
    rus: 'Вы разговариваете со своими коллегами каждый понедельник',
    eng: 'You talk to your colleagues every Monday',
    regEng: '/(?:You (?:talk|speak) (?:to|with) your colleagues every Monday)|(?:Every Monday you (?:talk|speak) (?:to|with) your colleagues)/gm'
  }
]
export default data