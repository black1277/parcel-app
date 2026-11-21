// 17-20 > 17.4 > 7
const data = [
  {
    rus: 'Она ни с кем не встречается на следующей неделе, потому что у неё слишком много дел делать',
    eng: 'She`s meeting with nobody next week because she has too many things to do',
    regEng: '/(?:(?:She (?:(?:is not|isn[`’\']t) meeting with anybody|is meeting(?: with)? nobody|is meeting (?:with )?no one) next|She[`’\']s (?:not meeting with anybody|meeting (?:(?:with )?no one|with nobody|nobody)) next) week|Next week she(?: is not|[`’\']s not| isn[`’\']t) meeting with anybody|Next week she(?: is|[`’\']s) meeting(?: with)? nobody|Next week she(?: is|[`’\']s) meeting(?: with)? no one) because she has too many things to do/gm'
  },
  {
    rus: 'Она удивительная мать. Она всегда даёт своим детям много внимания',
    eng: 'She`s an amazing mother. She always gives her children a lot of attention',
    regEng: '/She(?: is|[`’\']s) an amazing (?:mother.|mom.|mum.) She always gives her (?:children|kids) a lot of attention/gm'
  },
  {
    rus: 'Как часто идёт снег в этой стране? Снег никогда не идёт, но очень часто идёт дождь. Так что хорошо всегда иметь зонтик с собой',
    eng: 'How often does it snow in this country? It never snows but it rains very often. So it`s good to always have an umbrella with you',
    regEng: '/How often does it snow in this country\\? It never snows but it rains very often. So it(?: is|[`’\']s) good to always have an umbrella with you/gm'
  },
  {
    rus: 'Он ест что-то сладкое каждый день, потому что он сладкоежка',
    eng: 'He eats something sweet every day because he has a sweet tooth',
    regEng: '/(?:He eats something sweet every day|Every day he eats something sweet) because he has a sweet tooth/gm'
  },
  {
    rus: 'Она замужем или свободна? Ну, она в очень сложных отношениях',
    eng: 'Is she married or single? Well, she`s in a very complicated relationship',
    regEng: '/Is she married or single\\? Well, she(?: is|[`’\']s) in a very (?:complicated|difficult) relationship/gm'
  }
]
export default data