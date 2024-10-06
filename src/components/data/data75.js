// 06-09 > 7.2 > 7
const data = [
  {
    rus: 'То были часы его дедушки',
    eng: 'That was his grandfather`s watch',
    regEng: '/That was his (?:grandfather’s|grandpa’s) watch/gm'
  },
  {
    rus: 'То были часы не его дедушки',
    eng: 'That was not his grandfather`s watch',
    regEng: '/That (?:was not|wasn’t) his (?:grandfather’s|grandpa’s) watch/gm'
  },
  {
    rus: 'То были часы его дедушки?',
    eng: 'Was that his grandfather`s watch?',
    regEng: '/Was that his (?:grandfather’s|grandpa’s) watch\\?/gm'
  },
  {
    rus: 'Чьи то были часы?',
    eng: 'Whose watch was that?',
    regEng: ''
  },
  {
    rus: 'То были книги моего дяди',
    eng: 'Those were my uncle`s books',
    regEng: ''
  },
  {
    rus: 'То были книги не моего дяди',
    eng: 'Those were not my uncle`s books',
    regEng: '/Those (?:were not|weren’t) my uncle’s books/gm'
  },
  {
    rus: 'То были книги моего дяди?',
    eng: 'Were those my uncle`s books?',
    regEng: ''
  },
  {
    rus: 'Чьи книги то были?',
    eng: 'Whose books were those?',
    regEng: ''
  }
]
export default data