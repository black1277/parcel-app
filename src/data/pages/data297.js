// 17-20 > 17.2 > 7
const data = [
  {
    rus: 'Как выглядит его девушка? Она очень привлекательная. У неё синие глаза и белокурые волосы',
    eng: 'What does his girlfriend look like? She`s very attractive. She has blue eyes and blond hair',
    regEng: '/What does his (?:girlfriend look like\\? She[`’\']s|girl look like\\? She is) very attractive. She has blue eyes and blond hair/gm'
  },
  {
    rus: 'Какого рода темы ты обычно обсуждаешь со своими коллегами? Мы обычно обсуждаем какие-нибудь новые бестселлеры',
    eng: 'What sort of topics do you usually discuss with your colleagues? We usually discuss some new bestsellers',
    regEng: '/What(?: (?:sort|kind) of)? topics do you usually discuss with your colleagues\\? We usually discuss some new (?:best-?sellers|best sellers)/gm'
  },
  {
    rus: 'Какая погода сегодня? Холодно и идёт снег. Так что давай не пойдём на улицу',
    eng: 'What`s the weather like today? It`s cold and it`s snowing. So let`s not go outside',
    regEng: '/What(?: is the weather like today\\? It is cold and it is|[`’\']s the weather like today\\? It[`’\']s cold and it[`’\']s) snowing. So let[`’\']s not go outside/gm'
  },
  {
    rus: 'Какую информацию она иногда ищет на этих сайтах? Иногда ищет информацию о науке, а иногда об искусстве',
    eng: 'What information does she sometimes look for on these sites? Sometimes she looks for information about science, and sometimes about art',
    regEng: ''
  },
  {
    rus: 'Какая ваша фамилия? Какая ваша национальность? Моя фамилия Джонсон и я американец',
    eng: 'What`s your surname? What`s your nationality? My surname is Johnson and I`m American',
    regEng: '/What(?: is your surname\\? What is your nationality\\? My surname is Johnson and I am|[`’\']s your surname\\? What[`’\']s your nationality\\? My surname is Johnson and I[`’\']m) American/gm'
  },
  {
    rus: 'Каково это говорить на иностранном языке? О, это крутое чувство!',
    eng: 'What`s it like to speak a foreign language? Oh, it`s an awesome feeling!',
    regEng: '/What(?: is it like to speak a foreign language\\? Oh, it is|[`’\']s it like to speak a foreign language\\? Oh, it[`’\']s) an awesome feeling!/gm'
  },
  {
    rus: 'Какой их отец? Он очень целеустремлённый человек. Он всегда достигает своих целей',
    eng: 'What`s their father like? He`s a very determined person. He always achieves his goals',
    regEng: '/What(?: is their father like\\? He is|[`’\']s their father like\\? He[`’\']s| is their dad like\\? He is|[`’\']s their dad like\\? He[`’\']s) a very determined person. He always achieves his goals/gm'
  },
  {
    rus: 'Какая твоя любимая поговорка? О, это «Рим не был построен за день». Я всегда повторяю её, чтобы помнить, что великие вещи требуют времени',
    eng: 'What`s your favourite saying? Oh, it`s “Rome wasn`t built in a day”. I always repeat it to remember that great things take time',
    regEng: '/What(?: is your favourite saying\\? Oh, it is| is your favorite saying\\? Oh, it is|[`’\']s your favourite saying\\? Oh, it[`’\']s|[`’\']s your favorite saying\\? Oh, it[`’\']s) “Rome wasn[`’\']t built in a day”. I always repeat it to remember that great things take time/gm'
  }
]
export default data