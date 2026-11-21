// 17-20 > 19.2 > 4
const data = [
  {
    rus: 'Ты бежишь быстрее меня. Пожалуйста, беги медленнее. Я устала, и у меня спина болит',
    eng: 'You`re running faster than I am. Please run more slowly. I`m tired and my back is aching',
    regEng: '/You(?: are|[`’\']re) running (?:quicker|faster) than (?:I am.|me.|I.) Please run more slowly. I(?: am|[`’\']m) tired and my back (?:is hurting|is aching|aches|hurts)/gm'
  },
  {
    rus: 'Он обычно объясняет нам такие сложные темы более досконально, чем его коллеги',
    eng: 'He usually explains us such complicated topics more thoroughly than his colleagues do',
    regEng: '/He usually explains us such (?:complicated|difficult) topics more thoroughly than his colleagues(?: do)?/gm'
  },
  {
    rus: 'Я держусь крепче, чем ты. Вот почему я не упаду. Следуй моему примеру, пожалуйста',
    eng: 'I`m holding on tighter than you are. That`s why I`m not going to fall. Follow my example, please',
    regEng: '/(?:I(?: am|[`’\']m) holding on tighter than (?:you are. (?:That is|This is|That[`’\']s)|you. (?:That is|This is|That[`’\']s)) why I(?: am|[`’\']m) not going to fall. Follow my example, please|I(?: am|[`’\']m) holding on tighter than (?:you are. (?:That is|This is|That[`’\']s)|you. (?:That is|This is|That[`’\']s)) why I(?: am|[`’\']m) not going to fall. Please follow my example)/gm'
  },
  {
    rus: 'Она одевается более элегантно, чем её подруги. Она всегда выглядит очень женственно',
    eng: 'She dresses more elegantly than her friends do. She always looks very feminine',
    regEng: '/She dresses more elegantly than her (?:girlfriends do.|girlfriends.|friends do.|friends.) She always looks very feminine/gm'
  },
  {
    rus: 'Он говорит о таких вещах более открыто, чем она. Она слишком стеснительная',
    eng: 'He speaks about such things more openly than she does. She`s too shy',
    regEng: '/He speaks about such things more openly than (?:(?:she does.|she.|her.) She is|(?:she does.|she.|her.) She[`’\']s) too shy/gm'
  },
  {
    rus: 'В прошлый раз я пел эту песню более красиво, чем ты',
    eng: 'Last time I was singing this song more beautifully than you were',
    regEng: '/Last time I (?:was singing this song more beautifully than you(?: were)?|sang this song more beautifully than you(?: did)?)/gm'
  },
  {
    rus: 'Я всегда хожу более энергично, чем они, потому что я очень активный человек',
    eng: 'I always walk more energetically than they do, because I`m a very active person',
    regEng: '/I always walk more energetically than (?:they(?: do)?|them), because I(?: am|[`’\']m) a very active person/gm'
  },
  {
    rus: 'В прошлом году она сдала экзамены более успешно, чем он. В этот раз ему нужно стараться усерднее',
    eng: 'Last year she passed the exams more successfully than he did. This time he needs to try harder',
    regEng: '/Last year she passed (?:(?:(?:the|her) exams more successfully than (?:he did.|him.|he.) This time he|her exams more successfully than him. He) needs to try harder|(?:the exams more successfully than (?:he did.|him.|he.)|her exams more successfully than (?:he did.|he.)) He needs to try harder this time)/gm'
  }
]
export default data