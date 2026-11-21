// 15-16 > 16.1 > 5
const data = [
  {
    rus: 'Что вы будете делать в десять часов утра завтра? Ну, это зависит от множества разных факторов',
    eng: 'What will you be doing at ten o`clock in the morning tomorrow? Well, it depends on a lot of different factors',
    regEng: '/What (?:will you be doing (?:at ten o[`’\']clock in the morning tomorrow\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many)|tomorrow at ten o[`’\']clock in the morning\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many))|are you doing (?:at ten o[`’\']clock in the morning tomorrow\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many)|tomorrow at ten o[`’\']clock in the morning\\? Well, (?:this|that|it) depends on (?:a lot of|lots of|many))) different factors/gm'
  },
  {
    rus: 'Я вижу, что ты пробуешь суп. Так как он на вкус? О, он на вкус восхитительный',
    eng: 'I see that you`re tasting the soup. So how does it taste? Oh, it tastes delicious',
    regEng: '/I see (?:(?:that you(?: are|[`’\']re)|you are|you[`’\']re) tasting|(?:that you(?: are|[`’\']re)|you are|you[`’\']re) trying) the soup. So how does it taste\\? Oh, it tastes delicious/gm'
  },
  {
    rus: 'Что значит это предложение? Я не знаю. Я всё ещё пытаюсь понять его',
    eng: 'What does this sentence mean? I don`t know. I`m still trying to understand it',
    regEng: '/What does this sentence mean\\? I (?:do not|don[`’\']t) know. I(?: am|[`’\']m) still trying to understand it/gm'
  },
  {
    rus: 'О чём ты думаешь? Я думаю о тесте, который мне нужно пройти завтра',
    eng: 'What are you thinking about? I`m thinking about the test that I need to take tomorrow',
    regEng: '/What are you thinking about\\? I(?: am|[`’\']m) thinking about (?:the|a) test(?: that)? I need to take tomorrow/gm'
  },
  {
    rus: 'Она сомневается, что он сдержит своё обещание. Она не доверяет ему',
    eng: 'She doubts that he`ll keep his promise. She doesn`t trust him',
    regEng: '/She doubts (?:(?:that he(?: will|[`’\']ll)|he will|he[`’\']ll) keep his promise. She doesn[`’\']t|(?:that )?he[`’\']ll keep his promise. She does not) trust him/gm'
  },
  {
    rus: 'Сегодня у меня нет никаких важных дел, чтобы сделать, поэтому я просто развлекаюсь',
    eng: 'Today I don`t have any important things to do, so I`m just having fun',
    regEng: '/(?:(?:Today I (?:do not have(?: any)?|have no) important things to do,|I (?:do not have(?: any)?|have no) important things to do today,) so I am|(?:Today I (?:don[`’\']t have(?: any)?|have no) important things to do,|I (?:don[`’\']t have(?: any)?|have no) important things to do today,) so I[`’\']m) just having fun/gm'
  },
  {
    rus: 'Почему ты нюхаешь мясо? Оно испорченное? Я не уверена насчет этого, но оно странно пахнет',
    eng: 'Why are you smelling the meat? Is it rotten? I`m not sure about that but it smells strange',
    regEng: '/Why are you smelling the meat\\? Is it rotten\\? I(?: am|[`’\']m) not sure (?:about (?:that|this|it)|of (?:that|this|it)) but it smells strange/gm'
  },
  {
    rus: 'Ты должен мне несколько долларов, но это не имеет значения. Забудь об этом!',
    eng: 'You owe me a few dollars but it doesn`t matter. Forget about that!',
    regEng: '/You owe me a few dollars but it (?:does not|doesn[`’\']t) matter. Forget about (?:that|this|it)!/gm'
  }
]
export default data