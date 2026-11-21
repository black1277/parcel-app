// 10-14 > 12.1 > 7
const data = [
  {
    rus: 'У них много интересных идей',
    eng: 'They have many interesting ideas',
    regEng: '/They have (?:a lot of|lots of|many) interesting ideas/gm'
  },
  {
    rus: 'Моё хобби приносит мне много радости',
    eng: 'My hobby brings me a lot of joy',
    regEng: '/My hobby brings me (?:a lot|lots) of joy/gm'
  },
  {
    rus: 'Я ездил туда так много раз в прошлом году',
    eng: 'I went there so many times last year',
    regEng: ''
  },
  {
    rus: 'В этом документе не много информации',
    eng: 'There isn`t much information in this document',
    regEng: '/There isn[`’\']t (?:a lot of|lots of|much) information in this document/gm'
  },
  {
    rus: 'Детям всегда нужно так много внимания',
    eng: 'Children always need so much attention',
    regEng: '/(?:Children|Kids) always need so much attention/gm'
  },
  {
    rus: 'У неё много ценных знаний',
    eng: 'She has a lot of valuable knowledge',
    regEng: '/She has (?:a lot|lots) of valuable knowledge/gm'
  },
  {
    rus: 'Мы не съели много шоколада вчера',
    eng: 'We did not eat much chocolate yesterday',
    regEng: '/We (?:did not|didn[`’\']t) eat (?:a lot of|lots of|much) chocolate yesterday/gm'
  },
  {
    rus: 'Она купила много новых книг на прошлой неделе',
    eng: 'She bought many new books last week',
    regEng: '/She bought (?:a lot of|lots of|many) new books last week/gm'
  }
]
export default data