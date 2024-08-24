// 01-05 > 4.1 > 4
const data31 = [
  {
    rus: 'В июле мы иногда ездим домой на лодке',
    eng: 'In July we sometimes go home by boat',
    regEng: '/(?:In July we sometimes go home by boat)|(?:We sometimes go home by boat in July)/gm'
  },
  {
    rus: 'В прошлом июле мы поехали домой на самолете',
    eng: 'Last July we went home by plane',
    regEng: '/(?:Last July we went home by plane)|(?:We went home by plane last July)/gm'
  },
  {
    rus: 'В следующем июле мы пойдём домой пешком',
    eng: 'Next July we will go home on foot',
    regEng: '/(?:Next July we will go home on foot)|(?:We will go home on foot next July)/gm'
  },
  {
    rus: 'В августе она всегда ездит домой на автобусе',
    eng: 'In August she always goes home by bus',
    regEng: '/(?:In August she always goes home by bus)|(?:She always goes home by bus in August)/gm'
  },
  {
    rus: 'В прошлом августе она поехала домой на поезде',
    eng: 'Last August she went home by train',
    regEng: '/(?:Last August she went home by train)|(?:She went home by train last August)/gm'
  },
  {
    rus: 'В следующем августе она поедет домой на велосипеде',
    eng: 'Next August she will go home by bicycle',
    regEng: '/(?:Next August (?:she will|she’ll) go home by bicycle)|(?:(?:She will|She’ll) go home by bicycle next August)/gm'
  }
]
export default data31