// 17-20 > 18.1 > 5
const data = [
  {
    rus: 'Почему ты выглядишь такой взволнованной? Я еду в отпуск в следующем месяце. Я готовлюсь к поездке сейчас',
    eng: 'Why do you look so excited? I`m going on holiday next month. I`m getting ready for the trip right now',
    regEng: '/Why (?:(?:(?:are you looking so excited\\? I(?: am|[`’\']m)|do you look so excited\\? I(?: am|[`’\']m)) going on holiday next month. Right now I am|(?:are you looking so excited\\? I(?: am|[`’\']m)|do you look so excited\\? I(?: am|[`’\']m)) going on holiday next month. Right now I[`’\']m) getting ready for the trip|(?:(?:are you looking so excited\\? I(?: am|[`’\']m)|do you look so excited\\? I(?: am|[`’\']m)) going on holiday next month. I am|(?:are you looking so excited\\? I(?: am|[`’\']m)|do you look so excited\\? I(?: am|[`’\']m)) going on holiday next month. I[`’\']m) getting ready for the trip right now)/gm'
  },
  {
    rus: 'Кто-то звонит в звонок. Я открою. Не переживай. Я думаю, что это моя сестра',
    eng: 'Somebody`s ringing the doorbell. I`ll get it. Don`t worry. I think that it`s my sister',
    regEng: '/(?:(?:Somebody is ringing the doorbell. I will get it. (?:Do not|Don[`’\']t) worry. I think (?:that(?: (?:that|this|it))?|this|it)|Someone is ringing the doorbell. I will get it. (?:Do not|Don[`’\']t) worry. I think (?:that(?: (?:that|this|it))?|this|it)|Somebody[`’\']s ringing the doorbell. I[`’\']ll get it. (?:Do not worry. I think (?:that )?this|Don[`’\']t worry. I think (?:that(?: (?:that|this|it))?|this|it))|Someone[`’\']s ringing the doorbell. I[`’\']ll get it. (?:Do not worry. I think (?:that )?this|Don[`’\']t worry. I think (?:that(?: (?:that|this|it))?|this|it))) is|(?:(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think that|(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think) that[`’\']s|(?:(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think that|(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think) it[`’\']s) my sister/gm'
  },
  {
    rus: 'Я не уверен, что сдам экзамен. Я знаю только несколько тем. Всё будет в порядке. Ты очень умный',
    eng: 'I`m not sure that I`ll pass the exam. I only know a few topics. Everything`s going to be alright. You`re very smart',
    regEng: '/I(?:[`’\']m| am) not sure(?: that)? I(?:[`’\']ll| will) pass the exam\\. I (?:only know|know only|just know|know just) a few topics\\. Everything(?:[`’\']s| is|[`’\']ll| will)(?: going to | )?be (?:alright|OK|okay|all right)\\. You(?:[`’\']re| are) very (?:smart|clever)/gm'
  },
  {
    rus: 'Урок заканчивается через десять минут. Осталось немного времени, чтобы проверить домашнюю работу. Кто хочет пойти к доске? Я пойду!',
    eng: 'The class finishes in ten minutes. There`s a little time left to check the homework. Who wants to go to the blackboard? I`ll go',
    regEng: '/The class (?:finishes|ends) in ten minutes. There(?: is a little|[`’\']s a little| is some|[`’\']s some) time left to check the homework. Who wants to go to the blackboard\\? I(?: will|[`’\']ll) go/gm'
  },
  {
    rus: 'Мы опоздали, а они ждут нас. Что мы будем делать? Ну, мы просто позвоним и предупредим их',
    eng: 'We`re late and they`re waiting for us. What are we going to do? Well, we`ll just call and warn them',
    regEng: '/(?:We are late and they(?: are waiting for us. What are we going to do\\? Well, we are just going to phone| are waiting for us. What are we going to do\\? Well, we are going to just phone| are waiting for us. What are we going to do\\? Well, we are just going to call|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re just going to phone|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re going to just phone|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re just going to call|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re going to just call| are waiting for us. What are we going to do\\? Well, we will just phone| are waiting for us. What are we going to do\\? Well, we will just call|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']ll just phone|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']ll just call) and warn them|We[`’\']re late and they(?: are waiting for us. What are we going to do\\? Well, we[`’\']re just going to phone|[`’\']re waiting for us. What are we going to do\\? Well, we are just going to phone| are waiting for us. What are we going to do\\? Well, we[`’\']re going to just phone|[`’\']re waiting for us. What are we going to do\\? Well, we are going to just phone|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re just going to phone|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re going to just phone| are waiting for us. What are we going to do\\? Well, we[`’\']re just going to call|[`’\']re waiting for us. What are we going to do\\? Well, we are just going to call| are waiting for us. What are we going to do\\? Well, we[`’\']re going to just call|[`’\']re waiting for us. What are we going to do\\? Well, we are going to just call|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re just going to call|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']re going to just call|[`’\']re waiting for us. What are we going to do\\? Well, we will just phone|[`’\']re waiting for us. What are we going to do\\? Well, we will just call| are waiting for us. What are we going to do\\? Well, we[`’\']ll just phone|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']ll just phone| are waiting for us. What are we going to do\\? Well, we[`’\']ll just call|[`’\']re waiting for us. What are we going to do\\? Well, we[`’\']ll just call) and warn them)/gm'
  },
  {
    rus: 'Ты поможешь мне нести эти сумки, пожалуйста? Конечно! Я помогу тебе с большим удовольствием',
    eng: 'Will you help me carry these bags, please? Of course! I`ll help you with great pleasure',
    regEng: '/Will you help me(?: to)? carry these bags, please\\? (?:Of course|Sure)! I(?: will|[`’\']ll) help you with great pleasure/gm'
  },
  {
    rus: 'Он совсем не сфокусирован. Он сделает много ошибок в тесте',
    eng: 'He`s not focused at all. He`s going to make a lot of mistakes in the test',
    regEng: '/He(?: is not|[`’\']s not| isn[`’\']t) focused at all. He(?: is going to|[`’\']s going to| will|[`’\']ll) make (?:a lot of|lots of|many) mistakes in the test/gm'
  },
  {
    rus: 'Я думаю, что погода будет превосходная завтра. Будет теплее и солнечнее. У меня просто такое чувство',
    eng: 'I think that the weather will be fine tomorrow. It`ll be warmer and sunnier. I just have such a feeling',
    regEng: '/I think(?: that)? the weather will be fine tomorrow. It(?: will|[`’\']ll) be warmer and sunnier. I just have such a feeling/gm'
  }
]
export default data