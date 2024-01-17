// 06-09 > 7.1 > 2
const data = [
  {
    rus: 'Я очень хочу пить',
    eng: 'I am very thirsty',
    regEng: '/(?:(?:I am|I’m) very thirsty)/gm'
  },
  {
    rus: 'Я не очень хочу пить',
    eng: 'I am not very thirsty',
    regEng: '/(?:(?:I am|I’m) not very thirsty)/gm'
  },
  {
    rus: 'Очень ли я хочу пить',
    eng: 'Am I very thirsty?',
    regEng: ''
  },
  {
    rus: 'Почему я так хочу пить ?',
    eng: 'Why am I so thirsty?',
    regEng: ''
  },
  {
    rus: 'Они очень сожалеют',
    eng: 'They are very sorry',
    regEng: '/(?:(?:They are|They’re) very sorry)/gm'
  },
  {
    rus: 'Они не очень сожалеют',
    eng: 'They are not very sorry',
    regEng: '/(?:(?:They are|They’re) not very sorry)|(?:They aren’t very sorry)/gm'
  },
  {
    rus: 'Очень ли они сожалеют?',
    eng: 'Are they very sorry?',
    regEng: ''
  },
  {
    rus: 'Почему они так сожалеют?',
    eng: 'Why are they so sorry?',
    regEng: ''
  }
]
export default data