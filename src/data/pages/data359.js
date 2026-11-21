// 17-20 > 19.4 > 12
const data = [
  {
    rus: 'Какого рода фильмы ты обычно смотришь? Я обычно смотрю боевики, комедии и драмы',
    eng: 'What kind of films do you usually watch? I usually watch action films, comedies and dramas',
    regEng: '/What (?:(?:kind of films do you (?:usually watch\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),)|watch usually\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),))|sort of films do you (?:usually watch\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),)|watch usually\\? (?:I usually watch action (?:movies|films),|Usually I watch action (?:movies|films),))) comedies and dramas|(?:(?:(?:kind|sort) of films do you usually watch\\?|(?:kind|sort) of films do you watch usually\\?) I watch action movies,|(?:(?:kind|sort) of films do you usually watch\\?|(?:kind|sort) of films do you watch usually\\?) I watch action films,) comedies and dramas usually)/gm'
  },
  {
    rus: 'Сколько книг ты прочитал летом? Я не много книг прочитал, потому что у меня было много работы, чтобы сделать',
    eng: 'How many books did you read in summer? I didn`t read many books because I had a lot of work to do',
    regEng: '/How many books did you read in summer\\? I (?:did not|didn[`’\']t) read many books because I had a lot of work to do/gm'
  },
  {
    rus: 'Ты поможешь мне перевести этот текст? Конечно, я помогу тебе',
    eng: 'Will you help me translate this text? Of course I`ll help you',
    regEng: '/Will you help me(?: to)? translate this text\\? Of course I(?: will|[`’\']ll) help you/gm'
  },
  {
    rus: 'Моя цель – сбросить вес. Вот почему мне необходимо не есть никаких сладостей',
    eng: 'My goal is to lose weight. That`s why it`s necessary for me not to eat any sweets',
    regEng: '/My goal is to lose weight. That(?: is why it is necessary for me not to eat any| is why it is necessary for me to not eat any| is why it[`’\']s necessary for me not to eat any| is why it[`’\']s necessary for me to not eat any|[`’\']s why it[`’\']s necessary for me not to eat any|[`’\']s why it[`’\']s necessary for me to not eat any|[`’\']s why is necessary for me not to eat any|[`’\']s why is necessary for me to not eat any| is why it is necessary for me not to eat| is why it is necessary for me to not eat| is why it[`’\']s necessary for me not to eat| is why it[`’\']s necessary for me to not eat|[`’\']s why it is necessary for me to not eat| is why it is necessary for me to eat no|[`’\']s why it[`’\']s necessary for me not to eat|[`’\']s why it[`’\']s necessary for me to not eat| is why it[`’\']s necessary for me to eat no|[`’\']s why it is necessary for me to eat no|[`’\']s why it[`’\']s necessary for me to eat no|[`’\']s why is necessary for me not to eat) sweets/gm'
  },
  {
    rus: 'Есть ли что-то неисправное с этим устройством? Ну, кажется, что батарея села. Тебе просто нужно его зарядить',
    eng: 'Is there anything wrong with this device? Well, it seems that the battery is low. You just need to charge it',
    regEng: '/Is there (?:something|anything) wrong with this device\\? Well, it seems that the battery(?: is|[`’\']s) low. You just need to charge it/gm'
  }
]
export default data