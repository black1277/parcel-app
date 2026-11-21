// 10-14 > 13.1 > 8
const data = [
  {
    rus: 'Я завтракал в семь часов утра',
    eng: 'I was having breakfast at seven o`clock in the morning',
    regEng: ''
  },
  {
    rus: 'Я не завтракал в семь часов утра',
    eng: 'I wasn`t having breakfast at seven o`clock in the morning',
    regEng: '/I (?:was not|wasn[`’\']t) having breakfast at seven o[`’\']clock in the morning/gm'
  },
  {
    rus: 'Завтракал ли я в семь часов утра?',
    eng: 'Was I having breakfast at seven o`clock in the morning?',
    regEng: ''
  },
  {
    rus: 'Что я делал в семь часов утра?',
    eng: 'What was I doing at seven o`clock in the morning?',
    regEng: ''
  },
  {
    rus: 'Завтра в четыре часа дня она будет мыть свою машину',
    eng: 'Tomorrow at four o`clock in the afternoon she`ll be washing her car',
    regEng: '/(?:(?:Tomorrow at four o[`’\']clock in the afternoon she(?: will|[`’\']ll)|At four o[`’\']clock in the afternoon tomorrow she(?: will|[`’\']ll)) be washing her car|(?:Tomorrow she(?: will|[`’\']ll) be washing her car|She(?: will|[`’\']ll) be washing her car tomorrow) at four o[`’\']clock in the afternoon|She(?: will|[`’\']ll) be washing her car at four o[`’\']clock in the afternoon tomorrow)/gm'
  },
  {
    rus: 'Завтра в четыре часа дня она не будет мыть свою машину',
    eng: 'Tomorrow at four o`clock in the afternoon she won`t be washing her car',
    regEng: '/(?:(?:(?:She(?: will not|[`’\']ll not| won[`’\']t) be washing her car tomorrow|Tomorrow she won[`’\']t be washing her car) at|Tomorrow she(?: will|[`’\']ll) not be washing her carat) four o[`’\']clock in the afternoon|(?:Tomorrow at four o[`’\']clock in the afternoon she(?: will not|[`’\']ll not| won[`’\']t)|At four o[`’\']clock in the afternoon tomorrow she(?: will not|[`’\']ll not| won[`’\']t)) be washing her car|She(?: will not|[`’\']ll not| won[`’\']t) be washing her car at four o[`’\']clock in the afternoon tomorrow)/gm'
  },
  {
    rus: 'Будет ли она мыть свою машину завтра в четыре часа дня?',
    eng: 'Will she be washing her car tomorrow at four o`clock in the afternoon?',
    regEng: '/Will she be washing her car (?:tomorrow at four o[`’\']clock in the afternoon\\?|at four o[`’\']clock in the afternoon tomorrow\\?)/gm'
  },
  {
    rus: 'Что она будет делать завтра в четыре часа дня?',
    eng: 'What will she be doing tomorrow at four o`clock in the afternoon?',
    regEng: '/What will she be doing (?:tomorrow at four o[`’\']clock in the afternoon\\?|at four o[`’\']clock in the afternoon tomorrow\\?)/gm'
  }
]
export default data