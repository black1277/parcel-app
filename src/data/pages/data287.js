// 17-20 > 17.1 > 5
const data = [
  {
    rus: 'Твоя машина сломана. Тебе необходимо что-то сделать по поводу этого прямо сейчас',
    eng: 'Your car is broken. It`s necessary for you to do something about it right now',
    regEng: '/(?:Your car(?: is broken. It is necessary for you to do something about this| is broken. It is necessary for you to do something about that| is broken. It[`’\']s necessary for you to do something about this| is broken. It[`’\']s necessary for you to do something about that|[`’\']s broken. It is necessary for you to do something about this|[`’\']s broken. It is necessary for you to do something about that|[`’\']s broken. It[`’\']s necessary for you to do something about this|[`’\']s broken. It[`’\']s necessary for you to do something about that| is broken. It is necessary for you to do something about it| is broken. It[`’\']s necessary for you to do something about it|[`’\']s broken. It is necessary for you to do something about it|[`’\']s broken. It[`’\']s necessary for you to do something about it| is broken. You need to do something about this| is broken. You need to do something about that|[`’\']s broken. You need to do something about this|[`’\']s broken. You need to do something about that|[`’\']s broken. You need to do something about it) right away|Your car(?: is|[`’\']s) broken. (?:It(?: is|[`’\']s) necessary for you|You need) to do something about (?:this|that|it) right now)/gm'
  },
  {
    rus: 'Они решили твою проблему вчера. Так что тебе не нужно делать ничего по поводу этого',
    eng: 'They solved your problem yesterday. So it`s not necessary for you to do anything about it',
    regEng: '/(?:They solved your problem yesterday. So (?:it (?:is not|isn[`’\']t) necessary for you to do anything about (?:this|that|it)|it[`’\']s not necessary for you to do anything about (?:this|that|it)|you (?:do not|don[`’\']t) need to do anything about (?:this|that|it))|Yesterday they solved your problem. So (?:it (?:is not|isn[`’\']t) necessary for you to do anything about (?:this|that|it)|it[`’\']s not necessary for you to do anything about (?:this|that|it)|you (?:do not|don[`’\']t) need to do anything about (?:this|that|it)))/gm'
  },
  {
    rus: 'Не беспокойся! Тебе не нужно ничего делать по поводу этого. Я позабочусь обо всём',
    eng: 'Don`t worry! It`s necessary for you to do nothing about it. I`ll take care of everything',
    regEng: '/(?:Do not (?:be worried|worry)! (?:It(?: is|[`’\']s) necessary for you|You need) to do nothing about (?:(?:(?:that.|this.|it.) I am|(?:that.|this.|it.) I[`’\']m) going to|(?:that.|this.|it.) I will|(?:that.|this.|it.) I[`’\']ll)|Don[`’\']t (?:(?:(?:be worried|worry)! (?:It(?: is|[`’\']s) necessary for you|You need) to do nothing about (?:that.|this.|it.) I am|(?:be worried|worry)! (?:It[`’\']s necessary for you|You need) to do nothing about (?:that.|this.|it.) I[`’\']m) going to|(?:be worried|worry)! (?:It(?: is|[`’\']s) necessary for you|You need) to do nothing about (?:that.|this.|it.) I will|(?:be worried|worry)! (?:It[`’\']s necessary for you|You need) to do nothing about (?:that.|this.|it.) I[`’\']ll)) take care of everything/gm'
  },
  {
    rus: 'Тебе необходимо что-либо делать по поводу этого? Да, мне нужно помочь им закончить проект',
    eng: 'Is it necessary for you to do anything about that? Yes, I need to help them finish the project',
    regEng: '/(?:Is it necessary for you to do anything about (?:that|this|it)\\? Yes, I need to help them(?: to)?|Do you need to do anything about (?:this|that|it)\\? Yes, I need to help them(?: to)?) finish the project/gm'
  },
  {
    rus: 'Ей полезно поговорить с кем-то из той компании, потому что у них есть ценная информация, чтобы поделиться',
    eng: 'It`s useful for her to talk to somebody from that company because they have some valuable information to share',
    regEng: '/(?:It[`’\']s useful for her to (?:speak (?:(?:to someone ebody|(?:with|to) somebody|with someone) from that company because they have some|(?:(?:with|to) somebody|(?:with|to) someone) from that company because they have)|talk (?:(?:with|to) somebody|(?:with|to) someone) from that company because they have(?: some)?) valuable information to share|It is useful for her to (?:(?:speak (?:with|to)|talk (?:with|to)) somebody|(?:speak (?:with|to)|talk (?:with|to)) someone) from that company because they have(?: some)? valuable information to share)/gm'
  },
  {
    rus: 'Ей не полезно ни с кем разговаривать сегодня вечером, потому что она будет слишком уставшей после работы',
    eng: 'It`s not useful for her to talk to anybody tonight because she`ll be too tired after work',
    regEng: '/(?:(?:It(?: is not|[`’\']s not| isn[`’\']t) useful for her to (?:speak (?:with|to)|talk (?:with|to)) anybody tonight|Tonight it(?: is not|[`’\']s not| isn[`’\']t) useful for her to (?:speak (?:with|to)|talk (?:with|to)) anybody) because she will|(?:It(?: is not|[`’\']s not| isn[`’\']t) useful for her to (?:speak (?:with|to)|talk (?:with|to)) anybody tonight|Tonight it(?: is not|[`’\']s not| isn[`’\']t) useful for her to (?:speak (?:with|to)|talk (?:with|to)) anybody) because she[`’\']ll) be too tired after work/gm'
  },
  {
    rus: 'Ей не полезно ни с кем разговаривать сегодня, потому что она очень больна',
    eng: 'It`s useful for her to talk to nobody today because she`s very sick',
    regEng: '/(?:(?:(?:It(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody today|Today it(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody) because she is|(?:It(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody today|Today it(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody) because she[`’\']s) very sick|(?:(?:It(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody today|Today it(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody) because she is|(?:It(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody today|Today it(?: is|[`’\']s) useful for her to (?:speak (?:with|to)|talk (?:with|to)) nobody) because she[`’\']s) very ill)/gm'
  },
  {
    rus: 'Полезно ли ей разговаривать с кем-либо прямо сейчас? Нет, ей более полезно отдохнуть сейчас',
    eng: 'Is it useful for her to talk to anybody right now? No, it`s more useful for her to have a rest now',
    regEng: '/Is it useful for her to (?:(?:speak (?:with|to)|talk (?:with|to)) anybody right now\\? No, it(?: is|[`’\']s) more useful for her to(?: (?:have|take) a)? rest now|(?:speak (?:with|to)|talk (?:with|to)) anybody right now\\? No, now it(?: is|[`’\']s) more useful for her to(?: (?:have|take) a)? rest)/gm'
  }
]
export default data