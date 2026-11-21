// 15-16 > 16.2 > 2
const data = [
  {
    rus: 'Сложно проснуться рано утром, если ложишься спать поздно',
    eng: 'It`s difficult to wake up early in the morning if you go to bed late',
    regEng: '/(?:If you go to (?:sleep|bed) late, it(?: is|[`’\']s) difficult to wake up early in the morning|It(?: is|[`’\']s) difficult to wake up early in the morning if you go to (?:sleep|bed) late)/gm'
  },
  {
    rus: 'Как холодно на улице? О, там мороз. Так что давай просто останемся внутри',
    eng: 'How cold is it outside? Oh, it`s freezing there. So let`s just stay inside',
    regEng: '/How cold is it outside\\? Oh, it(?: is|[`’\']s) freezing there. So let(?: us|[`’\']s) just stay inside/gm'
  },
  {
    rus: 'Добрый день! Замечательно поговорить с тобой опять! Как ты? Я превосходно. А у тебя как дела?',
    eng: 'Good afternoon! It`s great to talk to you again! How are you? I`m fine. And how are you doing?',
    regEng: '/Good afternoon! (?:(?:It is great (?:to (?:speak (?:with you again! How are you doing\\? I(?: am doing|[`’\']m doing| am|[`’\']m)|to you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m))|talk (?:with you again! How are you doing\\? I(?: am doing|[`’\']m doing| am|[`’\']m)|to you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m)))|with (?:speak to you again! How are you\\? I am(?: doing)?|talk to you again! How are you\\? I(?: am doing|[`’\']m doing| am|[`’\']m)))|It[`’\']s great to (?:speak (?:with|to)|talk (?:with|to)) you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m)|Great to (?:speak (?:with|to)|talk (?:with|to)) you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m)) fine. And how are you doing\\?|(?:It(?: is|[`’\']s) great|Great) to (?:speak (?:with|to)|talk (?:with|to)) you again! How are you doing\\? I(?: am doing|[`’\']m doing| am|[`’\']m) fine. And how are you\\?)/gm'
  },
  {
    rus: 'Невозможно выучить английский, если не повторяешь предложения вслух много раз',
    eng: 'It`s impossible to learn English if you don`t repeat sentences out loud many times',
    regEng: '/(?:If you (?:(?:(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many) times, it(?: is|[`’\']s) not|(?:(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot|lots) of|(?:do not repeat(?: the)?|don[`’\']t repeat) sentences out loud many) times, it isn[`’\']t) possible|(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many) times, it(?: is|[`’\']s) impossible) to learn English|(?:It (?:is (?:not possible|impossible) to learn English if you (?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many)|isn[`’\']t possible to learn English if you (?:(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot|lots) of|(?:do not repeat(?: the)?|don[`’\']t repeat) sentences out loud many))|It[`’\']s (?:not possible|impossible) to learn English if you (?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many)) times)/gm'
  },
  {
    rus: 'Как часто идёт снег в этой стране? Снег никогда не идёт, но очень часто идёт дождь. Так что хорошо всегда иметь зонтик с собой',
    eng: 'How often does it snow in this country? It never snows but it rains very often. So it`s good to always have an umbrella with you',
    regEng: '/How often does it snow in this country\\? It never snows but it rains very often. So it(?: is|[`’\']s) good to always have an umbrella with you/gm'
  },
  {
    rus: 'Необходимо пить много воды и есть хорошую еду, чтобы быть здоровым',
    eng: 'It`s necessary to drink a lot of water and eat good food to be healthy',
    regEng: '/(?:It(?: is|[`’\']s) necessary to drink (?:a lot|lots) of water and(?: to)? eat good food to be healthy|To be healthy it(?: is|[`’\']s) necessary to drink (?:a lot|lots) of water and(?: to)? eat good food)/gm'
  },
  {
    rus: 'Дождь не идёт. Пойдём на прогулку. Нет, я не хочу идти на улицу, там слишком жарко',
    eng: 'It`s not raining. Let`s go for a walk. No, I don`t want to go outside, it`s too hot there',
    regEng: '/(?:It (?:is not raining. Let(?: us|[`’\']s) go for a walk. No, I (?:do not|don[`’\']t) want to go outside, it is|isn[`’\']t raining. Let[`’\']s go for a walk. No, I (?:do not|don[`’\']t) want to go outside, it[`’\']s) too hot there|It[`’\']s not raining. Let[`’\']s go for a walk. No, I (?:do not|don[`’\']t) want to go outside, it[`’\']s too hot there)/gm'
  },
  {
    rus: 'Возможно ли забронировать рейс в Лондон прямо сейчас? Да, конечно. Минуточку',
    eng: 'Is it possible to book a flight to London right now? Yes, of course. Just a minute',
    regEng: '/Is it possible to book a flight to London right now\\? Yes, of course. Just a (?:minute|moment)/gm'
  }
]
export default data