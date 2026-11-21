// 17-20 > 19.4 > 10
const data = [
  {
    rus: 'Я обещаю, что я никому не расскажу о твоём секрете. Пожалуйста, доверься мне! Моя цель – помочь тебе',
    eng: 'I promise that I won`t tell anybody about your secret. Please trust me! My goal is to help you',
    regEng: '/I promise (?:(?:(?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) not|(?:that )?I won[`’\']t) tell anybody|(?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) tell nobody) about your secret. Please trust me! My goal is to help you/gm'
  },
  {
    rus: 'Есть ли кто-нибудь, с кем тебе нужно встретиться днём? Да, я встречаюсь со своей сестрой',
    eng: 'Is there anybody who you need to meet with in the afternoon? Yes, I`m meeting with my sister',
    regEng: '/Is there anybody (?:(?:(?:(?:that|whom|who) you need to meet with|with whom? you need to meet) in the afternoon\\? Yes, I am|(?:whom? you need to meet with|with whom? you need to meet) in the afternoon\\? Yes, I[`’\']m) meeting with|whom? you need to meet in the afternoon\\? Yes, I(?: am|[`’\']m) meeting) my sister/gm'
  },
  {
    rus: 'Это платье подходит ей по размеру и идёт тоже. Оно идеально для неё. Она выглядит в нём безупречно!',
    eng: 'This dress fits her and suits her too. It`s perfect for her. She looks impeccable in it!',
    regEng: '/This dress fits her and (?:suits her (?:as well.|also.|too.) It[`’\']s perfect for her. She(?: is looking|[`’\']s looking| looks)|also suits her. It[`’\']s perfect for her. She(?: is looking|[`’\']s looking| looks)) impeccable in it!/gm'
  },
  {
    rus: 'Она обычно много красится? Она никогда не красится',
    eng: 'Does she usually wear much make-up? She never wears any make-up',
    regEng: '/Does she usually wear (?:(?:lots of make-up\\? She (?:does not ever wear(?: any)?|doesn[`’\']t ever wear(?: any)?|never wears(?: any)?)|much make-up\\? She (?:does not ever wear(?: any)?|doesn[`’\']t ever wear(?: any)?|never wears(?: any)?)|a lot of make-up\\? She (?:does not ever(?: any)?|doesn[`’\']t ever(?: any)?|never wears(?: any)?)) make-up|(?:a lot of|lots of|much) make-up\\? She wears no make-up ever)/gm'
  },
  {
    rus: 'Я очень благодарен своим бабушке с дедушкой за их советы и поддержку. Они всегда говорят мне, что нормально делать ошибки и невозможно научиться ничему без них',
    eng: 'I`m very thankful to my grandparents for their advice and support. They always tell me that it`s OK to make mistakes and it`s impossible to learn anything without them',
    regEng: '/(?:I am very (?:thankful|grateful) to my grandparents for their advice and support. They always tell me that it is (?:all right|alright|okay|OK) to make mistakes and it(?: is|[`’\']s) impossible to learn anything without them|I[`’\']m very (?:(?:thankful|grateful) to my grandparents for their advice and support. They always tell me that it is (?:all right|alright|okay|OK) to make mistakes and it is|(?:thankful|grateful) to my grandparents for their advice and support. They always tell me that it(?: is all right|[`’\']s all right| is alright|[`’\']s alright| is okay|[`’\']s okay| is OK|[`’\']s OK) to make mistakes and it[`’\']s) impossible to learn anything without them)/gm'
  }
]
export default data