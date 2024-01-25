// 06-09 > 7.2 > 4
const data = [
  {
    rus: 'Тот человек интересовался музыкой',
    eng: 'That person was interested in music',
    regEng: ''
  },
  {
    rus: 'Тот человек не интересовался музыкой',
    eng: 'That person was not interested in music',
    regEng: '/That person (?:was not|wasn’t) interested in music/gm'
  },
  {
    rus: 'Интересовался ли тот человек музыкой?',
    eng: 'Was that person interested in music?',
    regEng: ''
  },
  {
    rus: 'Чем интересовался тот человек?',
    eng: 'What was that person interested in?',
    regEng: ''
  },
  {
    rus: 'Те дети боялись собак',
    eng: 'Those children were afraid of dogs',
    regEng: '/Those (?:children|kids) were (?:afraid|scared) of dogs/gm'
  },
  {
    rus: 'Те дети не боялись собак',
    eng: 'Those children were not afraid of dogs',
    regEng: '/Those (?:children|kids) (?:were not|weren’t) (?:afraid|scared) of dogs/gm'
  },
  {
    rus: 'Боялись ли те дети собак?',
    eng: 'Were those children afraid of dogs?',
    regEng: '/Were those (?:children|kids) (?:afraid|scared) of dogs\\?/gm'
  },
  {
    rus: 'Чего боялись те дети?',
    eng: 'What were those children afraid of?',
    regEng: '/What were those (?:children|kids) (?:afraid|scared) of?/gm'
  }
]
export default data