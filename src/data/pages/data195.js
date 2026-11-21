// 10-14 > 13.2 > 3
const data = [
  {
    rus: 'Сколько гостей твои родители пригласили на вечеринку вчера?',
    eng: 'How many guests did your parents invite to the party yesterday?',
    regEng: ''
  },
  {
    rus: 'Она удивительная мать. Она всегда даёт своим детям много внимания',
    eng: 'She`s an amazing mother. She always gives her children a lot of attention',
    regEng: '/She(?: is|[`’\']s) an amazing (?:mother.|mom.|mum.) She always gives her (?:children|kids) a lot of attention/gm'
  },
  {
    rus: 'Есть очень мало вещей, которых я боюсь',
    eng: 'There are very few things that I`m afraid of',
    regEng: '/There are very few things that I(?: am|[`’\']m) afraid of/gm'
  },
  {
    rus: 'Сколько времени у нас осталось, чтобы закончить тест?',
    eng: 'How much time do we have left to finish the test?',
    regEng: ''
  },
  {
    rus: 'В этой статье слишком мало информации. Она бесполезна',
    eng: 'There`s too little information in this article. It`s useless',
    regEng: '/There(?: is|[`’\']s) too little information in this article. It(?: is|[`’\']s) useless/gm'
  },
  {
    rus: 'У неё есть несколько чудесных картинок показать тебе',
    eng: 'She has a few wonderful pictures to show you',
    regEng: '/She has (?:a few|some) wonderful pictures to show you/gm'
  },
  {
    rus: 'Вчера я слышал эту новость так много раз. Я уже устал от этого',
    eng: 'Yesterday I heard this news so many times. I`m already tired of it',
    regEng: '/(?:Yesterday I heard this news so many times. I(?: am already tired of this| am already tired of that|[`’\']m already tired of this|[`’\']m already tired of that| am already tired of it|[`’\']m already tired of it)|I heard this news so many times yesterday. I(?: am already tired of this| am already tired of that|[`’\']m already tired of this|[`’\']m already tired of that| am already tired of it|[`’\']m already tired of it))/gm'
  },
  {
    rus: 'В прошлом месяце мы одолжили им немного денег, чтобы купить новую машину',
    eng: 'Last month we lent them a little money to buy a new car',
    regEng: '/(?:Last month we lent them (?:a little|some) money to buy a new car|We lent them (?:a little|some) money to buy a new car last month)/gm'
  }
]
export default data