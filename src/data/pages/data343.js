// 17-20 > 19.2 > 5
const data = [
  {
    rus: 'Она весит лишь пятьдесят килограмм. Она слишком тощая. Ей нужно набрать немного веса',
    eng: 'She weighs only fifty kilos. She`s too skinny. She needs to gain a little weight',
    regEng: '/She (?:(?:(?:weighs (?:only|just)|only weighs) fifty (?:kilogrammes. She(?: is|[`’\']s)|kilograms. She(?: is|[`’\']s)|kilos. She(?: is|[`’\']s)) too skinny.|(?:weighs (?:only|just)|only weighs) fifty (?:kilogrammes.|kilograms.|kilos.) She is too thin.) She needs to gain a little|(?:(?:weighs (?:only|just)|only weighs) fifty (?:kilogrammes. She(?: is|[`’\']s)|kilograms. She(?: is|[`’\']s)|kilos. She(?: is|[`’\']s)) too skinny.|(?:weighs (?:(?:only|just) fifty kilogrammes.|(?:only|just) fifty kilograms.|only fifty kilos.)|only weighs fifty (?:kilogrammes.|kilograms.|kilos.)) She is too thin.) She needs to gain some) weight/gm'
  },
  {
    rus: 'Она встречается с кем-то? Да, она встречается с парнем с работы',
    eng: 'Is she seeing someone? Yes, she`s seeing a guy from work',
    regEng: '/Is she seeing (?:(?:somebody|anybody|anyone)\\? Yes, she(?: is|[`’\']s) seeing a guy from her|(?:(?:somebody|anybody|anyone)\\? Yes, she is|(?:somebody|someone|anybody|anyone)\\? Yes, she[`’\']s) seeing a guy from) work/gm'
  },
  {
    rus: 'Я скучаю по тебе. Я чувствую себя так одиноко без тебя. Пожалуйста, возвращайся скоро!',
    eng: 'I miss you. I feel so lonely without you. Please come back soon!',
    regEng: '/(?:I miss you. I(?: am feeling|[`’\']m feeling| feel) so lonely without you. Come back soon, please!|I miss you. I(?: am feeling|[`’\']m feeling| feel) so lonely without you. Please come back soon!)/gm'
  },
  {
    rus: 'Он очень трудолюбивый и надёжный человек. Я всегда рассчитываю на него, когда мне нужна помощь',
    eng: 'He`s a very hard-working and reliable person. I always count on him when I need help',
    regEng: '/He(?: is|[`’\']s) a very hard-working and reliable person. I always count on him when I need help/gm'
  },
  {
    rus: 'Что она делает? Она взвешивает свой чемодан. Кажется, как будто у неё слишком много багажа',
    eng: 'What is she doing? She`s weighing her suitcase. It seems like she has too much luggage',
    regEng: '/What is she doing\\? She(?: is|[`’\']s) weighing her suitcase. It seems like she has too much luggage/gm'
  },
  {
    rus: 'Посмотри на эту картинку! Это просто невероятно! Но я не вижу ничего особенного на этой картинке. Я что-то упускаю?',
    eng: 'Look at this picture! It`s just incredible! - But I see nothing special in this picture. Am I missing something?',
    regEng: '/(?:Look at this picture! It(?: is just unbelievable!|[`’\']s just incredible! -|[`’\']s just unbelievable!| is just incredible!|[`’\']s just incredible!) But I see nothing special in this picture. Am I missing something\\?|Look at this picture! It(?: is|[`’\']s) just (?:unbelievable|incredible)! But I see nothing special in this picture. Am I missing anything\\?)/gm'
  },
  {
    rus: 'У меня только одна печенька осталась. Так что я не собираюсь делиться ей с тобой. Эй, ты почему такой эгоистичный? Давай мне эту печеньку прямо сейчас',
    eng: 'I have only one cookie left. So I`m not going to share it with you. - Hey, why are you being so selfish? Give me that cookie right now!',
    regEng: '/I (?:have (?:(?:(?:only|just) one (?:biscuit|cookie) left. So I(?: am|[`’\']m) not going to share it with you.|only one cookie left. So I[`’\']m not going to share it with you. -) Hey, why are you being so selfish\\? Give me that|(?:only|just) one (?:biscuit|cookie) left. So I(?: am|[`’\']m) not going to share it with you. Hey, why are you being so selfish\\? Give me this|(?:(?:(?:only|just) one (?:biscuit|cookie) left. So I am|(?:(?:only|just) one biscuit|just one cookie) left. So I[`’\']m) not going to share it with you. Hey, why|only one cookie left. So I[`’\']m not going to share it with you. Hey,) are you being so selfish\\? Give me the)|only have one (?:biscuit|cookie) left. So I(?: am|[`’\']m) not going to share it with you. Hey, why are you being so selfish\\? Give me (?:that|this|the)) cookie right now!/gm'
  },
  {
    rus: 'Я кого-то вижу вон там. Кто это? Кажется, как будто это моя знакомая. Давай проверим',
    eng: 'I see somebody over there. Who is that? - It seems like that`s my acquaintance. Let`s check',
    regEng: '/I see (?:somebody over there. Who is (?:(?:that\\? (?:(?:- )?It seems like that[`’\']s|It seems like that is)|this\\? It seems like this is|it\\? It seems like it(?: is|[`’\']s)) my acquaintance. Let[`’\']s|(?:that\\? It seems like that(?: is|[`’\']s)|this\\? It seems like this is|it\\? It seems like it(?: is|[`’\']s)) my acquaintance. Let us)|someone over there. Who is (?:(?:that\\? It seems like that(?: is|[`’\']s)|this\\? It seems like this is|it\\? It seems like it(?: is|[`’\']s)) my acquaintance. Let us|(?:that\\? It seems like that(?: is|[`’\']s)|this\\? It seems like this is|it\\? It seems like it(?: is|[`’\']s)) my acquaintance. Let[`’\']s)) check/gm'
  }
]
export default data