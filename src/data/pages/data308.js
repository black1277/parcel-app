// 17-20 > 17.4 > 9
const data = [
  {
    rus: 'Давай поужинаем вместе сегодня вечером в восемь часов. звучит замечательно! Я буду вовремя',
    eng: 'Let`s have dinner together tonight at eight o`clock. Sounds great! I`ll be on time',
    regEng: '/Let(?: us|[`’\']s) have dinner together tonight at eight o[`’\']clock. (?:(?:That|This|It) sounds|Sounds) great! I(?: will|[`’\']ll) be on time/gm'
  },
  {
    rus: 'От кого эти письма? Они от моих родственников в Англии',
    eng: 'Who are these letters from? They`re from my relatives in England',
    regEng: '/(?:(?:Whom? are these letters from\\?|From whom are these letters\\?) They are|(?:Whom? are these letters from\\?|From whom are these letters\\?) They[`’\']re) from my relatives in England/gm'
  },
  {
    rus: 'Она кажется такой расстроенной. Всё ли в порядке? Ну, её спина болит, а у неё нет никаких обезболивающих с собой',
    eng: 'She seems so upset. Is everything alright? Well, her back is hurting and she has no painkillers with her',
    regEng: '/She seems so upset. Is everything (?:all right|alright|okay|OK)\\? Well, her back (?:is hurting|is aching|hurts|aches) and she (?:(?:does not|doesn[`’\']t) have any|has no) painkillers with her/gm'
  },
  {
    rus: 'Завтра мы куда-то едем. Я так взволнована по поводу этого!',
    eng: 'Tomorrow we`re going somewhere. I`m so excited about that!',
    regEng: '/(?:Tomorrow we(?: are going somewhere. I am so excited about that!| are going somewhere. I am so excited about this!|[`’\']re going somewhere. I[`’\']m so excited about that!|[`’\']re going somewhere. I[`’\']m so excited about this!| are going somewhere. I am so excited about it!|[`’\']re going somewhere. I[`’\']m so excited about it!)|We are going somewhere tomorrow. I am so excited about (?:that|this|it)!|We[`’\']re going somewhere tomorrow. I[`’\']m so excited about (?:that|this|it)!)/gm'
  },
  {
    rus: 'Необходимо пить много воды и есть хорошую еду, чтобы быть здоровым',
    eng: 'It`s necessary to drink a lot of water and eat good food to be healthy',
    regEng: '/(?:It(?: is|[`’\']s) necessary to drink (?:a lot|lots) of water and(?: to)? eat good food to be healthy|To be healthy it(?: is|[`’\']s) necessary to drink (?:a lot|lots) of water and(?: to)? eat good food)/gm'
  }
]
export default data