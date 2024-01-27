// 06-09 > 7.4 > 1  06-09 > 7.4 > 2
const data = [
  {
    rus: 'Она хочет, чтобы я помог её детям',
    eng: 'She wants me to help her children',
    regEng: ''
  },
  {
    rus: 'Вчера ты пришел домой рано',
    eng: 'Yesterday you came home early',
    regEng: '/(?:Yesterday you came home early)|(?:You came home early yesterday)/gm'
  },
  {
    rus: 'Эти женщины никогда не смотрят такие шоу',
    eng: 'These women never watch such shows',
    regEng: ''
  },
  {
    rus: 'Что мы часто ищем здесь?',
    eng: 'What do we often look for here?',
    regEng: '/What do we often (?:look|search) for here\\?/gm'
  },
  {
    rus: 'Я видел вашу дочь вчера',
    eng: 'I saw your daughter yesterday',
    regEng: '/(?:I saw your daughter yesterday)|(?:Yesterday I saw your daughter)/gm'
  },
  {
    rus: 'Ему нравится посещать интересные места каждый год',
    eng: 'He likes to visit interesting places every year',
    regEng: ''
  },
  {
    rus: 'Эти люди такие добрые и дружелюбные',
    eng: 'These people are so kind and friendly',
    regEng: ''
  },
  {
    rus: 'Родителям нужно, чтобы их дети чистили свои зубы',
    eng: 'Parents need their children to brush their teeth',
    regEng: ''
  },
  {
    rus: 'Когда они пообедали?',
    eng: 'When did they have lunch?',
    regEng: ''
  },
  {
    rus: 'Нам нужно найти новую квартиру',
    eng: 'We need to find a new flat',
    regEng: '/We need to find a new (?:flat|apartment)/gm'
  }  
]
export default data