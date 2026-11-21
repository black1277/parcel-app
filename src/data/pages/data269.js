// 15-16 > 15.6 > 6
const data = [
  {
    rus: 'С кем он разговаривает прямо сейчас? Он разговаривает со своей девушкой',
    eng: 'Who is he talking to right now? He`s talking to his girlfriend',
    regEng: '/(?:(?:(?:(?:(?:Whom? is he speaking with|To whom is he speaking) right now\\? He is|(?:Whom? is he speaking with|To whom is he speaking) right now\\? He[`’\']s) speaking|(?:(?:Whom? is he talking with|To whom is he talking) right now\\? He is|(?:Whom? is he talking with|To whom is he talking) right now\\? He[`’\']s) talking) with|(?:(?:To whom|Whom?) is he speaking to right now\\? He(?: is|[`’\']s) speaking|(?:(?:Whom? is he talking to|To whom is he talking) right now\\? He is|(?:Whom? is he talking to|To whom is he talking) right now\\? He[`’\']s) talking) to) his girlfriend|(?:(?:(?:(?:Whom? is he speaking with|To whom is he speaking) right now\\? He is|(?:Whom? is he speaking with|To whom is he speaking) right now\\? He[`’\']s) speaking|(?:(?:Whom? is he talking with|To whom is he talking) right now\\? He is|(?:Whom? is he talking with|To whom is he talking) right now\\? He[`’\']s) talking) with|(?:(?:To whom|Whom?) is he speaking to right now\\? He(?: is|[`’\']s) speaking|(?:(?:Whom? is he talking to|To whom is he talking) right now\\? He is|(?:Whom? is he talking to|To whom is he talking) right now\\? He[`’\']s) talking) to) his girl)/gm'
  },
  {
    rus: 'Его жена очень мало красится, потому что у неё удивительная естественная красота',
    eng: 'His wife wears very little make-up because she has amazing natural beauty',
    regEng: ''
  },
  {
    rus: 'Сколько книг ты прочитал прошлым летом? О, я прочитал много книг',
    eng: 'How many books did you read last summer? Oh, I read a lot of books',
    regEng: '/How many books did you read last summer\\? Oh, I read (?:a lot of|lots of|many) books/gm'
  },
  {
    rus: 'Мой парень более активный, чем я, но я более терпеливая, чем он',
    eng: 'My boyfriend is more active than I am but I`m more patient than he is',
    regEng: '/(?:My boyfriend(?: is|[`’\']s) more active than I am but I(?: am|[`’\']m) more patient than he is|My boyfriend(?:[`’\']s more active than I me but I am|[`’\']s more active than I me but I[`’\']m| is more active than me but I am| is more active than me but I[`’\']m) more patient than him|My boyfriend(?: is|[`’\']s) more active than I but I(?: am|[`’\']m) more patient than he)/gm'
  },
  {
    rus: 'Кто чинит твою машину в данный момент? Мой брат этим занимается',
    eng: 'Who is fixing your car at the moment? My brother is doing it',
    regEng: '/Who(?: is|[`’\']s) fixing your car at the moment\\? My brother(?: is|[`’\']s) doing (?:this|that|it)/gm'
  }
]
export default data