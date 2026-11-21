// 15-16 > 16.1 > 3
const data = [
  {
    rus: 'Доброе утро! Приятно видеть тебя снова. Как дела?',
    eng: 'Good morning! It`s nice to see you again! How are you doing?',
    regEng: '/Good morning! (?:It(?: is|[`’\']s) nice|Nice) to see you again! How (?:are (?:you doing|things|you)|is it going)\\?/gm'
  },
  {
    rus: 'Надень какую-нибудь тёплую одежду. На улице мороз',
    eng: 'Put on some warm clothes. It`s freezing outside',
    regEng: '/Put on some warm clothes. It(?: is|[`’\']s) freezing outside/gm'
  },
  {
    rus: 'Необходимо уважать пожилых людей и помогать им',
    eng: 'It`s necessary to respect elderly people and to help them',
    regEng: '/It(?: is|[`’\']s) necessary to respect elderly people and(?: to)? help them/gm'
  },
  {
    rus: 'Шёл ли дождь, когда ты проснулся? Ну, я не обратил внимания на это',
    eng: 'Was it raining when you woke up? Well, I didn`t pay attention to that',
    regEng: '/Was it raining when you woke up\\? Well, I (?:did not|didn[`’\']t) pay(?: any)? attention to (?:that|this|it)/gm'
  },
  {
    rus: 'Иногда идёт дождь весной, но никогда не идёт снег летом',
    eng: 'It sometimes rains in spring but it never snows in summer',
    regEng: '/(?:(?:It sometimes|Sometimes it) rains in spring but it never snows in summer|In spring it sometimes rains but in summer it never snows)/gm'
  },
  {
    rus: 'Я начинаю злиться, потому что нелегко найти твой дом, а на улице холодно',
    eng: 'I`m getting angry because it`s not easy to find your house and it`s cold outside',
    regEng: '/(?:I am getting angry because it(?: is not easy to find your house and it[`’\']s|[`’\']s not easy to find your house and it is| isn[`’\']t easy to find your house and it is|[`’\']s not easy to find your house and it[`’\']s| isn[`’\']t easy to find your house and it[`’\']s) cold outside|I[`’\']m getting angry because it(?: is not easy to find your house and it[`’\']s|[`’\']s not easy to find your house and it is| isn[`’\']t easy to find your house and it is|[`’\']s not easy to find your house and it[`’\']s| isn[`’\']t easy to find your house and it[`’\']s) cold outside)/gm'
  },
  {
    rus: 'Важно всегда быть готовым учиться и наслаждаться процессом',
    eng: 'It`s important to always be ready to learn and to enjoy the process',
    regEng: '/It(?: is|[`’\']s) important to always be ready to learn and(?: to)? enjoy the process/gm'
  },
  {
    rus: 'Как жарко на улице? Я не знаю. Давай проверим',
    eng: 'How hot is it outside? I don`t know. Let`s check',
    regEng: '/How hot is it outside\\? I (?:do not|don[`’\']t) know. Let(?: us|[`’\']s) check/gm'
  }
]
export default data