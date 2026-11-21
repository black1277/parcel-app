// 10-14 > 10.2 > 4
const data = [
  {
    rus: 'На кровати лежат подушки',
    eng: 'There are pillows on the bed',
    regEng: ''
  },
  {
    rus: 'Лежат ли на кровати подушки?',
    eng: 'Are there pillows on the bed?',
    regEng: ''
  },
  {
    rus: 'В комнате будет мебель',
    eng: 'There will be furniture in the room',
    regEng: '/There(?: will|[`’\']ll) be furniture in the room/gm'
  },
  {
    rus: 'Будет ли в комнате мебель?',
    eng: 'Will there be furniture in the room?',
    regEng: ''
  },
  {
    rus: 'На полу лежал ковёр',
    eng: 'There was a carpet on the floor',
    regEng: ''
  },
  {
    rus: 'Лежал ли на полу ковёр?',
    eng: 'Was there a carpet on the floor?',
    regEng: ''
  },
  {
    rus: 'У окна стоит торшер',
    eng: 'There is a stand lamp by the window',
    regEng: '/There(?: is|[`’\']s) a (?:stand|floor) lamp by the window/gm'
  },
  {
    rus: 'Стоит ли у окна торшер?',
    eng: 'Is there a stand lamp by the window?',
    regEng: '/Is there a (?:stand|floor) lamp by the window\\?/gm'
  }
]
export default data