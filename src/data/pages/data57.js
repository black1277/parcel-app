const data = [
  {
    rus: 'Мы будем готовы на следующей неделе',
    eng: 'We will be ready next week',
    regEng: '/(?:(?:We will|We’ll) be ready next week)|(?:Next week (?:we will|we’ll) be ready)/gm'
  },
  {
    rus: 'Мы не будем готовы на следующей неделе',
    eng: 'We will not be ready next week',
    regEng: '/(?:(?:We will|We’ll) not be ready next week)|(?:We won’t be ready next week)|(?:Next week (?:we will|we’ll) not be ready)|(?:Next week we won’t be ready)/gm'
  },
  {
    rus: 'Будем ли мы готовы на следующей неделе?',
    eng: 'Will we be ready next week?'
  },
  {
    rus: 'Когда мы будем готовы?',
    eng: 'When will we be ready?'
  },
  {
    rus: 'Он будет очень успешным в следующем году',
    eng: 'He will be very successful next year',
    regEng: '/(?:(?:He will|He’ll) be very successful next year)|(?:Next year (?:he will|he’ll) be very successful)/gm'
  },
  {
    rus: 'Он не будет очень успешным в следующем году',
    eng: 'He will not be very successful next year',
    regEng: '/(?:(?:He will|He’ll) not be very successful next year)|(?:He won’t be very successful next year)|(?:Next year (?:he will|he’ll) not be very successful)|(?:Next year he won’t be very successful)/gm'
  },
  {
    rus: 'Будет ли он очень успешным в следующем году?',
    eng: 'Will he be very successful next year?'
  },
  {
    rus: 'Когда он будет очень успешным?',
    eng: 'When will he be very successful?'
  }
]
export default data