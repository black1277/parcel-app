// 17-20 > 17.4 > 20
const data = [
  {
    rus: 'Кто знает ту женщину? Я знаю её, она сестра Джона',
    eng: 'Who knows that woman? I know her, she`s John`s sister',
    regEng: '/Who knows that woman\\? I know her, she(?: is|[`’\']s) John[`’\']s sister/gm'
  },
  {
    rus: 'То машина твоих родителей? Нет, она не их, она моего дяди',
    eng: 'Is that your parents` car? No, it`s not theirs, it`s my uncle`s',
    regEng: '/Is that your parents[`’\'] car\\? No, it(?: is not|[`’\']s not| isn[`’\']t) theirs, it(?: is|[`’\']s) my uncle[`’\']s/gm'
  },
  {
    rus: 'Ты пошёл на ту вечеринку вчера? Нет, я решил закончить кое-какую работу',
    eng: 'Did you go to that party yesterday? No, I decided to finish some work',
    regEng: '/Did you go to (?:that|the) party yesterday\\? No, I decided to finish some work/gm'
  },
  {
    rus: 'На кого она смотрит? Она смотрит на него',
    eng: 'Who is she looking at? She`s looking at him',
    regEng: '/(?:Whom? is|Who[`’\']s) she looking at\\? She(?: is|[`’\']s) looking at him/gm'
  },
  {
    rus: 'Важно помнить, что отношение – это всё. Ваш успех зависит от вашего отношения. Так что всегда оставайтесь позитивными!',
    eng: 'It`s important to remember that attitude is everything. Your success depends on your attitude. So always stay positive!',
    regEng: '/It(?: is|[`’\']s) important to remember that attitude is everything. Your success depends on your attitude. So always stay positive!/gm'
  }
]
export default data