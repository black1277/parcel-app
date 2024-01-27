// 01-05 > 4.1 > 3
const data = [
  {
    rus: 'Осенью она часто ездит в школу на машине',
    eng: 'In autumn she often goes to school by car',
    regEng: '/(?:In autumn she often goes to school by car)|(?:She often goes to school by car in autumn)/gm'
  },
  {
    rus: 'Прошлой осенью она поехала в школу на велосипеде',
    eng: 'Last autumn she went to school by bicycle',
    regEng: '/(?:Last autumn she went to school by bicycle)|(?:She went to school by bicycle last autumn)/gm'    
  },
  {
    rus: 'Следующей осенью она поедет в школу на трамвае',
    eng: 'Next autumn she will go to school by tram',
    regEng: '/(?:Next autumn (?:she will|she’ll) go to school by tram)|(?:(?:She will|She’ll) go to school by tram next autumn)/gm'
  },
  {
    rus: 'Весной вы всегда ездите в университет на поезде',
    eng: 'In spring you always go to university by train',
    regEng: '/(?:In spring you always go to university by train)|(?:You always go to university by train In spring)/gm'
  },
  {
    rus: 'Прошлой весной вы пошли в университет пешком',
    eng: 'Last spring you went to university on foot',
    regEng: '/(?:Last spring you went to university on foot)|(?:You went to university on foot last spring)/gm'
  },
  {
    rus: 'Следующей весной вы поедете в университет на такси',
    eng: 'Next spring you will go to university by taxi',
    regEng: '/(?:Next spring (?:you will|you’ll) go to university by taxi)|(?:(?:You will|You’ll) go to university by taxi next spring)/gm'
  }
]
export default data