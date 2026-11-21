// 17-20 > 19.4 > 17
const data = [
  {
    rus: 'Я обещаю, что сделаю всё от меня зависящее, чтобы помочь вам добиться успеха! Вам просто нужно сохранять спокойствие и всегда быть готовыми учиться',
    eng: 'I promise that I`ll do my best to help you succeed! You just need to keep calm and always be ready to learn',
    regEng: '/I promise that I(?: will|[`’\']ll) do my best to help you (?:(?:to )?achieve success|to succeed|succeed)! You just need to keep calm and(?: to)? always be ready to learn/gm'
  },
  {
    rus: 'Сколько багажа она хочет взять с собой?',
    eng: 'How much luggage does she want to take with her?',
    regEng: ''
  },
  {
    rus: 'Какая твоя любимая поговорка? О, это «Рим не был построен за день». Я всегда повторяю её, чтобы помнить, что великие вещи требуют времени',
    eng: 'What`s your favourite saying? Oh, it`s “Rome wasn`t built in a day”. I always repeat it to remember that great things take time',
    regEng: '/What(?: is your favourite saying\\? Oh, it is| is your favorite saying\\? Oh, it is|[`’\']s your favourite saying\\? Oh, it[`’\']s|[`’\']s your favorite saying\\? Oh, it[`’\']s) “Rome wasn[`’\']t built in a day”. I always repeat it to remember that great things take time/gm'
  },
  {
    rus: 'Так ты наслаждаешься своим отпуском? Конечно! Мы замечательно проводим время здесь!',
    eng: 'So do you enjoy your holiday? Of course! We`re having a great time here!',
    regEng: '/So (?:are you enjoying your holiday\\? Of course! We(?: are|[`’\']re)|do you enjoy your holiday\\? Of course! We(?: are|[`’\']re)) having a great time here!/gm'
  },
  {
    rus: 'Лекция начинается в восемь часов. У нас осталась одна минута. О, нет! Мы опоздаем!',
    eng: 'The lecture starts at eight o`clock. We have one minute left. Oh, no! We`re going to be late!',
    regEng: '/The lecture starts at eight o[`’\']clock. We(?:[`’\']ve got| have|[`’\']ve) one minute left. Oh, no! We(?: are|[`’\']re) going to be late!/gm'
  }
]
export default data