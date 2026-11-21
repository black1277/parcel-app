// 15-16 > 15.6 > 2
const data = [
  {
    rus: 'Кто знает ту женщину? Я знаю её, она сестра Джона',
    eng: 'Who knows that woman? I know her, she`s John`s sister',
    regEng: '/Who knows that woman\\? I know her, she(?: is|[`’\']s) John[`’\']s sister/gm'
  },
  {
    rus: 'Мне нужно немножко помощи от тебя. Подожди, пожалуйста. Я разговариваю со своей коллегой. Мы закончим через несколько минут',
    eng: 'I need a little help from you. Wait, please. I`m talking to my colleague. We`ll finish in a few minutes',
    regEng: '/I need (?:a little|some) help from you. (?:(?:(?:Wait, please. I(?: am|[`’\']m)|Please wait. I(?: am|[`’\']m)) speaking|(?:Wait, please. I(?: am|[`’\']m)|Please wait. I(?: am|[`’\']m)) talking) with|(?:(?:Wait, please. I(?: am|[`’\']m)|Please wait. I(?: am|[`’\']m)) speaking|(?:Wait, please. I(?: am|[`’\']m)|Please wait. I(?: am|[`’\']m)) talking) to) my colleague. We(?: will|[`’\']ll) finish in a few minutes/gm'
  },
  {
    rus: 'Когда он нашёл свою новую работу и нравится ли она ему? Он нашёл свою новую работу месяц назад, и он её обожает!',
    eng: 'When did he find his new job and does he like it? He found his new job a month ago and he adores it!',
    regEng: '/When did he find his new job and does he like it\\? He found his new job (?:one|a) month ago and he adores it!/gm'
  },
  {
    rus: 'Что ты делала между двумя и четырьмя часами дня вчера? Я убирала квартиру',
    eng: 'What were you doing between two and four o`clock in the afternoon yesterday? I was cleaning the flat',
    regEng: '/What were you doing (?:between two and four o[`’\']clock in the afternoon yesterday\\? I was cleaning the (?:apartment|flat)|yesterday between two and four o[`’\']clock in the afternoon\\? I was cleaning the (?:apartment|flat))/gm'
  },
  {
    rus: 'Всё ли ясно? Да, у нас нет никаких вопросов вообще',
    eng: 'Is everything clear? Yes, we have no questions at all',
    regEng: '/Is everything clear\\? Yes, we (?:(?:do not|don[`’\']t) have any|have no) questions at all/gm'
  }
]
export default data