// 15-16 > 15.4 > 19
const data = [
  {
    rus: 'Что ты делаешь? Я пробую эти пироженки',
    eng: 'What are you doing? I`m tasting these cakes',
    regEng: '/What are you doing\\? I(?: am tasting|[`’\']m tasting| am trying|[`’\']m trying) these cakes/gm'
  },
  {
    rus: 'Пожалуйста, возьми фонарик. На улице темно',
    eng: 'Please take the flashlight. It`s dark outside',
    regEng: '/(?:Take (?:the|a) flashlight, please. It(?: is|[`’\']s)|Please take (?:the|a) flashlight. It(?: is|[`’\']s)) dark outside/gm'
  },
  {
    rus: 'Мы ждём тебя! Да, я уже иду!',
    eng: 'We`re waiting for you! Yes, I`m already coming',
    regEng: '/We(?: are|[`’\']re) waiting for you! Yes, I(?: am|[`’\']m) already coming/gm'
  },
  {
    rus: 'Кто знает, как открыть эту дверь?',
    eng: 'Who knows how to open this door?',
    regEng: ''
  },
  {
    rus: 'То твои туфли? Нет, мои здесь',
    eng: 'Are those your shoes? No, mine are here',
    regEng: ''
  }
]
export default data