// 17-20 > 18.2 > 5
const data = [
  {
    rus: 'Какой твой е-мейл? Ой, я не помню его. Я дам тебе свой номер телефона взамен',
    eng: 'What`s your e-mail address? Oh, I don`t remember it. I`ll give you my phone number instead',
    regEng: '/(?:What is your e-mail address\\? Oh, I (?:do not remember it. I will|(?:do not|don[`’\']t) remember it. I[`’\']ll) give you my phone number instead|What[`’\']s your e-mail address\\? Oh, I (?:don[`’\']t remember it. I(?: will|[`’\']ll)|do not remember it. I[`’\']ll) give you my phone number instead)/gm'
  },
  {
    rus: 'Как выглядит твоя знакомая? Она очень привлекательная женщина. Её волосы чёрные, её глаза зелёные, а лицо овальное. Она настоящая классическая красавица',
    eng: 'What does your acquaintance look like? She`s a very attractive woman. Her hair is black, her eyes are green, and her face is oval. She`s a real classic beauty',
    regEng: '/What does your acquaintance look like\\? She(?: is|[`’\']s) a very attractive woman. Her hair is black, her eyes are green, and her face is oval. She(?: is|[`’\']s) a real classic beauty/gm'
  },
  {
    rus: 'Какого типа журналы она обычно читает? Она обычно читает спортивные журналы',
    eng: 'What sort of magazines does she usually read? She usually reads sports magazines',
    regEng: '/(?:What (?:(?:sort|kind) of )?magazines does she usually read\\? She reads sports magazines, usually|What(?: (?:sort|kind) of)? magazines does she usually read\\? (?:She usually|Usually she) reads sports magazines)/gm'
  },
  {
    rus: 'Каково это плавать в океане? О, это чистая магия!',
    eng: 'What does it feel like to swim in the ocean? Oh, it`s pure magic!',
    regEng: '/(?:What (?:does it feel like to swim in the ocean\\? Oh, (?:(?:that|this|it) is|(?:that|it)[`’\']s)|is it like to swim in the ocean\\? Oh, (?:(?:that|this|it) is|(?:that|it)[`’\']s)) pure magic!|What[`’\']s it like to swim in the ocean\\? Oh, (?:(?:that|this|it) is|(?:that|it)[`’\']s) pure magic!)/gm'
  },
  {
    rus: 'Какую одежду ты носишь большую часть времени? Большую часть времени я ношу длинные платья и высокие каблуки, но иногда, когда я чувствую себя подавленно, я ношу футболки и мешковатые джинсы',
    eng: 'What clothes do you wear most of the time? Most of the time I wear long dresses and high heels, but sometimes when I feel down, I wear T-shirts and baggy jeans',
    regEng: '/What clothes do you wear most of the time\\? Most of the time I wear long dresses and high heels, but sometimes when I feel down,? I wear T-shirts and baggy jeans/gm'
  },
  {
    rus: 'Какая будет погода завтра по прогнозу? По прогнозу будет холодно и ветрено',
    eng: 'What will the weather be like tomorrow according to the forecast? According to the forecast it`ll be cold and windy',
    regEng: '/What will the weather be like tomorrow according to the forecast\\? According to the forecast it(?: will|[`’\']ll) be cold and windy/gm'
  },
  {
    rus: 'Какая твоя коллега? Она очень ответственный и трудолюбивый человек. Так что я никогда не боюсь положиться на неё',
    eng: 'What`s your colleague like? She`s a very responsible and hard-working person. So I`m never afraid to rely on her',
    regEng: '/(?:What is your colleague like\\? She(?: is a very responsible and hard-working person. So I am|[`’\']s a very responsible and hard-working person. So I am| is a very responsible and hard-working person. So I[`’\']m|[`’\']s a very responsible and hard-working person. So I[`’\']m) never afraid to rely on her|What[`’\']s your colleague like\\? She[`’\']s a very responsible and hard-working person. So I[`’\']m never afraid to rely on her)/gm'
  },
  {
    rus: 'Какое программное обеспечение необходимо установить прежде всего? Хмм, я не уверена. Спроси Джона, он знает о компьютерах всё',
    eng: 'What software is it necessary to install first? Hmm, I`m not sure. Ask John, he knows everything about computers',
    regEng: '/What software is it necessary to install first\\? Hmm, I(?: am|[`’\']m) not sure. Ask John, he knows (?:everything|all) about computers/gm'
  }
]
export default data