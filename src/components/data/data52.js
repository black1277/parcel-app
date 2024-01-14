// 06-09 > 6.1 > 2
const data = [
  {
    rus: 'Час назад мы поговорили о погоде',
    eng: 'An hour ago we talked about weather',
    regEng: '/(?:An hour ago we (?:talked|spoke) about weather)|(?:We (?:talked|spoke) about weather an hour ago)/gm'
  },
  {
    rus: 'Час назад мы не поговорили о погоде',
    eng: 'An hour ago we did not talk about weather',
    regEng: '/(?:An hour ago we (?:did not|didn’t) (?:talk|speak) about weather)|(?:We (?:did not|didn’t) (?:talk|speak) about weather an hour ago)/gm'
  },
  {
    rus: 'Поговорили ли мы о погоде час назад?',
    eng: 'Did we talk about weather an hour ago?',
    regEng: '/(?:Did we (?:talk|speak) about weather an hour ago\\?)/gm'
  },
  {
    rus: 'О чём мы поговорили час назад?',
    eng: 'What did we talk about an hour ago?',
    regEng: '/(?:What did we (?:talk|speak) about an hour ago\\?)/gm'
  },
  {
    rus: 'Неделю назад вы поговорили со своим братом',
    eng: 'A week ago you talked to your brother',
    regEng: '/(?:A week ago you (?:talked|spoke) (?:to|with) your brother)|(?:You (?:talked|spoke) (?:to|with) your brother a week ago)/gm'
  },
  {
    rus: 'Неделю назад вы не поговорили со своим братом',
    eng: 'A week ago you did not talk to your brother',
    regEng: '/(?:A week ago you (?:did not|didn’t) (?:talk|speak) (?:to|with) your brother)|(?:You (?:did not|didn’t) (?:talk|speak) (?:to|with) your brother a week ago)/gm'
  },
  {
    rus: 'Поговорили ли вы со своим братом неделю назад?',
    eng: 'Did you talk to your brother a week ago?',
    regEng: '/(?:Did you (?:talk|speak) (?:to|with) your brother a week ago\\?)/gm'
  },
  {
    rus: 'С кем вы поговорили неделю назад?',
    eng: 'Who did you talk to a week ago?',
    regEng: '/(?:Who did you (?:talk|speak) (?:to|with) a week ago\\?)/gm'
  }
]
export default data