
const data = [
  {
    rus: 'Они готовы начать через минуту',
    eng: 'They are ready to start in a minute',
    regEng: '/(?:In a minute (?:they are ready to|they’re ready so) (?:start|begin)|(?:They are ready to|They’re ready so) (?:start|begin) in a minute)/gm'
  },
  {
    rus: 'Они не готовы начать через минуту',
    eng: 'They are not ready to start in a minute',
    regEng: '(?:In a minute (?:they are|they’re) not ready to (?:start|begin)|(?:They are|They’re) not ready to (?:start|begin) in a minute)'
  },
  {
    rus: 'Готовы ли они начать через минуту?',
    eng: 'Are they ready to start in a minute?',
    regEng: '/(?:Are they ready to (?:start|begin) in a minute\\?)/gm'
  },
  {
    rus: 'Что они готовы сделать через минуту?',
    eng: 'What are they ready to do in a minute?'
  },
  {
    rus: 'Ты будешь очень уставшим завтра',
    eng: 'You will be very tired tomorrow',
    regEng: '/(?:You(?: will|’ll) be very tired tomorrow)|(?:Tomorrow you(?: will|’ll) be very tired)/gm'
  },
  {
    rus: 'Ты не будешь очень уставшим завтра',
    eng: 'You will not be very tired tomorrow',
    regEng: '/(?:You(?:(?: will|’ll) not| won’t) be very tired tomorrow)|(?:Tomorrow you(?:(?: will|’ll) not| won’t) be very tired)/gm'
  },
  {
    rus: 'Будешь ли ты очень уставшим завтра?',
    eng: 'Will you be very tired tomorrow?'
  },
  {
    rus: 'Почему ты будешь очень уставшим завтра?',
    eng: 'Why will you be very tired tomorrow?'
  }
]
export default data
