// 15-16 > 15.6 > 3
const data = [
  {
    rus: 'Поторопись! У меня осталось не много времени, чтобы ждать тебя',
    eng: 'Hurry up! I don`t have much time left to wait for you',
    regEng: '/Hurry(?: up)?! I (?:do not|don[`’\']t) have much time left to wait for you/gm'
  },
  {
    rus: 'Когда вы вернётесь из путешествия? Мы вернёмся в июле',
    eng: 'When will you be back from the trip? We`ll be back in July',
    regEng: '/When will you (?:come back from the trip\\? We(?: will|[`’\']ll) come|be back from the trip\\? We(?: will|[`’\']ll) be) back in July/gm'
  },
  {
    rus: 'Это твоя сумка? Нет, моя больше и тяжелее',
    eng: 'Is this your bag? No, mine is bigger and heavier',
    regEng: '/Is this your bag\\? No, mine(?: is|[`’\']s) bigger and (?:more heavy|heavier)/gm'
  },
  {
    rus: 'Что вы думаете о нём? Ну, я думаю, что у него слишком мало опыта для этой задачи, но он всегда готов учиться',
    eng: 'What do you think about him? Well, I think that he has too little experience for this task but he`s always ready to learn',
    regEng: '/What do you think about him\\? Well, I think(?: that)? he has too little experience for this task but he(?: is|[`’\']s) always ready to learn/gm'
  },
  {
    rus: 'Что она делала, когда они пришли? Она принимала душ',
    eng: 'What was she doing when they came? She was having a shower',
    regEng: '/What was she doing when they came\\? She was (?:having|taking) a shower/gm'
  }
]
export default data