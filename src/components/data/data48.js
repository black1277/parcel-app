const data = [
  {
    rus: 'Она поедет туда со своей сестрой через месяц',
    eng: 'She will go there with her sister in a month',
    regEng: '/(?:(?:She will|She’ll) go there with her sister in a month)|(?:In a month (?:she will|she’ll) go there with her sister)/gm'
  },
  {
    rus: 'Она не поедет туда со своей сестрой через месяц',
    eng: 'She will not go there with her sister in a month',
    regEng: '/(?:She (?:will not|won’t) go there with her sister in a month)|(?:In a month she (?:will not|won’t) go there with her sister)/gm'
  },
  {
    rus: 'Поедет ли она туда со своей сестрой через месяц?',
    eng: 'Will she go there with her sister in a month?'
  },
  {
    rus: 'С кем она поедет туда через месяц?',
    eng: 'Who will she go there with in a month?',
    regEng: '/(?:Whom? will she go there with in a month\\?)|(?:With whom will she go there in a month\\?)/gm'
  },
  {
    rus: 'Он всегда ждёт этих вечеринок',
    eng: 'He always waits for these parties'
  },
  {
    rus: 'Он не всегда ждёт этих вечеринок',
    eng: 'He does not always wait for these parties',
    regEng: '/(?:He (?:does not|doesn’t) always wait for these parties)/gm'
  },
  {
    rus: 'Ждёт ли он всегда этих вечеринок?',
    eng: 'Does he always wait for these parties?'
  },
  {
    rus: 'Чего он всегда ждёт?',
    eng: 'What does he always wait for?'
  }
]
export default data