const data = [
  {
    rus: 'Он поговорит со своим другом через неделю',
    eng: 'He will talk to his friend in a week',
    regEng: '/(?:(?:He will|He’ll) (?:talk|speak) (?:to|with) his friend in a week)|(?:In a week (?:he will|he’ll) (?:talk|speak) (?:to|with) his friend)/gm'
  },
  {
    rus: 'Он не поговорит со своим другом через неделю',
    eng: 'He will not talk to his friend in a week',
    regEng: '/(?:He(?: will not|’ll not| won’t) (?:talk|speak) (?:to|with) his friend in a week)|(?:In a week he(?: will not|’ll not| won’t) (?:talk|speak) (?:to|with) his friend)/gm'
  },
  {
    rus: 'Поговорит ли он со своим другом через неделю?',
    eng: 'Will he talk to his friend in a week?',
    regEng: '/(?:Will he (?:talk|speak) (?:to|with) his friend in a week\\?)/gm'
  },
  {
    rus: 'С кем он поговорит через неделю?',
    eng: 'Who will he talk to in a week?',
    regEng: '/(?:Whom? will he (?:talk|speak) (?:to|with) in a week\\?)|(?:)/gm'
  },
  {
    rus: 'Мы подумаем об этой идее через неделю',
    eng: 'We will think about this idea in a week',
    regEng: '/(?:(?:We will|We’ll) think about this idea in a week)|(?:In a week (?:we will|we’ll) think about this idea)/gm'
  },
  {
    rus: 'Мы не подумаем об этой идее через неделю',
    eng: 'We will not think about this idea in a week',
    regEng: '/(?:We(?: will not|’ll not| won’t) think about this idea in a week)|(?:In a week we(?: will not|’ll not| won’t) think about this idea)/gm'
  },
  {
    rus: 'Подумаем ли мы об этой идее через неделю?',
    eng: 'Will we think about this idea in a week?'
  },
  {
    rus: 'О чём мы подумаем через неделю?',
    eng: 'What will we think about in a week?'
  }
]
export default data