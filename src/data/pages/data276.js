// 15-16 > 16.1 > 11
const data = [
  {
    rus: 'Завтра мы куда-то едем. Я так взволнована по поводу этого!',
    eng: 'Tomorrow we`re going somewhere. I`m so excited about that!',
    regEng: '/(?:Tomorrow we(?: are going somewhere. I am so excited about that!| are going somewhere. I am so excited about this!|[`’\']re going somewhere. I[`’\']m so excited about that!|[`’\']re going somewhere. I[`’\']m so excited about this!| are going somewhere. I am so excited about it!|[`’\']re going somewhere. I[`’\']m so excited about it!)|We are going somewhere tomorrow. I am so excited about (?:that|this|it)!|We[`’\']re going somewhere tomorrow. I[`’\']m so excited about (?:that|this|it)!)/gm'
  },
  {
    rus: 'Завтра мы никуда не едем, потому что папа болеет',
    eng: 'Tomorrow we`re not going anywhere, because Dad is sick',
    regEng: '/(?:(?:(?:(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|We(?: are not|[`’\']re not| aren[`’\']t) going anywhere tomorrow,) because Father|(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|We(?: are not|[`’\']re not| aren[`’\']t) going anywhere tomorrow,) because Dad) is|(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|We(?: are not|[`’\']re not| aren[`’\']t) going anywhere tomorrow,) because Father[`’\']s|(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|We(?: are not|[`’\']re not| aren[`’\']t) going anywhere tomorrow,) because Dad[`’\']s) sick|(?:(?:(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|We(?: are not|[`’\']re not| aren[`’\']t) going anywhere tomorrow,) because Father|(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|We(?: are not|[`’\']re not| aren[`’\']t) going anywhere tomorrow,) because Dad) is|(?:(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t)|We aren[`’\']t) going anywhere,|We(?: are|[`’\']re) not going anywhere tomorrow,) because Father[`’\']s|(?:Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|We(?: are|[`’\']re) not going anywhere tomorrow,|We aren[`’\']t going anywhere, tomorrow) because Dad[`’\']s) ill)/gm'
  },
  {
    rus: 'Завтра мы никуда не едем, потому что у нас слишком мало времени',
    eng: 'Tomorrow we`re going nowhere, because we have too little time',
    regEng: '/(?:(?:(?:Tomorrow we(?: are|[`’\']re) going nowhere,|We(?: are|[`’\']re) going nowhere tomorrow,) because we have|(?:Tomorrow we(?: are|[`’\']re) going nowhere,|We(?: are|[`’\']re) going nowhere tomorrow,) because we[`’\']ve) got|(?:Tomorrow we(?: are|[`’\']re) going nowhere,|We(?: are|[`’\']re) going nowhere tomorrow,) because we have|(?:Tomorrow we(?: are|[`’\']re) going nowhere,|We(?: are|[`’\']re) going nowhere tomorrow,) because we[`’\']ve) too little time/gm'
  },
  {
    rus: 'Едем ли мы куда-нибудь завтра? Нет, мы остаёмся здесь',
    eng: 'Are we going anywhere tomorrow? No, we`re staying here',
    regEng: '/Are we going anywhere tomorrow\\? No, we(?: are|[`’\']re) staying here/gm'
  },
  {
    rus: 'Он знает что-то о твоём муже, потому что они коллеги',
    eng: 'He knows something about your husband, because they`re colleagues',
    regEng: '/He knows something about your husband, because they(?: are|[`’\']re) colleagues/gm'
  },
  {
    rus: 'Он не знает ничего особенного о твоём муже, потому что они никогда не разговаривают',
    eng: 'He doesn`t know anything special about your husband, because they never talk',
    regEng: '/He (?:does not|doesn[`’\']t) know anything special about your husband, because they never talk/gm'
  },
  {
    rus: 'Он не знает ничего нового о твоём муже, потому что слишком занят, чтобы позвонить ему',
    eng: 'He knows nothing new about your husband because he`s too busy to call him',
    regEng: '/He knows nothing new about your husband because he(?: is|[`’\']s) too busy to call him/gm'
  },
  {
    rus: 'Знает ли он что-нибудь важное о твоём муже? Я не уверена насчёт этого',
    eng: 'Does he know anything important about your husband? I`m not sure about that',
    regEng: '/Does he know anything important about your husband\\? I(?: am|[`’\']m) not sure about (?:that|this|it)/gm'
  }
]
export default data