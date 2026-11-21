// 15-16 > 15.4 > 18
const data = [
  {
    rus: 'Сколько масла она обычно кладёт в салат?',
    eng: 'How much oil does she usually put in salad?',
    regEng: ''
  },
  {
    rus: 'Папа будет чинить компьютер, в то время как мама будет убирать квартиру',
    eng: 'Dad will be fixing the computer while Mom is cleaning the flat',
    regEng: '/(?:While (?:(?:(?:Mother|Mom) is|(?:Mother|Mom)[`’\']s) cleaning the (?:apartment|flat), Father|(?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat), Daddy|(?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat), Dad) will be fixing the computer|Father will be fixing the computer while (?:(?:Mother|Mom) is|(?:Mother|Mom)[`’\']s) cleaning the (?:apartment|flat)|Daddy will be fixing the computer while (?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat)|Dad will be fixing the computer while (?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat))/gm'
  },
  {
    rus: 'У него немного багажа с собой',
    eng: 'He has a little luggage with him',
    regEng: ''
  },
  {
    rus: 'Вы верите в эту историю?',
    eng: 'Do you believe in this story?',
    regEng: ''
  },
  {
    rus: 'Пожалуйста, не беспокойся! Она уже идёт',
    eng: 'Please don`t worry! She`s already coming',
    regEng: '/(?:(?:Do not (?:be worried|worry)|Don[`’\']t (?:be worried|worry)), please|Please (?:do not|don[`’\']t) be worried|Please (?:do not|don[`’\']t) worry)! She(?: is|[`’\']s) already coming/gm'
  }
]
export default data