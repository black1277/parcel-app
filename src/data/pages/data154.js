// 10-14 > 11.2 > 5
const data = [
  {
    rus: 'Она хочет жить у моря',
    eng: 'She wants to live by the sea',
    regEng: '/She wants to live (?:near|by) the sea/gm'
  },
  {
    rus: 'Это картинка, о которой мы говорили вчера',
    eng: 'This is the picture that we talked about yesterday',
    regEng: '/This is the picture(?: (?:which|that))? we (?:were talking|talked) about yesterday/gm'
  },
  {
    rus: 'Мир такой большой и красивый',
    eng: 'The world is so big and beautiful',
    regEng: ''
  },
  {
    rus: 'Где кот? Он снаружи',
    eng: 'Where is the cat? It is outside',
    regEng: '/(?:Where is the cat\\? (?:It|He) is outside|Where[`’\']s the cat\\? (?:(?:It|He) is|(?:It|He)[`’\']s) outside)/gm'
  },
  {
    rus: 'Есть ли какие-нибудь облака в небе?',
    eng: 'Are there any clouds in the sky?',
    regEng: '/Are there (?:any )?clouds in the sky\\?/gm'
  },
  {
    rus: 'Все знают, что земля круглая',
    eng: 'Everybody knows that the earth is round',
    regEng: '/(?:Everybody|Everyone) knows(?: that)? the earth is round/gm'
  },
  {
    rus: 'Это туфли, которые я купила неделю назад',
    eng: 'These are the shoes that I bought a week ago',
    regEng: '/These are the shoes (?:(?:which|that) )?I bought a week ago/gm'
  },
  {
    rus: 'На столе стоит ваза. В вазе цветы',
    eng: 'There is a vase on the table. There are flowers in the vase',
    regEng: '/There(?: is|[`’\']s) a vase on the table. There are(?: some)? flowers in the vase/gm'
  }
]
export default data