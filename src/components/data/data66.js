// 06-09 > 7.1 > 4
const data = [
  {
    rus: 'Тот фильм был о любви',
    eng: 'That film was about love',
    regEng: '/That (?:film|movie) was about love/gm'
  },
  {
    rus: 'Тот фильм не был о любви',
    eng: 'That film was not about love',
    regEng: '/That (?:film|movie) (?:was not|wasn’t) about love/gm'
  },
  {
    rus: 'Был ли тот фильм о любви?',
    eng: 'Was that film about love?',
    regEng: '/Was that (?:film|movie) about love\\?/gm'
  },
  {
    rus: 'О чём был тот фильм?',
    eng: 'What was that film about?',
    regEng: '/What was that (?:film|movie) about\\?/gm'
  },
  {
    rus: 'Те женщины были из России',
    eng: 'Those women were from Russia',
    regEng: ''
  },
  {
    rus: 'Те женщины не были из России',
    eng: 'Those women were not from Russia',
    regEng: '/Those women (?:were not|weren’t) from Russia/gm'
  },
  {
    rus: 'Были ли те женщины из России?',
    eng: 'Were those women from Russia?',
    regEng: ''
  },
  {
    rus: 'Откуда были те женщины?',
    eng: 'Where were those women from?',
    regEng: ''
  }
]
export default data