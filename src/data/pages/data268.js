// 15-16 > 15.6 > 5
const data = [
  {
    rus: 'Сколько раз ты ездила в ту страну в прошлом году? Я ездила туда всего несколько раз',
    eng: 'How many times did you go to that country last year? I went there just a few times',
    regEng: '/How many times did you go to that country last year\\? I (?:went there just|just went there) a few times/gm'
  },
  {
    rus: 'В его тесте очень мало ошибок. Это замечательные новости!',
    eng: 'There are very few mistakes in his test. That`s great news!',
    regEng: '/There are very few mistakes in his test. (?:(?:That|This|It) is|(?:That|It)[`’\']s) great news!/gm'
  },
  {
    rus: 'Шёл ли дождь в семь часов утра в воскресенье? Нет, но шёл снег',
    eng: 'Was it raining at seven o`clock in the morning on Sunday? No, but it was snowing',
    regEng: ''
  },
  {
    rus: 'Где ключ? Я видел его, когда собирался идти на работу',
    eng: 'Where is the key? I saw it when I was getting ready to go to work',
    regEng: ''
  },
  {
    rus: 'У тебя есть какие-нибудь хобби? Чем ты интересуешься? Я интересуюсь музыкой и литературой',
    eng: 'Do you have any hobbies? What are you interested in? I`m interested in music and literature',
    regEng: '/Do you have any hobbies\\? What are you interested in\\? I(?: am|[`’\']m) interested in music and literature/gm'
  }
]
export default data