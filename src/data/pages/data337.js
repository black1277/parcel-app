// 17-20 > 19.1 > 9
const data = [
  {
    rus: 'Ты видишь того парня вон там? Кто он? Это мой друг. Кстати, ты знаешь, что он встречается с твоей сестрой?',
    eng: '- Do you see that guy over there? Who is he? - That`s my friend. By the way, do you know that he`s seeing your sister?',
    regEng: '/(?:- Do you see that guy over there\\? Who is he\\? - That[`’\']s my friend. By the way, do you know that he[`’\']s|Do you see that guy over there\\? Who is he\\? (?:(?:(?:(?:That|This|It) is|(?:That|It)[`’\']s) my friend. By the way, do you know that|(?:(?:That|This|It) is|That[`’\']s) my friend. By the way, do you know) he is|(?:(?:(?:That|This|It) is|(?:That|It)[`’\']s) my friend. By the way, do you know that|(?:(?:That|This|It) is|That[`’\']s) my friend. By the way, do you know) he[`’\']s)) seeing your sister\\?/gm'
  },
  {
    rus: 'Что ты делаешь? Я взвешиваю ингредиенты для салата',
    eng: 'What are you doing? - I`m weighing the ingredients for the salad',
    regEng: '/What are you doing\\? (?:- I[`’\']m|I am|I[`’\']m) weighing the ingredients for the salad/gm'
  },
  {
    rus: 'Мой сын учится за границей в этом году. Я скучаю по нему. Но он вернётся скоро! Осталось только два месяца',
    eng: 'My son is studying abroad this year. I miss him. But he`s coming back soon! There are only two months left',
    regEng: '/My son is studying abroad this year. I miss him. But he(?: is coming back soon! There are only| is coming back soon! There are just| is soon coming back! There are only| is soon coming back! There are just|[`’\']s coming back soon! There are only|[`’\']s coming back soon! There are just|[`’\']s soon coming back! There are only|[`’\']s soon coming back! There are just) two months left/gm'
  },
  {
    rus: 'Я не собираюсь помогать тебе. У меня нет времени на твои дела. Ладно, я понимаю. Но почему ты такой грубый?',
    eng: '- I`m not going to help you. I have no time for your things. - Alright, I see. But why are you being so rude?',
    regEng: '/(?:I am not going to help you. I (?:do not have (?:any time for your things. (?:All right|Alright|Okay|OK), I (?:understand.|see.)|time for your things. (?:All right|Alright|Okay|OK), I (?:understand.|see.))|have no time for your things. Alright, I (?:understand.|see.))|I[`’\']m not going to help you. I (?:don[`’\']t have (?:any time for your things. (?:All right|Alright|Okay|OK), I (?:understand.|see.)|time for your things. (?:All right|Alright|Okay|OK), I (?:understand.|see.))|have no time for your things. Alright, I (?:understand.|see.))|- I[`’\']m not going to help you. I have no time for your things. - Alright, I see.) But why are you being so rude\\?/gm'
  },
  {
    rus: 'Чем занимается его тётя? Она продавец в ювелирном магазине',
    eng: '- What does his aunt do? - She`s a shop assistant in a jewellery shop',
    regEng: '/(?:(?:(?:- What does his aunt do\\? - She[`’\']s|What does his aunt do\\? She(?: is|[`’\']s)) a shop assistant in a jewellery|What does his aunt do\\? She(?: is|[`’\']s) a shop assistant in a jewelry) shop|What does his aunt do\\? She(?: is|[`’\']s) a shop assistant in a (?:jewellery|jewelry) store)/gm'
  },
  {
    rus: 'Она весит девяносто килограмм. Ей тяжело ходить. Так что ей нужно сбросить вес',
    eng: 'She weighs ninety kilos. It`s hard for her to walk. So she needs to lose weight',
    regEng: '/She weighs ninety (?:(?:kilogrammes. It(?: is|[`’\']s)|kilograms. It(?: is|[`’\']s)|kilos. It(?: is|[`’\']s)) difficult|(?:kilogrammes. It(?: is|[`’\']s)|kilograms. It(?: is|[`’\']s)|kilos. It(?: is|[`’\']s)) hard) for her to walk. So she needs to lose(?: some)? weight/gm'
  },
  {
    rus: 'Я увижусь со своими партнёрами днём. Мы будем обсуждать наш новый проект',
    eng: 'I`m seeing my partners in the afternoon. We`re going to discuss our new project',
    regEng: '/I(?: am|[`’\']m) seeing my partners (?:in the|this) afternoon. We(?: are|[`’\']re) going to discuss our new project/gm'
  },
  {
    rus: 'Посмотри. У этой книги отсутствуют некоторые страницы. Нет, с ней всё в порядке. Некоторые страницы просто слиплись',
    eng: '- Look. This book is missing some pages. - No, everything`s fine with it. Some pages are just stuck together',
    regEng: '/(?:Look. This book is missing some pages. No, everything(?: is all right|[`’\']s all right| is alright|[`’\']s alright| is fine| is okay|[`’\']s fine|[`’\']s okay| is OK|[`’\']s OK)|- Look. This book is missing some pages. - No, everything[`’\']s fine) with it. Some pages are just stuck together/gm'
  }
]
export default data