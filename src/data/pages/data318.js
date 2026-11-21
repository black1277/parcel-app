// 17-20 > 17.4 > 19
const data = [
  {
    rus: 'Мой брат работает доктором. Он женат и у него есть ребёнок',
    eng: 'My brother works as a doctor. He`s married and has a child',
    regEng: '/My brother works as a doctor. He(?: is|[`’\']s) married and(?: he)? has a (?:child|baby|kid)/gm'
  },
  {
    rus: 'Мой парень более активный, чем я, но я более терпеливая, чем он',
    eng: 'My boyfriend is more active than I am but I`m more patient than he is',
    regEng: '/(?:My boyfriend(?: is|[`’\']s) more active than I am but I(?: am|[`’\']m) more patient than he is|My boyfriend(?:[`’\']s more active than I me but I am|[`’\']s more active than I me but I[`’\']m| is more active than me but I am| is more active than me but I[`’\']m) more patient than him|My boyfriend(?: is|[`’\']s) more active than I but I(?: am|[`’\']m) more patient than he)/gm'
  },
  {
    rus: 'Эй! Ты идёшь? Мы ждём тебя. Завтрак готов и мы очень голодные',
    eng: 'Hey! Are you coming? We`re waiting for you. Breakfast is ready and we`re very hungry',
    regEng: '/Hey! Are you coming\\? We(?: are waiting for you. Breakfast is ready and we are|[`’\']re waiting for you. Breakfast is ready and we[`’\']re) very hungry/gm'
  },
  {
    rus: 'Есть ли какие-нибудь сообщения для меня? Нет, для тебя нет никаких новых сообщений',
    eng: 'Are there any messages for me? No, there are no new messages for you',
    regEng: '/Are there any messages for me\\? No, there (?:are (?:not any|no)|aren[`’\']t any) new messages for you/gm'
  },
  {
    rus: 'Прости! Прямо сейчас у меня нет времени разговаривать с тобой. Мой автобус уезжает через три минуты',
    eng: 'Sorry! Right now I have no time to talk to you. My bus leaves in three minutes',
    regEng: '/(?:(?:(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to talk) with|(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to talk) to) you.|(?:(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to talk) with|(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to talk) to) you right now.) My bus leaves in three minutes/gm'
  }
]
export default data