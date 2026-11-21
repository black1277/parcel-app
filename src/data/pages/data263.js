// 15-16 > 15.4 > 20
const data = [
  {
    rus: 'Вы пойдёте на концерт с нами в четверг? Ну, мы решим завтра',
    eng: 'Will you go to the concert with us on Thursday? Well, we`ll decide tomorrow',
    regEng: '/(?:Are you going to (?:the|a) concert with us on Thursday\\? Well, we(?: will|[`’\']ll)|Will you go to (?:the|a) concert with us on Thursday\\? Well, we(?: will|[`’\']ll)) decide tomorrow/gm'
  },
  {
    rus: 'Что значит это слово?',
    eng: 'What does this word mean?',
    regEng: ''
  },
  {
    rus: 'Мы готовились пойти в школу, пока бабушка делала бутерброды для нас',
    eng: 'We were getting ready to go to school while Grandma was making sandwiches for us',
    regEng: '/(?:While (?:Grandmother|Grandma) was making sandwiches for us, we were getting ready to go to school|We were getting ready to go to school while (?:Grandmother|Grandma) was making sandwiches for us)/gm'
  },
  {
    rus: 'Всё зависит от тебя!',
    eng: 'Everything depends on you',
    regEng: ''
  },
  {
    rus: 'Все думают, что английский сложный, но я думаю, что английский – веселье!',
    eng: 'Everybody thinks that English is difficult but I think that English is fun!',
    regEng: '/(?:Everybody|Everyone) thinks(?: that)? English is difficult but I think(?: that)? English is fun!/gm'
  }
]
export default data