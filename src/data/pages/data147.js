// 10-14 > 11.1 > 5
const data = [
  {
    rus: 'Между этими словами нет никакой разницы',
    eng: 'There isn`t any difference between these words',
    regEng: '/There (?:is not|isn[`’\']t) any difference between these words/gm'
  },
  {
    rus: 'Есть кое-какая разница между этими словами',
    eng: 'There is some difference between these words',
    regEng: '/There(?: is|[`’\']s) some difference between these words/gm'
  },
  {
    rus: 'Есть какая-нибудь разница между этими словами?',
    eng: 'Is there any difference between these words?',
    regEng: ''
  },
  {
    rus: 'Между этими словами нет никакой разницы',
    eng: 'There is no difference between these words',
    regEng: '/There(?: is|[`’\']s) no difference between these words/gm'
  },
  {
    rus: 'Будет ли в холодильнике какая-нибудь еда?',
    eng: 'Will there be any food in the fridge?',
    regEng: '/Will there be any food in the (?:refrigerator|fridge)\\?/gm'
  },
  {
    rus: 'В холодильнике не будет никакой еды',
    eng: 'There will be no food in the fridge',
    regEng: '/(?:There will be no food in the (?:refrigerator|fridge)|There[`’\']ll be no food the (?:refrigerator|fridge))/gm'
  },
  {
    rus: 'В холодильнике не будет никакой еды',
    eng: 'There won`t be any food in the fridge',
    regEng: '/There (?:will not|won[`’\']t) be any food in the (?:refrigerator|fridge)/gm'
  },
  {
    rus: 'В холодильнике будет кое-какая еда',
    eng: 'There will be some food in the fridge',
    regEng: '/There(?: will|[`’\']ll) be some food in the (?:refrigerator|fridge)/gm'
  }
]
export default data