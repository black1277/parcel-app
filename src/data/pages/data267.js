// 15-16 > 15.6 > 4
const data = [
  {
    rus: 'Чьи то пальто? Они моих друзей',
    eng: 'Whose coats are those? They`re my friends`',
    regEng: '/Whose coats are those\\? They(?: are|[`’\']re) my friends[`’\']/gm'
  },
  {
    rus: 'О чём этот журнал? Я не знаю, давай почитаем его вместе!',
    eng: 'What is this magazine about? I don`t know, let`s read it together!',
    regEng: '/What is this magazine about\\? I (?:do not|don[`’\']t) know, let(?: us|[`’\']s) read it together!/gm'
  },
  {
    rus: 'Сколько каши бабушка хочет, чтобы я съел? Она хочет, чтобы ты съел всю кашу',
    eng: 'How much porridge does Grandma want me to eat? She wants you to eat all the porridge',
    regEng: '/How much porridge does (?:Grandmother|Grandma) want me to eat\\? She wants you to eat all the porridge/gm'
  },
  {
    rus: 'Нет причины беспокоиться! Всё в порядке!',
    eng: 'There`s no reason to worry! Everything is alright!',
    regEng: '/There(?: is not any| isn[`’\']t any| is no|[`’\']s no) reason to (?:be worried|worry)! Everything(?: is all right|[`’\']s all right| is alright|[`’\']s alright)!/gm'
  },
  {
    rus: 'Сколько масла ты обычно кладёшь на бутерброды? Я никогда не ем масло. Я просто ненавижу его вкус',
    eng: 'How much butter do you usually put on sandwiches? I never eat butter. I just hate its taste',
    regEng: ''
  }
]
export default data