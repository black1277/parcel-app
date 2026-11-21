// 17-20 > 17.4 > 16
const data = [
  {
    rus: 'Доброе утро! Приятно видеть тебя снова. Как дела?',
    eng: 'Good morning! It`s nice to see you again! How are you doing?',
    regEng: '/Good morning! (?:It(?: is|[`’\']s) nice|Nice) to see you again! How (?:are (?:you doing|things|you)|is it going)\\?/gm'
  },
  {
    rus: 'Завтра мы никуда не едем, потому что у нас слишком мало времени',
    eng: 'Tomorrow we`re going nowhere, because we have too little time',
    regEng: '/(?:(?:(?:(?:We(?: are not|[`’\']re not| aren[`’\']t) going anywhere|We(?: are|[`’\']re) going nowhere) tomorrow,|Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|Tomorrow we(?: are|[`’\']re) going nowhere,) because we have|(?:(?:We(?: are not|[`’\']re not| aren[`’\']t) going anywhere|We(?: are|[`’\']re) going nowhere) tomorrow,|Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|Tomorrow we(?: are|[`’\']re) going nowhere,) because we[`’\']ve) got|(?:(?:We(?: are not|[`’\']re not| aren[`’\']t) going anywhere|We(?: are|[`’\']re) going nowhere) tomorrow,|Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|Tomorrow we(?: are|[`’\']re) going nowhere,) because we have|(?:(?:We(?: are not|[`’\']re not| aren[`’\']t) going anywhere|We(?: are|[`’\']re) going nowhere) tomorrow,|Tomorrow we(?: are not|[`’\']re not| aren[`’\']t) going anywhere,|Tomorrow we(?: are|[`’\']re) going nowhere,) because we[`’\']ve) too little time/gm'
  },
  {
    rus: 'У нас нет никаких вопросов вообще. Всё ясно!',
    eng: 'We have no questions at all. Everything is clear!',
    regEng: '/We (?:(?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions at all. Everything is|(?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions at all. Everything[`’\']s) clear!/gm'
  },
  {
    rus: 'За дверью кто-то есть. Я думаю, что это твой друг',
    eng: 'There`s somebody behind the door. I think that it`s your friend',
    regEng: '/(?:There is somebody behind the door. I think (?:(?:that(?: (?:that|this|it))?|this|it) is|that it[`’\']s|it[`’\']s) your friend|There[`’\']s somebody behind the door. I think (?:that (?:that is|this is|that[`’\']s|it is|it[`’\']s|is)|this is|that[`’\']s|it is|it[`’\']s) your friend)/gm'
  },
  {
    rus: 'Мой дедушка пожилой человек. У него часто болит спина. Поэтому ему лучше не носить тяжёлые вещи',
    eng: 'My Grandpa is an elderly person. His back often aches. So it`s better for him not to carry heavy things',
    regEng: '/My (?:(?:(?:Grandfather|Grandpa) is|(?:Grandfather|Grandpa)[`’\']s) an elderly person. His back often (?:aches.|hurts.) So it(?: is|[`’\']s) better for him not to|(?:(?:Grandfather|Grandpa) is|(?:Grandfather|Grandpa)[`’\']s) an elderly person. His back often (?:aches.|hurts.) So it(?: is|[`’\']s) better for him to not) carry heavy things/gm'
  }
]
export default data