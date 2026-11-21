// 17-20 > 17.4 > 12
const data = [
  {
    rus: 'Сегодня у меня нет никаких важных дел, чтобы сделать, поэтому я просто развлекаюсь',
    eng: 'Today I don`t have any important things to do, so I`m just having fun',
    regEng: '/(?:(?:Today I (?:do not have(?: any)?|have no) important things to do,|I (?:do not have(?: any)?|have no) important things to do today,) so I am|(?:Today I (?:don[`’\']t have(?: any)?|have no) important things to do,|I (?:don[`’\']t have(?: any)?|have no) important things to do today,) so I[`’\']m) just having fun/gm'
  },
  {
    rus: 'Что вы будете делать в десять часов утра завтра? Ну, это зависит от множества разных факторов',
    eng: 'What will you be doing at ten o`clock in the morning tomorrow? Well, it depends on a lot of different factors',
    regEng: '/What (?:will you be doing (?:at ten o[`’\']clock in the morning tomorrow\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many)|tomorrow at ten o[`’\']clock in the morning\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many))|are you doing (?:at ten o[`’\']clock in the morning tomorrow\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many)|tomorrow at ten o[`’\']clock in the morning\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many))) different factors/gm'
  },
  {
    rus: 'Она предпочитает путешествовать поездом или самолётом? Ну, она просто ненавидит поезда. Так что она всегда путешествует самолётом',
    eng: 'Does she prefer to travel by train or by plane? Well, she just hates trains. So she always travels by plane',
    regEng: '/Does she prefer to travel by train or (?:by )?plane\\? Well, she just hates trains. So she always travels by plane/gm'
  },
  {
    rus: 'Тебе важно знать разницу между этими словами. Звучит интересно! Я весь внимание',
    eng: 'It`s important for you to know the difference between these words. Sounds interesting! I`m all ears',
    regEng: '/It(?: is|[`’\']s) important for you to know the difference between these words. (?:(?:This|That|It) sounds|Sounds) interesting! I(?: am|[`’\']m) all ears/gm'
  },
  {
    rus: 'Из скольких уроков состоит курс? Он состоит всего из нескольких уроков',
    eng: 'How many lessons does the course consist of? It consists of just a few lessons',
    regEng: ''
  }
]
export default data