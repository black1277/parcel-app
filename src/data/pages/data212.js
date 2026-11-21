// 10-14 > 13.4 > 11
const data = [
  {
    rus: 'Будут кое-какие результаты, которыми они будут гордиться',
    eng: 'There`ll be some results that they`ll be proud of',
    regEng: '/There(?: will|[`’\']ll) be some results (?:(?:(?:which|that) )?they will|(?:which|that) they[`’\']ll|they[`’\']ll) be proud of/gm'
  },
  {
    rus: 'Мы не съели много шоколада вчера',
    eng: 'We didn`t eat much chocolate yesterday',
    regEng: '/We (?:did not|didn[`’\']t) eat (?:a lot of|lots of|much) chocolate yesterday/gm'
  },
  {
    rus: 'Ваш муж более красивый, чем её',
    eng: 'Your husband is more handsome than hers',
    regEng: '/Your husband(?: is|[`’\']s) more handsome than hers/gm'
  },
  {
    rus: 'В твоих словах так много мудрости',
    eng: 'There`s so much wisdom in your words',
    regEng: '/There(?: is|[`’\']s) so much wisdom in your words/gm'
  },
  {
    rus: 'Голос его девушки более громкий, чем у него',
    eng: 'His girlfriend`s voice is louder than his',
    regEng: ''
  }
]
export default data