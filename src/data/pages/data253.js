// 15-16 > 15.4 > 10
const data = [
  {
    rus: 'Куда она будет идти завтра в семь часов утра? Она будет идти на работу',
    eng: 'Where will she be going tomorrow at seven o`clock in the morning? She`ll be going to work',
    regEng: '/Where will she be going tomorrow at seven o[`’\']clock in the morning\\? She(?: will|[`’\']ll) be going to work/gm'
  },
  {
    rus: 'Бабушка смотрела телевизор, пока дедушка убирал дом',
    eng: 'Grandma was watching TV while Grandpa was cleaning the house',
    regEng: '/(?:Grandmother was watching TV while Grandfather|Grandma was watching TV while Grandpa) was cleaning the house/gm'
  },
  {
    rus: 'Когда я тренируюсь, у меня обычно много энергии',
    eng: 'When I exercise, I usually have a lot of energy',
    regEng: '/When I exercise, I usually have (?:a lot|lots) of energy/gm'
  },
  {
    rus: 'Извини, но в твоих словах не много логики и смысла',
    eng: 'I`m sorry but there isn`t much logic and sense in your words',
    regEng: '/I(?: am|[`’\']m) sorry but there(?: is not a lot of| isn[`’\']t a lot of|[`’\']s not a lot of| is not lots of| isn[`’\']t lots of|[`’\']s not lots of| is not much| isn[`’\']t much|[`’\']s not much) logic and sense in your words/gm'
  },
  {
    rus: 'Позвони мне, пожалуйста. Я начинаю нервничать',
    eng: 'Call me, please. I`m getting nervous',
    regEng: '/(?:(?:Call me, please. I(?: am|[`’\']m)|Please call me. I(?: am|[`’\']m)) starting to get|(?:Call me, please. I(?: am|[`’\']m)|Please call me. I(?: am|[`’\']m)) getting) nervous/gm'
  }
]
export default data