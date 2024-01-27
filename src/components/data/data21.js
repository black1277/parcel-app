// 01-05 > 3.1 > 5
const data = [
  {
    rus: 'Мы часто ездим в это место в феврале',
    eng: 'We often go to this place in February',
    regEng: '/(?:We often go to this place in February)|(?:In February we often go to this place)/gm'
  },
  {
    rus: 'Мы съездили в это место в прошлом феврале',
    eng: 'We went to this place last February',
    regEng: '/(?:We went to this place last February)|(?:Last February we went to this place)/gm'
  },
  {
    rus: 'Мы съездим в это место в следующем феврале',
    eng: 'We will go to this place next February',
    regEng: '/(?:(?:We will|We’ll) go to this place next February)|(?:Next February (?:we will|we’ll) go to this place)/gm'
  },
  {
    rus: 'Он обычно ходит в музеи в январе',
    eng: 'He usually goes to museums in January',
    regEng: '/(?:He usually goes to museums in January)|(?:In January he usually goes to museums)/gm'
  },
  {
    rus: 'Он сходил в этот музей в прошлом январе',
    eng: 'He went to this museum last January',
    regEng: '/(?:He went to this museum last January)|(?:Last January he went to this museum)/gm'
  },
  {
    rus: 'Он сходит в этот музей в следующем январе',
    eng: 'He will go to this museum next January',
    regEng: '/(?:He will|He’ll) go to this museum next January/gm'
  }
]
export default data