// 15-16 > 16.2 > 9
const data = [
  {
    rus: 'Чем занимается та компания? Та компания делает высококачественную мебель',
    eng: 'What does that company do? That company makes high-quality furniture',
    regEng: ''
  },
  {
    rus: 'Она замужем или свободна? Ну, она в очень сложных отношениях',
    eng: 'Is she married or single? Well, she`s in a very complicated relationship',
    regEng: '/Is she married or single\\? Well, she(?: is|[`’\']s) in a very (?:complicated|difficult) relationship/gm'
  },
  {
    rus: 'У кого есть телефонный номер или адрес Джона? Я не уверен, но я думаю, что у меня есть его номер в моей старой записной книжке',
    eng: 'Who has John`s phone number or address? I`m not sure but I think that I have his number in my old notebook',
    regEng: '/Who has John[`’\']s phone number or address\\? I(?: am|[`’\']m) not sure but I think(?: that)? I have his(?: phone)? number in my old notebook/gm'
  },
  {
    rus: 'Моя мечта – жить у моря, в месте, где солнце светит круглый год',
    eng: 'My dream is to live by the sea, in a place where the sun shines all year round',
    regEng: ''
  },
  {
    rus: 'Есть ли какие-нибудь рейсы в Москву? Нет, все рейсы отменены, потому что ветер слишком сильный и слишком опасно лететь',
    eng: 'Are there any flights to Moscow? No, all the flights are cancelled because the wind is too strong and it`s too dangerous to fly',
    regEng: '/Are there any flights to Moscow\\? No, all(?: the)? flights are cancel?led because the wind is too strong and it(?: is|[`’\']s) too dangerous to fly/gm'
  },
  {
    rus: 'С кем ты разговаривала, когда я принимала душ? Я разговаривала со своим парнем',
    eng: 'Who were you talking to when I was having a shower? I was talking to my boyfriend',
    regEng: '/Who were you (?:talking (?:with when I was (?:having|taking) a shower\\? I was talking with|to when I was (?:having|taking) a shower\\? I was talking to)|speaking (?:with|to) when I was (?:having|taking) a shower\\? I was speaking to) my boyfriend/gm'
  },
  {
    rus: 'Сколько книг ты прочитал летом? Я не много книг прочитал, потому что у меня было много работы, чтобы сделать',
    eng: 'How many books did you read in summer? I didn`t read many books because I had a lot of work to do',
    regEng: '/How many books did you read in summer\\? I (?:did not|didn[`’\']t) read many books because I had a lot of work to do/gm'
  },
  {
    rus: 'Не бойтесь! Всё под контролем. Если вам нужна помощь, просто попросите меня',
    eng: 'Don`t be afraid! Everything is under control. If you need help, just ask me!',
    regEng: '/(?:(?:Do not|Don[`’\']t) be afraid! Everything(?: is|[`’\']s) under control. If you need help, just ask me!|(?:Do not|Don[`’\']t) be afraid! Everything(?: is|[`’\']s) under control. Just ask me, if you need help!)/gm'
  }
]
export default data