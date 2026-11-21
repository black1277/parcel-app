// 10-14 > 13.1 > 9
const data = [
  {
    rus: 'Что ты обычно носишь? Я обычно ношу юбки и блузки',
    eng: 'What do you usually wear? I usually wear skirts and blouses',
    regEng: ''
  },
  {
    rus: 'Что на тебе надето сегодня? Сегодня на мне надеты брюки и футболку',
    eng: 'What are you wearing today? Today I`m wearing trousers and a T-shirt',
    regEng: '/What are you wearing today\\? (?:Today I(?: am|[`’\']m) wearing (?:trousers|pants) and a T-shirt|I(?: am|[`’\']m) wearing (?:trousers|pants) and a T-shirt today)/gm'
  },
  {
    rus: 'Что они посмотрят завтра? Они посмотрят новый фильм',
    eng: 'What will they watch tomorrow? They`ll watch a new film',
    regEng: '/What will they watch tomorrow\\? They(?: will|[`’\']ll) watch a new (?:movie|film)/gm'
  },
  {
    rus: 'Что они будут смотреть между шестью и восьмю часами вечера завтра? Они будут смотреть своё любимое шоу',
    eng: 'What will they be watching between six and eight o`clock in the evening tomorrow? They`ll be watching their favourite show',
    regEng: '/What will they be watching between six and eight o[`’\']clock in the evening tomorrow\\? They(?: will|[`’\']ll) be watching their favou?rite show/gm'
  },
  {
    rus: 'Что она часто слушает? Она часто слушает поп музыку',
    eng: 'What does she often listen to? She often listens to pop music',
    regEng: ''
  },
  {
    rus: 'Что она слушает сегодня? Сегодня она слушает рок музыку',
    eng: 'What is she listening to today? Today she`s listening to rock music',
    regEng: '/What is she listening to today\\? (?:Today she(?: is|[`’\']s) listening to rock music|She(?: is|[`’\']s) listening to rock music today)/gm'
  },
  {
    rus: 'Куда вы ходили вчера? Мы ходили в университет',
    eng: 'Where did you go yesterday? We went to university',
    regEng: ''
  },
  {
    rus: 'Куда вы шли в девять часов вечера вчера? Мы шли домой',
    eng: 'Where were you going at nine o`clock in the evening yesterday? We were going home',
    regEng: '/Where were you going at nine o[`’\']clock (?:in the evening|at night) yesterday\\? We were going home/gm'
  }
]
export default data