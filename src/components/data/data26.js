// 01-05 > 3.2 > 4
const data = [
  {
    rus: 'Я обычно ношу эти туфли в субботу',
    eng: 'I usually wear these shoes on Saturday',
    regEng: '/(?:I usually wear these shoes on Saturday)|(?:On Saturday I usually wear these shoes)/gm'
  },
  {
    rus: 'Я носил эти туфли в прошлую субботу',
    eng: 'I wore these shoes last Saturday',
    regEng: '/(?:I wore these shoes last Saturday)|(?:Last Saturday I wore these shoes)/gm'
  },
  {
    rus: 'Я буду носить эти туфли в следующую субботу',
    eng: 'I will wear these shoes next Saturday',
    regEng: '/(?:(?:I will|I’ll) wear these shoes next Saturday)|(?:Next Saturday (?:I will|I’ll) wear these shoes)/gm'
  },
  {
    rus: 'Мы иногда ходим в такие чудесные места в четверг',
    eng: 'We sometimes go to such wonderful places on Thursday',
    regEng: '/(?:We sometimes go to such wonderful places on Thursday)|(?:On Thursday we sometimes go to such wonderful places)/gm'
  },
  {
    rus: 'Мы ходили в такое чудесное место в прошлый четверг',
    eng: 'We went to such a wonderful place last Thursday',
    regEng: '/(?:We went to such a wonderful place last Thursday)|(?:Last Thursday we went to such a wonderful place)/gm'
  },
  {
    rus: 'Мы пойдём в такое чудесное место в следующий четверг',
    eng: 'We will go to such a wonderful place next Thursday',
    regEng: '/(?:We will go to such a wonderful place next Thursday)|(?:Next Thursday we will go to such a wonderful place)/gm'
  }
]
export default data