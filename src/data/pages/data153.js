// 10-14 > 11.2 > 4
const data = [
  {
    rus: 'Была кое-какая работа, которую ему нужно было сделать',
    eng: 'There was some work that he needed to do',
    regEng: '/There was some work (?:(?:which|that) )?he needed to do/gm'
  },
  {
    rus: 'Была ли какая-нибудь работа, которую ему нужно было сделать?',
    eng: 'Was there any work that he needed to do?',
    regEng: '/Was there any work (?:(?:which|that) )?he needed to do\\?/gm'
  },
  {
    rus: 'Не было никакой работы, которую ему нужно было сделать',
    eng: 'There wasn`t any work that he needed to do',
    regEng: '/There (?:was not|wasn[`’\']t) any work(?: (?:which|that))? he needed to do/gm'
  },
  {
    rus: 'Не было никакой работы, которую ему нужно было сделать',
    eng: 'There was no work that he needed to do',
    regEng: '/There was no work (?:(?:which|that) )?he needed to do/gm'
  },
  {
    rus: 'Будут кое-какие результаты, которыми они будут гордиться',
    eng: 'There will be some results that they will be proud of',
    regEng: '/There(?: will|[`’\']ll) be some results (?:(?:(?:which|that) )?they will|(?:which|that) they[`’\']ll|they[`’\']ll) be proud of/gm'
  },
  {
    rus: 'Будут ли какие-нибудь результаты, которыми они будут гордиться?',
    eng: 'Will there be any results that they will be proud of?',
    regEng: '/Will there be any results (?:(?:(?:which|that) )?they will|(?:which|that) they[`’\']ll|they[`’\']ll) be proud of\\?/gm'
  },
  {
    rus: 'Не будет никаких результатов, которыми они будут гордиться',
    eng: 'There won`t be any results that they will be proud of',
    regEng: '/There (?:will not|won[`’\']t) be any results (?:(?:(?:which|that) )?they will|(?:which|that) they[`’\']ll|they[`’\']ll) be proud of/gm'
  },
  {
    rus: 'Не будет никаких результатов, которыми они будут гордиться',
    eng: 'There will be no results that they will be proud of',
    regEng: '/There(?: will|[`’\']ll) be no results (?:(?:(?:which|that) )?they will|(?:which|that) they[`’\']ll|they[`’\']ll) be proud of/gm'
  }
]
export default data