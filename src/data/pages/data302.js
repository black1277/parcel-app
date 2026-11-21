// 17-20 > 17.4 > 3
const data = [
  {
    rus: 'Я добавлю немного соли и перца в салат и тогда он будет готов, чтобы кушать',
    eng: 'I`ll add a little salt and pepper to the salad and then it`ll be ready to eat',
    regEng: '/I(?: will|[`’\']ll) add (?:a little|some) salt and pepper to the salad and then it(?: will|[`’\']ll) be ready to eat/gm'
  },
  {
    rus: 'Где ключ? Я думаю, что я потерял его, когда я шёл в школу вчера',
    eng: 'Where is the key? I think that I lost it when I was going to school yesterday',
    regEng: '/Where is the key\\? I think (?:that )?I lost it when I was going to school yesterday/gm'
  },
  {
    rus: 'Он не ест ничего острого, потому что у него очень чувствительный желудок',
    eng: 'He eats nothing spicy because he has a very sensitive stomach',
    regEng: '/He (?:(?:(?:does not|doesn[`’\']t) eat anything|eats nothing) spicy because he has a very sensitive stomach|(?:(?:does not|doesn[`’\']t) eat anything|eats nothing) spicy because his stomach(?: is|[`’\']s) very sensitive)/gm'
  },
  {
    rus: 'Я буду учиться, пока ты будешь спать. Мне много слов учить для теста завтра',
    eng: 'I`ll be studying while you`re sleeping. I have a lot of words to learn for the test tomorrow',
    regEng: '/(?:(?:(?:(?:While you(?: are sleeping, I will|[`’\']re sleeping, I[`’\']ll) be studying,|I(?: will be studying while you are|[`’\']ll be studying while you[`’\']re) sleeping,) because I have lots|(?:While you(?: are sleeping, I will|[`’\']re sleeping, I[`’\']ll) be studying.|I(?: will be studying while you are|[`’\']ll be studying while you[`’\']re) sleeping.) I have a lot) of|(?:While you(?: are sleeping, I will|[`’\']re sleeping, I[`’\']ll) be studying,|I(?: will be studying while you are|[`’\']ll be studying while you[`’\']re) sleeping,) because I have many) words to learn for the|(?:(?:(?:While you(?:[`’\']re sleeping, I will| are sleeping, I[`’\']ll) be studying, because|I(?: will be studying while you[`’\']re|[`’\']ll be studying while you) sleeping.) I have a lot|(?:While you(?:[`’\']re sleeping, I will| sleeping, I[`’\']ll) be studying,|I(?: will be studying while you[`’\']re|[`’\']ll be studying while you are) sleeping,) because I have lots) of|(?:While you(?:[`’\']re sleeping, I will| are sleeping, I[`’\']ll) be studying,|I(?: will be studying while you[`’\']re|[`’\']ll be studying while you are) sleeping,) because I have many) words to learn for a) test tomorrow/gm'
  },
  {
    rus: 'Не забудь взять свои солнечные очки с собой. Солнце слишком яркое сегодня',
    eng: 'Don`t forget to take your sunglasses with you. The sun is too bright today',
    regEng: '/(?:(?:Do not|Don[`’\']t) forget to take your sunglasses with you. The sun(?: is|[`’\']s) too bright today|(?:Do not|Don[`’\']t) forget to take your sunglasses with you. Today The sun(?: is|[`’\']s) too bright)/gm'
  }
]
export default data