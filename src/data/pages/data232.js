// 15-16 > 15.1 > 6
const data = [
  {
    rus: 'Дедуля будет работать в саду, когда папа придёт',
    eng: 'Grandpa will be working in the garden when Dad comes',
    regEng: '/(?:When (?:Father|Dad) comes, (?:Grandfather|Grandpa) will be working in the garden|(?:Grandfather|Grandpa) will be working in the garden when (?:Father|Dad) comes)/gm'
  },
  {
    rus: 'Мы чистили свои зубы, когда бабуля делала завтрак',
    eng: 'We were brushing our teeth when Grandma was making breakfast',
    regEng: '/(?:(?:Grandmother|Grandma) was making breakfast, we were brushing our teeth when|We were brushing our teeth when (?:Grandmother|Grandma) was making breakfast)/gm'
  },
  {
    rus: 'Она будет ждать меня, пока я буду принимать душ',
    eng: 'She`ll be waiting for me while I`m having a shower',
    regEng: '/(?:While I(?: am having a shower, she will| am taking a shower, she will|[`’\']m having a shower, she[`’\']ll|[`’\']m taking a shower, she[`’\']ll) be waiting for me|(?:She will be waiting for me while I am (?:having|taking) a|She[`’\']ll be waiting for me while I[`’\']m (?:having|taking) a) shower)/gm'
  },
  {
    rus: 'Мама искала ключ, когда я принёс его',
    eng: 'Mom was looking for the key when I brought it',
    regEng: '/(?:When I brought it, (?:Mother|Mom|Mum) was looking for the key|(?:Mother|Mom|Mum) was looking for the key when I brought it)/gm'
  },
  {
    rus: 'Я буду идти на работу, когда ты позвонишь мне',
    eng: 'I`ll be going to work when you call me',
    regEng: '/(?:When you call me, I(?: will|[`’\']ll) be going to work|I(?: will|[`’\']ll) be going to work when you call me)/gm'
  },
  {
    rus: 'Они готовились пойти домой, когда он разговаривал со своим другом',
    eng: 'They were getting ready to go home when he was talking to his friend',
    regEng: '/(?:When he was (?:speaking (?:with|to)|talking (?:with|to)) his friend, they were getting ready to go home|They were getting ready to go home when he was (?:speaking (?:with|to)|talking (?:with|to)) his friend)/gm'
  },
  {
    rus: 'Я буду смотреть на тебя, пока ты будешь спать',
    eng: 'I`ll be looking at you while you`re sleeping',
    regEng: '/(?:While you(?: are sleeping|[`’\']re sleeping| are asleep|[`’\']re asleep), I(?: will|[`’\']ll) be looking at you|I(?: will|[`’\']ll) be looking at you while you(?: are|[`’\']re) sleeping|I(?: will|[`’\']ll) be looking at you while you(?: are|[`’\']re) asleep)/gm'
  },
  {
    rus: 'Он кушал её торт, когда она увидела его',
    eng: 'He was eating her cake when she saw him',
    regEng: '/(?:When she saw him, he was eating her cake|He was eating her cake when she saw him)/gm'
  }
]
export default data