// 01-05 > 1.2 > 2
const data = [
  {
    rus: 'Этот человек часто приезжает сюда',
    eng: 'This person often comes here'
  },
  {
    rus: 'Эти люди часто приезжают сюда',
    eng: 'These people often come here'
  },
  {
    rus: 'Тот ребёнок никогда не пьёт зелёный чай',
    eng: 'That child never drinks green tea',
    regEng: '/(?:That (?:child|kid) never drinks green tea)/gm'
  },
  {
    rus: 'Те дети никогда не пьют зелёный чай',
    eng: 'Those children never drink green tea',
    regEng: '/(?:Those (?:children|kids) never drink green tea)/gm'
  },
  {
    rus: 'Эта женщина всегда носит такие длинные платья',
    eng: 'This woman always wears such long dresses'
  },
  {
    rus: 'Эти женщины всегда носят такие длинные платья',
    eng: 'These women always wear such long dresses'
  }
]
export default data