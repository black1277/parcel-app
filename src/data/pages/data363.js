// 17-20 > 19.4 > 16
const data = [
  {
    rus: 'Мои занятия заканчиваются в два часа, а затем я обедаю со своей сестрой',
    eng: 'My classes finish at two o`clock and then I`m having lunch with my sister',
    regEng: '/My classes finish at two o[`’\']clock and (?:then I(?: am|[`’\']m) having lunch with my sister|I(?: am|[`’\']m) having lunch with my sister then)/gm'
  },
  {
    rus: 'Чем занимается та компания? Та компания делает высококачественную мебель',
    eng: 'What does that company do? That company makes high-quality furniture',
    regEng: ''
  },
  {
    rus: 'Ты поможешь мне решить эту проблему? Не беспокойся. Тебе не нужно ничего делать вообще. Я позабочусь обо всём',
    eng: 'Will you help me solve this problem? Don`t worry. You don`t need to do anything at all. I`ll take care of everything!',
    regEng: '/Will you help me (?:(?:(?:(?:to )?solve this problem\\? Do not be worried.|(?:to )?solve this problem\\? Do not worry.) You do not need to do anything|(?:(?:to )?solve this problem\\? Do not be worried.|(?:to )?solve this problem\\? Do not worry.) You need to do nothing) at all. I will|(?:(?:(?:to )?solve this problem\\? Don[`’\']t be worried.|(?:to )?solve this problem\\? Don[`’\']t worry.) You don[`’\']t need to do anything|(?:(?:to )?solve this problem\\? Don[`’\']t be worried.|(?:to )?solve this problem\\? Don[`’\']t worry.) You need to do nothing) at all. I[`’\']ll) take care of everything!/gm'
  },
  {
    rus: 'С этим устройством что-то неисправно. Тебе лучше проверить его',
    eng: 'There`s something wrong with this device. It`s better for you to check it',
    regEng: '/There(?: is|[`’\']s) something wrong with this device. It(?: is|[`’\']s) better for you to check it/gm'
  },
  {
    rus: 'Я так хочу пить. Я собираюсь купить воды. Но магазин открывается только через два часа',
    eng: 'I`m so thirsty. I`m going to buy some water. But the shop only opens in two hours',
    regEng: '/(?:I am so thirsty. I(?: am going to buy some water. But the shop only opens in| am going to buy some water. But the shop opens only in| am going to buy some water. But the shop opens in only|[`’\']m going to buy some water. But the shop only opens in|[`’\']m going to buy some water. But the shop opens only in|[`’\']m going to buy some water. But the shop opens in only) two hours|I[`’\']m so thirsty. I(?: am going to buy some water. But the shop only opens in| am going to buy some water. But the shop opens only in| am going to buy some water. But the shop opens in only|[`’\']m going to buy some water. But the shop only opens in|[`’\']m going to buy some water. But the shop opens only in|[`’\']m going to buy some water. But the shop opens in only) two hours)/gm'
  }
]
export default data