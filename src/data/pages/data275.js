// 15-16 > 16.1 > 9
const data = [
  {
    rus: 'Мы уходим через час. Ты идёшь с нами? Нет, мне слишком много работы делать',
    eng: 'We`re leaving in an hour. Are you going with us? No, I have too much work to do',
    regEng: '/We(?: are|[`’\']re) leaving in an hour. Are you going with us\\? No, I have too much work to do/gm'
  },
  {
    rus: 'Когда начинается концерт? Он начинается в семь часов вечера. Не опаздывай!',
    eng: 'When does the concert start? It starts at seven o`clock in the evening. Don`t be late!',
    regEng: '/When does the concert (?:start\\? It starts at seven o[`’\']clock in the evening. (?:Do not|Don[`’\']t)|begin\\? It begins at seven o[`’\']clock in the evening. (?:Do not|Don[`’\']t)) be late!/gm'
  },
  {
    rus: 'Она встречается со своими друзьями в следующем месяце? Нет, она встречается с ними на следующей неделе',
    eng: 'Is she meeting with her friends next month? No, she`s meeting with them next week',
    regEng: '/Is she meeting (?:with her friends next month\\? No, she(?: is meeting with|[`’\']s meeting with| is meeting|[`’\']s meeting)|her friends next month\\? No, she(?: is|[`’\']s) meeting) them next week/gm'
  },
  {
    rus: 'Я начинаю становиться голодным. Когда заканчивается лекция? Она заканчивается через несколько минут. Имей терпение!',
    eng: 'I`m getting hungry. When does the lecture finish? It finishes in a few minutes. Have patience!',
    regEng: '/(?:I am getting hungry. When does the lecture (?:finish\\? It finishes|end\\? It ends) in a few minutes. Have patience!|I[`’\']m getting hungry. When does the lecture (?:finish\\? It finishes|end\\? It ends) in a few minutes. Have patience!)/gm'
  },
  {
    rus: 'Что ты делаешь между двумя и четырьмя часами днём завтра? Я обедаю со своими коллегами',
    eng: 'What are you doing between two and four o`clock in the afternoon tomorrow? I`m having lunch with my colleagues',
    regEng: '/What (?:will you be doing (?:between two and four o[`’\']clock in the afternoon tomorrow\\? I(?: will|[`’\']ll)|tomorrow between two and four o[`’\']clock in the afternoon\\? I(?: will|[`’\']ll)) be|are you doing (?:between two and four o[`’\']clock in the afternoon tomorrow\\? I(?: am|[`’\']m)|tomorrow between two and four o[`’\']clock in the afternoon\\? I(?: am|[`’\']m))) having lunch with my colleagues/gm'
  },
  {
    rus: 'Когда твой поезд уезжает? Он уезжает через десять минут',
    eng: 'When does your train leave? It leaves in ten minutes',
    regEng: ''
  },
  {
    rus: 'Что они делают в пятницу? В пятницу они проходят важный экзамен',
    eng: 'What are they doing on Friday? On Friday they`re taking an important exam',
    regEng: '/What are they doing on Friday\\? On Friday they(?: are|[`’\']re) taking an important exam/gm'
  },
  {
    rus: 'Я не иду работу завтра, потому что я болею. О, поправляйся скорее!',
    eng: 'I`m not going to work tomorrow because I`m sick. Oh, get well soon!',
    regEng: '/I(?: am|[`’\']m) not going to work tomorrow because I(?: am sick.|[`’\']m sick.| am ill.|[`’\']m ill.) Oh, get well soon!/gm'
  }
]
export default data