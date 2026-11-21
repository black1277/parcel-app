// 15-16 > 15.2 > 8
const data = [
  {
    rus: 'Им нужно, чтобы мы одолжили им немного денег, чтобы купить кое-какую одежду для вечеринки',
    eng: 'They need us to lend them a little money to buy some clothes for the party',
    regEng: '/They need us to lend them (?:a little|some) money to buy some clothes for (?:the|a) party/gm'
  },
  {
    rus: 'Что ты будешь делать в семь часов утра в понедельник? Я буду тренироваться',
    eng: 'What will you be doing at seven o`clock in the morning on Monday? I`ll be exercising',
    regEng: '/What will you be doing (?:at seven o[`’\']clock in the morning on Monday\\? I(?: will be exercising|[`’\']ll be exercising| will be training|[`’\']ll be training)|on Monday at seven o[`’\']clock in the morning\\? I(?: will be exercising|[`’\']ll be exercising| will be training|[`’\']ll be training))/gm'
  },
  {
    rus: 'Сколько времени займёт встреча? Она займёт всего несколько часов',
    eng: 'How much time will the meeting take? It`ll take just a few hours',
    regEng: '/How much time will the meeting take\\? It(?: will|[`’\']ll) take just a few hours/gm'
  },
  {
    rus: 'Я нашёл новую работу два месяца назад. О, это замечательная новость!',
    eng: 'I found a new job two months ago. Oh, that`s great news!',
    regEng: '/I found a new job two months ago. Oh, (?:(?:that|this|it) is|(?:that|it)[`’\']s) great news!/gm'
  },
  {
    rus: 'Чей телефон звонит? Это не мой. Я думаю, что это её',
    eng: 'Whose phone is ringing? It`s not mine. I think that it`s hers',
    regEng: '/Whose (?:(?:(?:telephone|phone) is ringing\\? That is not mine. I think(?: that)? that|phone is ringing\\? This (?:is not|isn[`’\']t) mine. I think(?: that)? this|(?:telephone|phone) is ringing\\? It is not mine. I think(?: that)? it) is|(?:telephone|phone) is ringing\\? That(?: is not|[`’\']s not| isn[`’\']t) mine. I think(?: that)? that[`’\']s|(?:telephone|phone) is ringing\\? It(?: is not|[`’\']s not| isn[`’\']t) mine. I think(?: that)? it[`’\']s) hers/gm'
  },
  {
    rus: 'У тебя есть какие-нибудь мысли, чтобы поделиться с нами? Нет, но у меня много вопросов',
    eng: 'Do you have any thoughts to share with us? No, but I have a lot of questions',
    regEng: '/Do you have any thoughts to share with us\\? No, but I have (?:a lot of|lots of|many) questions/gm'
  },
  {
    rus: 'Я купила очень вкусного сока вчера. Ты хочешь пить? Да, но я предпочитаю воду',
    eng: 'I bought some delicious juice yesterday. Are you thirsty? Yes, but I prefer water',
    regEng: '/(?:I bought (?:(?:some )?very tasty|some delicious|delicious) juice yesterday.|Yesterday I bought (?:(?:some )?very tasty|some delicious|delicious) juice.) Are you thirsty\\? Yes, but I prefer water/gm'
  },
  {
    rus: 'Он сильнее тебя, но ты умнее его',
    eng: 'He`s stronger than you but you`re smarter than him',
    regEng: '/He(?: is|[`’\']s) stronger than you(?: are)? but you(?: are more intelligent|[`’\']re more intelligent| are more clever|[`’\']re more clever| are cleverer|[`’\']re cleverer| are smarter|[`’\']re smarter) than (?:he is|him|he)/gm'
  }
]
export default data