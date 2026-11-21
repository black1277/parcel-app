// 17-20 > 19.2 > 7
const data = [
  {
    rus: 'Мы только что пообедали',
    eng: 'We`ve just had lunch',
    regEng: '/We(?: have|[`’\']ve) just had lunch/gm'
  },
  {
    rus: 'Мы ещё не пообедали',
    eng: 'We haven`t had lunch yet',
    regEng: '/We(?: have not| haven[`’\']t|[`’\']ve not) had lunch yet/gm'
  },
  {
    rus: 'Мы уже пообедали?',
    eng: 'Have we had lunch yet?',
    regEng: ''
  },
  {
    rus: 'Мы пообедали до того, как гости прибыли',
    eng: 'We had had lunch before the guests arrived',
    regEng: '/We(?: had|[`’\']d) had lunch before the guests arrived/gm'
  },
  {
    rus: 'Мы не пообедали до того, как гости прибыли',
    eng: 'We hadn`t had lunch before the guests arrived',
    regEng: '/We(?: had not| hadn[`’\']t|[`’\']d not) had lunch before the guests arrived/gm'
  },
  {
    rus: 'Мы пообедали до того, как гости прибыли?',
    eng: 'Had we had lunch before the guests arrived?',
    regEng: ''
  },
  {
    rus: 'Мы пообедаем до того, как гости прибудут',
    eng: 'We`ll have had lunch before the guests arrive',
    regEng: '/We(?: will|[`’\']ll) have had lunch before the guests arrive/gm'
  },
  {
    rus: 'Мы не пообедаем до того, как гости прибудут',
    eng: 'We won`t have had lunch before the guests arrive',
    regEng: '/We(?: will not|[`’\']ll not| won[`’\']t) have had lunch before the guests arrive/gm'
  },
  {
    rus: 'Мы пообедаем до того, как гости прибудут?',
    eng: 'Will we have had lunch before the guests arrive?',
    regEng: ''
  }
]
export default data