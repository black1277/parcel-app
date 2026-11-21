// 15-16 > 15.6 > 8
const data = [
  {
    rus: 'Cолнце за облаками сейчас? Нет, в небе нет облаков',
    eng: 'Is the sun behind the clouds now? No, there aren`t any clouds in the sky',
    regEng: '/Is the sun behind the clouds now\\? No, there (?:are (?:not any|no)|aren[`’\']t any) clouds in the (?:skies|sky)/gm'
  },
  {
    rus: 'Кто звонил тебе в среду? То был мой родственник из России',
    eng: 'Who called you on Wednesday? That was my relative from Russia',
    regEng: ''
  },
  {
    rus: 'Они пытаются понять текст, но он слишком сложный',
    eng: 'They`re trying to understand the text but it`s too difficult',
    regEng: '/They(?: are|[`’\']re) trying to understand the text but it(?: is|[`’\']s) too difficult/gm'
  },
  {
    rus: 'Та машина твоя? Нет, она моих родителей, моя здесь',
    eng: 'Is that car yours? No, it`s my parents`, mine is here',
    regEng: '/Is that (?:car yours\\? No, it(?: is|[`’\']s)|your car\\? No, it(?: is|[`’\']s)) my parents[`’\'], mine is here/gm'
  },
  {
    rus: 'Ура! Замечательно! Отлично! Я делаю огромный прогресс! Мой английский становится лучше и лучше шаг за шагом! Я крутой / -ая!',
    eng: 'Yippee! Great! Excellent! I`m making huge progress! My English is getting better and better step by step! I`m awesome!',
    regEng: '/Yippee! Great! Excellent! I(?: am|[`’\']m) making huge progress! My English is getting better and better step by step! I(?: am|[`’\']m) awesome!/gm'
  }
]
export default data