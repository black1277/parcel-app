// 10-14 > 10.1 > 8
const data = [
  {
    rus: 'На столе будут кое-какие тарелки',
    eng: 'There will be some plates on the table',
    regEng: '/There(?: will|`ll) be some plates on the table/gm'
  },
  {
    rus: 'Будут ли на столе какие-нибудь тарелки?',
    eng: 'Will there be any plates on the table?',
    regEng: ''
  },
  {
    rus: 'На столе не будет никаких тарелок',
    eng: 'There won`t be any plates on the table',
    regEng: '/There (?:will not|won`t) be any plates on the table/gm'
  },
  {
    rus: 'На столе не будет никаких тарелок',
    eng: 'There will be no plates on the table',
    regEng: '/There(?: will|`ll) be no plates on the table/gm'
  },
  {
    rus: 'Под деревом было сколько-то яблок',
    eng: 'There were some apples under the tree',
    regEng: ''
  },
  {
    rus: 'Было ли сколько-нибудь яблок под деревом?',
    eng: 'Were there any apples under the tree?',
    regEng: ''
  },
  {
    rus: 'Под деревом не было никаких яблок',
    eng: 'There weren`t any apples under the tree',
    regEng: '/There (?:were not|weren`t) any apples under the tree/gm'
  },
  {
    rus: 'Под деревом не было никаких яблок',
    eng: 'There were no apples under the tree',
    regEng: ''
  }
]
export default data