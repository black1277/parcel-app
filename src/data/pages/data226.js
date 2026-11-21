// 10-14 > 14.2 > 6
const data = [
  {
    rus: 'Дедушка читал газету, пока бабушка делала кофе',
    eng: 'Grandpa was reading a newspaper while Grandma was making coffee',
    regEng: '/(?:While (?:Grandmother was making coffee, Grandfather|Grandma was making coffee, Grandpa) was reading a newspaper|(?:Grandfather was reading a newspaper while Grandmother|Grandpa was reading a newspaper while Grandma) was making coffee)/gm'
  },
  {
    rus: 'Дедушка будет читать газету, пока бабушка будет делать кофе',
    eng: 'Grandpa will be reading a newspaper while Grandma is making coffee',
    regEng: '/(?:While (?:Grandmother(?: is|[`’\']s) making coffee, Grandfather|Grandma(?: is|[`’\']s) making coffee, Grandpa) will be reading a newspaper|(?:Grandfather will be reading a newspaper while Grandmother(?: is|[`’\']s)|Grandpa will be reading a newspaper while Grandma(?: is|[`’\']s)) making coffee)/gm'
  },
  {
    rus: 'Дети играли в видео игры, в то время как папа обедал',
    eng: 'The children were playing video games while Dad was having lunch',
    regEng: '/(?:While (?:Father|Daddy|Dad) was having lunch, the (?:children|kids) were playing video games|The (?:children|kids) were playing video games while (?:Father|Daddy|Dad) was having lunch)/gm'
  },
  {
    rus: 'Дети будут играть в видео игры, в то время как папа будет обедать',
    eng: 'The children will be playing video games while Dad is having lunch',
    regEng: '/(?:While Dad is having lunch, the (?:children|kids) will be playing video games|The (?:children|kids) will be playing video games while Dad is having lunch)/gm'
  },
  {
    rus: 'Мы готовились пойти в школу, пока бабушка делала бутерброды для нас',
    eng: 'We were getting ready to go to school while Grandma was making sandwiches for us',
    regEng: '/(?:While (?:Grandmother|Grandma) was making sandwiches for us, we were getting ready to go to school|We were getting ready to go to school while (?:Grandmother|Grandma) was making sandwiches for us)/gm'
  },
  {
    rus: 'Мы будем готовиться пойти в школу, пока бабушка будет делать бутерброды для нас',
    eng: 'We`ll be getting ready to go to school while Grandma is making sandwiches for us',
    regEng: '/(?:While (?:(?:Grandmother|Grandma) is|(?:Grandmother|Grandma)[`’\']s) making sandwiches for us, we(?: will|[`’\']ll) be getting ready to go to school|We(?: will|[`’\']ll) be getting ready to go to school while (?:(?:Grandmother|Grandma) is|(?:Grandmother|Grandma)[`’\']s) making sandwiches for us)/gm'
  },
  {
    rus: 'Папа чинил компьютер, в то время как мама убирала квартиру',
    eng: 'Dad was fixing the computer while Mom was cleaning the flat',
    regEng: '/(?:While (?:Mother was cleaning the (?:apartment|flat), (?:Father|Daddy|Dad)|Mum was cleaning the (?:apartment, (?:Daddy ad|Dad)|flat, (?:Daddy|Dad))|Mom was cleaning the (?:apartment|flat), (?:Father|Daddy|Dad)) was fixing the computer|Father was fixing the computer while (?:Mother|Mom) was cleaning the (?:apartment|flat)|Daddy (?:was fixing the computer while (?:(?:Mother|Mom) was cleaning the apartment|(?:Mother|Mom|Mum) was cleaning the flat)|ad was fixing the computer while Mum was cleaning the apartment)|Dad was fixing the computer while (?:Mother|Mom|Mum) was cleaning the (?:apartment|flat))/gm'
  },
  {
    rus: 'Папа будет чинить компьютер, в то время как мама будет убирать квартиру',
    eng: 'Dad will be fixing the computer while Mom is cleaning the flat',
    regEng: '/(?:While (?:(?:(?:Mother|Mom) is|(?:Mother|Mom)[`’\']s) cleaning the (?:apartment|flat), Father|(?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat), Daddy|(?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat), Dad) will be fixing the computer|Father will be fixing the computer while (?:(?:Mother|Mom) is|(?:Mother|Mom)[`’\']s) cleaning the (?:apartment|flat)|Daddy will be fixing the computer while (?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat)|Dad will be fixing the computer while (?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) cleaning the (?:apartment|flat))/gm'
  }
]
export default data