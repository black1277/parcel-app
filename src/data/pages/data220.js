// 10-14 > 14.1 > 10
const data = [
  {
    rus: 'Мама делала завтрак, в то время как я учился',
    eng: 'Mom was making breakfast while I was studying',
    regEng: '/(?:Mother|Mom|Mum) was making breakfast while I was studying/gm'
  },
  {
    rus: 'Мама будет делать завтрак, в то время как я буду учиться',
    eng: 'Mom will be making breakfast while I`m studying',
    regEng: '/(?:Mother|Mom|Mum) will be making breakfast while I(?: am|[`’\']m) studying/gm'
  },
  {
    rus: 'Папа принимал душ, пока мы делали обед',
    eng: 'Dad was having a shower while we were making lunch',
    regEng: '/(?:Father|Dad) was (?:having|taking) a shower while we were making lunch/gm'
  },
  {
    rus: 'Папа будет принимать душ, пока мы будем делать обед',
    eng: 'Dad will be having a shower while we`re making lunch',
    regEng: '/(?:Father|Dad) will be (?:having|taking) a shower while we(?: are|[`’\']re) making lunch/gm'
  },
  {
    rus: 'Дети играли в саду, в то время как мама готовилась идти на работу',
    eng: 'The children were playing in the garden while Mom was getting ready to go to work',
    regEng: '/The children were playing in the garden while (?:Mother|Mom|Mum) was getting ready to go to work/gm'
  },
  {
    rus: 'Дети будут играть в саду, в то время как мама будет готовиться идти на работу',
    eng: 'The children will be playing in the garden while Mom is getting ready to go to work',
    regEng: '/The children will be playing in the garden while (?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) getting ready to go to work/gm'
  },
  {
    rus: 'Бабушка смотрела телевизор, пока дедушка убирал дом',
    eng: 'Grandma was watching TV while Grandpa was cleaning the house',
    regEng: '/(?:Grandmother was watching TV while Grandfather|Grandma was watching TV while Grandpa) was cleaning the house/gm'
  },
  {
    rus: 'Бабушка будет смотреть телевизор, пока дедушка будет убирать дом',
    eng: 'Grandma will be watching TV while Grandpa is cleaning the house',
    regEng: '/(?:Grandmother will be watching TV while Grandfather(?: is|[`’\']s)|Grandma will be watching TV while Grandpa(?: is|[`’\']s)) cleaning the house/gm'
  }
]
export default data