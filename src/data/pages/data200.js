// 10-14 > 13.2 > 8
const data = [
  {
    rus: 'Есть ли какие-нибудь сообщения для меня? Нет, для тебя нет никаких новых сообщений',
    eng: 'Are there any messages for me? No, there are no new messages for you',
    regEng: '/Are there any messages for me\\? No, there (?:are (?:not any|no)|aren[`’\']t any) new messages for you/gm'
  },
  {
    rus: 'Я так хочу пить, мне нужно купить воды прямо сейчас',
    eng: 'I`m so thirsty, I need to buy some water right now',
    regEng: '/I(?: am|[`’\']m) so thirsty, I need to buy(?: some)? water right now/gm'
  },
  {
    rus: 'Я думаю, что он спокойнее и дружелюбнее, чем его друг',
    eng: 'I think that he`s calmer and friendlier than his friend',
    regEng: '/I think (?:that he(?: is|[`’\']s)|he is|he[`’\']s) calmer and friendlier than his friend/gm'
  },
  {
    rus: 'Вы нашли ключ вчера? Да, он был под кроватью в твоей комнате',
    eng: 'Did you find the key yesterday? Yes, it was under the bed in your room',
    regEng: ''
  },
  {
    rus: 'Мой брат никогда не пьёт молоко. Он просто ненавидит его вкус',
    eng: 'My brother never drinks milk. He just hates its taste',
    regEng: ''
  },
  {
    rus: 'О чём ты хочешь поговорить? Я хочу поговорить о фильме, который я посмотрел в пятницу',
    eng: 'What do you want to talk about? I want to talk about the film that I watched on Friday',
    regEng: '/What do you want to talk about\\? I want to (?:speak|talk) about the (?:movie(?: that)?|film(?: that)?) I (?:watched|saw) on Friday/gm'
  },
  {
    rus: 'Я не видел твою жену в четверг. Как она? Она отлично. Она просто была занята тогда',
    eng: 'I didn`t see your wife on Thursday. How is she? She`s fine. She was just busy then',
    regEng: '/I (?:did not see your wife on Thursday. How is (?:she doing\\? She(?: is doing|[`’\']s doing| is|[`’\']s)|she\\? She(?: is|[`’\']s))|didn[`’\']t see your wife on Thursday. How is (?:she doing\\? She(?: is doing|[`’\']s doing| is|[`’\']s)|she\\? She(?: is|[`’\']s))) fine. She was just busy then/gm'
  }
]
export default data