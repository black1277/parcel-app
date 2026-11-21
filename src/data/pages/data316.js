// 17-20 > 17.4 > 17
const data = [
  {
    rus: 'Вы осознаёте, что это очень важная задача? Да, конечно',
    eng: 'Do you realize that it`s a very important task? Yes, of course!',
    regEng: '/Do you (?:realize (?:that (?:this is|that is|that[`’\']s|it is|it[`’\']s|is)|this is|that[`’\']s|it is|it[`’\']s)|realise (?:that (?:this is|that is|that[`’\']s|it is|it[`’\']s|is)|this is|that[`’\']s|it is|it[`’\']s)) a very important task\\? Yes, of course!/gm'
  },
  {
    rus: 'Она сомневается, что он сдержит своё обещание. Она не доверяет ему',
    eng: 'She doubts that he`ll keep his promise. She doesn`t trust him',
    regEng: '/She doubts (?:(?:that he(?: will|[`’\']ll)|he will|he[`’\']ll) keep his promise. She doesn[`’\']t|(?:that )?he[`’\']ll keep his promise. She does not) trust him/gm'
  },
  {
    rus: 'Важно всегда быть готовым учиться и наслаждаться процессом',
    eng: 'It`s important to always be ready to learn and to enjoy the process',
    regEng: '/It(?: is|[`’\']s) important to always be ready to learn and(?: to)? enjoy the process/gm'
  },
  {
    rus: 'Кто хочет ответить на этот вопрос? Я отвечу на него!',
    eng: 'Who wants to answer this question? I`ll answer it!',
    regEng: '/Who wants to (?:reply to|answer) this question\\? I(?: will|[`’\']ll) answer it!/gm'
  },
  {
    rus: 'Есть ли кто-нибудь, с кем тебе нужно встретиться днём? Да, я встречаюсь со своей сестрой',
    eng: 'Is there anybody who you need to meet with in the afternoon? Yes, I`m meeting with my sister',
    regEng: '/Is there anybody (?:(?:(?:(?:that|whom|who) you need to meet with|with whom? you need to meet) in the afternoon\\? Yes, I am|(?:whom? you need to meet with|with whom? you need to meet) in the afternoon\\? Yes, I[`’\']m) meeting with|whom? you need to meet in the afternoon\\? Yes, I(?: am|[`’\']m) meeting) my sister/gm'
  }
]
export default data