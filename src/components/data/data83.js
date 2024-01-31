// 06-09 > 7.4 > 11  06-09 > 7.4 > 12
const data = [
  {
    rus: 'У кого есть сложный вопрос?',
    eng: 'Who has a difficult question?',
    regEng: ''
  },
  {
    rus: 'Она не всегда слушает эти песни в среду',
    eng: 'She does not always listen to these songs on Wednesday',
    regEng: '/She (?:does not|doesn’t) always listen to these songs on Wednesday/gm'
  },
  {
    rus: 'О чём эти люди будут часто беспокоиться?',
    eng: 'What will these people often be worried about?',
    regEng: ''
  },
  {
    rus: 'Завтра у нас будет отличная вечеринка',
    eng: 'Tomorrow we will have an excellent party',
    regEng: '/(?:Tomorrow (?:we will|we’ll) have an excellent party)|(?:(?:We will|We’ll) have an excellent party tomorrow)/gm'
  },
  {
    rus: 'Ужинают ли они всегда рано в воскресенье?',
    eng: 'Do they always have dinner early on Sunday?',
    regEng: ''
  },
  {
    rus: 'Завтракает ли она часто поздно в субботу?',
    eng: 'Does she often have breakfast late on Saturday?',
    regEng: ''
  },
  {
    rus: 'Эти люди часто читают газеты и журналы',
    eng: 'These people often read newspapers and magazines',
    regEng: ''
  },
  {
    rus: 'Вчера я написал вам сообщение',
    eng: 'Yesterday I wrote you a message',
    regEng: '/(?:Yesterday I wrote you a message)|(?:I wrote you a message yesterday)/gm'
  },
  {
    rus: 'Когда ты пойдешь в кровать завтра?',
    eng: 'When will you go to bed tomorrow?',
    regEng: '/When will you go to (?:bed|sleep) tomorrow?/gm'
  },
  {
    rus: 'Мы принесём тебе эти документы в следующий вторник',
    eng: 'We will bring you these documents next Tuesday',
    regEng: '/(?:We will|We’ll) bring you these documents next Tuesday/gm'
  }
]
export default data