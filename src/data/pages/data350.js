// 17-20 > 19.4 > 3
const data = [
  {
    rus: 'Я никогда не ем ничего солёного, острого или кислого. У меня чувствительный желудок. Но мне почти невозможно не есть сладостей. Я сладкоежка',
    eng: 'I never eat anything salty, spicy or sour. I have a sensitive stomach. But it`s almost impossible for me not to eat sweets. I have a sweet tooth',
    regEng: '/I never eat anything salty, spicy or sour. I have a sensitive stomach. But it(?: is almost impossible for me not to eat any| is almost impossible for me to not eat any|[`’\']s almost impossible for me not to eat any|[`’\']s almost impossible for me to not eat any| is almost impossible for me not to eat| is almost impossible for me to not eat|[`’\']s almost impossible for me not to eat|[`’\']s almost impossible for me to not eat| is almost impossible for me to eat no|[`’\']s almost impossible for me to eat no) sweets. I have a sweet tooth/gm'
  },
  {
    rus: 'Чьё это кресло? Оно нашего дедушки',
    eng: 'Whose armchair is this? It is our grandfather`s',
    regEng: '/Whose armchair is this\\? It(?: is|[`’\']s) our (?:grandfather|granddad|grandad|grandpa)[`’\']s/gm'
  },
  {
    rus: 'Нет ничего неисправного с этим устройством. Ты просто не знаешь, как им пользоваться',
    eng: 'There`s nothing wrong with this device. You just don`t know how to use it',
    regEng: '/There(?: is|[`’\']s) nothing wrong with this device. You just (?:do not|don[`’\']t) know how to use it/gm'
  },
  {
    rus: 'Опасно летать, когда ветер такой сильный. Вот почему все полёты отменены',
    eng: 'It`s dangerous to fly when the wind is so strong. That`s why all the flights are cancelled',
    regEng: '/(?:It is dangerous to fly when the wind is so strong. (?:That is|This is|That[`’\']s) why all(?: the)? flights are cancel?led|It[`’\']s dangerous to fly when the wind is so strong. (?:(?:(?:That is|This is|That[`’\']s) why all the|That[`’\']s why all) flights are cancelled|That[`’\']s why all (?:the )?flights are canceled))/gm'
  },
  {
    rus: 'Какого цвета твои перчатки? Они серые? Они белые. Сейчас они просто грязные',
    eng: 'What colour are your gloves? Are they grey? They`re white. Now they`re just dirty',
    regEng: '/What (?:colou?r are your gloves\\? Are they (?:grey|gray)\\? They(?: are white. They are| are white. They[`’\']re|[`’\']re white. They are|[`’\']re white. They[`’\']re) just dirty now|colou?r are your gloves\\? Are they (?:grey|gray)\\? They(?: are|[`’\']re) white. Now they(?: are|[`’\']re) just dirty)/gm'
  }
]
export default data