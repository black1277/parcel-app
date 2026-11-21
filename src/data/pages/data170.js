// 10-14 > 11.4 > 12
const data = [
  {
    rus: 'Они хотят купить хорошую машину',
    eng: 'They want to buy a good car',
    regEng: ''
  },
  {
    rus: 'В следующую пятницу они поедут в больницу на автобусе',
    eng: 'Next Friday they will go to hospital by bus',
    regEng: '/Next Friday they(?: will|[`’\']ll) go to hospital by bus/gm'
  },
  {
    rus: 'Между этими словами нет никакой разницы',
    eng: 'There isn`t any difference between these words',
    regEng: '/There (?:is not|isn[`’\']t) any difference between these words/gm'
  },
  {
    rus: 'Мы не поедем в эту страну через месяц, мы поедем туда в следующем году',
    eng: 'We will not go to this country in a month, we will go there next year',
    regEng: '/We (?:will not|won[`’\']t) go to this country in a month, we(?: will|[`’\']ll) go there next year/gm'
  },
  {
    rus: 'Осенью она часто ездит в школу на машине',
    eng: 'In autumn she often goes to school by car',
    regEng: ''
  }
]
export default data