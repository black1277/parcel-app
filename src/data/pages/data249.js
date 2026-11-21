// 15-16 > 15.4 > 6
const data = [
  {
    rus: 'Они будут работать, когда вы позвоните',
    eng: 'They`ll be working when you call',
    regEng: '/(?:When you call, they(?: will|[`’\']ll) be working|They(?: will|[`’\']ll) be working when you call)/gm'
  },
  {
    rus: 'Нет причины торопиться. У нас осталось немного времени',
    eng: 'There`s no reason to hurry. We have some time left',
    regEng: '/There(?: is not any|[`’\']s not any| isn[`’\']t any| is no|[`’\']s no) reason to (?:hurry.|rush.) We have (?:a little|some) time left/gm'
  },
  {
    rus: 'У нас не много времени осталось поговорить, потому что мне нужно идти на работу',
    eng: 'We don`t have much time left to talk, because I need to go to work',
    regEng: '/We (?:do not|don[`’\']t) have (?:a lot of|lots of|much) time left to (?:speak|talk), because I need to go to work/gm'
  },
  {
    rus: 'Не разговаривай! Малыш спит',
    eng: 'Don`t talk! The baby is sleeping',
    regEng: '/(?:Do not|Don[`’\']t) talk! The baby is sleeping/gm'
  },
  {
    rus: 'Есть так много стран, в которые она просто влюблена',
    eng: 'There are so many countries that she`s just in love with',
    regEng: '/There are so many countries (?:that she(?: is|[`’\']s)|she is|she[`’\']s) just in love with/gm'
  }
]
export default data