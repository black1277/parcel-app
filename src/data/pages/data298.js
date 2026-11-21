// 17-20 > 17.2 > 8
const data = [
  {
    rus: 'Я видел тебя, когда ты шел на работу вчера, но ты не узнал меня. Правда? О чём я думал?',
    eng: 'I saw you when you were going to work yesterday, but you didn`t recognize me. Really? What was I thinking about?',
    regEng: '/(?:I saw you when you were going to work yesterday, but you (?:did not|didn[`’\']t)|Yesterday I saw you when you were going to work, but you (?:did not|didn[`’\']t)) recognize me. Really\\? What was I thinking about\\?/gm'
  },
  {
    rus: 'Её волосы гуще, чем твои? Нет, мои волосы более жидкие, чем у неё, но её волосы короче моих',
    eng: 'Is her hair thicker than yours? No, my hair is thinner than hers, but her hair is shorter than mine',
    regEng: '/Is her hair thicker than yours\\? No, my hair(?: is thinner than hers, but her hair is|[`’\']s thinner than hers, but her hair[`’\']s) shorter than mine/gm'
  },
  {
    rus: 'Сколько глав содержит эта книга? Она содержит мало глав, она не закончена',
    eng: 'How many chapters does this book contain? It contains few chapters, it`s not finished',
    regEng: '/How many chapters does this book contain\\? It contains few chapters, it(?: is not|[`’\']s not| isn[`’\']t) finished/gm'
  },
  {
    rus: 'Кто согласен со мной? Я согласна с тобой, но у меня есть некоторые пункты, чтобы добавить',
    eng: 'Who agrees with me? I agree with you but I have some points to add',
    regEng: '/Who agrees with me\\? I agree with you but I have (?:a few|some) points to add/gm'
  },
  {
    rus: 'Пожалуйста, одолжи мне чуть-чуть денег. Мне нужно всего несколько долларов. Они здесь принимают только наличные, а меня не осталось никаких наличных',
    eng: 'Please lend me a little money. I need just a few dollars. They only accept cash here and I don`t have any cash left',
    regEng: '/(?:(?:(?:(?:Lend me (?:a little money, please,|some money,) please.|Please lend me (?:a little|some) money.) I need just a few dollars. They only accept|(?:Lend me (?:a little|some) money, please.|Please lend me (?:a little|some) money.) I need just a few dollars. They accept only) cash here and I do not|(?:(?:Lend me (?:a little|some) money, please.|Please lend me (?:a little|some) money.) I need just a few dollars. They only accept|(?:Lend me (?:a little|some) money, please.|Please lend me (?:a little|some) money.) I need just a few dollars. They accept only) cash here and I don[`’\']t) have any|(?:(?:Lend me (?:a little|some) money, please.|Please lend me (?:a little|some) money.) I need just a few dollars. They only accept|(?:Lend me (?:a little|some) money, please.|Please lend me (?:a little|some) money.) I need just a few dollars. They accept only) cash here and I have no) cash left/gm'
  },
  {
    rus: 'Поспеши! У нас не много времени осталось, а нам всё ещё нужно сделать много дел на завтра',
    eng: 'Hurry up! We don`t have much time left and we still need to do a lot of things for tomorrow',
    regEng: '/Hurry(?: up)?! We (?:do not|don[`’\']t) have much time left and we still need to do (?:a lot of|lots of|many) things for tomorrow/gm'
  },
  {
    rus: 'Он ест много рыбы? Нет, он ест мало рыбы, он предпочитает мясо',
    eng: 'Does he eat much fish? No, he eats little fish, he prefers meat',
    regEng: '/Does he eat (?:a lot of|lots of|much) fish\\? No, he eats little fish, he prefers meat/gm'
  },
  {
    rus: 'Как я выгляжу в этом платье? Ты выглядишь просто фантастически! Это платье подходит тебе по размеру, и идёт тебе также',
    eng: 'How do I look in this dress? You look just fantastic! This dress fits you and suits you as well',
    regEng: '/How (?:am I looking in this dress\\? You(?:[`’\'] ae|[`’\']re) looking just fantastic! This dress fits you and suits you (?:as well|also|too)|do I look in this dress\\? You look just fantastic! This dress fits you and suits you (?:as well|also|too))/gm'
  }
]
export default data