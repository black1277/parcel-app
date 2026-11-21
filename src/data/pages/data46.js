const data = [
  {
    rus: 'Они поехали домой на поезде месяц назад',
    eng: 'They went home by train a month ago',
    regEng: '/(?:They went home by train a month ago)|(?:A month ago they went home by train)/gm'
  },
  {
    rus: 'Они не поехали домой на поезде месяц назад',
    eng: 'They did not go home by train a month ago',
    regEng: '/(?:They (?:did not|didn’t) go home by train a month ago)|(?:A month ago they (?:did not|didn’t) go home by train)/gm'
  },
  {
    rus: 'Поехали ли они домой на поезде месяц назад?',
    eng: 'Did they go home by train a month ago?'
  },
  {
    rus: 'Когда они поехали домой на поезде?',
    eng: 'When did they go home by train?'
  },
  {
    rus: 'Мы позавтракаем с вами через час',
    eng: 'We will have breakfast with you in an hour',
    regEng: '/(?:(?:We will|We’ll) have breakfast with you in an hour)|(?:In an hour (?:we will|we’ll) have breakfast with you)/gm'
  },
  {
    rus: 'Мы не позавтракаем с вами через час',
    eng: 'We will not have breakfast with you in an hour',
    regEng: '/(?:We (?:will not|won’t) have breakfast with you in an hour)|(?:In an hour we (?:will not|won’t) have breakfast with you)/gm'
  },
  {
    rus: 'Позавтракаем ли мы с вами через час?',
    eng: 'Will we have breakfast with you in an hour?'
  },
  {
    rus: 'С кем мы позавтракаем через час?',
    eng: 'Who will we have breakfast with in an hour?',
    regEng: '/(?:Whom? will we have breakfast with in an hour\\?)|(?:With whom will we have breakfast in an hour\\?)/gm'
  }
]
export default data