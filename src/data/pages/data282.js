// 15-16 > 16.2 > 6
const data = [
  {
    rus: 'Есть кое-что интересное, что я хочу рассказать тебе. Пожалуйста, послушай меня',
    eng: 'There`s something interesting that I want to tell you. Please listen to me',
    regEng: '/(?:(?:There is no one (?:(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They are|(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They[`’\']re) too|There[`’\']s no one (?:(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They are|(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They[`’\']re) too) personal|There(?: is|[`’\']s) something interesting(?: that)? I want to tell you. Listen to me, please|There(?: is|[`’\']s) something interesting(?: that)? I want to tell you. Please listen to me)/gm'
  },
  {
    rus: 'Нет ничего особенного касательно этого фильма. Он просто средний',
    eng: 'There isn`t anything special about this film. It`s just average',
    regEng: '/There (?:is not|isn[`’\']t) anything special about this (?:movie. It(?: is|[`’\']s)|film. It(?: is|[`’\']s)) just average/gm'
  },
  {
    rus: 'Нет ничего неправильного с тем человеком. Он просто другой',
    eng: 'There`s nothing wrong with that person. He`s just different',
    regEng: '/There(?: is|[`’\']s) nothing wrong with that person. He(?: is|[`’\']s) just different/gm'
  },
  {
    rus: 'Есть ли что-нибудь важное, что вам нужно, чтобы я сделал? Да, мне нужно, чтобы ты сделал обед',
    eng: 'Is there anything important that you need me to do? Yes, I need you to make lunch',
    regEng: '/Is there anything important (?:that )?you need me to do\\? Yes, I need you to make lunch/gm'
  },
  {
    rus: 'Папа хочет, чтобы мы пошли куда-то с ним. Что ты об этом думаешь?',
    eng: 'Dad wants us to go somewhere with him. What do you think about it?',
    regEng: '/(?:Father|Daddy|Dad) wants us to go somewhere with him. What do you think about (?:this|that|it)\\?/gm'
  },
  {
    rus: 'Папа не хочет, чтобы мы куда-то шли сегодня, потому что на улице мороз',
    eng: 'Dad doesn`t want us to go anywhere today because it`s freezing outside',
    regEng: '/(?:(?:Father|Daddy|Dad) does not|(?:Father|Daddy|Dad) doesn[`’\']t) want us to go anywhere today because it(?: is|[`’\']s) freezing outside/gm'
  },
  {
    rus: 'Папа не хочет, чтобы мы куда-то шли сейчас, потому что уже поздно, а нам нужно сделать кое-какую работу',
    eng: 'Dad wants us to go nowhere now because it`s already late and we need to do some work',
    regEng: '/(?:Father|Daddy|Dad) wants us to go nowhere now because it(?: is|[`’\']s) already late and we need to do some work/gm'
  },
  {
    rus: 'Папа хочет, чтобы мы поехали куда-нибудь завтра? Да, он хочет, чтобы мы поехали к нашим дедушке с бабушкой',
    eng: 'Does Dad want us to go anywhere tomorrow? Yes, he wants us to go to our grandparents',
    regEng: '/Does (?:Father|Daddy|Dad) want us to go anywhere tomorrow\\? Yes, he wants us to go to our grandparents/gm'
  }
]
export default data