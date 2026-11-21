// 17-20 > 19.4 > 6
const data = [
  {
    rus: 'Моя жена выиграла лотерею вчера! Круто! Что она собирается делать с деньгами?',
    eng: 'My wife won a lottery yesterday! Awesome! What is she going to do with the money?',
    regEng: '/(?:My wife won a lottery yesterday! (?:It is (?:awesome|cool)|It[`’\']s (?:awesome|cool)|Awesome|Cool)! What(?: is|[`’\']s)|Yesterday my wife won a lottery! (?:It is (?:awesome|cool)|It[`’\']s (?:awesome|cool)|Awesome|Cool)! What(?: is|[`’\']s)) she going to do with the money\\?/gm'
  },
  {
    rus: 'Какую музыку тебе нравится слушать? Мне нравится слушать поп музыку, рок музыку и классическую музыку',
    eng: 'What music do you like to listen to? I like to listen to pop music, rock music and classical music',
    regEng: '/What music do you like to listen to\\? I like to listen to (?:pop music, rock music|pop, rock) and classical music/gm'
  },
  {
    rus: 'Ты поможешь мне найти решение к этой проблеме? Конечно, я помогу тебе с большим удовольствием!',
    eng: 'Will you help me find a solution to this problem? Of course, I`ll help you with great pleasure!',
    regEng: '/Will you help me(?: to)? find (?:the|a) solution to this problem\\? Of course, I(?: will|[`’\']ll) help you with great pleasure!/gm'
  },
  {
    rus: 'Мэри выходит замуж в июне! Ух ты! Какие замечательные новости! Я так счастлива за неё!',
    eng: 'Mary is getting married in June! Wow! What great news! I`m so happy for her!',
    regEng: '/(?:Mary[`’\']s getting married in June! (?:Wow|Gee)! What great news! I(?: am|[`’\']m) so happy for her!|Mary is getting married in June! (?:Wow|Gee)! What great news! I[`’\']m so happy for her!)/gm'
  },
  {
    rus: 'Какая погода сейчас? Солнечно и тепло. Давай пойдём на прогулку!',
    eng: 'What`s the weather like now? It`s sunny and warm. Let`s go for a walk!',
    regEng: '/What(?: is|[`’\']s) the weather like now\\? It(?: is|[`’\']s) sunny and warm. Let(?: us|[`’\']s) go for a walk!/gm'
  }
]
export default data