const data = [
  {
    rus: 'Мы получим письмо от наших родственников через неделю',
    eng: 'We will get a letter from our relatives in a week',
    regEng: '/(?:(?:We will|We’ll) (?:get|receive) a letter from our relatives in a week)|(?:In a week (?:we will|we’ll) (?:get|receive) a letter from our relatives)/gm'
  },
  {
    rus: 'От кого мы получим письмо через неделю?',
    eng: 'Who will we get a letter from in a week?',
    regEng: '/(?:Whom? will we (?:get|receive) a letter from in a week\\?)|(?:From whom will we (?:get|receive) a letter in a week\\?)/gm'
  },
  {
    rus: 'Получим ли мы письмо от наших родственников через неделю?',
    eng: 'Will we get a letter from our relatives in a week?',
    regEng: '/(?:Will we (?:get|receive) a letter from our relatives in a week\\?)/gm'
  },
  {
    rus: 'Мы не получим письмо от наших родственников через неделю',
    eng: 'We will not get a letter from our relatives in a week',
    regEng: '/(?:(?:We will|We’ll) not (?:get|receive) a letter from our relatives in a week)|(?:We won’t (?:get|receive) a letter from our relatives in a week)|(?:In a week (?:we will|we’ll) not (?:get|receive) a letter from our relatives)|(?:In a week we won’t (?:get|receive) a letter from our relatives)/gm'
  },
  {
    rus: 'Что ему нужно искать?',
    eng: 'What does he need to look for?',
    regEng: '/(?:What does he need to (?:look|search) for\\?)/gm'
  },
  {
    rus: 'Ему нужно искать новую работу',
    eng: 'He needs to look for a new job',
    regEng: '/(?:He needs to (?:look|search) for a new job)/gm'
  },
  {
    rus: 'Нужно ли ему искать новую работу?',
    eng: 'Does he need to look for a new job?',
    regEng: '/(?:Does he need to (?:look|search) for a new job\\?)/gm'
  },
  {
    rus: 'Ему не нужно искать новую работу',
    eng: 'He does not need to look for a new job',
    regEng: '/(?:He (?:does not|doesn’t) need to (?:look|search) for a new job)/gm'
  }
]
export default data