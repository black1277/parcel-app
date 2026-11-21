// 17-20 > 17.2 > 9
const data = [
  {
    rus: 'Кажется, что она не слышит нас вообще. Это не имеет значения, давай напишем ей сообщение',
    eng: 'It seems that she doesn`t hear us at all. It doesn`t matter, let`s write her a message',
    regEng: '/It seems (?:(?:that she does not hear us at all. (?:This|That|It)|like she does not hear us at all. (?:This|That|It)|she does not hear us at all. (?:This|That|It)) does not|(?:that she doesn[`’\']t hear us at all. (?:This|That|It)|like she doesn[`’\']t hear us at all. (?:This|That|It)|she doesn[`’\']t hear us at all. (?:This|That|It)) doesn[`’\']t) matter, let[`’\']s write her a message/gm'
  },
  {
    rus: 'Мне нужно забронировать рейс в Нью-Йорк. Это возможно? Я сожалею, но прямо сейчас нет полётов в Нью-Йорк из-за некоторых технических трудностей',
    eng: 'I need to book a flight to New York. Is it possible? I`m sorry, but right now there are no flights to New York because of some technical difficulties',
    regEng: '/I need to book a flight to New York. Is it possible\\? I(?: am|[`’\']m) sorry, but right now there (?:are (?:not any|no)|aren[`’\']t any) flights to New York because of some technical difficulties/gm'
  },
  {
    rus: 'Так ты наслаждаешься своим отпуском? Конечно! Мы замечательно проводим время здесь!',
    eng: 'So do you enjoy your holiday? Of course! We`re having a great time here!',
    regEng: '/So (?:are you enjoying your holiday\\? Of course! We(?: are|[`’\']re)|do you enjoy your holiday\\? Of course! We(?: are|[`’\']re)) having a great time here!/gm'
  },
  {
    rus: 'Кто хочет помочь мне сделать салат на обед? Но у нас осталось много салата со вчерашнего дня',
    eng: 'Who wants to help me make salad for lunch? But we have a lot of salad left from yesterday',
    regEng: '/Who wants to help me(?: to)? make salad for lunch\\? But we have (?:a lot|lots) of salad left from yesterday/gm'
  },
  {
    rus: 'Что ты думаешь об этой идее? Она звучит разумно? Она звучит чудесно! Давай начнём сразу же!',
    eng: 'What do you think about this idea? Does it sound reasonable? It sounds wonderful! Let`s get started right away!',
    regEng: '/What do you think about this idea\\? Does it sound reasonable\\? It sounds wonderful! Let[`’\']s (?:get started|start|begin) right away!/gm'
  },
  {
    rus: 'Эй! Ты идёшь? Мы ждём тебя. Завтрак готов и мы очень голодные',
    eng: 'Hey! Are you coming? We`re waiting for you. Breakfast is ready and we`re very hungry',
    regEng: '/Hey! Are you coming\\? We(?: are waiting for you. Breakfast is ready and we are|[`’\']re waiting for you. Breakfast is ready and we[`’\']re) very hungry/gm'
  },
  {
    rus: 'Что ты будешь делать, пока малыш будет спать? Я буду делать ужин',
    eng: 'What will you be doing while the baby is sleeping? I`ll be making dinner',
    regEng: '/What will you be doing while the baby is sleeping\\? I(?: will|[`’\']ll) be making dinner/gm'
  },
  {
    rus: 'Важно помнить, что отношение – это всё. Ваш успех зависит от вашего отношения. Так что всегда оставайтесь позитивными!',
    eng: 'It`s important to remember that attitude is everything. Your success depends on your attitude. So always stay positive!',
    regEng: '/It(?: is|[`’\']s) important to remember that attitude is everything. Your success depends on your attitude. So always stay positive!/gm'
  }
]
export default data