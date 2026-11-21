// 17-20 > 17.4 > 2
const data = [
  {
    rus: 'Знает ли он что-нибудь важное о твоём муже? Я не уверена насчёт этого',
    eng: 'Does he know anything important about your husband? I`m not sure about that',
    regEng: '/Does he know anything important about your husband\\? I(?: am|[`’\']m) not sure about (?:that|this|it)/gm'
  },
  {
    rus: 'Добрый день! Замечательно поговорить с тобой опять! Как ты? Я превосходно. А у тебя как дела?',
    eng: 'Good afternoon! It`s great to talk to you again! How are you? I`m fine. And how are you doing?',
    regEng: '/Good afternoon! (?:(?:It is great (?:to (?:speak (?:with you again! How are you doing\\? I(?: am doing|[`’\']m doing| am|[`’\']m)|to you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m))|talk (?:with you again! How are you doing\\? I(?: am doing|[`’\']m doing| am|[`’\']m)|to you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m)))|with (?:speak to you again! How are you\\? I am(?: doing)?|talk to you again! How are you\\? I(?: am doing|[`’\']m doing| am|[`’\']m)))|It[`’\']s great to (?:speak (?:with|to)|talk (?:with|to)) you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m)|Great to (?:speak (?:with|to)|talk (?:with|to)) you again! How are you(?: doing)?\\? I(?: am doing|[`’\']m doing| am|[`’\']m)) fine. And how are you doing\\?|(?:It(?: is|[`’\']s) great|Great) to (?:speak (?:with|to)|talk (?:with|to)) you again! How are you doing\\? I(?: am doing|[`’\']m doing| am|[`’\']m) fine. And how are you\\?)/gm'
  },
  {
    rus: 'Он сильнее тебя, но ты умнее его',
    eng: 'He`s stronger than you but you`re smarter than him',
    regEng: '/He(?: is|[`’\']s) stronger than you(?: are)? but you(?: are more intelligent|[`’\']re more intelligent| are more clever|[`’\']re more clever| are cleverer|[`’\']re cleverer| are smarter|[`’\']re smarter) than (?:he is|him|he)/gm'
  },
  {
    rus: 'Есть так много хороших новостей, которыми я хочу поделиться с тобой',
    eng: 'There`s so much good news that I want to share with you',
    regEng: '/There(?: is|[`’\']s) so much good news(?: that)? I want to share with you/gm'
  },
  {
    rus: 'Она более талантливая, чем он, но он более целеустремлённый и трудолюбивый, чем она',
    eng: 'She`s more talented than him, but he`s more determined and hard-working than her',
    regEng: '/(?:She(?: is|[`’\']s) more talented than he is, but he(?: is|[`’\']s) more determined and hard-working than she is|She(?: is|[`’\']s) more talented than him, but he(?: is|[`’\']s) more determined and hard-working than her|She(?: is|[`’\']s) more talented than he, but he(?: is|[`’\']s) more determined and hard-working than she)/gm'
  }
]
export default data