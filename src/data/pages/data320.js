// 17-20 > 18.1 > 3
const data = [
  {
    rus: 'Тебе необходимо быть более внимательным со своими мыслями. Они слишком негативные',
    eng: 'It`s necessary for you to be more careful with your thoughts. They`re too negative',
    regEng: '/(?:It(?: is|[`’\']s) necessary for you|You need) to be more careful with your thoughts. They(?: are|[`’\']re) too negative/gm'
  },
  {
    rus: 'У них кое-какие трудности с этим предметом. Вот почему им важно не пропускать никаких лекций',
    eng: 'They have some difficulties with this subject. That`s why it`s important for them not to skip any lectures',
    regEng: '/They have some difficulties with this subject. That(?: is why it is important for them not to skip any| is why it is important for them to not skip any|[`’\']s why it is important for them not to skip any| is why it[`’\']s important for them not to skip any|[`’\']s why it is important for them to not skip any| is why it[`’\']s important for them to not skip any|[`’\']s why it[`’\']s important for them not to skip any|[`’\']s why it[`’\']s important for them to not skip any| is why it is important for them not to skip| is why it is important for them to not skip|[`’\']s why it is important for them not to skip| is why it[`’\']s important for them not to skip|[`’\']s why it is important for them to not skip| is why it[`’\']s important for them to not skip|[`’\']s why it[`’\']s important for them not to skip|[`’\']s why it[`’\']s important for them to not skip) lectures/gm'
  },
  {
    rus: 'Я ничего не хочу слышать об том человеке. Так что тебе лучше забыть о нём',
    eng: 'I don`t want to hear anything about that person. So it`s better for you to forget about him',
    regEng: '/I (?:(?:(?:do not|don[`’\']t) want to hear anything|want to hear nothing) about that person. So it is|(?:(?:do not|don[`’\']t) want to hear anything|want to hear nothing) about that person. So it[`’\']s) better for you to forget about him/gm'
  },
  {
    rus: 'Поверь мне, с тобой нет ничего неладного. Ты просто выдающийся!',
    eng: 'Believe me, there`s nothing wrong with you. You`re just brilliant!',
    regEng: '/Believe me, there(?: is|[`’\']s) nothing wrong with you. You(?: are|[`’\']re) just brilliant!/gm'
  },
  {
    rus: 'Моя цель – сбросить вес. Вот почему мне необходимо не есть никаких сладостей',
    eng: 'My goal is to lose weight. That`s why it`s necessary for me not to eat any sweets',
    regEng: '/My goal is to lose weight. That(?: is why it is necessary for me not to eat any| is why it is necessary for me to not eat any| is why it[`’\']s necessary for me not to eat any| is why it[`’\']s necessary for me to not eat any|[`’\']s why it[`’\']s necessary for me not to eat any|[`’\']s why it[`’\']s necessary for me to not eat any|[`’\']s why is necessary for me not to eat any|[`’\']s why is necessary for me to not eat any| is why it is necessary for me not to eat| is why it is necessary for me to not eat| is why it[`’\']s necessary for me not to eat| is why it[`’\']s necessary for me to not eat|[`’\']s why it is necessary for me to not eat| is why it is necessary for me to eat no|[`’\']s why it[`’\']s necessary for me not to eat|[`’\']s why it[`’\']s necessary for me to not eat| is why it[`’\']s necessary for me to eat no|[`’\']s why it is necessary for me to eat no|[`’\']s why it[`’\']s necessary for me to eat no|[`’\']s why is necessary for me not to eat) sweets/gm'
  },
  {
    rus: 'Джейн очень больна. Поэтому ей лучше не идти никуда сегодня',
    eng: 'Jane is very sick. So it`s better for her not to go anywhere today',
    regEng: '/(?:(?:(?:Jane is very (?:(?:sick.|ill.) So it(?: is|[`’\']s) better for her not to|(?:sick.|ill.) So it(?: is|[`’\']s) better for her to not) go|Jane[`’\']s very (?:(?:sick.|ill.) So it(?: is|[`’\']s) better for her not to|(?:sick.|ill.) So it(?: is|[`’\']s) better for her to not) go) anywhere|Jane(?: is|[`’\']s) very (?:sick.|ill.) So it(?: is|[`’\']s) better for her to go nowhere) today|(?:Jane is very (?:(?:sick.|ill.) So today it(?: is|[`’\']s) better for her not to|(?:sick.|ill.) So today it(?: is|[`’\']s) better for her to not) go|Jane[`’\']s very (?:(?:sick.|ill.) So today it(?: is|[`’\']s) better for her not to|(?:sick.|ill.) So today it(?: is|[`’\']s) better for her to not) go) anywhere|Jane(?: is|[`’\']s) very (?:sick.|ill.) So today it(?: is|[`’\']s) better for her to go nowhere)/gm'
  },
  {
    rus: 'Кто-то звонит тебе. Проверь свой телефон. Хмм, кто это? У меня нет этого номера в контактах',
    eng: 'Somebody`s calling you. Check your phone. Hmm, who is that? I don`t have this number in my contacts',
    regEng: '/(?:(?:Somebody is calling you. Check your (?:(?:telephone.|phone.) Hmm, who(?: is that| is this|[`’\']s that|[`’\']s this| is it)\\? I do not|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I don[`’\']t)|Someone is calling you. Check your (?:(?:telephone.|phone.) Hmm, who(?: is that| is this|[`’\']s that|[`’\']s this| is it)\\? I do not|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I don[`’\']t)|Somebody[`’\']s calling you. Check your (?:(?:telephone. Hmm, who(?: is that\\?| is this\\?|[`’\']s that\\?|[`’\']s this\\?| is it\\?)|phone. Hmm, who is (?:that|this|it)\\?) I don[`’\']t|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I do not)|Someone[`’\']s calling you. Check your (?:(?:telephone.|phone.) Hmm, who(?: is that| is this|[`’\']s that|[`’\']s this| is it)\\? I don[`’\']t|(?:telephone.|phone.) Hmm, who[`’\']s (?:that|this)\\? I do not)) have this number|(?:Somebody|Someone) is calling you. Check your (?:telephone.|phone.) Hmm, who is (?:that|this|it)\\? I don[`’\']t have this mumber) in my contacts/gm'
  },
  {
    rus: 'Где Мэри? Я не знаю. Она пошла куда-то несколько минут назад',
    eng: 'Where is Mary? I don`t know. She went somewhere a few minutes ago',
    regEng: '/Where(?: is|[`’\']s) Mary\\? I (?:do not|don[`’\']t) know. She went somewhere a few minutes ago/gm'
  }
]
export default data