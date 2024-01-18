const data = [
  {
    rus: 'Мы приехали сюда в прошлом месяце',
    eng: 'We came here last month',
    regEng: '/(?:We came here last month)|(?:Last month we came here)/gm'
  },
  {
    rus: 'Завтра я попытаюсь закончить это упражнение',
    eng: 'Tomorrow I will try to finish this exercise',
    regEng: '/(?:Tomorrow (?:I will|I’ll) try to finish this exercise)|(?:(?:I will|I’ll) try to finish this exercise tomorrow)/gm'
  },
  {
    rus: 'Когда он принёс эти цветы?',
    eng: 'When did he bring these flowers?'
  },
  {
    rus: 'Вы никогда не говорите об этом',
    eng: 'You never talk about it',
    regEng: '/(?:You never (?:talk|speak) about (?:it|this|that))|(?:You do not ever (?:talk|speak) about (?:it|this|that))|(?:You do not (?:talk|speak) about (?:it|this|that) ever)/gm'
  },
  {
    rus: 'Эти женщины кушают такие вкусные пирожные всё время',
    eng: 'These women eat such tasty cakes all the time',
    regEng: '/(?:These women eat such tasty cakes all the time)|(?:All the time these women eat such tasty cakes)/gm'
  },
  {
    rus: 'Мы прочитали эту газету вчера',
    eng: 'We read this newspaper yesterday',
    regEng: '/(?:We read this newspaper yesterday)|(?:Yesterday we read this newspaper)/gm'
  },
  {
    rus: 'Что она думает об этой проблеме?',
    eng: 'What does she think about this problem?'
  }
]
export default data