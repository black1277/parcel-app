// 15-16 > 15.4 > 11
const data = [
  {
    rus: 'Папа принимал душ, пока мы делали обед',
    eng: 'Dad was having a shower while we were making lunch',
    regEng: '/(?:Father|Dad) was (?:having|taking) a shower while we were making lunch/gm'
  },
  {
    rus: 'Она не будет много краситься завтра, потому что она хочет, чтобы её кожа отдохнула',
    eng: 'She won`t wear much make-up tomorrow, because she wants her skin to rest',
    regEng: '/She(?: will not|[`’\']ll not| won[`’\']t) wear (?:a lot of|lots of|much) make-up tomorrow, because she wants her skin to rest/gm'
  },
  {
    rus: 'Мама будет делать завтрак, в то время как я буду учиться',
    eng: 'Mom will be making breakfast while I`m studying',
    regEng: '/(?:Mother|Mom|Mum) will be making breakfast while I(?: am|[`’\']m) studying/gm'
  },
  {
    rus: 'Вчера я слышал эту новость так много раз. Я уже устал от этого',
    eng: 'Yesterday I heard this news so many times. I`m already tired of it',
    regEng: '/(?:Yesterday I heard this news so many times. I(?: am already tired of this| am already tired of that|[`’\']m already tired of this|[`’\']m already tired of that| am already tired of it|[`’\']m already tired of it)|I heard this news so many times yesterday. I(?: am already tired of this| am already tired of that|[`’\']m already tired of this|[`’\']m already tired of that| am already tired of it|[`’\']m already tired of it))/gm'
  },
  {
    rus: 'Куда вы ходили вчера? Мы ходили в университет',
    eng: 'Where did you go yesterday? We went to university',
    regEng: ''
  }
]
export default data