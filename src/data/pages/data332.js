// 17-20 > 18.2 > 8
const data = [
  {
    rus: 'Что ты хочешь, чтобы я сказал? Я хочу, чтобы ты ничего не говорил. Просто помолчи, пожалуйста. Я пытаюсь сконцентрироваться',
    eng: 'What do you want me to say? I want you to say nothing. Just be quiet, please. I`m trying to concentrate',
    regEng: '/What do you want me to say\\? I (?:do not want you to say anything. (?:Just be quiet, please. I am trying to (?:concentrate|focus)|Please just be quiet. I am trying to (?:concentrate|focus))|don[`’\']t want you to say anything. (?:(?:Just be quiet, please. I(?: am|[`’\']m)|Please just be quiet. I(?: am|[`’\']m)) trying to concentrate|(?:Just be quiet, please. I(?: am|[`’\']m)|Please just be quiet. I(?: am|[`’\']m)) trying to focus)|want you to say nothing. (?:(?:Just be quiet, please. I(?: am|[`’\']m)|Please just be quiet. I[`’\']m) trying to concentrate|(?:Just be quiet, please. I(?: am|[`’\']m)|Please just be quiet. I[`’\']m) trying to focus))/gm'
  },
  {
    rus: 'В корзинке много фруктов? Нет, там только несколько яблок, но в холодильнике осталось немного варенья',
    eng: 'Is there much fruit in the basket? No, there are only a few apples there but there`s a little jam left in the fridge',
    regEng: '/Is there much fruit in the basket\\? No, there are (?:only|just) a few apples there but there(?: is a little|[`’\']s a little| is some|[`’\']s some) jam left in the (?:refrigerator|fridge)/gm'
  },
  {
    rus: 'Эти штаны слишком большие для меня. Мне нужен более маленький размер. О, вы такая тоненькая. У нас даже нет таких маленьких размеров',
    eng: 'These trousers are too large for me. I need a smaller size. Oh, you`re so thin. We don`t even have such small sizes',
    regEng: '/These (?:(?:trousers|pants) are too large for me. I need a smaller size. Oh, you are so thin. We do not|(?:trousers|pants) are too large for me. I need a smaller size. Oh, you(?: are|[`’\']re) so thin. We don[`’\']t) even have such small sizes/gm'
  },
  {
    rus: 'Твой дедушка очень приятный человек, но я всегда устаю от него, потому что он слишком разговорчивый',
    eng: 'Your grandpa is a very nice person, but I always get tired of him because he`s too talkative',
    regEng: '/Your grandpa(?: is|[`’\']s) a very nice person, but I always get tired of him because he(?: is|[`’\']s) too talkative/gm'
  },
  {
    rus: 'Почему ты была такая взволнованная, когда я встретил тебя вчера? Это было потому, что я шла на свидание со своим новым парнем!',
    eng: 'Why were you so excited when I met you yesterday? That was because I was going on a date with my new boyfriend!',
    regEng: '/Why were you so excited when I met you yesterday\\? (?:That|It) was because I was going on a date with my new boyfriend!/gm'
  },
  {
    rus: 'Это платье подходит ей по размеру и идёт тоже. Оно идеально для неё. Она выглядит в нём безупречно!',
    eng: 'This dress fits her and suits her too. It`s perfect for her. She looks impeccable in it!',
    regEng: '/This dress fits her and (?:suits her (?:as well.|also.|too.) It[`’\']s perfect for her. She(?: is looking|[`’\']s looking| looks)|also suits her. It[`’\']s perfect for her. She(?: is looking|[`’\']s looking| looks)) impeccable in it!/gm'
  },
  {
    rus: 'Когда ты в последний раз разговаривал с ним? Я в последний раз разговаривал с ним в среду, и он казался расстроенным. Как он?',
    eng: 'When did you last talk to him? I last talked to him on Wednesday and he seemed upset. How is he doing?',
    regEng: '/When did you (?:(?:talk (?:with him (?:last time\\? (?:Last time I talked with him|I talked with him last time)|last\\? I (?:last talked with him|talked with him last))|to him (?:last time\\? (?:Last time I talked to him|I talked to him last time)|last\\? I (?:last talked to him|talked to him last)))|speak (?:with him (?:last time\\? (?:Last time I spoke with him|I spoke with him last time)|last\\? I (?:last spoke with him|spoke with him last))|to him (?:last time\\? (?:Last time I spoke to him|I spoke to him last time)|last\\? I (?:last spoke to him|spoke to him last)))|last (?:talk (?:with him\\? I last talked with|to him\\? I last talked to)|speak (?:with him\\? I last spoke with|to him\\? I last spoke to)) him) on Wednesday and he seemed upset. How is he doing\\?|(?:(?:talk (?:with him (?:last time\\? (?:Last time I talked with him|I talked with him last time)|last\\? I (?:last talked with him|talked with him last))|to him (?:last time\\? (?:Last time I talked to him|I talked to him last time)|last\\? I (?:last talked to him|talked to him last)))|speak (?:with him (?:last time\\? (?:Last time I spoke with him|I spoke with him last time)|last\\? I (?:last spoke with him|spoke with him last))|to him (?:last time\\? (?:Last time I spoke to him|I spoke to him last time)|last\\? I (?:last spoke to him|spoke to him last)))|last speak with him\\? I last spoke with him) on Wednesday and|last (?:talk (?:with him\\? I last talked with|to him\\? I last talked to)|speak to him\\? I last spoke to) him on Wednesday) he seemed upset. How is he\\?)/gm'
  },
  {
    rus: 'Подожди минутку! Батарея моего телефона села. Мне нужно его зарядить прямо сейчас. Где розетка? Она вон там',
    eng: 'Wait a minute! My phone`s battery is low. I need to charge it right now. Where is the socket? It`s over there',
    regEng: '/Wait a (?:minute|moment)! My phone[`’\']s battery is low. I need to charge it right now. Where is the socket\\? It(?: is|[`’\']s) over there/gm'
  }
]
export default data