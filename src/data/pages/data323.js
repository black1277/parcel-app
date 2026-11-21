// 17-20 > 18.1 > 8
const data = [
  {
    rus: 'Какая была погода вчера? О, было слишком жарко. Я решил остаться внутри',
    eng: 'What was the weather like yesterday? Oh, it was too hot. I decided to stay inside',
    regEng: ''
  },
  {
    rus: 'Какие вопросы у вас ко мне? У меня есть вопрос. Какого рода места полезно посетить в этой стране?',
    eng: 'What questions do you have for me? I have a question. What kind of places is it useful to visit in this country?',
    regEng: '/What questions do you have for me\\? I have a question. What (?:(?:kind|sort) of )?places is it useful to visit in this country\\?/gm'
  },
  {
    rus: 'Какой он? Он очень заботливый и поддерживающий. Он замечательный друг',
    eng: 'What`s he like? He`s very caring and supportive. He`s a great friend',
    regEng: '/(?:What is he like\\? He(?: is very caring and supportive. He is|[`’\']s very caring and supportive. He[`’\']s) a great friend|What[`’\']s he like\\? He(?: is very caring and supportive. He[`’\']s|[`’\']s very caring and supportive. He is|[`’\']s very caring and supportive. He[`’\']s) a great friend)/gm'
  },
  {
    rus: 'Каково это быть матерью? Ну, иногда напряжённо, но большую часть времени это просто удивительно!',
    eng: 'What does it feel like to be a mother? Well, sometimes it`s stressful, but most of the time it`s just amazing!',
    regEng: '/(?:What (?:(?:does it feel like to be a (?:(?:(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) sometimes|(?:mother|mom|mum)\\? Well, sometimes it is|(?:mother|mom|mum)\\? Well, sometimes it[`’\']s) stressful,|(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) stressful sometimes,)|is it like to be a (?:(?:(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) sometimes|(?:mother|mom|mum)\\? Well, sometimes it is|(?:mother|mom|mum)\\? Well, sometimes it[`’\']s) stressful,|(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) stressful sometimes,)) but most of the time it is|(?:does it feel like to be a (?:(?:(?:(?:mother|mom|mum)\\? Well, sometimes|mother\\? Well,) it is|(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) sometimes|(?:mother|mom|mum)\\? Well, sometimes it[`’\']s) stressful,|(?:(?:mother|mom|mum)\\? Well, it[`’\']s|(?:mom|mum)\\? Well, it is) stressful sometimes,)|is it like to be a (?:(?:(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) sometimes|(?:mother|mom|mum)\\? Well, sometimes it is|(?:mother|mom|mum)\\? Well, sometimes it[`’\']s) stressful,|(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) stressful sometimes,)) but most of the time it[`’\']s) just amazing!|What[`’\']s it like to be a (?:(?:(?:(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) sometimes|(?:mother|mom|mum)\\? Well, sometimes it is|(?:mother|mom|mum)\\? Well, sometimes it[`’\']s) stressful,|(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) stressful sometimes,) but most of the time it is|(?:(?:(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) sometimes|(?:mother|mom|mum)\\? Well, sometimes it is|(?:mother|mom|mum)\\? Well, sometimes it[`’\']s) stressful,|(?:mother|mom|mum)\\? Well, it(?: is|[`’\']s) stressful sometimes,) but most of the time it[`’\']s) just amazing!)/gm'
  },
  {
    rus: 'Какого цвета её платье? Оно кажется чёрным, но я думаю, что оно тёмно-синее',
    eng: 'What colour is her dress? It seems black but I think that it`s dark-blue',
    regEng: '/What colou?r is her dress\\? It seems black but I think (?:that it(?: is|[`’\']s)|it is|it[`’\']s) dark-blue/gm'
  },
  {
    rus: 'Какой размер она носит? Я не знаю точно, но она крупная дама',
    eng: 'What size does she wear? I don`t know exactly but she`s a large lady',
    regEng: '/What size does she wear\\? I (?:do not|don[`’\']t) know exactly but she(?: is|[`’\']s) a (?:large|big) lady/gm'
  },
  {
    rus: 'Какие твои любимые предметы в школе? Мои любимые предметы – математика, физика, химия и история',
    eng: 'What are your favourite subjects in school? My favourite subjects are Mathematics, Physics, Chemistry and History',
    regEng: '/What are your (?:favourite subjects in school\\? My favourite subjects are (?:Mathematics|Maths|Math),|favorite subjects in school\\? My favorite subjects are (?:Mathematics|Maths|Math),) Physics, Chemistry and History/gm'
  },
  {
    rus: 'Как выглядит твоя машина? Это светло-синий кабриолет',
    eng: 'What does your car look like? It`s a light-blue cabriolet',
    regEng: '/What does your car look like\\? It(?: is|[`’\']s) a light-blue cabriolet/gm'
  }
]
export default data