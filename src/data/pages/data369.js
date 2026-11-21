// 17-20 > 20.1 > 5
const data = [
  {
    rus: 'Вы скучаете по своей семье? Конечно! Мне очень тяжело быть так далеко от них. Вот почему я звоню им каждый день',
    eng: 'Do you miss your family? Of course! It`s very hard for me to be so far away from them. That`s why I call them every day',
    regEng: '/Do you miss your family\\? Of course! It(?: is very difficult for me to be so far away from them. That is| is very difficult for me to be so far away from them. This is| is very difficult for me to be so far away from them. That[`’\']s|[`’\']s very difficult for me to be so far away from them. That[`’\']s| is very hard for me to be so far away from them. That is| is very hard for me to be so far away from them. This is| is very difficult for me to be so far from them. That is| is very difficult for me to be so far from them. This is| is very hard for me to be so far away from them. That[`’\']s| is very difficult for me to be so far from them. That[`’\']s|[`’\']s very hard for me to be so far away from them. That[`’\']s|[`’\']s very difficult for me to be so far from them. That[`’\']s| is very hard for me to be so far from them. That is| is very hard for me to be so far from them. This is| is very hard for me to be so far from them. That[`’\']s|[`’\']s very hard for me to be so far from them. That[`’\']s) why I call them every day/gm'
  },
  {
    rus: 'Ты взвешиваешь ингредиенты для торта? Нет, я просто меряю на глаз',
    eng: 'Are you weighing the ingredients for the cake? No, I`m just measuring by eye',
    regEng: '/Are you weighing the ingredients for the cake\\? No, I(?: am|[`’\']m) just measuring by eye/gm'
  },
  {
    rus: 'Я не вижу никаких ошибок в этом предложении. Я что-то упускаю? Да, в этом предложении отсутствует глагол',
    eng: 'I see no mistakes in this sentence. Am I missing something? Yes, this sentence is missing a verb',
    regEng: '/I (?:(?:(?:do not|don[`’\']t) see any|see no) mistakes in this sentence. Am I missing something\\?|(?:(?:do not|don[`’\']t) see any|see no) mistakes in this sentence. Am I missing anything\\?) Yes, this sentence is missing a verb/gm'
  },
  {
    rus: 'Я знаю, что твоя сестра встречается с парнем из университета. Кажется, как будто он очень приятный человек',
    eng: 'I know that your sister is seeing a guy from university. It seems like he`s a very nice person',
    regEng: '/(?:(?:I know(?: that)? your sister is seeing a guy from university. It seems like he(?: is|[`’\']s) a very nice|I know (?:that )?your sister is seeing a guy from university. It seems like he[`’\']s a very good) person|I know (?:that )?your sister is seeing a guy from university. It seems like he is a very nice good)/gm'
  },
  {
    rus: 'Она весит девяносто килограмм, но она совсем не выглядит толстой. Это просто потому, что у неё кости тяжёлые',
    eng: 'She weighs ninety kilos, but she doesn`t look fat at all. That`s just because her bones are heavy',
    regEng: '/She weighs ninety (?:(?:kilogrammes|kilograms|kilos), but she (?:does not|doesn[`’\']t) look fat at all. (?:That is|This is|That[`’\']s) just because her bones are heavy|(?:kilogrammes|kilograms|kilos), but she (?:does not|doesn[`’\']t) look fat at all. (?:That is|This is|That[`’\']s) just because she has heavy bones)/gm'
  },
  {
    rus: 'Забудь об этом! Я не собираюсь делать этого! Эй! Почему ты такой упрямый?',
    eng: 'Forget about it! I`m not going to do it! Hey! Why are you being so stubborn?',
    regEng: '/Forget about (?:(?:this|it)! I(?: am|[`’\']m) not going to do this!|(?:that|it)! I(?: am|[`’\']m) not going to do that!|it! I(?: am|[`’\']m) not going to do it!) Hey! Why are you being so stubborn\\?/gm'
  },
  {
    rus: 'Все на месте или кто-то отсутствует? Кажется, как будто все на месте сегодня',
    eng: 'Is everyone present or is someone missing? It seems like everyone`s present today',
    regEng: '/Is (?:(?:(?:(?:everybody|everyone) present or is (?:somebody|someone|anybody|anyone) missing\\? It seems like today everybody|(?:everybody|everyone) present or is (?:someone|anybody|anyone) missing\\? It seems like today everyone) is|(?:everybody|everyone) present or is (?:somebody|someone|anybody|anyone) missing\\? It seems like today everybody[`’\']s|(?:everybody|everyone) present or is (?:somebody|someone|anybody|anyone) missing\\? It seems like today everyone[`’\']s) present|(?:everybody|everyone) present or is (?:somebody|someone|anybody|anyone) missing\\? It seems like (?:(?:everybody|everyone) is|(?:everybody|everyone)[`’\']s) present today)/gm'
  },
  {
    rus: 'Ты сегодня такая капризная. В чём причина этого? Я делаю что-то неправильно? Нет, у меня просто плохой день. Не принимай это лично',
    eng: 'You`re being so moody today. What`s the reason for that? Am I doing something wrong? No, I`m just having a bad day. Don`t take it personally',
    regEng: '/(?:(?:You are being so moody today. What is the reason for that\\? Am I doing (?:something|anything)|Today you are being so moody. What is the reason for that\\? Am I doing (?:something|anything)) wrong\\? No, I am just having a bad day. Do not|(?:(?:You are being so moody today. What is the reason for that\\? Am I doing (?:something|anything)|Today you are being so moody. What is the reason for that\\? Am I doing (?:something|anything)) wrong\\? No, I am|(?:(?:(?:You are being so moody today.|Today you are being so moody.) What is|(?:You(?: are|[`’\']re) being so moody today.|Today you(?: are|[`’\']re) being so moody.) What[`’\']s) the reason for that\\? Am I doing something|(?:(?:You are being so moody today.|Today you are being so moody.) What is|(?:You(?: are|[`’\']re) being so moody today.|Today you(?: are|[`’\']re) being so moody.) What[`’\']s) the reason for that\\? Am I doing anything) wrong\\? No, I[`’\']m) just having a bad day. Don[`’\']t) take it personally/gm'
  },
  {
    rus: 'Эта женщина весит шестьдесят килограмм. Это нормально для её роста. Так что она не весит больше нормы',
    eng: 'This woman weighs sixty kilograms. That`s normal for her height. So she`s not overweight',
    regEng: '/This woman weighs sixty (?:(?:(?:kilogrammes. (?:(?:That|This|It) is|(?:That|It)[`’\']s)|kilograms. (?:(?:That|This|It) is|(?:That|It)[`’\']s)|kilos. (?:(?:That|This|It) is|(?:That|It)[`’\']s)) normal for her height. So she is|(?:kilogrammes. (?:This is|(?:That|It)[`’\']s)|kilograms. (?:This is|(?:That|It)[`’\']s)|kilos. (?:This is|(?:That|It)[`’\']s)) normal for her height. So she[`’\']s) not|(?:kilogrammes. (?:This is|(?:That|It)[`’\']s)|kilograms. (?:This is|(?:That|It)[`’\']s)|kilos. (?:This is|(?:That|It)[`’\']s)) normal for her height. So she isn[`’\']t) overweight/gm'
  },
  {
    rus: 'У тебя есть какие-нибудь планы на сегодняшний вечер? Да, сегодня вечером я вижусь с моими иностранными друзьями. Ты хочешь присоединиться к нам?',
    eng: 'Do you have any plans for tonight? Yes, tonight I`m seeing my foreign friends. Do you want to join us?',
    regEng: '/Do you have any plans for tonight\\? Yes, (?:tonight I(?: am|[`’\']m) seeing my foreign friends.|I(?: am|[`’\']m) seeing my foreign friends tonight.) Do you want to join us\\?/gm'
  }
]
export default data