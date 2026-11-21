// 10-14 > 13.1 > 7
const data = [
  {
    rus: 'Она смотрит на эту фотографию сейчас',
    eng: 'She`s looking at this picture now',
    regEng: '/She(?: is|[`’\']s) looking at this (?:photograph(?: now)?|picture(?: now)?|photo(?: now)?)/gm'
  },
  {
    rus: 'Она не смотрит на эту фотографию сейчас',
    eng: 'She`s not looking at this picture now',
    regEng: '/She(?: is not|[`’\']s not| isn[`’\']t) looking at this (?:photograph(?: now)?|picture(?: now)?|photo(?: now)?)/gm'
  },
  {
    rus: 'Смотрит ли она на эту фотографию сейчас?',
    eng: 'Is she looking at this picture now?',
    regEng: '/Is she looking at this (?:photograph(?: now)?|picture(?: now)?|photo(?: now)?)\\?/gm'
  },
  {
    rus: 'На что она смотрит сейчас?',
    eng: 'What is she looking at now?',
    regEng: '/What is she looking at(?: now)?\\?/gm'
  },
  {
    rus: 'Они его ждут в данный момент',
    eng: 'They`re waiting for him at the moment',
    regEng: '/They(?: are|[`’\']re) waiting for him(?: at the moment)?/gm'
  },
  {
    rus: 'Они его не ждут в данный момент',
    eng: 'They`re not waiting for him at the moment',
    regEng: '/They(?: are not|[`’\']re not| aren[`’\']t) waiting for him(?: at the moment)?/gm'
  },
  {
    rus: 'Ждут ли они его в данный момент?',
    eng: 'Are they waiting for him at the moment?',
    regEng: '/Are they waiting for him(?: at the moment)?\\?/gm'
  },
  {
    rus: 'Кого они ждут в данный момент?',
    eng: 'Who are they waiting for at the moment?',
    regEng: '/(?:(?:Whom? are they waiting for|For whom are they waiting) at the moment\\?|Whom? are they waiting for\\?|For whom are they waiting\\?)/gm'
  }
]
export default data