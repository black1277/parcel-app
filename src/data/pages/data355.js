// 17-20 > 19.4 > 8
const data = [
  {
    rus: 'Кто-то звонит тебе. Проверь свой телефон. Хмм, кто это? У меня нет этого номера в контактах',
    eng: 'Somebody`s calling you. Check your phone. Hmm, who is that? I don`t have this number in my contacts',
    regEng: '/(?:(?:Somebody is calling you. Check your (?:(?:telephone.|phone.) Hmm, who(?: is that| is this|[`’\']s that|[`’\']s this| is it)\\? I do not|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I don[`’\']t)|Someone is calling you. Check your (?:(?:telephone.|phone.) Hmm, who(?: is that| is this|[`’\']s that|[`’\']s this| is it)\\? I do not|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I don[`’\']t)|Somebody[`’\']s calling you. Check your (?:(?:telephone. Hmm, who(?: is that\\?| is this\\?|[`’\']s that\\?|[`’\']s this\\?| is it\\?)|phone. Hmm, who is (?:that|this|it)\\?) I don[`’\']t|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I do not)|Someone[`’\']s calling you. Check your (?:(?:telephone.|phone.) Hmm, who(?: is that| is this|[`’\']s that|[`’\']s this| is it)\\? I don[`’\']t|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I do not)) have this number|(?:Somebody|Someone) is calling you. Check your (?:telephone.|phone.) Hmm, who is (?:that|this|it)\\? I don[`’\']t have this mumber) in my contacts/gm'
  },
  {
    rus: 'Я думаю, что я тоньше, чем он, но толще, чем она',
    eng: 'I think that I am thinner than him, but thicker than her',
    regEng: '/I think (?:that I(?: am|[`’\']m)|I am|I[`’\']m) thinner than him, but thicker than her/gm'
  },
  {
    rus: 'Эти штаны слишком большие для меня. Мне нужен более маленький размер. О, вы такая тоненькая. У нас даже нет таких маленьких размеров',
    eng: 'These trousers are too large for me. I need a smaller size. Oh, you`re so thin. We don`t even have such small sizes',
    regEng: '/These (?:(?:trousers|pants) are too large for me. I need a smaller size. Oh, you are so thin. We do not|(?:trousers|pants) are too large for me. I need a smaller size. Oh, you(?: are|[`’\']re) so thin. We don[`’\']t) even have such small sizes/gm'
  },
  {
    rus: 'Не забудь взять свои солнечные очки с собой. Солнце слишком яркое сегодня',
    eng: 'Don`t forget to take your sunglasses with you. The sun is too bright today',
    regEng: '/(?:(?:Do not|Don[`’\']t) forget to take your sunglasses with you. The sun(?: is|[`’\']s) too bright today|(?:Do not|Don[`’\']t) forget to take your sunglasses with you. Today The sun(?: is|[`’\']s) too bright)/gm'
  },
  {
    rus: 'Когда прибывает самолёт? Я не знаю. Я проверю расписание. Минутку',
    eng: 'When does the plane arrive? I don`t know. I`ll check the timetable. Just a minute',
    regEng: '/When does the plane arrive\\? I (?:do not|don[`’\']t) know. I(?: am going to|[`’\']m going to| will|[`’\']ll) check the timetable. Just a (?:minute|moment)/gm'
  }
]
export default data