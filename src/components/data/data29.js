// 01-05 > 4.1 > 2
const data = [
  {
    rus: 'В понедельник я обычно езжу на работу на автобусе',
    eng: 'On Monday I usually go to work by bus',
    regEng: '/(?:On Monday I usually go to work by bus)|(?:I usually go to work by bus on Monday)/gm'
  },
  {
    rus: 'В прошлый понедельник я поехал на работу на такси',
    eng: 'Last Monday I went to work by taxi',
    regEng: '/(?:Last Monday I went to work by taxi)|(?:I went to work by taxi last Monday)/gm'
  },
  {
    rus: 'В следующий понедельник я поеду на работу на поезде',
    eng: 'Next Monday I will go to work by train',
    regEng: '/(?:Next Monday (?:I will|I’ll) go to work by train)|(?:(?:I will|I’ll) go to work by train next Monday)/gm'
  },
  {
    rus: 'В пятницу они редко ездят в больницу на трамвае',
    eng: 'On Friday they rarely go to hospital by tram',
    regEng: '/(?:On Friday they (?:rarely|seldom) go to hospital by tram)|(?:They (?:rarely|seldom) go to hospital by tram on Friday)/gm'
  },
  {
    rus: 'В прошлую пятницу они поехали в больницу на велосипеде',
    eng: 'Last Friday they went to hospital by bicycle',
    regEng: '/(?:Last Friday they went to hospital by bicycle)|(?:They went to hospital by bicycle last Friday)/gm'
  },
  {
    rus: 'В следующую пятницу они поедут в больницу на автобусе',
    eng: 'Next Friday they will go to hospital by bus',
    regEng: '/(?:Next Friday (?:they will|They’ll) go to hospital by bus)|(?:(?:They will|They’ll) go to hospital by bus next Friday)/gm'
  }
]
export default data