// 17-20 > 20.1 > 9
const data = [
  {
    rus: 'Это самая красивая девушка, которую я когда-либо видел',
    eng: 'This is the most beautiful girl that I`ve ever seen',
    regEng: '/This is the most beautiful girl (?:that I(?: have|[`’\']ve)|I have|I[`’\']ve) ever seen/gm'
  },
  {
    rus: 'Идея твоего брата – худшая из всех',
    eng: 'Your brother`s idea is the worst of all',
    regEng: ''
  },
  {
    rus: 'Её муж – самый умный парень, которого она когда-либо встречала',
    eng: 'Her husband is the smartest guy that she`s ever met',
    regEng: '/Her husband is the (?:most (?:intelligent|clever)|cleverest|smartest) guy (?:that she(?: has|[`’\']s)|she has|she[`’\']s) ever met/gm'
  },
  {
    rus: 'Это лучшие результаты, которые мы получили до настоящего времени',
    eng: 'These are the best results that we`ve got so far',
    regEng: '/These are the best results (?:that we(?: have|[`’\']ve)|we have|we[`’\']ve) got so far/gm'
  },
  {
    rus: 'Это самая большая ошибка, которую она когда-либо делала',
    eng: 'This is the biggest mistake that she`s ever made',
    regEng: '/This is the biggest mistake (?:that she(?: has|[`’\']s)|she has|she[`’\']s) ever made/gm'
  },
  {
    rus: 'Это самые полезные книги, которые я прочитал до настоящего времени',
    eng: 'These are the most useful books that I`ve read so far',
    regEng: '/These are the most useful books (?:that I(?: have|[`’\']ve)|I have|I[`’\']ve) read so far/gm'
  },
  {
    rus: 'Этот ящик самый маленький из всех',
    eng: 'This box is the smallest of all',
    regEng: ''
  },
  {
    rus: 'Это самые вкусные печенья, которые мы когда-либо пробовали',
    eng: 'These are the tastiest cookies that we`ve ever tried',
    regEng: '/These are the (?:most delicious (?:(?:biscuits(?: that)?|cookies(?: that)?) we have|(?:biscuits(?: that)?|cookies(?: that)?) we[`’\']ve)|tastiest (?:(?:biscuits(?: that)?|cookies(?: that)?) we have|(?:biscuits(?: that)?|cookies(?: that)?) we[`’\']ve)) ever (?:tasted|tried)/gm'
  },
  {
    rus: 'Их ответы – самые точные из всех',
    eng: 'Their answers are the most accurate of all',
    regEng: ''
  },
  {
    rus: 'Это самая смешная шутка, которую я когда-либо слышал',
    eng: 'This is the funniest joke that I`ve ever heard',
    regEng: '/This is the funniest joke (?:that I(?: have|[`’\']ve)|I have|I[`’\']ve) ever heard/gm'
  }
]
export default data