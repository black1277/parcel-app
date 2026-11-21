// 17-20 > 17.4 > 6
const data = [
  {
    rus: 'Есть кое-что интересное, что я хочу рассказать тебе. Пожалуйста, послушай меня',
    eng: 'There`s something interesting that I want to tell you. Please listen to me',
    regEng: '/(?:There(?: is|[`’\']s) something interesting(?: that)? I want to tell you. Listen to me, please|There(?: is|[`’\']s) something interesting(?: that)? I want to tell you. Please listen to me)/gm'
  },
  {
    rus: 'Ему нравится этот город, потому что здесь не много движения',
    eng: 'He likes this town because there isn`t much traffic here',
    regEng: '/He likes this (?:town|city) because there(?: is not a lot of| isn[`’\']t a lot of|[`’\']s not a lot of| is not much| isn[`’\']t much|[`’\']s not much) traffic here/gm'
  },
  {
    rus: 'Чем занимается та компания? Та компания делает высококачественную мебель',
    eng: 'What does that company do? That company makes high-quality furniture',
    regEng: ''
  },
  {
    rus: 'Я начинаю становиться голодным. Когда заканчивается лекция? Она заканчивается через несколько минут. Имей терпение!',
    eng: 'I`m getting hungry. When does the lecture finish? It finishes in a few minutes. Have patience!',
    regEng: '/(?:I am getting hungry. When does the lecture (?:finish\\? It finishes|end\\? It ends) in a few minutes. Have patience!|I[`’\']m getting hungry. When does the lecture (?:finish\\? It finishes|end\\? It ends) in a few minutes. Have patience!)/gm'
  },
  {
    rus: 'Он не знает ничего особенного о твоём муже, потому что они никогда не разговаривают',
    eng: 'He doesn`t know anything special about your husband, because they never talk',
    regEng: '/He (?:(?:does not|doesn[`’\']t) know anything|knows nothing) special about your husband, because they never talk/gm'
  }
]
export default data