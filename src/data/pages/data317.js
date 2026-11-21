// 17-20 > 17.4 > 18
const data = [
  {
    rus: 'Кто принёс эти документы в понедельник? Я не знаю. Спроси Мэри. Она была здесь в понедельник',
    eng: 'Who brought these documents on Monday? I don`t know. Ask Mary. She was here on Monday',
    regEng: '/Who brought these documents on Monday\\? I (?:(?:do not|don[`’\']t) know. Ask Mary. She was here on Monday|(?:do not|don[`’\']t) know. Ask Mary. On Monday She was here)/gm'
  },
  {
    rus: 'Чьи это журналы? Они моих коллег',
    eng: 'Whose magazines are these? They are my colleagues`',
    regEng: '/Whose magazines are these\\? They(?: are|[`’\']re) my colleagues[`’\']/gm'
  },
  {
    rus: 'Она готовилась к экзамену в девять часов утра вчера',
    eng: 'She was getting ready for an exam at nine o`clock in the morning yesterday',
    regEng: '/She was getting ready for (?:(?:the|an) exam at nine o[`’\']clock in the morning yesterday|(?:the|an) exam yesterday at nine o[`’\']clock in the morning)/gm'
  },
  {
    rus: 'Здесь так холодно! Правда? Тогда я закрою окно. Минутку',
    eng: 'It`s so cold here! Really? Then I`ll close the window. Just a minute',
    regEng: '/(?:It is so cold here! Really\\? (?:I will (?:close the window then. Just a (?:minute|moment)|then close the window. Just a (?:minute|moment))|Then I will close the window. Just a (?:minute|moment))|It[`’\']s so cold here! Really\\? (?:(?:(?:Then I(?: will|[`’\']ll)|I will then|I[`’\']ll then) close the window.|I(?: will|[`’\']ll) close the window then.) Just a minute|(?:(?:Then I(?: will|[`’\']ll)|I will then|I[`’\']ll then) close the window.|I(?: will|[`’\']ll) close the window then.) Just a moment))/gm'
  },
  {
    rus: 'Сколько времени вам нужно, чтобы закончить эту задачу? Нам нужно всего чуть-чуть времени, мы почти готовы',
    eng: 'How much time do you need to finish this task? We need just a little time, we`re almost ready',
    regEng: '/How much time do you need to finish this task\\? We need just a little time, we(?: are|[`’\']re) almost ready/gm'
  }
]
export default data