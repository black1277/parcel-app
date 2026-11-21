// 10-14 > 14.2 > 9
const data = [
  {
    rus: 'Его идеи лучше, чем у неё, но в её словах так много страсти!',
    eng: 'His ideas are better than hers, but there`s so much passion in her words!',
    regEng: '/His ideas are better than hers, but there(?: is|[`’\']s) so much passion in her words!/gm'
  },
  {
    rus: '- Посмотри на рисунки моих студентов. Тебе они нравятся? - О, они фантастические!',
    eng: 'Look at my students` drawings! Do you like them? Oh, they`re fantastic!',
    regEng: '/Look at my students[`’\'] drawings! Do you like them\\? Oh, they(?: are|[`’\']re) fantastic!/gm'
  },
  {
    rus: 'У неё много ценной информации, чтобы поделиться с нами. Давай встретимся с ней в понедельник',
    eng: 'She has a lot of valuable information to share with us. Let`s meet with her on Monday',
    regEng: '/She has a lot of valuable information to share with us. Let[`’\']s meet (?:with )?her on Monday/gm'
  },
  {
    rus: '- Он выше или ниже тебя? - Я не помню точно',
    eng: 'Is he taller or shorter than you? I don`t remember exactly',
    regEng: '/Is he taller or shorter than you(?: are)?\\? I (?:do not|don[`’\']t) remember exactly/gm'
  },
  {
    rus: '- Сколько времени вам нужно, чтобы закончить эту задачу? - Нам нужно всего чуть-чуть времени, мы почти готовы',
    eng: 'How much time do you need to finish this task? We need just a little time, we`re almost ready',
    regEng: '/How much time do you need to finish this task\\? We need just a little time, we(?: are|[`’\']re) almost ready/gm'
  },
  {
    rus: '- Где он? Я хочу поговорить с ним. - Он вернётся через несколько минут. Просто подождите здесь',
    eng: 'Where is he? I want to talk to him. He`ll be back in a few minutes. Just wait here',
    regEng: '/Where is he\\? I want to talk (?:with|to) him. He(?: will come|[`’\']ll come| will be|[`’\']ll be) back in a few minutes. Just wait here/gm'
  },
  {
    rus: '- Она предпочитает путешествовать поездом или самолётом? - Ну, она просто ненавидит поезда. Так что она всегда путешествует самолётом',
    eng: 'Does she prefer to travel by train or by plane? Well, she just hates trains. So she always travels by plane',
    regEng: '/Does she prefer to travel by train or (?:by )?plane\\? Well, she just hates trains. So she always travels by plane/gm'
  },
  {
    rus: 'Все думают, что английский сложный, но я думаю, что английский – веселье! =',
    eng: 'Everybody thinks that English is difficult but I think that English is fun!',
    regEng: '/(?:(?:Everybody|Everyone) thinks(?: that)? English is (?:complicated|difficult) but I think that|(?:(?:Everyone thinks(?: that)?|Everybody thinks) English is complicated|(?:Everybody|Everyone) thinks(?: that)? English is difficult) but I think) English is fun!/gm'
  }
]
export default data