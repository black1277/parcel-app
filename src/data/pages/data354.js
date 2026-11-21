// 17-20 > 19.4 > 7
const data = [
  {
    rus: 'Кажется, что она не слышит нас вообще. Это не имеет значения, давай напишем ей сообщение',
    eng: 'It seems that she doesn`t hear us at all. It doesn`t matter, let`s write her a message',
    regEng: '/It seems (?:(?:that she does not hear us at all. (?:This|That|It)|like she does not hear us at all. (?:This|That|It)|she does not hear us at all. (?:This|That|It)) does not|(?:that she doesn[`’\']t hear us at all. (?:This|That|It)|like she doesn[`’\']t hear us at all. (?:This|That|It)|she doesn[`’\']t hear us at all. (?:This|That|It)) doesn[`’\']t) matter, let[`’\']s write her a message/gm'
  },
  {
    rus: 'Подожди минутку! Батарея моего телефона села. Мне нужно его зарядить прямо сейчас. Где розетка? Она вон там',
    eng: 'Wait a minute! My phone`s battery is low. I need to charge it right now. Where is the socket? It`s over there',
    regEng: '/Wait a (?:minute|moment)! My phone[`’\']s battery is low. I need to charge it right now. Where is the socket\\? It(?: is|[`’\']s) over there/gm'
  },
  {
    rus: 'Ей не нравится своя нынешняя работа совсем. Поэтому она будет искать новую работу',
    eng: 'She doesn`t like her present job at all. So she`s going to look for a new job',
    regEng: '/She (?:does not|doesn[`’\']t) like her present job at all. So she(?: is|[`’\']s) going to (?:search|look) for a new job/gm'
  },
  {
    rus: 'Какая погода сегодня? Холодно и идёт снег. Так что давай не пойдём на улицу',
    eng: 'What`s the weather like today? It`s cold and it`s snowing. So let`s not go outside',
    regEng: '/What(?: is the weather like today\\? It is cold and it is|[`’\']s the weather like today\\? It[`’\']s cold and it[`’\']s) snowing. So let[`’\']s not go outside/gm'
  },
  {
    rus: 'Чьи то игрушки? То игрушки моих детей. Я купила их вчера',
    eng: 'Whose toys are those? Those are my children`s toys. I bought them yesterday',
    regEng: '/Whose toys are those\\? Those are my children[`’\']s toys. (?:I bought them yesterday|Yesterday I bought them)/gm'
  }
]
export default data