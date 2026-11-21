// 10-14 > 10.4 > 5
const data = [
  {
    rus: 'Он никогда не ездит на работу на общественном транспорте. У него есть машина',
    eng: 'He never goes to work by public transport. He has a car',
    regEng: ''
  },
  {
    rus: 'Чем интересуется её сестра? Она интересуется музыкой',
    eng: 'What is her sister interested in? She is interested in music',
    regEng: '/What(?: is|[`’\']s) her sister interested in\\? She(?: is|[`’\']s) interested in music/gm'
  },
  {
    rus: 'На полу стояла бутылка',
    eng: 'There was a bottle on the floor',
    regEng: ''
  },
  {
    rus: 'Чьи это ключи? Они твои',
    eng: 'Whose keys are these? They are yours',
    regEng: '/Whose keys are these\\? (?:(?:These|They) are|They[`’\']re) yours/gm'
  },
  {
    rus: 'Она не смотрит телевизор. Она читает книги',
    eng: 'She does not watch TV. She reads books',
    regEng: '/She (?:does not|doesn[`’\']t) watch TV. She reads books/gm'
  }
]
export default data