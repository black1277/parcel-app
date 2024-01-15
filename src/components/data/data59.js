const data = [
  {
    rus: 'Я хороший человек',
    eng: 'I am a good person',
    regEng: '/(?:(?:I am|I’m) a (?:good|nice) person)/gm'
  },
  {
    rus: 'Я не плохой человек',
    eng: 'I am not a bad person',
    regEng: '/(?:(?:I am|I’m) not a bad person)/gm'
  },
  {
    rus: 'Хороший ли я человек?',
    eng: 'Am I a good person?',
    regEng: '/(?:Am I a (?:good|nice) person\\?)/gm'
  },
  {
    rus: 'Кто я?',
    eng: 'Who am I?'
  },
  {
    rus: 'Вы опоздали в понедельник',
    eng: 'You were late on Monday',
    regEng: '/(?:You were late on Monday)|(?:On Monday you were late)/gm'
  },
  {
    rus: 'Вы не опоздали в понедельник',
    eng: 'You were not late on Monday',
    regEng: '/(?:You (?:were not|weren’t) late on Monday)|(?:On Monday You (?:were not|weren’t) late)/gm'
  },
  {
    rus: 'Опоздали ли вы в понедельник?',
    eng: 'Were you late on Monday?'
  },
  {
    rus: 'Когда вы опоздали?',
    eng: 'When were you late?'
  }
]
export default data