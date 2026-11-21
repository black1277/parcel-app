// 10-14 > 13.1 > 4
const data = [
  {
    rus: 'Мои дети обычно не едят много фруктов, они предпочитают овощи',
    eng: 'My children don`t usually eat much fruit, they prefer vegetables',
    regEng: '/My (?:(?:children|kids) do not|(?:children|kids) don[`’\']t) usually eat (?:a lot of|lots of|much) fruit, they prefer vegetables/gm'
  },
  {
    rus: 'Я добавлю немного соли и перца в салат и тогда он будет готов, чтобы кушать',
    eng: 'I`ll add a little salt and pepper to the salad and then it`ll be ready to eat',
    regEng: '/I(?: will|[`’\']ll) add (?:a little|some) salt and pepper to the salad and then it(?: will|[`’\']ll) be ready to eat/gm'
  },
  {
    rus: 'Сколько месяцев в году?',
    eng: 'How many months are there in a year?',
    regEng: '/How many months are there in (?:one|a) year\\?/gm'
  },
  {
    rus: 'В комнате будет мало стульев',
    eng: 'There`ll be few chairs in the room',
    regEng: '/There(?: will|[`’\']ll) be few chairs in the room/gm'
  },
  {
    rus: 'У нас осталось не много рыбы, но у нас есть много пасты',
    eng: 'We don`t have much fish left, but we have a lot of pasta',
    regEng: '/We (?:do not|don[`’\']t) have (?:a lot of|lots of|much) fish left, but we have (?:a lot|lots) of pasta/gm'
  },
  {
    rus: 'Она не будет много краситься завтра, потому что она хочет, чтобы её кожа отдохнула',
    eng: 'She won`t wear much make-up tomorrow, because she wants her skin to rest',
    regEng: '/(?:She(?: is not|[`’\']s not| isn[`’\']t) going to|She(?: will|[`’\']ll) not|She won[`’\']t) wear (?:a lot of|lots of|much) make-up tomorrow, because she wants her skin to(?: (?:have|take) a)? rest/gm'
  },
  {
    rus: 'Сколько движения в этом городе?',
    eng: 'How much traffic is there in this city?',
    regEng: '/How much traffic is there in this (?:city|town)\\?/gm'
  },
  {
    rus: 'Когда я тренируюсь, у меня обычно много энергии',
    eng: 'When I exercise, I usually have a lot of energy',
    regEng: '/(?:When I exercise, I usually have (?:a lot|lots) of energy|I usually have (?:a lot|lots) of energy when I exercise)/gm'
  }
]
export default data