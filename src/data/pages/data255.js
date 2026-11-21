// 15-16 > 15.4 > 12
const data = [
  {
    rus: 'Что они делали в восемь часов утра?',
    eng: 'What were they doing at eight o`clock in the morning?',
    regEng: ''
  },
  {
    rus: 'Сколько гостей твои родители пригласили на вечеринку вчера?',
    eng: 'How many guests did your parents invite to the party yesterday?',
    regEng: ''
  },
  {
    rus: 'Я не завтракал в семь часов утра',
    eng: 'I wasn`t having breakfast at seven o`clock in the morning',
    regEng: '/I (?:was not|wasn[`’\']t) having breakfast at seven o[`’\']clock in the morning/gm'
  },
  {
    rus: 'Я обычно много не крашусь. Я предпочитаю естественную красоту',
    eng: 'I don`t usually wear much make-up. I prefer natural beauty',
    regEng: '/I (?:do not|don[`’\']t) usually wear (?:a lot of|lots of|much) make-up. I prefer natural beauty/gm'
  },
  {
    rus: 'Она не слышит меня',
    eng: 'She doesn`t hear me',
    regEng: '/She (?:does not|doesn[`’\']t) hear me/gm'
  }
]
export default data