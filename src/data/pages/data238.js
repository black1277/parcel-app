// 15-16 > 15.2 > 4
const data = [
  {
    rus: 'Она плакала, когда мы увидели её',
    eng: 'She was crying when we saw her',
    regEng: '/(?:When we saw her, she was crying|She was crying when we saw her)/gm'
  },
  {
    rus: 'Дети будут читать книги, пока папа будет чинить компьютер',
    eng: 'The children will be reading books while Dad is fixing the computer',
    regEng: '/(?:While (?:(?:Father|Dad) is|(?:Father|Dad)[`’\']s) fixing the computer, the (?:children|kids) will be reading books|The (?:children|kids) will be reading books while (?:(?:Father|Dad) is|(?:Father|Dad)[`’\']s) fixing the computer)/gm'
  },
  {
    rus: 'Мы несли его сумки, когда он ел бутерброд',
    eng: 'We were carrying his bags when he was eating a sandwich',
    regEng: '/(?:When he was eating a sandwich, we were carrying his bags|We were carrying his bags when he was eating a sandwich)/gm'
  },
  {
    rus: 'Я буду завтракать, когда ты проснёшься',
    eng: 'I`ll be having breakfast when you wake up',
    regEng: '/(?:When you wake up, I(?: will|[`’\']ll) be having breakfast|I(?: will|[`’\']ll) be having breakfast when you wake up)/gm'
  },
  {
    rus: 'Она будет готовиться к тесту, в то время как они будут смотреть телевизор',
    eng: 'She`ll be getting ready for the test while they`re watching TV',
    regEng: '/(?:While they[`’\']re watching TV, she(?: will|[`’\']ll) be (?:getting ready|preparing) for (?:the|a) test|She(?: will|[`’\']ll) be (?:getting ready|preparing) for (?:the|a) test while they[`’\']re watching TV)/gm'
  },
  {
    rus: 'Мама убирала квартиру, когда гости прибыли',
    eng: 'Mom was cleaning the flat when the guests arrived',
    regEng: '/(?:When the guests arrived, (?:Mother|Mom|Mum) was cleaning the apartment|(?:Mother|Mom|Mum) was cleaning the (?:apartment|flat) when the guests arrived|When the guests arrived, (?:Mother|Mom|Mum) was cleaning the flat)/gm'
  },
  {
    rus: 'Дедушка будет готовить суп на обед, когда бабушка придёт домой',
    eng: 'Grandpa will be making soup for lunch when Grandma comes home',
    regEng: '/(?:When (?:Grandmother comes, home Grandfather will be (?:cooking|making)|Grandma comes home, Grandpa will be (?:cooking|making)) soup for lunch|(?:Grandfather will be (?:cooking|making) soup for lunch when Grandmother|Grandpa will be (?:cooking|making) soup for lunch when Grandma) comes home)/gm'
  },
  {
    rus: 'Я смотрел на свою дочь, когда она танцевала',
    eng: 'I was looking at my daughter when she was dancing',
    regEng: ''
  }
]
export default data