const data = [
  {
    rus: 'Мы часто говорим об этом бизнесе',
    eng: 'We often talk about this business',
    regEng: '/(?:We often (?:talk|speak) about this business)/gm'
  },
  {
    rus: 'Мы не часто говорим об этом бизнесе',
    eng: 'We do not often talk about this business',
    regEng: '/(?:We (?:do not|don’t) often (?:talk|speak) about this business)/gm'
  },
  {
    rus: 'Говорим ли мы часто об этом бизнесе?',
    eng: 'Do we often talk about this business?',
    regEng: '/(?:Do we often (?:talk|speak) about this business\\?)/gm'
  },
  {
    rus: 'О чём мы часто говорим?',
    eng: 'What do we often talk about?',
    regEng: '/(?:What do we often (?:talk|speak) about\\?)/gm'
  },
  {
    rus: 'Вы послушали эту песню неделю назад',
    eng: 'You listened to this song a week ago',
    regEng: '/(?:You listened to this song a week ago)|(?:A week ago You listened to this song)/gm'
  },
  {
    rus: 'Вы не послушали эту песню неделю назад',
    eng: 'You did not listen to this song a week ago',
    regEng: '/(?:You (?:did not|didn’t) listen to this song a week ago)|(?:A week ago you (?:did not|didn’t) listen to this song)/gm'
  },
  {
    rus: 'Послушали ли вы эту песню неделю назад?',
    eng: 'Did you listen to this song a week ago?'
  },
  {
    rus: 'Что вы послушали неделю назад?',
    eng: 'What did you listen to a week ago?'
  }
]
export default data