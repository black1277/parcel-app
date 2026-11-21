// 10-14 > 13.4 > 8
const data = [
  {
    rus: 'Она без ума от своего нового парня',
    eng: 'She`s crazy about her new boyfriend',
    regEng: '/She(?: is|[`’\']s) crazy about her new boyfriend/gm'
  },
  {
    rus: 'Мне нужно немного помощи от тебя',
    eng: 'I need a little help from you',
    regEng: '/I need (?:a little|some) help from you/gm'
  },
  {
    rus: 'Где кот? - Он снаружи',
    eng: 'Where is the cat? It`s outside',
    regEng: '/Where(?: is|[`’\']s) the cat\\? (?:(?:It|He) is|(?:It|He)[`’\']s) outside/gm'
  },
  {
    rus: 'Сколько информации ты хочешь, чтобы они тебе дали?',
    eng: 'How much information do you want them to give you?',
    regEng: ''
  },
  {
    rus: 'Когда мы будем готовы?',
    eng: 'When will we be ready?',
    regEng: ''
  }
]
export default data