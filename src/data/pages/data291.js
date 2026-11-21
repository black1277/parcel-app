// 17-20 > 17.1 > 12
const data = [
  {
    rus: 'Как её зовут? Какой она национальности? Её зовут Мария и она русская',
    eng: 'What`s her name? What`s her nationality? Her name is Maria and she`s Russian',
    regEng: '/(?:(?:(?:What is her name\\? What(?: is her nationality\\? She is|[`’\']s her nationality\\? She is|[`’\']s her nationality\\? She[`’\']s) Russian and her name|What[`’\']s her name\\? What(?: is her nationality\\? She is| is her nationality\\? She[`’\']s|[`’\']s her nationality\\? She[`’\']s) Russian and her name) is|(?:What is her name\\? What(?: is her nationality\\? She is|[`’\']s her nationality\\? She is|[`’\']s her nationality\\? She[`’\']s) Russian and her|What[`’\']s her name\\? What(?: is her nationality\\? She is| is her nationality\\? She[`’\']s|[`’\']s her nationality\\? She[`’\']s) Russian and her) name[`’\']s) Maria|(?:(?:What is her name\\? What(?: is her nationality\\? Her name is|[`’\']s her nationality\\? Her name is| is her nationality\\? Her name[`’\']s|[`’\']s her nationality\\? Her name[`’\']s) Maria and she|What[`’\']s her name\\? What is her nationality\\? Her name(?: is|[`’\']s) Maria and she) is|(?:What[`’\']s her name\\? What(?: is her nationality\\? Her name is|[`’\']s her nationality\\? Her name is| is her nationality\\? Her name[`’\']s|[`’\']s her nationality\\? Her name[`’\']s) Maria and|What is her name\\? What[`’\']s her nationality\\? Her name(?: is|[`’\']s) Maria and) she[`’\']s) Russian)/gm'
  },
  {
    rus: 'Как выглядит твой муж? Он красивый и высокий',
    eng: 'What does your husband look like? He`s handsome and tall',
    regEng: '/(?:What does your husband look like\\? He(?: is|[`’\']s)|How does your husband look\\? He(?: is|[`’\']s)) handsome and tall/gm'
  },
  {
    rus: 'Каково это быть учителем? О, это просто фантастически! Я обожаю свою работу!',
    eng: 'What`s it like to be a teacher? Oh, it`s just fantastic! I adore my job!',
    regEng: '/What(?: is|[`’\']s) it like to be a teacher\\? Oh, it(?: is|[`’\']s) just fantastic! I adore my job!/gm'
  },
  {
    rus: 'Какого рода фильмы ты обычно смотришь? Я обычно смотрю боевики, комедии и драмы',
    eng: 'What kind of films do you usually watch? I usually watch action films, comedies and dramas',
    regEng: '/What (?:(?:kind of films do you (?:usually watch\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),)|watch usually\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),))|sort of films do you (?:usually watch\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),)|watch usually\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),))) comedies and dramas|(?:(?:(?:kind|sort) of films do you usually watch\\?|(?:kind|sort) of films do you watch usually\\?) I watch action movies,|(?:(?:kind|sort) of films do you usually watch\\?|(?:kind|sort) of films do you watch usually\\?) I watch action films,) comedies and dramas usually)/gm'
  },
  {
    rus: 'Какая погода сейчас? Солнечно и тепло. Давай пойдём на прогулку!',
    eng: 'What`s the weather like now? It`s sunny and warm. Let`s go for a walk!',
    regEng: '/What(?: is|[`’\']s) the weather like now\\? It(?: is|[`’\']s) sunny and warm. Let(?: us|[`’\']s) go for a walk!/gm'
  },
  {
    rus: 'Какую музыку тебе нравится слушать? Мне нравится слушать поп музыку, рок музыку и классическую музыку',
    eng: 'What music do you like to listen to? I like to listen to pop music, rock music and classical music',
    regEng: '/What music do you like to listen to\\? I like to listen to (?:pop music, rock music|pop, rock) and classical music/gm'
  },
  {
    rus: 'Какой её парень? Он добрый, дружелюбный и умный',
    eng: 'What`s her boyfriend like? He`s kind, friendly and smart',
    regEng: '/What(?: is|[`’\']s) her boyfriend like\\? He(?: is|[`’\']s) kind, friendly and (?:intelligent|clever|smart)/gm'
  },
  {
    rus: 'Какого цвета твои перчатки? Они серые? Они белые. Сейчас они просто грязные',
    eng: 'What colour are your gloves? Are they grey? They`re white. Now they`re just dirty',
    regEng: '/What (?:colou?r are your gloves\\? Are they (?:grey|gray)\\? They(?: are white. They are| are white. They[`’\']re|[`’\']re white. They are|[`’\']re white. They[`’\']re) just dirty now|colou?r are your gloves\\? Are they (?:grey|gray)\\? They(?: are|[`’\']re) white. Now they(?: are|[`’\']re) just dirty)/gm'
  }
]
export default data