const data = [
  {
    rus: 'Мы поедем туда с нашими коллегами через месяц',
    eng: 'We will go there with our colleagues in a month',
    regEng: '/(?:(?:We will|We’ll) go there with our colleagues in a month)|(?:In a month (?:we will|we’ll) go there with our colleagues)/gm'
  },
  {
    rus: 'Мы не поедем туда с нашими коллегами через месяц',
    eng: 'We will not go there with our colleagues in a month',
    regEng: '/(?:We (?:will not|won’t) go there with our colleagues in a month)|(?:In a month we (?:will not|won’t) go there with our colleagues in a month)/gm'
  },
  {
    rus: 'Поедем ли мы туда с нашими коллегами через месяц?',
    eng: 'Will we go there with our colleagues in a month?'
  },
  {
    rus: 'С кем мы поедем туда через месяц?',
    eng: 'Who will we go there with in a month?',
    regEng: '/(?:(?:Who|Whom) will we go there with in a month\\?)|(?:With whom will we go there in a month\\?)/gm'
  },
  {
    rus: 'Она приедет сюда со своей подругой через год',
    eng: 'She will come here with her friend in a year',
    regEng: '/(?:(?:She|She’ll) will come here with her friend in a year)|(?:In a year (?:she|she’ll) will come here with her friend)/gm'
  },
  {
    rus: 'Она не приедет сюда со своей подругой через год',
    eng: 'She will not come here with her friend in a year',
    regEng: '/(?:(?:She will not|She won’t|She’ll not) come here with her friend in a year)|(?:In a year (?:she will not|she won’t|she’ll not) come here with her friend)/gm'
  },
  {
    rus: 'Приедет ли она сюда со своей подругой через год?',
    eng: 'Will she come here with her friend in a year?'
  },
  {
    rus: 'С кем она приедет сюда через год?',
    eng: 'Who will she come here with in a year?',
    regEng: '/(?:(?:Who|Whom) will she come here with in a year\\?)|(?:With whom will she come here in a year\\?)/gm'
  }
]
export default data
