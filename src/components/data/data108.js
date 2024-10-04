// 06-09 > 9.2 > 7
const data = [
  {
    rus: 'На полу стояли бутылки',
    eng: 'There were bottles on the floor',
    regEng: ''
  },
  {
    rus: 'Стояли ли на полу бутылки?',
    eng: 'Were there bottles on the floor?',
    regEng: ''
  },
  {
    rus: 'В комнате будет диван',
    eng: 'There will be a sofa in the room',
    regEng: '/(?:(?:There will|There’ll) be a (?:sofa|couch) in the room)/gm'
  },
  {
    rus: 'Будет ли в комнате диван?',
    eng: 'Will there be a sofa in the room?',
    regEng: '/(?:Will there be a (?:sofa|couch) in the room\\?)/gm'
  },
  {
    rus: 'На потолке висит лампа',
    eng: 'There is a lamp on the ceiling',
    regEng: '/(?:(?:There is|There’s) a lamp on the ceiling)/gm'
  },
  {
    rus: 'Висит ли лампа на потолке?',
    eng: 'Is there a lamp on the ceiling?',
    regEng: ''
  },
  {
    rus: 'Под кроватью стоят сумки',
    eng: 'There are bags under the bed',
    regEng: ''
  },
  {
    rus: 'Стоят ли сумки под кроватью?',
    eng: 'Are there bags under the bed?',
    regEng: ''
  }
]
export default data