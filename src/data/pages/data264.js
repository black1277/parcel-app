// 15-16 > 15.6 > 1
const data = [
  {
    rus: 'Она ищет меня? Нет, она ищет своего мужа',
    eng: 'Is she looking for me? No, she`s looking for her husband',
    regEng: '/Is she looking for me\\? No, she(?: is searching|[`’\']s searching| is looking|[`’\']s looking) for her husband/gm'
  },
  {
    rus: 'Вы много людей знаете в этом городе? Нет, я знаю всего несколько людей здесь',
    eng: 'Do you know many people in this city? No, I know just a few people here',
    regEng: '/Do you know (?:a lot of|lots of|many) people in this (?:city|town)\\? No, I know just a few people here/gm'
  },
  {
    rus: 'Её кожа светлее, чем у него, а его волосы темнее, чем у неё',
    eng: 'Her skin is lighter than his and his hair is darker than hers',
    regEng: '/Her skin(?: is lighter than his and his hair is|[`’\']s lighter than his and his hair[`’\']s) darker than hers/gm'
  },
  {
    rus: 'У меня осталось мало наличных, но на моём банковском счёте много денег',
    eng: 'I have little cash left but there`s a lot of money on my bank account',
    regEng: '/I have little cash left but there(?: is a lot|[`’\']s a lot| is lots|[`’\']s lots) of money on my bank account/gm'
  },
  {
    rus: 'Что ты будешь делать, пока я буду спать? Я буду работать. Мне много важных вещей делать',
    eng: 'What will you be doing while I`m sleeping? I`ll be working. I have a lot of important things to do',
    regEng: '/What will you be doing while I(?: am|[`’\']m) sleeping\\? I(?: will|[`’\']ll) be working. I have (?:a lot of|lots of|many) important things to do/gm'
  }
]
export default data