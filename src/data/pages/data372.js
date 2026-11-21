// 17-20 > 20.1 > 11
const data = [
  {
    rus: 'Я бывал в том месте три раза до настоящего времени',
    eng: 'I`ve been to that place three times so far',
    regEng: '/I(?: have|[`’\']ve) been to that place three times so far/gm'
  },
  {
    rus: 'Я ездил в то место три раза в прошлом году',
    eng: 'I went to that place three times last year',
    regEng: ''
  },
  {
    rus: 'Она встречалась со своими родственниками вчера',
    eng: 'She met with her relatives yesterday',
    regEng: '/She (?:met with|saw) her relatives yesterday/gm'
  },
  {
    rus: 'Она встречалась со своими родственниками сегодня',
    eng: 'She`s met with her relatives today',
    regEng: '/(?:She has (?:seen|met)|She[`’\']s (?:seen|met)) with her relatives today/gm'
  },
  {
    rus: 'Ты когда-нибудь слышал об этом факте? Нет, я никогда о нём не слышал',
    eng: 'Have you ever heard about this fact? No, I`ve never heard about it',
    regEng: '/Have you ever heard about this fact\\? No, I(?: have|[`’\']ve) never heard about it/gm'
  },
  {
    rus: 'Когда ты слышал об этом факте? Я слышал о нём на прошлой неделе',
    eng: 'When did you hear about this fact? I heard about it last week',
    regEng: ''
  },
  {
    rus: 'Они сделали много важных вещей в прошлом месяце',
    eng: 'They did a lot of important things last month',
    regEng: '/They did (?:a lot of|lots of|many) important things last month/gm'
  },
  {
    rus: 'Они сделали много важных вещей в этом месяце',
    eng: 'They`ve done a lot of important things this month',
    regEng: '/They(?: have|[`’\']ve) done (?:a lot of|lots of|many) important things this month/gm'
  },
  {
    rus: 'Моя дочь ездила туда много раз в детстве',
    eng: 'My daughter went there many times in her childhood',
    regEng: '/My daughter went there many times in (?:her )?childhood/gm'
  },
  {
    rus: 'Моя дочь не бывала там с детства',
    eng: 'My daughter hasn`t been there since her childhood',
    regEng: '/My daughter (?:has not|hasn[`’\']t) been there since(?: her)? childhood/gm'
  }
]
export default data