// 17-20 > 19.4 > 2
const data = [
  {
    rus: 'Какая будет погода завтра по прогнозу? По прогнозу будет холодно и ветрено',
    eng: 'What will the weather be like tomorrow according to the forecast? According to the forecast it`ll be cold and windy',
    regEng: '/What will the weather be like tomorrow according to the forecast\\? According to the forecast it(?: will|[`’\']ll) be cold and windy/gm'
  },
  {
    rus: 'Сколько движения в этом городе?',
    eng: 'How much traffic is there in this city?',
    regEng: '/How much traffic is there in this (?:city|town)\\?/gm'
  },
  {
    rus: 'Мэри очень нервный человек. Она часто чувствует себя обеспокоенной. Поэтому ей полезно не думать никаких негативных мыслей',
    eng: 'Mary is a very nervous person. She often feels worried. So it`s useful for her not to think any negative thoughts',
    regEng: '/(?:Mary is a very nervous person. She often feels worried. So it(?: is useful for her not to think any| is useful for her to not think any|[`’\']s useful for her not to think any|[`’\']s useful for her to not think any| is useful for her not to think| is useful for her to not think|[`’\']s useful for her not to think|[`’\']s useful for her to not think) negative thoughts|Mary[`’\']s a very nervous person. She often feels worried. So it(?: is useful for her not to think any| is useful for her to not think any|[`’\']s useful for her not to think any|[`’\']s useful for her to not think any| is useful for her not to think| is useful for her to not think|[`’\']s useful for her not to think|[`’\']s useful for her to not think) negative thoughts)/gm'
  },
  {
    rus: 'Машина сломана. Это обязанность Фрэнка её починить. Я не собираюсь делать это за него!',
    eng: 'The car is broken. It`s Frank`s duty to fix it. I`m not going to do it for him!',
    regEng: '/The car(?: is|[`’\']s) broken. (?:(?:This|It) is|(?:That|It)[`’\']s) Frank[`’\']s (?:responsibility|duty) to (?:repair|fix) it. I(?: am|[`’\']m) not going to do (?:this|that|it) for him!/gm'
  },
  {
    rus: 'Мой дедушка пожилой человек. У него часто болит спина. Поэтому ему лучше не носить тяжёлые вещи',
    eng: 'My Grandpa is an elderly person. His back often aches. So it`s better for him not to carry heavy things',
    regEng: '/My (?:(?:(?:Grandfather|Grandpa) is|(?:Grandfather|Grandpa)[`’\']s) an elderly person. His back often (?:aches.|hurts.) So it(?: is|[`’\']s) better for him not to|(?:(?:Grandfather|Grandpa) is|(?:Grandfather|Grandpa)[`’\']s) an elderly person. His back often (?:aches.|hurts.) So it(?: is|[`’\']s) better for him to not) carry heavy things/gm'
  }
]
export default data