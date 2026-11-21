// 10-14 > 10.2 > 6
const data = [
  {
    rus: 'Под диваном будут стоять какие-то ящики',
    eng: 'There will be some boxes under the sofa',
    regEng: '/There will be some boxes under the (?:couch|sofa)/gm'
  },
  {
    rus: 'Будут ли под диваном стоять какие-то ящики?',
    eng: 'Will there be any boxes under the sofa?',
    regEng: '/Will there be any boxes under the (?:couch|sofa)\\?/gm'
  },
  {
    rus: 'Под диваном не будет никаких ящиков',
    eng: 'There won`t be any boxes under the sofa',
    regEng: '/There (?:will not|won[`’\']t) be any boxes under the (?:couch|sofa)/gm'
  },
  {
    rus: 'Под диваном не будет никаких ящиков',
    eng: 'There will be no boxes under the sofa',
    regEng: '/There will be no boxes under the (?:couch|sofa)/gm'
  },
  {
    rus: 'В чайнике было немного чая',
    eng: 'There was some tea in the teapot',
    regEng: ''
  },
  {
    rus: 'Было ли в чайнике сколько-нибудь чая?',
    eng: 'Was there any tea in the teapot?',
    regEng: ''
  },
  {
    rus: 'В чайнике не было нисколько чая',
    eng: 'There wasn`t any tea in the teapot',
    regEng: '/There (?:was not|wasn[`’\']t) any tea in the teapot/gm'
  },
  {
    rus: 'В чайнике не было нисколько чая',
    eng: 'There was no tea in the teapot',
    regEng: ''
  }
]
export default data