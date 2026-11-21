// 17-20 > 19.1 > 3
const data = [
  {
    rus: 'Какой совет вам нужно, чтобы я вам дал? Мне нужно, чтобы вы рассказали мне, как сбросить вес и остаться здоровым',
    eng: 'What advice do you need me to give you? I need you to tell me how to lose weight and stay healthy',
    regEng: '/What advice do you need me to give you\\? I need you to tell me how to lose weight and (?:to )?stay healthy/gm'
  },
  {
    rus: 'Что нужно, чтобы выучить английский? Нужно много работы и терпения',
    eng: 'What does it take to learn English? It takes a lot of work and patience',
    regEng: ''
  },
  {
    rus: 'Как выглядит твой брат? О, он выглядит как настоящая суперзвезда! Он красивый и высокий',
    eng: 'What does your brother look like? Oh, he looks like a real superstar! He`s handsome and tall',
    regEng: '/What does your brother look like\\? Oh, he looks like a real superstar! He(?: is|[`’\']s) handsome and tall/gm'
  },
  {
    rus: 'Какое твоё любимое блюдо? Моё любимое блюдо – омлет. Но мне нравятся любые блюда с яйцами, в общем',
    eng: 'What`s your favourite dish? My favourite dish is an omelette. But I like any dishes with eggs in general',
    regEng: '/(?:What[`’\']s your (?:favourite dish\\? My favourite dish is an omelette.|favorite dish\\? My favorite dish is an (?:omelette.|omelet.)) But I like any dishes with eggs in general|What is your favorite dish\\? My favorite dish is an (?:omelette.|omelet.) But I like any dishes with eggs in general)/gm'
  },
  {
    rus: 'Каково это быть далеко от своей семьи? Это очень одиноко и грустно. Поэтому важно ценить каждую минуту, когда ты с ними!',
    eng: 'What does it feel like to be far away from your family? It feels very lonely and sad. So it`s important to value every minute when you`re with them!',
    regEng: '/(?:What (?:(?:(?:does it feel like to be far (?:away from your family\\? It(?: feels| is|[`’\']s)|from your family\\? It(?: feels| is|[`’\']s))|is it like to be far (?:away )?from your family\\? It[`’\']s) very lonely and sad. So it is|(?:does it feel like to be far (?:away from your family\\? It(?: feels| is|[`’\']s)|from your family\\? It(?: feels| is|[`’\']s))|is it like to be far (?:away )?from your family\\? It[`’\']s) very lonely and sad. So it[`’\']s) important to value every minute when you are|(?:(?:does it feel like to be far (?:away from your family\\? It(?: feels| is|[`’\']s)|from your family\\? It(?: feels| is|[`’\']s))|is it like to be far (?:away )?from your family\\? It[`’\']s) very lonely and sad. So it is|(?:does it feel like to be far (?:away from your family\\? It(?: feels| is|[`’\']s)|from your family\\? It(?: feels| is|[`’\']s))|is it like to be far (?:away )?from your family\\? It[`’\']s) very lonely and sad. So it[`’\']s) important to value every minute when you[`’\']re) with them!|What[`’\']s it like to be far (?:(?:(?:away )?from your family\\? It[`’\']s very lonely and sad. So it is|(?:away )?from your family\\? It[`’\']s very lonely and sad. So it[`’\']s) important to value every minute when you are|(?:(?:away )?from your family\\? It[`’\']s very lonely and sad. So it is|(?:away )?from your family\\? It[`’\']s very lonely and sad. So it[`’\']s) important to value every minute when you[`’\']re) with them!)/gm'
  },
  {
    rus: 'то нужно для того, чтобы преуспеть в этом бизнесе? Нужна смелость, решительность и мудрость. Другими словами, это нелегко!',
    eng: 'What does it take to succeed in this business? It takes courage, determination and wisdom. In other words, it isn`t easy!',
    regEng: '/What does it take to succeed in this business\\? It takes courage, determination and wisdom. In other words, (?:(?:(?:that|this|it) is|(?:that|it)[`’\']s) not|(?:that|it) isn[`’\']t) easy!/gm'
  },
  {
    rus: 'Как выглядит комната вашей дочери? Ну, если честно, большую часть времени она выглядит «как беспорядок»',
    eng: 'What does your daughter`s room look like? - Well, to be honest, most of the time it looks like a mess',
    regEng: '/What does your daughter[`’\']s room look like\\? (?:- )?Well, to be honest, most of the time it looks like a mess/gm'
  },
  {
    rus: 'Какими темами он интересуется? О, легче сказать, какими темами он не интересуются. Он очень широких взглядов',
    eng: 'What topics is he interested in? Oh, it`s easier to say what topics he isn`t interested in. He`s very open-minded',
    regEng: '/(?:What topics is he interested in\\? Oh, it(?: is easier to say what topics he is not interested in. He is| is easier to say what topics he is not interested in. He[`’\']s| is easier to say what topics he isn[`’\']t interested in. He is| is easier to say what topics he[`’\']s not interested in. He is| is easier to say what topics he isn[`’\']t interested in. He[`’\']s| is easier to say what topics he[`’\']s not interested in. He[`’\']s|[`’\']s easier to say what topics he isn[`’\']t interested in. He is|[`’\']s easier to say what topics he isn[`’\']t interested in. He[`’\']s) very open-minded person|What topics is he interested in\\? Oh, it(?: is easier to say what topics he is not interested in. He is| is easier to say what topics he is not interested in. He[`’\']s| is easier to say what topics he isn[`’\']t interested in. He is| is easier to say what topics he[`’\']s not interested in. He is| is easier to say what topics he isn[`’\']t interested in. He[`’\']s| is easier to say what topics he[`’\']s not interested in. He[`’\']s|[`’\']s easier to say what topics he isn[`’\']t interested in. He is|[`’\']s easier to say what topics he isn[`’\']t interested in. He[`’\']s) very open-minded)/gm'
  }
]
export default data