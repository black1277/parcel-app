// 15-16 > 15.4 > 3
const data = [
  {
    rus: 'Дети будут играть в саду, в то время как мама будет готовиться идти на работу',
    eng: 'The children will be playing in the garden while Mom is getting ready to go to work',
    regEng: '/The children will be playing in the garden while (?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) getting ready to go to work/gm'
  },
  {
    rus: 'От кого эти письма? Они от моих родственников в Англии',
    eng: 'Who are these letters from? They`re from my relatives in England',
    regEng: '/(?:(?:Whom? are these letters from\\?|From whom are these letters\\?) They are|(?:Whom? are these letters from\\?|From whom are these letters\\?) They[`’\']re) from my relatives in England/gm'
  },
  {
    rus: 'В чайнике осталось не много чая, но в кофейнике есть много кофе',
    eng: 'There isn`t much tea left in the teapot, but there`s a lot of coffee in the coffee pot',
    regEng: '/(?:There (?:is not (?:a lot of|lots of|much) tea left in the teapot, but there(?: is|[`’\']s) a lot|isn[`’\']t (?:a lot of|much) tea left in the teapot, but there(?: is a lot|[`’\']s a lot| is lots|[`’\']s lots)) of coffee in the coffee pot|There[`’\']s not (?:a lot of|much) tea left in the teapot, but there(?: is a lot|[`’\']s a lot| is lots|[`’\']s lots) of coffee in the coffee pot)/gm'
  },
  {
    rus: 'Она готовилась к экзамену в девять часов утра вчера',
    eng: 'She was getting ready for an exam at nine o`clock in the morning yesterday',
    regEng: '/She was getting ready for (?:(?:the|an) exam at nine o[`’\']clock in the morning yesterday|(?:the|an) exam yesterday at nine o[`’\']clock in the morning)/gm'
  },
  {
    rus: 'То машина твоих родителей? Нет, она не их, она моего дяди',
    eng: 'Is that your parents` car? No, it`s not theirs, it`s my uncle`s',
    regEng: '/Is that your parents[`’\'] car\\? No, it(?: is not|[`’\']s not| isn[`’\']t) theirs, it(?: is|[`’\']s) my uncle[`’\']s/gm'
  }
]
export default data