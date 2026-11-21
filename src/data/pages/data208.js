// 10-14 > 13.4 > 7
const data = [
  {
    rus: 'Это картинка, о которой мы говорили вчера',
    eng: 'This is the picture that we talked about yesterday',
    regEng: '/This is the picture(?: (?:which|that))? we (?:were (?:speaking|talking)|talked|spoke) about yesterday/gm'
  },
  {
    rus: 'Поговорили ли вы со своим братом неделю назад?',
    eng: 'Did you talk to your brother a week ago?',
    regEng: '/Did you (?:speak (?:with|to)|talk (?:with|to)) your brother a week ago\\?/gm'
  },
  {
    rus: 'Сколько машин у твоего мужа?',
    eng: 'How many cars does your husband have?',
    regEng: ''
  },
  {
    rus: 'Есть кое-какие проблемы, о которых нам нужно поговорить',
    eng: 'There are some problems that we need to talk about',
    regEng: '/There are some problems(?: (?:which|that))? we need to (?:speak|talk) about/gm'
  },
  {
    rus: 'Идея тех людей лучше, чем наша',
    eng: 'Those people`s idea is better than ours',
    regEng: ''
  }
]
export default data