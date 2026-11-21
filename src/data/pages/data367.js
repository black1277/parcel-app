// 17-20 > 19.4 > 20
const data = [
  {
    rus: 'Сколько глав содержит эта книга? Она содержит мало глав, она не закончена',
    eng: 'How many chapters does this book contain? It contains few chapters, it`s not finished',
    regEng: '/How many chapters does this book contain\\? It contains few chapters, it(?: is not|[`’\']s not| isn[`’\']t) finished/gm'
  },
  {
    rus: 'Моя мечта – жить у моря, в месте, где солнце светит круглый год',
    eng: 'My dream is to live by the sea, in a place where the sun shines all year round',
    regEng: ''
  },
  {
    rus: 'Я потный и голодный. Я собираюсь принять душ и сделать что-то поесть',
    eng: 'I`m sweaty and hungry. I`m going to have a shower and make something to eat',
    regEng: '/(?:I am sweaty and hungry. I am going to (?:have|take) a shower and make something to eat|I[`’\']m sweaty and hungry. I[`’\']m going to (?:have|take) a shower and make something to eat)/gm'
  },
  {
    rus: 'Нам легко учить английский, потому что мы принимаем свои ошибки, не спешим и наслаждаемся процессом',
    eng: 'It`s easy for us to learn English because we accept our mistakes, take our time and enjoy the process',
    regEng: '/(?:It is easy for us to learn English because we accept our mistakes, (?:we take our time and(?: we)?|take our time and) enjoy the process|It[`’\']s easy for us to learn English because we accept our mistakes, (?:we take our time and(?: we)?|take our time and) enjoy the process)/gm'
  },
  {
    rus: 'Важно помнить, что отношение – это всё. Ваш успех зависит от вашего отношения. Так что всегда оставайтесь позитивными!',
    eng: 'It`s important to remember that attitude is everything. Your success depends on your attitude. So always stay positive!',
    regEng: '/It(?: is|[`’\']s) important to remember that attitude is everything. Your success depends on your attitude. So always stay positive!/gm'
  }
]
export default data