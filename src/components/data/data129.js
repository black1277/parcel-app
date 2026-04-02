// 10-14 > 10.1 > 7
const data = [
  {
    rus: 'В доме есть какие-то люди',
    eng: 'There are some people in the house',
    regEng: ''
  },
  {
    rus: 'Есть ли в доме какие-нибудь люди?',
    eng: 'Are there any people in the house?',
    regEng: ''
  },
  {
    rus: 'В доме нет никаких людей',
    eng: 'There aren`t any people in the house',
    regEng: '/There (?:are not|aren`t) any people in the house/gm'
  },
  {
    rus: 'В доме нет никаких людей',
    eng: 'There are no people in the house',
    regEng: ''
  },
  {
    rus: 'В бутылке было немного воды',
    eng: 'There was some water in the bottle',
    regEng: ''
  },
  {
    rus: 'Было ли в бутылке сколько-нибудь воды?',
    eng: 'Was there any water in the bottle?',
    regEng: ''
  },
  {
    rus: 'В бутылке не было никакой воды',
    eng: 'There wasn`t any water in the bottle',
    regEng: '/There (?:was not|wasn`t) any water in the bottle/gm'
  },
  {
    rus: 'В бутылке не было никакой воды',
    eng: 'There was no water in the bottle',
    regEng: ''
  }
]
export default data