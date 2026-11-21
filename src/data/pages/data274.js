// 15-16 > 16.1 > 7
const data = [
  {
    rus: 'Он выглядит ужасно вечерами, потому что он обычно чувствует себя очень уставшим после работы',
    eng: 'He looks terrible in the evenings because he usually feels very tired after work',
    regEng: '/He looks (?:terrible|horrible|awful) in the evenings because he usually feels very tired after work/gm'
  },
  {
    rus: 'Давай поужинаем вместе сегодня вечером в восемь часов. звучит замечательно! Я буду вовремя',
    eng: 'Let`s have dinner together tonight at eight o`clock. Sounds great! I`ll be on time',
    regEng: '/Let(?: us|[`’\']s) have dinner together tonight at eight o[`’\']clock. (?:(?:That|This|It) sounds|Sounds) great! I(?: will|[`’\']ll) be on time/gm'
  },
  {
    rus: 'Колени моей бабушки иногда болят, но она никогда не чувствует себя грустно по поводу этого. Она сильная женщина!',
    eng: 'My Grandma`s knees sometimes ache but she never feels sad about it. She`s a strong woman!',
    regEng: '/My (?:Grandmother|Grandma)[`’\']s knees sometimes (?:ache|hurt) but she never feels sad about (?:(?:that.|this.|it.) She is|(?:that.|this.|it.) She[`’\']s) a strong woman!/gm'
  },
  {
    rus: 'Ты выглядишь таким обеспокоенным. Как ты себя чувствуешь? Я чувствую себя превосходно. Я просто становлюсь голодным. Давай купим какой-нибудь еды',
    eng: 'You`re looking so worried. How are you feeling? I`m feeling fine, I`m just getting hungry. Let`s buy some food',
    regEng: '/(?:You (?:(?:are looking so worried. How (?:are you feeling\\? I(?: am|[`’\']m) feeling|do you feel\\? I feel)|look so worried. How (?:are you feeling\\? I[`’\']m feeling|do you feel\\? I feel)) fine, I am|(?:(?:are looking|look) so worried. How are you feeling\\? I(?: am|[`’\']m) feeling|(?:are looking|look) so worried. How do you feel\\? I feel) fine, I[`’\']m) just getting hungry. Let[`’\']s buy some food|You[`’\']re looking so worried. How (?:(?:are you feeling\\? I(?: am|[`’\']m) feeling|do you feel\\? I feel) fine, I am|(?:are you feeling\\? I(?: am|[`’\']m) feeling|do you feel\\? I feel) fine, I[`’\']m) just getting hungry. Let[`’\']s buy some food)/gm'
  },
  {
    rus: 'Я наслаждаюсь новым бестселлером. Книга просто фантастическая! звучит захватывающе! О чём она?',
    eng: 'I`m enjoying a new best-seller. The book is just fantastic! Sounds exciting! What is it about?',
    regEng: '/(?:I(?: am|[`’\']m) enjoying|I enjoy) a new (?:best-?seller book.|best-?seller.) The book is just fantastic! (?:(?:That|This|It) sounds|Sounds) exciting! What is it about\\?/gm'
  },
  {
    rus: 'Она кажется такой расстроенной. Всё ли в порядке? Ну, её спина болит, а у неё нет никаких обезболивающих с собой',
    eng: 'She seems so upset. Is everything alright? Well, her back is hurting and she has no painkillers with her',
    regEng: '/She seems so upset. Is everything (?:all right|alright|okay|OK)\\? Well, her back (?:is hurting|is aching|hurts|aches) and she (?:(?:does not|doesn[`’\']t) have any|has no) painkillers with her/gm'
  },
  {
    rus: 'Почему ты выглядишь таким взволнованным? Я выгляжу и чувствую себя так чудесно, потому что не учусь на этой неделе',
    eng: 'Why are you looking so excited? I`m looking and feeling so wonderful because I`m not studying this week',
    regEng: '/Why (?:(?:are you looking so excited\\? I(?: am|[`’\']m) looking and feeling|do you look so excited\\? I look and feel) so wonderful because I am|(?:are you looking so excited\\? I(?: am|[`’\']m) looking and feeling|do you look so excited\\? I look and feel) so wonderful because I[`’\']m) not studying this week/gm'
  },
  {
    rus: 'Вы наслаждаетесь своей жизнью, в общем? О, да! Я благодарен за каждый день!',
    eng: 'Do you enjoy your life in general? Oh yes, I`m thankful for every day!',
    regEng: '/Do you enjoy your life in general\\? Oh yes, I(?: am thankful| am grateful|[`’\']m thankful|[`’\']m grateful) for (?:every|each) day!/gm'
  }
]
export default data