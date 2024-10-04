// 06-09 > 9.2 > 6
const data = [
  {
    rus: 'На кровати лежат игрушки',
    eng: 'There are toys on the bed',
    regEng: ''
  },
  {
    rus: 'В двери будет замок',
    eng: 'There will be a lock in the door',
    regEng: '/(?:(?:There will|There’ll) be a lock in the door)/gm'
  },
  {
    rus: 'Будет ли в двери замок?',
    eng: 'Will there be a lock in the door?',
    regEng: ''
  },
  {
    rus: 'У окна стоит кресло',
    eng: 'There is an armchair by the window',
    regEng: '/(?:(?:There is|There’s) an armchair by the window)/gm'
  },
  {
    rus: 'Стоит ли кресло у окна?',
    eng: 'Is there an armchair by the window?',
    regEng: ''
  },
  {
    rus: 'В сумке лежал ключ',
    eng: 'There was a key in the bag',
    regEng: ''
  },
  {
    rus: 'Лежал ли в сумке ключ?',
    eng: 'Was there a key in the bag?',
    regEng: ''
  }
]
export default data