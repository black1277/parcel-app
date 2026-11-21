// 17-20 > 17.4 > 1
const data = [
  {
    rus: 'Я не иду работу завтра, потому что я болею О, поправляйся скорее!',
    eng: 'I`m not going to work tomorrow because I`m sick. Oh, get well soon!',
    regEng: '/I(?: am|[`’\']m) not going to work tomorrow because I(?: am sick.|[`’\']m sick.| am ill.|[`’\']m ill.) Oh, get well soon!/gm'
  },
  {
    rus: 'Сложно проснуться рано утром, если ложишься спать поздно',
    eng: 'It`s difficult to wake up early in the morning if you go to bed late',
    regEng: '/(?:If you go to (?:sleep|bed) late, it(?: is|[`’\']s) difficult to wake up early in the morning|It(?: is|[`’\']s) difficult to wake up early in the morning if you go to (?:sleep|bed) late)/gm'
  },
  {
    rus: 'У кого есть телефонный номер или адрес Джона? Я не уверен, но я думаю, что у меня есть его номер в моей старой записной книжке',
    eng: 'Who has John`s phone number or address? I`m not sure but I think that I have his number in my old notebook',
    regEng: '/Who has John[`’\']s phone number or address\\? I(?: am|[`’\']m) not sure but I think(?: that)? I have his(?: phone)? number in my old notebook/gm'
  },
  {
    rus: 'Он выглядит ужасно вечерами, потому что он обычно чувствует себя очень уставшим после работы',
    eng: 'He looks terrible in the evenings because he usually feels very tired after work',
    regEng: '/He looks (?:terrible|horrible|awful) in the evenings because he usually feels very tired after work/gm'
  },
  {
    rus: 'Когда твой поезд уезжает? Он уезжает через десять минут',
    eng: 'When does your train leave? It leaves in ten minutes',
    regEng: ''
  }
]
export default data