// 10-14 > 13.4 > 10
const data = [
  {
    rus: 'В кого она влюблена? Она влюблена в твоего брата',
    eng: 'Who is she in love with? She`s in love with your brother',
    regEng: '/Who is she in love with\\? She(?: is|[`’\']s) in love with your brother/gm'
  },
  {
    rus: 'У меня было несколько удивительных идей, чтобы поделиться с вами',
    eng: 'I had a few amazing ideas to share with you',
    regEng: ''
  },
  {
    rus: 'О чём она хочет поговорить?',
    eng: 'What does she want to talk about?',
    regEng: ''
  },
  {
    rus: 'Результаты моего брата лучше, чем мои',
    eng: 'My brother`s results are better than mine',
    regEng: ''
  },
  {
    rus: 'Это туфли, которые я купила неделю назад',
    eng: 'These are the shoes that I bought a week ago',
    regEng: '/These are the shoes (?:(?:which|that) )?I bought a week ago/gm'
  }
]
export default data