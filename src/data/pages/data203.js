// 10-14 > 13.4 > 2
const data = [
  {
    rus: 'Где зонт? Он на диване',
    eng: 'Where is the umbrella? It`s on the sofa',
    regEng: '/Where(?: is|[`’\']s) the umbrella\\? It(?: is|[`’\']s) on the sofa/gm'
  },
  {
    rus: 'Есть некоторые вещи, которые она хочет сказать нам',
    eng: 'There are some things that she wants to tell us',
    regEng: '/There are some things(?: (?:which|that))? she wants to (?:say to|tell) us/gm'
  },
  {
    rus: 'Эта женщина всегда старается быть дружелюбной',
    eng: 'This woman always tries to be friendly',
    regEng: ''
  },
  {
    rus: 'Я думаю, что я тоньше, чем он, но толще, чем она',
    eng: 'I think that I`m thinner than him, but thicker than her',
    regEng: '/I think (?:(?:that I(?: am|[`’\']m)|I am|I[`’\']m) thinner than he is, but thicker than she is|(?:that I(?: am|[`’\']m)|I am|I[`’\']m) thinner than him, but thicker than her|(?:that I(?: am|[`’\']m)|I am|I[`’\']m) thinner than he, but thicker than she)/gm'
  },
  {
    rus: 'В той квартире было очень мало мебели',
    eng: 'There was very little furniture in that flat',
    regEng: '/There was very little furniture in (?:(?:that|the) apartment|(?:that|the) flat)/gm'
  }
]
export default data