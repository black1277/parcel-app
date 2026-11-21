// 10-14 > 14.2 > 8
const data = [
  {
    rus: 'Ты знаешь какие-нибудь хорошие отели в Лондоне?',
    eng: 'Do you know any good hotels in London? Oh, I know a lot of good hotels there',
    regEng: '/Do you know any good hotels in London\\? Oh, I know (?:a lot of|many) good hotels there/gm'
  },
  {
    rus: 'У нас нет никаких вопросов вообще. Всё ясно!',
    eng: 'We have no questions at all. Everything is clear!',
    regEng: '/We (?:(?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions at all. Everything is|(?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions at all. Everything[`’\']s) clear!/gm'
  },
  {
    rus: 'Осталось ли сколько-нибудь хлеба? Нет, но есть немного шоколада в той коробке',
    eng: 'Is there any bread left? No, but there`s a little chocolate in that box',
    regEng: '/Is there any bread left\\? No, but there(?: is a little|[`’\']s a little| is some|[`’\']s some) chocolate in (?:that|the) box/gm'
  },
  {
    rus: 'Слушай! Твой телефон звонит. Нет, то не мой, то твой',
    eng: 'Listen! Your phone is ringing. No, that`s not mine, that`s yours',
    regEng: '/Listen! Your phone(?: is ringing. No, that is not mine, that is| is ringing. No, this is not mine, this is| is ringing. No, that isn[`’\']t mine, that is|[`’\']s ringing. No, that is not mine, that is| is ringing. No, this isn[`’\']t mine, this is|[`’\']s ringing. No, this is not mine, this is| is ringing. No, that[`’\']s not mine, that[`’\']s| is ringing. No, that isn[`’\']t mine, that[`’\']s|[`’\']s ringing. No, that isn[`’\']t mine, that is|[`’\']s ringing. No, this isn[`’\']t mine, this is|[`’\']s ringing. No, that[`’\']s not mine, that[`’\']s|[`’\']s ringing. No, that isn[`’\']t mine, that[`’\']s| is ringing. No, it is not mine, it is| is ringing. No, it isn[`’\']t mine, it is|[`’\']s ringing. No, it is not mine, it is| is ringing. No, it[`’\']s not mine, it[`’\']s| is ringing. No, it isn[`’\']t mine, it[`’\']s|[`’\']s ringing. No, it isn[`’\']t mine, it is|[`’\']s ringing. No, it[`’\']s not mine, it[`’\']s|[`’\']s ringing. No, it isn[`’\']t mine, it[`’\']s) yours/gm'
  },
  {
    rus: 'Когда он пришёл домой? Он пришёл домой в одиннадцать часов вечера',
    eng: 'When did he come home? He came home at eleven o`clock at night',
    regEng: '/When did he come home\\? He came home at eleven o[`’\']clock (?:in the evening|at night)/gm'
  },
  {
    rus: 'Сколько наличных у тебя осталось? Ну, у меня осталось лишь несколько долларов',
    eng: 'How much cash do you have left? Well, I have just a few dollars left',
    regEng: ''
  },
  {
    rus: 'Он спит сейчас. Он всегда идёт спать рано',
    eng: 'He`s sleeping now. He always goes to bed early',
    regEng: '/(?:He(?: is|[`’\']s) sleeping|He(?: is|[`’\']s) asleep) now. He always goes to (?:sleep|bed) early/gm'
  }
]
export default data