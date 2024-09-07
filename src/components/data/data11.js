// 01-05 > 2.1 > 3
const data = [
  {
    rus: 'Этим людям нужно, чтобы мы помыли свои ступни',
    eng: 'These people need us to wash our feet'
  },
  {
    rus: 'Этот мужчина хочет, чтобы она послушала ту песню',
    eng: 'This man wants her to listen to that song'
  },
  {
    rus: 'Родителям нужно, чтобы их дети чистили свои зубы',
    eng: 'Parents need their children to brush their teeth',
    regEng: '/(?:Parents need their (?:children|kids) to brush their teeth)/gm'
  },
  {
    rus: 'Ему нужно, чтобы вы послушали его',
    eng: 'He needs you to listen to him'
  },
  {
    rus: 'Она хочет, чтобы я позвонил тому человеку',
    eng: 'She wants me to call that person',
    regEng: '/(?:She wants me to (?:call|phone) that person)/gm'
  },
  {
    rus: 'Я хочу, чтобы они помыли свои ступни',
    eng: 'I want them to wash their feet'
  }
]
export default data