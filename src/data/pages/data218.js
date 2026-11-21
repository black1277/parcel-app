// 10-14 > 14.1 > 5
const data = [
  {
    rus: 'Послушай! Та девочка плачет',
    eng: 'Listen! That girl is crying',
    regEng: ''
  },
  {
    rus: 'Не звоните нам! Мы работаем',
    eng: 'Don`t call us! We`re working',
    regEng: '/(?:Do not|Don[`’\']t) call us! We(?: are|[`’\']re) working/gm'
  },
  {
    rus: 'Помоги мне! Чего ты ждёшь?',
    eng: 'Help me! What are you waiting for?',
    regEng: ''
  },
  {
    rus: 'Давайте послушаем их. Они с нами говорят',
    eng: 'Let`s listen to them. They`re talking to us',
    regEng: '/Let[`’\']s listen to them. They(?: are|[`’\']re) talking (?:with|to) us/gm'
  },
  {
    rus: 'Смотри! Она несёт наши сумки',
    eng: 'Look! She`s carrying our bags',
    regEng: '/Look! She(?: is|[`’\']s) carrying our bags/gm'
  },
  {
    rus: 'Не разговаривайте! Я пытаюсь сконцентрироваться',
    eng: 'Don`t talk! I`m trying to concentrate',
    regEng: '/(?:Do not|Don[`’\']t) talk! I(?: am|[`’\']m) trying to concentrate/gm'
  },
  {
    rus: 'Приходи домой! Мы ждём тебя',
    eng: 'Come home! We`re waiting for you',
    regEng: '/Come home! We(?: are|[`’\']re) waiting for you/gm'
  },
  {
    rus: 'Давай позвоним ему. Он ищет нас',
    eng: 'Let`s call him. He`s looking for us',
    regEng: '/Let[`’\']s call him. He(?: is|[`’\']s) looking for us/gm'
  }
]
export default data