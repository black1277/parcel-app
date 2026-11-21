// 10-14 > 13.1 > 3
const data = [
  {
    rus: 'У нас не много времени осталось поговорить, потому что мне нужно идти на работу',
    eng: 'We don`t have much time left to talk, because I need to go to work',
    regEng: '/We (?:do not|don[`’\']t) have (?:a lot of|lots of|much) time left to (?:speak|talk), because I need to go to work/gm'
  },
  {
    rus: 'Перед зданием стоит много машин',
    eng: 'There are many cars in front of the building',
    regEng: '/There are (?:a lot of|lots of|many) cars in front of the building/gm'
  },
  {
    rus: 'Я думаю, что она слишком много красится',
    eng: 'I think that she wears too much make-up',
    regEng: '/I think (?:that )?she wears too much make-up/gm'
  },
  {
    rus: 'Есть так много хороших новостей, которыми я хочу поделиться с тобой',
    eng: 'There`s so much good news that I want to share with you',
    regEng: '/There(?: is|[`’\']s) so much good news(?: that)? I want to share with you/gm'
  },
  {
    rus: 'Мой дядя часто даёт мне много полезных советов',
    eng: 'My uncle often gives me a lot of useful advice',
    regEng: '/My uncle often gives me (?:a lot|lots) of useful advice/gm'
  },
  {
    rus: 'Он не много денег заработал в прошлом месяце',
    eng: 'He didn`t earn much money last month',
    regEng: '/He (?:did not|didn[`’\']t) earn (?:a lot of|lots of|much) money last month/gm'
  },
  {
    rus: 'В чайнике осталось не много чая, но в кофейнике есть много кофе',
    eng: 'There isn`t much tea left in the teapot, but there`s a lot of coffee in the coffee pot',
    regEng: '/(?:There (?:(?:is not (?:a lot of|lots of|much)|isn[`’\']t (?:a lot of|much)) tea left in the teapot, but there(?: is|[`’\']s) a lot|(?:isn[`’\']t (?:a lot of|lots of|much) tea left in the teapot, but there(?: is|[`’\']s)|is not lots of tea left in the teapot, but there is) lots) of coffee in the coffee pot|There[`’\']s not (?:(?:a lot of|much) tea left in the teapot, but there(?: is|[`’\']s) a lot|(?:(?:a lot of|much) tea left in the teapot, but there is|(?:a lot of|lots of|much) tea left in the teapot, but there[`’\']s) lots) of coffee in the coffee pot)/gm'
  },
  {
    rus: 'У неё не много вопросов задать мне',
    eng: 'She doesn`t have many questions to ask me',
    regEng: '/She (?:does not|doesn[`’\']t) have (?:a lot of|lots of|many) questions to ask me/gm'
  }
]
export default data