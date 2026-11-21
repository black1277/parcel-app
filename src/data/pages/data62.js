
const data = [
  {
    rus: 'Видели ли вы своих друзей в прошлом месяце?',
    eng: 'Did you see your friends last month?'
  },
  {
    rus: 'Знаешь ли ты её имя?',
    eng: 'Do you know her name?'
  },
  {
    rus: 'Когда они принесут эти вещи сюда?',
    eng: 'When will they bring these things here?'
  },
  {
    rus: 'Я хочу, чтобы мы пошли в это место вместе в четверг',
    eng: 'I want us to go to this place together on Thursday',
    regEng: '/(?:I want us to go to this place together on Thursday)|(?:On Thursday I want is to go to this place together)/gm'
  },
  {
    rus: 'У этого мужчины такой огромный нос',
    eng: 'This man has such a huge nose'
  },
  {
    rus: 'Он хочет, чтобы она поужинала с ним',
    eng: 'He wants her to have dinner with him'
  },
  {
    rus: 'С кем нам нужно поговорить?',
    eng: 'Who do we need to talk to?',
    regEng: '/(?:Whom? do we need to (?:talk|speak) (?:to|with)\\?)|(?:(?:To|With) whom do we need to (?:talk|speak)\\?)/gm'
  }
]
export default data
