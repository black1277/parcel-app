// 15-16 > 15.2 > 3
const data = [
  {
    rus: 'Дай мне какой-нибудь совет, пожалуйста. Я пытаюсь решить эту проблему',
    eng: 'Give me some advice, please. I`m trying to solve this problem',
    regEng: '/(?:Give me some advice, please. I(?: am|[`’\']m)|Please give me some advice. I(?: am|[`’\']m)) trying to solve this problem/gm'
  },
  {
    rus: 'Как часто идёт снег зимой?',
    eng: 'How often does it snow in winter?',
    regEng: ''
  },
  {
    rus: 'Пожалуйста, подождите меня! Я иду!',
    eng: 'Please wait for me! I`m coming!',
    regEng: '/(?:Wait for me, please! I(?: am|[`’\']m)|Please wait for me! I(?: am|[`’\']m)) coming!/gm'
  },
  {
    rus: 'Пойдёмте домой, пожалуйста. Становится поздно',
    eng: 'Let`s go home, please. It`s getting late',
    regEng: '/(?:Let[`’\']s go home, please. It(?: is|[`’\']s)|Please let[`’\']s go home. It(?: is|[`’\']s)) getting late/gm'
  },
  {
    rus: 'Не надевай своё пальто. На улице не холодно',
    eng: 'Don`t put on your coat. It`s not cold outside',
    regEng: '/(?:Do not|Don[`’\']t) put on your coat. It(?: is not|[`’\']s not| isn[`’\']t) cold outside/gm'
  },
  {
    rus: 'Смотри! Та девушка носит твоё платье',
    eng: 'Look! That girl is wearing your dress',
    regEng: '/Look! That girl(?: is|[`’\']s) wearing your dress/gm'
  },
  {
    rus: 'Пожалуйста, поторопитесь! Папа ищет вас',
    eng: 'Please hurry up! Dad is looking for you',
    regEng: '/(?:Hurry(?: up)?, please|Please hurry up|Please hurry)! (?:(?:(?:Father|Dad) is|(?:Father|Dad)[`’\']s) searching|(?:(?:Father|Dad) is|(?:Father|Dad)[`’\']s) looking) for you/gm'
  },
  {
    rus: 'Не бери зонт. Дождь не идёт',
    eng: 'Don`t take the umbrella. It`s not raining',
    regEng: '/(?:Do not|Don[`’\']t) take the umbrella. It(?: is not|[`’\']s not| isn[`’\']t) raining/gm'
  }
]
export default data