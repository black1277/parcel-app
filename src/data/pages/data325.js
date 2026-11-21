// 17-20 > 18.1 > 12
const data = [
  {
    rus: 'Я лучше говорю по-английски, чем она',
    eng: 'I speak English better than she does',
    regEng: '/I speak English better than (?:she does|she|her)/gm'
  },
  {
    rus: 'Они работают над этим проектом усерднее, чем я',
    eng: 'They`re working on this project harder than I am',
    regEng: '/They[`’\']re working on this project harder than (?:I am|me|I)/gm'
  },
  {
    rus: 'Наша мама водит более безопасно, чем наш папа',
    eng: 'Our mom drives more safely than our dad does',
    regEng: '/Our (?:mother drives more safely than our father(?: does)?|mom drives more safely than our (?:daddy(?: does)?|dad(?: does)?))/gm'
  },
  {
    rus: 'Она плавает очень хорошо, но всё же хуже, чем ты',
    eng: 'She swims very well, but still worse than you do',
    regEng: '/She swims very well, but still worse than you(?: do)?/gm'
  },
  {
    rus: 'Мы бежим быстрее, чем они',
    eng: 'We`re running faster than they are',
    regEng: '/We[`’\']re running faster than (?:they(?: are)?|them)/gm'
  },
  {
    rus: 'Его брат произносит ту фразу лучше, чем он',
    eng: 'His brother pronounces that phrase better than he does',
    regEng: '/His brother pronounces that phrase better than (?:he does|him|he)/gm'
  },
  {
    rus: 'Моя сестра обычно ведёт себя более вежливо, чем её друзья',
    eng: 'My sister usually behaves more politely than her friends do',
    regEng: '/My sister usually behaves more politely than her friends(?: do)?/gm'
  },
  {
    rus: 'Ты говоришь громче, чем она. Говори тише, пожалуйста',
    eng: 'You`re talking louder than she is. Talk more quietly, please',
    regEng: '/You[`’\']re (?:speaking louder than (?:(?:she is.|she.|her.) Speak more quietly, please|(?:she is.|she.|her.) Please speak more quietly)|talking louder than (?:(?:she is.|she.|her.) Talk more quietly, please|(?:she is.|she.|her.) Please talk more quietly))/gm'
  }
]
export default data