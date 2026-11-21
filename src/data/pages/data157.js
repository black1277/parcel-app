// 10-14 > 11.2 > 8
const data = [
  {
    rus: 'Он не играет в футбол. Он играет в теннис',
    eng: 'He does not play football. He plays tennis',
    regEng: '/He (?:does not|doesn[`’\']t) play football. He plays tennis/gm'
  },
  {
    rus: 'Когда ты пообедал? Я пообедал час назад',
    eng: 'When did you have lunch? I had lunch an hour ago',
    regEng: ''
  },
  {
    rus: 'Мы знаем, что в этом тексте есть важные детали',
    eng: 'We know that there are important details in this text',
    regEng: '/We know(?: that)? there are(?: some)? important details in this text/gm'
  },
  {
    rus: 'От кого эта открытка? Она от моего дяди',
    eng: 'Who is this postcard from? It is from my uncle',
    regEng: '/(?:From whom is this postcard\\? It(?: is|[`’\']s)|Who is this postcard from\\? It(?: is|[`’\']s)) from my uncle/gm'
  },
  {
    rus: 'У него есть время, чтобы поговорить со мной завтра? Я не знаю',
    eng: 'Does he have time to talk to me tomorrow? I do not know',
    regEng: '/Does he have(?: any)? time to talk (?:with|to) me tomorrow\\? I (?:do not|don[`’\']t) know/gm'
  },
  {
    rus: 'В кого она влюблена? Она влюблена в твоего брата',
    eng: 'Who is she in love with? She is in love with your brother',
    regEng: '/Who is she in love with\\? She(?: is|[`’\']s) in love with your brother/gm'
  },
  {
    rus: 'Ваш сын такой чудесный студент. Все восхищаются им',
    eng: 'Your son is such a wonderful student. Everybody admires him',
    regEng: '/Your son is such a wonderful student. (?:Everybody|Everyone) admires him/gm'
  }
]
export default data