// 06-09 > 6.2 > 4
const data = [
  {
    rus: 'Она будет с ними в следующем месяце',
    eng: 'She will be with them next month',
    regEng: '/(?:(?:She will|She’ll) be with them next month)|(?:Next month (?:she will|she’ll) be with them)/gm'
  },
  {
    rus: 'Она не будет с ними в следующем месяце',
    eng: 'She will not be with them next month',
    regEng: '/(?:(?:She will|She’ll) not be with them next month)|(?:She won’t be with them next month)|(?:Next month (?:she will|she’ll) not be with them)|(?:Next month she won’t be with them)/gm'
  },
  {
    rus: 'Будет ли она с ними в следующем месяце?',
    eng: 'Will she be with them next month?'
  },
  {
    rus: 'С кем она будет в следующем месяце?',
    eng: 'Who will she be with next month?',
    regEng: '/(?:Whom? will she be with next month\\?)|(?:With whom will she be next month\\?)/gm'
  },
  {
    rus: 'Он спешит',
    eng: 'He is in a hurry',
    regEng: '/(?:(?:He is|He’s) in a hurry)/gm'
  },
  {
    rus: 'Он не спешит',
    eng: 'He is not in a hurry',
    regEng: '/(?:(?:He is|He’s) not in a hurry)|(?:He isn’t in a hurry)/gm'
  },
  {
    rus: 'Спешит ли он?',
    eng: 'Is he in a hurry?'
  },
  {
    rus: 'Почему он спешит?',
    eng: 'Why is he in a hurry?'
  }
]
export default data