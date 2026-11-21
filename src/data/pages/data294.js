// 17-20 > 17.2 > 4
const data = [
  {
    rus: 'Мои занятия заканчиваются в два часа, а затем я обедаю со своей сестрой',
    eng: 'My classes finish at two o`clock and then I`m having lunch with my sister',
    regEng: '/My classes finish at two o[`’\']clock and (?:then I(?: am|[`’\']m) having lunch with my sister|I(?: am|[`’\']m) having lunch with my sister then)/gm'
  },
  {
    rus: 'Ты собираешься прийти на вечеринку по случаю моего Дня Рождения Я не уверена. Мне много работы делать в этом месяце',
    eng: 'Are you going to come to my birthday party? I`m not sure. I have a lot of work to do this month',
    regEng: '/(?:Are you going to come to my birthday party\\? I(?: am|[`’\']m) not sure. I(?:[`’\']ve got a lot|[`’\']ve got lots| have a lot| have lots|[`’\']ve a lot|[`’\']ve lots) of work to do this month|Are you going to come to my birthday party\\? I(?: am|[`’\']m) not sure. This month I(?:[`’\']ve got a lot|[`’\']ve got lots| have a lot| have lots|[`’\']ve a lot|[`’\']ve lots) of work to do)/gm'
  },
  {
    rus: 'Она работает на следующей неделе? Нет, она едет в отпуск на следующей неделе',
    eng: 'Is she working next week? No, she`s going on holiday next week',
    regEng: '/Is she working next week\\? No, (?:she(?: is|[`’\']s) going on holiday next week|next week she(?: is|[`’\']s) going on holiday)/gm'
  },
  {
    rus: 'Лекция начинается в восемь часов. У нас осталась одна минута. О, нет! Мы опоздаем!',
    eng: 'The lecture starts at eight o`clock. We have one minute left. Oh, no! We`re going to be late!',
    regEng: '/The lecture starts at eight o[`’\']clock. We(?:[`’\']ve got| have|[`’\']ve) one minute left. Oh, no! We(?: are|[`’\']re) going to be late!/gm'
  },
  {
    rus: 'Я так хочу пить. Я собираюсь купить воды. Но магазин открывается только через два часа',
    eng: 'I`m so thirsty. I`m going to buy some water. But the shop only opens in two hours',
    regEng: '/(?:I am so thirsty. I(?: am going to buy some water. But the shop only opens in| am going to buy some water. But the shop opens only in| am going to buy some water. But the shop opens in only|[`’\']m going to buy some water. But the shop only opens in|[`’\']m going to buy some water. But the shop opens only in|[`’\']m going to buy some water. But the shop opens in only) two hours|I[`’\']m so thirsty. I(?: am going to buy some water. But the shop only opens in| am going to buy some water. But the shop opens only in| am going to buy some water. But the shop opens in only|[`’\']m going to buy some water. But the shop only opens in|[`’\']m going to buy some water. But the shop opens only in|[`’\']m going to buy some water. But the shop opens in only) two hours)/gm'
  },
  {
    rus: 'Мы переезжаем в частный дом в августе! Ух ты! Какие чудесные новости! Вы продадите или сдадите вашу нынешнюю квартиру?',
    eng: 'We`re moving to a private house in August! Wow! What wonderful news! Are you going to sell or rent your present flat?',
    regEng: '/(?:We are moving to a private house in August! (?:Wow! What wonderful news! Are you (?:going to sell or rent your present (?:apartment|flat)\\?|selling or renting your present (?:apartment|flat)\\?)|Gee! What wonderful news! Are you (?:going to sell or rent your present (?:apartment|flat)\\?|selling or renting your present (?:apartment|flat)\\?))|We[`’\']re moving to a private house in August! (?:Wow! What wonderful news! Are you (?:going to sell or rent your present (?:apartment|flat)\\?|selling or renting your present (?:apartment|flat)\\?)|Gee! What wonderful news! Are you (?:going to sell or rent your present (?:apartment|flat)\\?|selling or renting your present (?:apartment|flat)\\?)))/gm'
  },
  {
    rus: 'Тебе нужно убрать квартиру на этой неделе. Это твоя обязанность. Я не собираюсь делать это за тебя',
    eng: 'You need to clean the flat this week. It`s your duty. I`m not going to do it for you',
    regEng: '/(?:(?:(?:(?:(?:(?:It(?: is|[`’\']s) necessary for you It[`’\']s necessary for you|You need) to clean the apartment|(?:It(?: is|[`’\']s) necessary for you|You need) to clean the flat) this week. It is|(?:It(?: is|[`’\']s) necessary for you|You need) to clean the (?:apartment|flat) this week. It[`’\']s) your duty.|(?:It(?: is|[`’\']s) necessary for you|You need) to clean the (?:apartment|flat) this week. It(?: is|[`’\']s) your responsibility.) I[`’\']m|(?:It(?: is|[`’\']s) necessary for you|You need) to clean the (?:apartment|flat) this week. It(?: is|[`’\']s) your (?:responsibility.|duty.) I am) not going to do that|(?:(?:(?:(?:It(?: is|[`’\']s) necessary for you|You need) to clean the (?:apartment|flat) this week. It[`’\']s|(?:(?:It(?: is|[`’\']s) necessary for you|You need) to clean the flat|(?:It(?: is|[`’\']s) necessary|You need) to clean the apartment) this week. It is) your responsibility.|(?:It(?: is|[`’\']s) necessary for you|You need) to clean the (?:apartment|flat) this week. It(?: is|[`’\']s) your duty.) I am|(?:It(?: is|[`’\']s) necessary for you|You need) to clean the (?:apartment|flat) this week. It(?: is|[`’\']s) your (?:responsibility.|duty.) I[`’\']m) not going to do this|(?:It(?: is|[`’\']s) necessary for you|You need) to clean the (?:apartment|flat) this week. It(?: is|[`’\']s) your (?:responsibility. I(?: am|[`’\']m)|duty. I(?: am|[`’\']m)) not going to do it) for you/gm'
  },
  {
    rus: 'Я встречаюсь со своим старым другом днём. Мы последний раз видели друг друга три года назад. Мы будем говорить часами',
    eng: 'I`m meeting with my old friend in the afternoon. We last saw each other three years ago. We`re going to talk for hours',
    regEng: '/(?:I am meeting (?:with my old friend in the afternoon. (?:We (?:saw each other three years ago last time. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk)|last saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))|Last time we saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))|my old friend in the afternoon. (?:We (?:saw each other three years ago last time. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk)|last saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))|Last time we saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))) for hours|I[`’\']m meeting (?:with my old friend in the afternoon. (?:We (?:saw each other three years ago last time. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk)|last saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))|Last time we saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))|my old friend in the afternoon. (?:We (?:saw each other three years ago last time. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk)|last saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))|Last time we saw each other three years ago. We(?: are going to speak|[`’\']re going to speak| are going to talk|[`’\']re going to talk))) for hours)/gm'
  }
]
export default data