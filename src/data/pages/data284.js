// 15-16 > 16.2 > 8
const data = [
  {
    rus: 'Я буду учиться, пока ты будешь спать. Мне много слов учить для теста завтра',
    eng: 'I`ll be studying while you`re sleeping. I have a lot of words to learn for the test tomorrow',
    regEng: '/(?:(?:(?:(?:While you(?: are sleeping, I will|[`’\']re sleeping, I[`’\']ll) be studying, because|I will be studying while you(?: are sleeping, because|[`’\']re sleeping.)|I[`’\']ll be studying while you[`’\']re sleeping, because) I have lots|(?:While you(?: are sleeping, I will|[`’\']re sleeping, I[`’\']ll) be studying.|I(?: will be studying while you are|[`’\']ll be studying while you[`’\']re) sleeping.) I have a lot) of|(?:While you(?: are sleeping, I will|[`’\']re sleeping, I[`’\']ll) be studying,|I(?: will be studying while you are|[`’\']ll be studying while you[`’\']re) sleeping,) because I have many) words to learn for the|(?:(?:(?:While you(?:[`’\']re sleeping, I will| are sleeping, I[`’\']ll) be studying, because|I(?: will be studying while you[`’\']re|[`’\']ll be studying while you) sleeping.) I have a lot|(?:While you(?:[`’\']re sleeping, I will| sleeping, I[`’\']ll) be studying,|I(?: will be studying while you[`’\']re|[`’\']ll be studying while you are) sleeping,) because I have lots) of|(?:While you(?:[`’\']re sleeping, I will| are sleeping, I[`’\']ll) be studying,|I(?: will be studying while you[`’\']re|[`’\']ll be studying while you are) sleeping,) because I have many) words to learn for a) test tomorrow/gm'
  },
  {
    rus: 'Кто принёс эти документы в понедельник? Я не знаю. Спроси Мэри. Она была здесь в понедельник',
    eng: 'Who brought these documents on Monday? I don`t know. Ask Mary. She was here on Monday',
    regEng: '/Who brought these documents on Monday\\? I (?:(?:do not|don[`’\']t) know. Ask Mary. She was here on Monday|(?:do not|don[`’\']t) know. Ask Mary. On Monday She was here)/gm'
  },
  {
    rus: 'Не забудь взять свои солнечные очки с собой. Солнце слишком яркое сегодня',
    eng: 'Don`t forget to take your sunglasses with you. The sun is too bright today',
    regEng: '/(?:(?:Do not|Don[`’\']t) forget to take your sunglasses with you. The sun(?: is|[`’\']s) too bright today|(?:Do not|Don[`’\']t) forget to take your sunglasses with you. Today The sun(?: is|[`’\']s) too bright)/gm'
  },
  {
    rus: 'Чьи то игрушки? То игрушки моих детей. Я купила их вчера',
    eng: 'Whose toys are those? Those are my children`s toys. I bought them yesterday',
    regEng: '/Whose toys are those\\? Those are my children[`’\']s toys. (?:I bought them yesterday|Yesterday I bought them)/gm'
  },
  {
    rus: 'Этот отель ужасный. Нам нужно найти более хорошее место, чтобы остановиться. Я согласен',
    eng: 'This hotel is awful. We need to find a better place to stay. I agree',
    regEng: '/This hotel is (?:terrible.|horrible.|awful.) We need to find a better place to stay. I agree/gm'
  },
  {
    rus: 'Во что ты веришь? Я верю в любовь, дружбу, доброту и сострадание',
    eng: 'What do you believe in? I believe in love, friendship, kindness and compassion',
    regEng: ''
  },
  {
    rus: 'Она более талантливая, чем он, но он более целеустремлённый и трудолюбивый, чем она',
    eng: 'She`s more talented than him, but he`s more determined and hard-working than her',
    regEng: '/(?:She(?: is|[`’\']s) more talented than he is, but he(?: is|[`’\']s) more determined and hard-working than she is|She(?: is|[`’\']s) more talented than him, but he(?: is|[`’\']s) more determined and hard-working than her|She(?: is|[`’\']s) more talented than he, but he(?: is|[`’\']s) more determined and hard-working than she)/gm'
  },
  {
    rus: 'Где ключ? Я думаю, что я потерял его, когда я шёл в школу вчера',
    eng: 'Where is the key? I think that I lost it when I was going to school yesterday',
    regEng: '/Where is the key\\? I think (?:that )?I lost it when I was going to school yesterday/gm'
  }
]
export default data