// 01-05 > 2.1 > 2
const data = [
  {
    rus: 'Этому человеку нужно, чтобы вы прочитали эти газеты',
    eng: 'This person needs you to read these newspapers'
  },
  {
    rus: 'Мой ребёнок хочет, чтобы я посмотрел те фильмы',
    eng: 'My child wants me to watch those films',
    regEng: '/(?:My (?:child|kid) wants me to watch those (?:films|movies))/gm'
  },
  {
    rus: 'Женщины хотят, чтобы мужчины любили их',
    eng: 'Women want men to love them'
  },
  {
    rus: 'Мне нужно, чтобы ты увидел тех людей',
    eng: 'I need you to see those people'
  },
  {
    rus: 'Она хочет, чтобы я помог её детям',
    eng: 'She wants me to help her children',
    regEng: '/(?:She wants me to help her (?:children|kids))/gm'
  },
  {
    rus: 'Нам нужно, чтобы он почистил свои зубы',
    eng: 'We need him to brush his teeth'
  }
]
export default data