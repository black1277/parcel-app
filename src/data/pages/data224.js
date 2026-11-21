// 10-14 > 14.2 > 4
const data = [
  {
    rus: 'Дети будут учиться в восемь часов вечера завтра',
    eng: 'The children will be studying at eight o`clock in the evening tomorrow',
    regEng: '/The children will be studying (?:at eight o[`’\']clock in the evening tomorrow|tomorrow at eight o[`’\']clock in the evening)/gm'
  },
  {
    rus: 'Дети не будут учиться в восемь часов вечера завтра',
    eng: 'The children won`t be studying at eight o`clock in the evening tomorrow',
    regEng: '/The children (?:(?:will not|won[`’\']t) be studying at eight o[`’\']clock in the evening tomorrow|(?:will not|won[`’\']t) be studying tomorrow at eight o[`’\']clock in the evening)/gm'
  },
  {
    rus: 'Будут ли дети учиться в восемь часов вечера завтра?',
    eng: 'Will the children be studying at eight o`clock in the evening tomorrow?',
    regEng: '/Will the children be studying (?:at eight o[`’\']clock in the evening tomorrow\\?|tomorrow at eight o[`’\']clock in the evening\\?)/gm'
  },
  {
    rus: 'Что дети будут делать в восемь часов вечера завтра?',
    eng: 'What will the children be doing at eight o`clock in the evening tomorrow?',
    regEng: '/What will the children be doing (?:at eight o[`’\']clock in the evening tomorrow\\?|tomorrow at eight o[`’\']clock in the evening\\?)/gm'
  },
  {
    rus: 'Я чинил свою машину в одиннадцать часов утра вчера',
    eng: 'I was fixing my car at eleven o`clock in the morning yesterday',
    regEng: '/I was (?:(?:repairing|fixing) my car at eleven o[`’\']clock in the morning yesterday|(?:repairing|fixing) my car yesterday at eleven o[`’\']clock in the morning)/gm'
  },
  {
    rus: 'Я не чинил свою машину в одиннадцать часов утра вчера',
    eng: 'I wasn`t fixing my car at eleven o`clock in the morning yesterday',
    regEng: '/I (?:(?:was not (?:repairing|fixing)|wasn[`’\']t (?:repairing|fixing)) my car at eleven o[`’\']clock in the morning yesterday|(?:was not (?:repairing|fixing)|wasn[`’\']t (?:repairing|fixing)) my car yesterday at eleven o[`’\']clock in the morning)/gm'
  },
  {
    rus: 'Чинил ли я свою машину в одиннадцать часов утра вчера?',
    eng: 'Was I fixing my car at eleven o`clock in the morning yesterday?',
    regEng: '/Was I (?:(?:repairing|fixing) my car at eleven o[`’\']clock in the morning yesterday\\?|(?:repairing|fixing) my car yesterday at eleven o[`’\']clock in the morning\\?)/gm'
  },
  {
    rus: 'Что я делал в одиннадцать часов утра вчера?',
    eng: 'What was I doing at eleven o`clock in the morning yesterday?',
    regEng: '/What was I doing (?:at eleven o[`’\']clock in the morning yesterday\\?|yesterday at eleven o[`’\']clock in the morning\\?)/gm'
  }
]
export default data