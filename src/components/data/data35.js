// 01-05 > 4.2 > 2
const data35 = [
  {
    rus: 'В среду я часто иду домой пешком',
    eng: 'On Wednesday I often go home on foot',
    regEng: '/(?:On Wednesday I often go home on foot)|(?:I often go home on foot on Wednesday)/gm'
  },
  {
    rus: 'В прошлую среду я поехал домой на машине',
    eng: 'Last Wednesday I went home by car',
    regEng: '/(?:Last Wednesday I went home by car)|(?:I went home by car last Wednesday)/gm'
  },
  {
    rus: 'В следующую среду я поеду домой на трамвае',
    eng: 'Next Wednesday I will go home by tram',
    regEng: '/(?:Next Wednesday (?:I will|I’ll) go home by tram)|(?:(?:I will|I’ll) go home by tram next Wednesday)/gm'
  },
  {
    rus: 'В декабре они редко ездят на работу на велосипеде',
    eng: 'In December they rarely go to work by bicycle',
    regEng: '/(?:In December they (?:rarely|seldom) go to work by bicycle)|(?:They (?:rarely|seldom) go to work by bicycle in December)/gm'
  },
  {
    rus: 'В прошлый декабрь они поехали на работу на самолете',
    eng: 'Last December they went to work by plane',
    regEng: '/(?:Last December they went to work by (?:air)?plane)|(?:They went to work by (?:air)?plane Last December)/gm'
  },
  {
    rus: 'В следующий декабрь они поедут на работу на лодке',
    eng: 'Next December they will go to work by boat',
    regEng: '/(?:Next December (?:they will|they’ll) go to work by boat)|(?:(?:They will|They’ll) go to work by boat Next December)/gm'
  },
  {
    rus: 'Летом она всегда ходит в колледж пешком',
    eng: 'In summer she always goes to college on foot',
    regEng: '/(?:In summer she always goes to college on foot)|(?:She always goes to college on foot in summer)/gm'
  },
  {
    rus: 'Прошлым летом она поехала в колледж на такси',
    eng: 'Last summer she went to college by taxi',
    regEng: '/(?:Last summer she went to college by taxi)|(?:She went to college by taxi last summer)/gm'
  },
  {
    rus: 'Следующим летом она поедет в колледж на поезде',
    eng: 'Next summer she will go to college by train',
    regEng: '/(?:Next summer (?:she will|she’ll) go to college by train)|(?:(?:She will|She’ll) go to college by train next summer)/gm'
  }
]
export default data35