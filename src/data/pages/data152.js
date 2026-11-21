// 10-14 > 11.2 > 3
const data = [
  {
    rus: 'Есть некоторые вещи, которые она хочет сказать нам',
    eng: 'There are some things that she wants to tell us',
    regEng: '/There are some things(?: (?:which|that))? she wants to (?:say to|tell) us/gm'
  },
  {
    rus: 'Есть ли какие-нибудь вещи, которые она хочет сказать нам?',
    eng: 'Are there any things that she wants to tell us?',
    regEng: '/Are there any things(?: (?:which|that))? she wants to (?:say to|tell) us\\?/gm'
  },
  {
    rus: 'Нет никаких вещей, которые она хочет сказать нам',
    eng: 'There aren`t any things that she wants to tell us',
    regEng: '/There (?:are not|aren[`’\']t) any things(?: (?:which|that))? she wants to (?:say to|tell) us/gm'
  },
  {
    rus: 'Нет никаких вещей, которые она хочет сказать нам',
    eng: 'There are no things that she wants to tell us',
    regEng: '/There are no things(?: (?:which|that))? she wants to (?:say to|tell) us/gm'
  },
  {
    rus: 'Есть кое-какие проблемы, о которых нам нужно поговорить',
    eng: 'There are some problems that we need to talk about',
    regEng: '/There are some problems (?:(?:which|that) )?we need to talk about/gm'
  },
  {
    rus: 'Есть ли какие-нибудь проблемы, о которых нам нужно поговорить?',
    eng: 'Are there any problems that we need to talk about?',
    regEng: '/Are there any problems (?:(?:which|that) )?we need to talk about\\?/gm'
  },
  {
    rus: 'Нет никаких проблем, о которых нам нужно поговорить',
    eng: 'There aren`t any problems that we need to talk about',
    regEng: '/There (?:are not|aren[`’\']t) any problems(?: (?:which|that))? we need to talk about/gm'
  },
  {
    rus: 'Нет никаких проблем, о которых нам нужно поговорить',
    eng: 'There are no problems that we need to talk about',
    regEng: '/There are no problems (?:(?:which|that) )?we need to talk about/gm'
  }
]
export default data