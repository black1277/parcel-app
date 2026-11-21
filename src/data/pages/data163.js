// 10-14 > 11.4 > 5
const data = [
  {
    rus: 'Это ваши собаки? - Нет, они наших соседей',
    eng: 'Are these your dogs? No, they are our neighbours`',
    regEng: '/Are these your dogs\\? No, (?:(?:these|they) are|they[`’\']re) our neighbou?rs[`’\']/gm'
  },
  {
    rus: 'Это его машина? Нет, его чёрная',
    eng: 'Is this his car? No, his is black',
    regEng: '/Is this (?:his car\\?|car his\\?) No, his is black/gm'
  },
  {
    rus: 'Они начали новый проект прошлой весной',
    eng: 'They started a new project last spring',
    regEng: ''
  },
  {
    rus: 'Их еда жирнее, чем наша',
    eng: 'Their food is fatter than ours',
    regEng: ''
  },
  {
    rus: 'Мы увидим океан в следующем году',
    eng: 'We will see the ocean next year',
    regEng: '/We(?: will|[`’\']ll) see the ocean next year/gm'
  }
]
export default data