// 17-20 > 20.1 > 13
const data = [
  {
    rus: 'Сегодня у нас следующие темы: учёба и хобби, внешность и характер',
    eng: 'Today we have the following topics: studies and hobbies, appearance and character',
    regEng: '/(?:Today we have the following topics:|We have the following topics today:) studies and hobbies, appearance and character/gm'
  },
  {
    rus: 'Это неправильный ответ? Нет, это правильный ответ! Это единственный возможный ответ',
    eng: 'Is this the wrong answer? No, this is the right answer! This is the only possible answer',
    regEng: '/Is (?:(?:this the wrong answer\\? No, this is the right answer! This|that the wrong answer\\? No, that is the right answer! That|it the wrong answer\\? No, it is the right answer! It) is|that the wrong answer\\? No, that[`’\']s the right answer! That[`’\']s|(?:that|this|it) the wrong answer\\? No, it[`’\']s the right answer! It[`’\']s) the only possible answer/gm'
  },
  {
    rus: 'Самое главное – сохранять спокойствие и принимать свои ошибки. Отношение – это всё!',
    eng: 'The main thing is to keep calm and accept your mistakes. Attitude is everything!',
    regEng: ''
  },
  {
    rus: 'Следующее предложение отличается от последнего предложения. Вы видите разницу?',
    eng: 'The next sentence is different from the last sentence. Do you see the difference?',
    regEng: '/The next sentence (?:is different|differs) from the last sentence. Do you see the difference\\?/gm'
  },
  {
    rus: 'Это обычная еда, которую мы едим, когда путешествуем по миру. О, она на вкус восхитительна!',
    eng: 'This is the usual food that we eat when we travel around the world. Oh it tastes delicious!',
    regEng: '/This is the usual food(?: that)? we eat when we travel(?: around)? the world. Oh it tastes delicious!/gm'
  },
  {
    rus: 'Твоё платье такое же, как у твоей сестры. Да, нам нравится носить одинаковую одежду. Ведь мы близнецы!',
    eng: 'Your dress is the same as your sister`s. Yes, we like to wear the same clothes. After all, we`re twins!',
    regEng: '/Your dress is the same as your sister[`’\']s. Yes, we like to wear the same clothes. (?:After all, we(?: are|[`’\']re) twins!|We(?: are|[`’\']re) twins, after all!)/gm'
  },
  {
    rus: 'Давайте посмотрим на предыдущее упражнение и проанализируем его. Оно содержит кое-какие ценные нюансы',
    eng: 'Let`s look at the previous exercise and analyse it. It contains some valuable nuances',
    regEng: '/Let(?: us|[`’\']s) look at the previous exercise and (?:analyse|analyze) it. It contains some valuable nuances/gm'
  },
  {
    rus: 'Куда мы пойдем сейчас? Ну, давай пойдём в обычное место',
    eng: 'Where are we going to go now? Well, let`s go to the usual place',
    regEng: '/Where are we going to go now\\? Well, let(?: us|[`’\']s) go to the usual place/gm'
  },
  {
    rus: 'Каковы главные факторы, на которые нам нужно обратить внимание? Обратите внимание на свои мысли и на своё дыхание',
    eng: 'What are the main factors that we need to pay attention to? Pay attention to your thoughts and your breath',
    regEng: '/What are the main factors that we need to pay attention to\\? Pay attention to your thoughts and (?:your )?breath/gm'
  },
  {
    rus: 'Единственный способ научиться чему-то – это делать это. Невозможно научиться чему-либо, если ты просто читаешь или слушаешь об этом',
    eng: 'The only way to learn something is to do it. It`s impossible to learn anything if you just read or listen about it',
    regEng: '/The only way to learn something is to do it. It(?: is not possible|[`’\']s not possible| is impossible|[`’\']s impossible) to learn anything if you just read or listen about it/gm'
  }
]
export default data