// 17-20 > 17.4 > 5
const data = [
  {
    rus: 'Едем ли мы куда-нибудь завтра? Нет, мы остаёмся здесь',
    eng: 'Are we going anywhere tomorrow? No, we`re staying here',
    regEng: '/Are we going anywhere tomorrow\\? No, we(?: are|[`’\']re) staying here/gm'
  },
  {
    rus: 'Как холодно на улице? О, там мороз. Так что давай просто останемся внутри',
    eng: 'How cold is it outside? Oh, it`s freezing there. So let`s just stay inside',
    regEng: '/How cold is it outside\\? Oh, it(?: is|[`’\']s) freezing there. So let(?: us|[`’\']s) just stay inside/gm'
  },
  {
    rus: 'Я уже сыт, а в коробке осталось много мороженого',
    eng: 'I`m already full and there`s a lot of ice cream left in the box',
    regEng: '/I(?: am|[`’\']m) already full and there(?: is a lot|[`’\']s a lot| is lots|[`’\']s lots) of (?:ice cream|ice-cream) left in the box/gm'
  },
  {
    rus: 'Невозможно выучить английский, если не повторяешь предложения вслух много раз',
    eng: 'It`s impossible to learn English if you don`t repeat sentences out loud many times',
    regEng: '/(?:If you (?:(?:(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many) times, it(?: is|[`’\']s) not|(?:(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot|lots) of|(?:do not repeat(?: the)?|don[`’\']t repeat) sentences out loud many) times, it isn[`’\']t) possible|(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many) times, it(?: is|[`’\']s) impossible) to learn English|(?:It (?:is (?:not possible|impossible) to learn English if you (?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many)|isn[`’\']t possible to learn English if you (?:(?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot|lots) of|(?:do not repeat(?: the)?|don[`’\']t repeat) sentences out loud many))|It[`’\']s (?:not possible|impossible) to learn English if you (?:do not|don[`’\']t) repeat(?: the)? sentences out loud (?:a lot of|lots of|many)) times)/gm'
  },
  {
    rus: 'Что ты там делаешь? Я пробую эти макароны, и они на вкус восхитительны',
    eng: 'What are you doing there? I`m tasting this pasta and it tastes delicious',
    regEng: '/What are you doing there\\? I(?: am tasting|[`’\']m tasting| am trying|[`’\']m trying) this pasta and it tastes delicious/gm'
  }
]
export default data