// 10-14 > 13.4 > 4
const data = [
  {
    rus: 'Она всегда слушает такую музыку',
    eng: 'She always listens to such music',
    regEng: ''
  },
  {
    rus: 'От кого эта открытка? Она от моего дяди',
    eng: 'Who is this postcard from? It`s from my uncle',
    regEng: '/(?:From whom is this postcard\\? It(?: is|[`’\']s)|Who is this postcard from\\? It(?: is|[`’\']s)|Who[`’\']s this postcard from\\? It(?: is|[`’\']s)) from my uncle/gm'
  },
  {
    rus: 'Она завтракает в данный момент',
    eng: 'She`s having breakfast at the moment',
    regEng: '/She(?: is|[`’\']s) having breakfast at the moment/gm'
  },
  {
    rus: 'Твои результаты хуже, чем у Фрэнка',
    eng: 'Your results are worse than Frank`s',
    regEng: ''
  },
  {
    rus: 'На столе стоит ваза. В вазе цветы',
    eng: 'There`s a vase on the table. There are flowers in the vase',
    regEng: '/There(?: is|[`’\']s) a vase on the table. There are(?: some)? flowers in the vase/gm'
  }
]
export default data