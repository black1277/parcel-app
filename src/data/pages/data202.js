// 10-14 > 13.4 > 1
const data = [
  {
    rus: 'Когда они пообедали?',
    eng: 'When did they have lunch?',
    regEng: ''
  },
  {
    rus: 'Между этими словами нет никакой разницы',
    eng: 'There`s no difference between these words',
    regEng: '/There(?: is not any|[`’\']s not any| isn[`’\']t any| is no|[`’\']s no) difference between these words/gm'
  },
  {
    rus: 'Мой брат работает доктором. Он женат и у него есть ребёнок',
    eng: 'My brother works as a doctor. He`s married and has a child',
    regEng: '/My brother (?:(?:(?:works as|is) a doctor. He(?: is|[`’\']s) married and he|(?:works as a doctor. He(?: is|[`’\']s)|is a doctor. He is) married and) has a child|(?:works as|is) a doctor. He(?: is|[`’\']s) married and(?: he)? has a baby|(?:works as|is) a doctor. He(?: is|[`’\']s) married and(?: he)? has a kid)/gm'
  },
  {
    rus: 'Сколько времени вам нужно?',
    eng: 'How much time do you need?',
    regEng: ''
  },
  {
    rus: 'Платья этих женщин более стильные, чем ваши',
    eng: 'These women`s dresses are more stylish than yours',
    regEng: ''
  }
]
export default data