// 10-14 > 11.1 > 4
const data = [
  {
    rus: 'С этим устройством есть некоторые проблемы',
    eng: 'There are some problems with this device',
    regEng: ''
  },
  {
    rus: 'Есть ли какие-нибудь проблемы с этим устройством?',
    eng: 'Are there any problems with this device?',
    regEng: ''
  },
  {
    rus: 'С этим устройством нет никаких проблем',
    eng: 'There aren`t any problems with this device',
    regEng: '/There (?:are not|aren[`’\']t) any problems with this device/gm'
  },
  {
    rus: 'С этим устройством нет никаких проблем',
    eng: 'There are no problems with this device',
    regEng: ''
  },
  {
    rus: 'Для неё были кое-какие сообщения',
    eng: 'There were some messages for her',
    regEng: ''
  },
  {
    rus: 'Были ли для неё какие-нибудь сообщения?',
    eng: 'Were there any messages for her?',
    regEng: ''
  },
  {
    rus: 'Для неё не было никаких сообщений',
    eng: 'There weren`t any messages for her',
    regEng: '/There (?:were not|weren[`’\']t) any messages for her/gm'
  },
  {
    rus: 'Для неё не было никаких сообщений',
    eng: 'There were no messages for her',
    regEng: ''
  }
]
export default data