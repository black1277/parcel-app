// 17-20 > 17.4 > 14
const data = [
  {
    rus: 'Не бойтесь! Всё под контролем. Если вам нужна помощь, просто попросите меня',
    eng: 'Don`t be afraid! Everything is under control. If you need help, just ask me!',
    regEng: '/(?:(?:Do not|Don[`’\']t) be afraid! Everything(?: is|[`’\']s) under control. If you need help, just ask me!|(?:Do not|Don[`’\']t) be afraid! Everything(?: is|[`’\']s) under control. Just ask me, if you need help!)/gm'
  },
  {
    rus: 'Мэри очень нервный человек. Она часто чувствует себя обеспокоенной. Поэтому ей полезно не думать никаких негативных мыслей',
    eng: 'Mary is a very nervous person. She often feels worried. So it`s useful for her not to think any negative thoughts',
    regEng: '/(?:Mary is a very nervous person. She often feels worried. So it(?: is useful for her not to think any| is useful for her to not think any|[`’\']s useful for her not to think any|[`’\']s useful for her to not think any| is useful for her not to think| is useful for her to not think|[`’\']s useful for her not to think|[`’\']s useful for her to not think) negative thoughts|Mary[`’\']s a very nervous person. She often feels worried. So it(?: is useful for her not to think any| is useful for her to not think any|[`’\']s useful for her not to think any|[`’\']s useful for her to not think any| is useful for her not to think| is useful for her to not think|[`’\']s useful for her not to think|[`’\']s useful for her to not think) negative thoughts)/gm'
  },
  {
    rus: 'Посмотри на рисунки моих студентов. Тебе они нравятся? О, они фантастические!',
    eng: 'Look at my students` drawings! Do you like them? Oh, they`re fantastic!',
    regEng: '/Look at my students[`’\'] drawings! Do you like them\\? Oh, they(?: are|[`’\']re) fantastic!/gm'
  },
  {
    rus: 'Он выше или ниже тебя? Я не помню точно',
    eng: 'Is he taller or shorter than you? I don`t remember exactly',
    regEng: '/Is he taller or shorter than you(?: are)?\\? I (?:do not|don[`’\']t) remember exactly/gm'
  },
  {
    rus: 'Им необходимо не есть сладости, потому что они хотят сбросить вес. Этот совет кажется разумным',
    eng: 'It`s necessary for them not to eat sweets because they want to lose weight. This advice seems reasonable',
    regEng: '/(?:It is necessary for them (?:(?:(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose some|(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose) weight. This advice|(?:(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose some|(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose) weight. This tip) seems reasonable|It[`’\']s necessary for them (?:(?:(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose some|(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose) weight. This advice|(?:(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose some|(?:not to eat(?: any)?|to not eat(?: any)?) sweets because they want to lose) weight. This tip) seems reasonable)/gm'
  }
]
export default data