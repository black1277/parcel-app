// 10-14 > 11.4 > 14
const data = [
  {
    rus: 'Что ему нужно искать?',
    eng: 'What does he need to look for?',
    regEng: '/What does he need to (?:search|look) for\\?/gm'
  },
  {
    rus: 'Те дети не боялись собак',
    eng: 'Those children were not afraid of dogs',
    regEng: '/Those children (?:were not (?:afraid|scared)|weren[`’\']t (?:afraid|scared)) of dogs/gm'
  },
  {
    rus: 'То была одежда её мужа? Нет, то не была одежда её мужа',
    eng: 'Were those her husband`s clothes? No, those were not her husband`s clothes',
    regEng: '/Were those her husband[`’\']s clothes\\? No, those (?:were not|weren[`’\']t) her husband[`’\']s clothes/gm'
  },
  {
    rus: 'Висела ли лампа на потолке?',
    eng: 'Was there a lamp on the ceiling?',
    regEng: ''
  },
  {
    rus: 'Ему не нужно искать новую работу',
    eng: 'He does not need to look for a new job',
    regEng: '/He (?:does not|doesn[`’\']t) need to (?:search|look) for a new job/gm'
  }
]
export default data