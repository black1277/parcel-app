// 17-20 > 17.4 > 4
const data = [
  {
    rus: 'Я наслаждаюсь новым бестселлером. Книга просто фантастическая! звучит захватывающе! О чём она?',
    eng: 'I`m enjoying a new bestseller. The book is just fantastic! Sounds exciting! What is it about?',
    regEng: '/(?:I(?: am|[`’\']m) enjoying|I enjoy) a new (?:best-?seller book.|best-?seller.) The book is just fantastic! (?:(?:That|This|It) sounds|Sounds) exciting! What is it about\\?/gm'
  },
  {
    rus: 'Этот отель ужасный. Нам нужно найти более хорошее место, чтобы остановиться. Я согласен',
    eng: 'This hotel is awful. We need to find a better place to stay. I agree',
    regEng: '/This hotel is (?:terrible.|horrible.|awful.) We need to find a better place to stay. I agree/gm'
  },
  {
    rus: 'Она не будет много краситься завтра, потому что она хочет, чтобы её кожа отдохнула',
    eng: 'She won`t wear much make-up tomorrow, because she wants her skin to rest',
    regEng: '/(?:She(?: is not|[`’\']s not| isn[`’\']t) going to|She(?: will|[`’\']ll) not|She won[`’\']t) wear (?:a lot of|lots of|much) make-up tomorrow, because she wants her skin to(?: (?:have|take) a)? rest/gm'
  },
  {
    rus: 'Ты должен мне несколько долларов, но это не имеет значения. Забудь об этом!',
    eng: 'You owe me a few dollars but it doesn`t matter. Forget about that!',
    regEng: '/You owe me a few dollars but it (?:does not|doesn[`’\']t) matter. Forget about (?:that|this|it)!/gm'
  },
  {
    rus: 'Когда начинается концерт? Он начинается в семь часов вечера. Не опаздывай!',
    eng: 'When does the concert start? It starts at seven o`clock in the evening. Don`t be late!',
    regEng: '/When does the concert (?:start\\? It starts at seven o[`’\']clock in the evening. (?:Do not|Don[`’\']t)|begin\\? It begins at seven o[`’\']clock in the evening. (?:Do not|Don[`’\']t)) be late!/gm'
  }
]
export default data