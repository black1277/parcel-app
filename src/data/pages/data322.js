// 17-20 > 18.1 > 6
const data = [
  {
    rus: 'Концерт закончен. Что ты будешь делать сейчас? Я пойду домой, потому что мне много дел делать',
    eng: 'The concert is finished. What are you going to do now? I`m going to go home, because I have a lot of things to do',
    regEng: '/The concert(?: is|[`’\']s) finished. What are you going to do now\\? I(?: am|[`’\']m) going(?: to go)? home, because I have (?:a lot of|lots of|many) things to do/gm'
  },
  {
    rus: 'Ты придёшь на мой День Рождения? Нет, я сожалею, но я не приду. Я просто ненавижу вечеринки в общем',
    eng: 'Will you come to my Birthday party? No, I`m sorry but I won`t come. I just hate parties in general',
    regEng: '/Will you come to my Birthday party\\? No,(?: I(?: am|[`’\']m))? sorry but I (?:will not|won[`’\']t) come. I just hate parties in general/gm'
  },
  {
    rus: 'Я потный и голодный. Я собираюсь принять душ и сделать что-то поесть',
    eng: 'I`m sweaty and hungry. I`m going to have a shower and make something to eat',
    regEng: '/(?:I am sweaty and hungry. I am going to (?:have|take) a shower and make something to eat|I[`’\']m sweaty and hungry. I[`’\']m going to (?:have|take) a shower and make something to eat)/gm'
  },
  {
    rus: 'Когда прибывает самолёт? Я не знаю. Я проверю расписание. Минутку',
    eng: 'When does the plane arrive? I don`t know. I`ll check the timetable. Just a minute',
    regEng: '/When does the plane arrive\\? I (?:do not|don[`’\']t) know. I(?: am going to|[`’\']m going to| will|[`’\']ll) check the timetable. Just a (?:minute|moment)/gm'
  },
  {
    rus: 'Она проходит важный экзамен в понедельник. Вот почему ей нужно учиться на этой неделе',
    eng: 'She`s taking an important exam on Monday. That`s why she needs to study this week',
    regEng: '/(?:She(?: is|[`’\']s) taking an important exam on Monday. (?:That is|This is|That[`’\']s) why she needs to study this week|She(?: is|[`’\']s) taking an important exam on Monday. (?:That is|This is|That[`’\']s) why this week she needs to study)/gm'
  },
  {
    rus: 'Мы не думаем, что эта компания будет успешной. Слишком сложно преуспеть в этом бизнесе',
    eng: 'We don`t think that this company will be successful. It`s too difficult to succeed in this business',
    regEng: '/We (?:do not|don[`’\']t) think(?: that)? this company(?: is going to|[`’\']s going to| will) be successful. It(?: is|[`’\']s) too difficult to succeed in this business/gm'
  },
  {
    rus: 'Каждый день они ходят в то место днём. Так что завтра в три часа они будут там снова',
    eng: 'Every day they go to that place in the afternoon. So tomorrow at three o`clock they`ll be there again',
    regEng: '/Every day they go to that place in the afternoon. So tomorrow (?:at three o[`’\']clock they(?: will|[`’\']ll) be there|they(?: will|[`’\']ll) be there at three o[`’\']clock) again/gm'
  },
  {
    rus: 'Сохраняй спокойствие! Я обещаю, что сделаю всё возможное, чтобы прийти вовремя завтра!',
    eng: 'Keep calm! I promise that I`ll do my best to be on time tomorrow!',
    regEng: '/Keep calm! I promise (?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) do my best to be on time tomorrow!/gm'
  }
]
export default data