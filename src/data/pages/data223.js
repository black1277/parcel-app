// 10-14 > 14.2 > 3
const data = [
  {
    rus: 'Не разговаривай! Малыш спит',
    eng: 'Don`t talk! The baby is sleeping',
    regEng: '/(?:Do not|Don[`’\']t) talk! The baby is sleeping/gm'
  },
  {
    rus: 'Подождите нас! Мы идём!',
    eng: 'Wait for us! We`re coming!',
    regEng: '/Wait for us! We(?:[`’\']re coming!| are coming)/gm'
  },
  {
    rus: 'Давайте поможем ей. Она пытается открыть дверь',
    eng: 'Let`s help her. She`s trying to open the door',
    regEng: '/Let(?: us|[`’\']s) help her. She(?: is|[`’\']s) trying to open the door/gm'
  },
  {
    rus: 'Закрой окно! Я начинаю замерзать',
    eng: 'Close the window! I`m getting cold',
    regEng: '/Close the window! I(?: am|[`’\']m) getting cold/gm'
  },
  {
    rus: 'Посмотри! Мальчики играют в футбол',
    eng: 'Look! The boys are playing football',
    regEng: ''
  },
  {
    rus: 'Не беспокойся! Я несу твою сумку',
    eng: 'Don`t worry! I`m carrying your bag',
    regEng: '/(?:Do not (?:be worried|worry)|Don[`’\']t (?:be worried|worry))! I(?: am|[`’\']m) carrying your bag/gm'
  },
  {
    rus: 'Давайте послушаем его! Он пытается объяснить ситуацию',
    eng: 'Let`s listen to him! He`s trying to explain the situation',
    regEng: '/Let(?: us|[`’\']s) listen to him! He(?: is|[`’\']s) trying to explain the situation/gm'
  },
  {
    rus: 'Помоги мне! Я ищу свой ключ',
    eng: 'Help me! I`m looking for my key',
    regEng: '/Help me! I(?: am searching|[`’\']m searching| am looking|[`’\']m looking) for my key/gm'
  }
]
export default data