// 06-09 > 8.2 > 7
const data = [
  {
    rus: 'Я всегда хожу на работу пешком. Мне нравится свежий воздух',
    eng: 'I always go to work on foot. I like fresh air',
    regEng: ''
  },
  {
    rus: 'Ты голоден? Нет, но я очень хочу пить',
    eng: 'Are you hungry? No, but I am very thirsty',
    regEng: '/(?:Are you hungry\\? No, but (?:I am|I’m) very thirsty)/gm'
  },
  {
    rus: 'Мы не поедем в эту страну через месяц, мы поедем туда в следующем году',
    eng: 'We will not go to this country in a month, we will go there next year',
    regEng: '/(?:We (?:will not|won’t) go to this country in a month, (?:we will|we’ll) go there next year)/gm'
  },
  {
    rus: 'О чём эта книга? Она о разных приключениях',
    eng: 'What is this book about? It is about different adventures',
    regEng: '/(?:What is this book about\\? (?:It is|It’s) about different adventures)/gm'
  },
  {
    rus: 'Я видел твою сестру час назад. Она спешила',
    eng: 'I saw your sister an hour ago. She was in a hurry',
    regEng: ''
  },
  {
    rus: 'Когда она поговорила с теми людьми? Она поговорила с ними в среду',
    eng: 'When did she talk to those people? She talked to them on Wednesday',
    regEng: '/(?:When did she (?:talk|speak) (?:to|with) those people\\? She (?:talked|spoke) (?:to|with) them on Wednesday)/gm'
  },
  {
    rus: 'Их сын обычно ездит в школу на автобусе или на трамвае',
    eng: 'Their son usually goes to school by bus or by tram',
    regEng: '/(?:Their son usually goes to school by bus or (?:by)? tram)/gm'
  },
  {
    rus: 'Она без ума от своего нового парня',
    eng: 'She is crazy about her new boyfriend',
    regEng: '/(?:(?:She is|She’s) crazy about her new boyfriend)/gm'
  }
]
export default data