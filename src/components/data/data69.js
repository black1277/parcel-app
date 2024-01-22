// 06-09 > 7.1 > 8
const data = [
  {
    rus: 'То были документы её отца',
    eng: 'Those were her father`s documents',
    regEng: '/Those were her (?:father`s|dad`s) documents/gm'
  },
  {
    rus: 'То не были документы её отца',
    eng: 'Those were not her father`s documents',
    regEng: '/Those (?:were not|weren’t) her (?:father`s|dad`s) documents/gm'
  },
  {
    rus: 'То были документы её отца?',
    eng: 'Were those her father`s documents?',
    regEng: '/Were those her (?:father`s|dad`s) documents\\?/gm'
  },
  {
    rus: 'Чьи документы то были?',
    eng: 'Whose documents were those?',
    regEng: ''
  },
  {
    rus: 'То было платье его матери',
    eng: 'That was his mother`s dress',
    regEng: '/That was his (?:mother`s|mom`s|mum`s) dress/gm'
  },
  {
    rus: 'То не было платье его матери',
    eng: 'That was not his mother`s dress',
    regEng: '/That (?:was not|wasn’t) his (?:mother`s|mom`s|mum`s) dress/gm'
  },
  {
    rus: 'То было платье его матери?',
    eng: 'Was that his mother`s dress?',
    regEng: '/Was that his (?:mother`s|mom`s|mum`s) dress\\?/gm'
  },
  {
    rus: 'Чьё платье то было?',
    eng: 'Whose dress was that?',
    regEng: ''
  }
]
export default data