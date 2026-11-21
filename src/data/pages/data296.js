// 17-20 > 17.2 > 6
const data = [
  {
    rus: 'Она станет учителем, когда закончит школу. Я думаю, что она будет замечательным учителем',
    eng: 'She`s going to become a teacher when she finishes school. I think that she`ll be a great teacher',
    regEng: '/(?:(?:When she finishes school, she is going to become a teacher. I think(?: that)?|She is going to become a teacher when she finishes school. I think(?: that)?) she will|(?:(?:When she finishes school, she(?: is|[`’\']s) going to become a teacher.|She(?: is|[`’\']s) going to become a teacher when she finishes school.) I think that|(?:When she finishes school, she(?: is|[`’\']s) going to become a teacher.|She(?: is|[`’\']s) going to become a teacher when she finishes school.) I think) she[`’\']ll) be a great teacher/gm'
  },
  {
    rus: 'Телефон звонит! Правда? Я ничего не слышал. Я отвечу на него!',
    eng: 'The phone is ringing! Really? I didn`t hear anything. I`ll get it!',
    regEng: '/The phone(?: is|[`’\']s) ringing! Really\\? I (?:did not hear anything. I(?: will answer|[`’\']ll answer| will get|[`’\']ll get)|didn[`’\']t hear anything. I[`’\']ll (?:answer|get)|heard nothing. I[`’\']ll (?:answer|get)) it!/gm'
  },
  {
    rus: 'Пожалуйста, подожди внутри. Никуда не ходи. Я вернусь через несколько минут',
    eng: 'Please wait inside. Don`t go anywhere. I`ll be back in a few minutes',
    regEng: '/(?:Wait inside, please. (?:Do not go anywhere. I(?: will come|[`’\']ll come| will be|[`’\']ll be)|Don[`’\']t go anywhere. I[`’\']ll (?:come|be))|Please wait inside. (?:Do not go anywhere. I(?: will come|[`’\']ll come| will be|[`’\']ll be)|Don[`’\']t go anywhere. I[`’\']ll (?:come|be))) back in a few minutes/gm'
  },
  {
    rus: 'Я не думаю, что эта команда выиграет матч. А ты что думаешь? Я не уверен. Посмотрим',
    eng: 'I don`t think that this team will win the match. And what do you think? I`m not sure. We`ll see',
    regEng: '/I (?:do not think (?:that )?this team will win the match. And what do you think\\? I am not sure. We will|don[`’\']t think(?: that)? this team will win the match. And what do you think\\? I(?: am|[`’\']m) not sure. We[`’\']ll) see/gm'
  },
  {
    rus: 'Они в отношениях? Да, они влюблены друг в друга. Они собираются пожениться и завести детей',
    eng: 'Are they in a relationship? Yes, they`re in love with each other. They`re going to get married and have children',
    regEng: '/(?:Are they in a relationship\\? Yes, they(?: are in love with each other. They are|[`’\']re in love with each other. They[`’\']re) going to get married and have children|Are they in a relationship\\? Yes, they(?: are in love with each other. They are|[`’\']re in love with each other. They[`’\']re) going to get married and have kids)/gm'
  },
  {
    rus: 'Стакан слишком полный. Ты прольёшь свой сок. Будь осторожна!',
    eng: 'The glass is too full. You`re going to spill your juice. Be careful!',
    regEng: '/The glass is too full. You(?: are|[`’\']re) going to spill your juice. Be careful!/gm'
  },
  {
    rus: 'Ты одолжишь мне немного денег, пожалуйста? Ну, у меня не много наличных осталось. Но конечно я одолжу тебе несколько долларов',
    eng: 'Will you lend me a little money, please? Well, I don`t have much cash left. But of course I`ll lend you a few dollars',
    regEng: '/Will you lend me (?:(?:a little|some) money, please\\? Well, I do not have much cash left. But of course I will|(?:a little|some) money, please\\? Well, I don[`’\']t have much cash left. But of course I[`’\']ll) lend you a few dollars/gm'
  },
  {
    rus: 'Мы думаем, что она сдержит обещание. Она очень надёжный и ответственный человек',
    eng: 'We think that she`ll keep her promise. She`s a very reliable and responsible person',
    regEng: '/We think that she(?: will keep her promise. She is|[`’\']ll keep her promise. She[`’\']s) a very reliable and responsible person/gm'
  }
]
export default data