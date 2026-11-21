// 17-20 > 19.4 > 4
const data = [
  {
    rus: 'Ты выглядишь так бледно. Как ты себя чувствуешь? Я чувствую себя плохо, потому что у меня желудок болит',
    eng: 'You`re looking so pale. How are you feeling? I`m feeling bad because my stomach hurts',
    regEng: '/(?:(?:You[`’\']re looking so pale. How are you feeling\\? I(?:[`’\']m feeling bad because I have got|[`’\']m feeling bad because I[`’\']ve got|[`’\']m feeling bad because I have| feel bad because I have got|[`’\']m feeling bad because I[`’\']ve| feel bad because I[`’\']ve got| feel bad because I have| feel bad because I[`’\']ve) a stomach|You look so pale. How do you feel\\? I(?:[`’\']m feeling bad because I have got|[`’\']m feeling bad because I[`’\']ve got|[`’\']m feeling bad because I have| feel bad because I have got|[`’\']m feeling bad because I[`’\']ve| feel bad because I[`’\']ve got| feel bad because I have| feel bad because I[`’\']ve) a stomach) ache|(?:You[`’\']re looking so pale. How are you feeling\\? I(?:[`’\']m feeling| feel) bad because my stomach is|You look so pale. How do you feel\\? I(?:[`’\']m feeling| feel) bad because my stomach is) hurting|(?:You[`’\']re looking so pale. How are you feeling\\? I(?:[`’\']m feeling| feel) bad because my stomach is|You look so pale. How do you feel\\? I(?:[`’\']m feeling| feel) bad because my stomach is) aching|(?:You[`’\']re looking so pale. How are you feeling\\? I(?:[`’\']m feeling| feel) bad because my stomach|You look so pale. How do you feel\\? I(?:[`’\']m feeling| feel) bad because my stomach) hurts|(?:You[`’\']re looking so pale. How are you feeling\\? I(?:[`’\']m feeling| feel) bad because my stomach|You look so pale. How do you feel\\? I(?:[`’\']m feeling| feel) bad because my stomach) aches)/gm'
  },
  {
    rus: 'Здесь так холодно! Правда? Тогда я закрою окно. Минутку',
    eng: 'It`s so cold here! Really? Then I`ll close the window. Just a minute',
    regEng: '/(?:It is so cold here! Really\\? (?:I will (?:close the window then. Just a (?:minute|moment)|then close the window. Just a (?:minute|moment))|Then I will close the window. Just a (?:minute|moment))|It[`’\']s so cold here! Really\\? (?:(?:(?:Then I(?: will|[`’\']ll)|I will then|I[`’\']ll then) close the window.|I(?: will|[`’\']ll) close the window then.) Just a minute|(?:(?:Then I(?: will|[`’\']ll)|I will then|I[`’\']ll then) close the window.|I(?: will|[`’\']ll) close the window then.) Just a moment))/gm'
  },
  {
    rus: 'Какое программное обеспечение необходимо установить прежде всего? Хмм, я не уверена. Спроси Джона, он знает о компьютерах всё',
    eng: 'What software is it necessary to install first? Hmm, I`m not sure. Ask John, he knows everything about computers',
    regEng: '/What software is it necessary to install first\\? Hmm, I(?: am|[`’\']m) not sure. Ask John, he knows (?:everything|all) about computers/gm'
  },
  {
    rus: 'Кто-то звонит в звонок. Я открою. Не переживай. Я думаю, что это моя сестра',
    eng: 'Somebody`s ringing the doorbell. I`ll get it. Don`t worry. I think that it`s my sister',
    regEng: '/(?:(?:Somebody is ringing the doorbell. I will get it. (?:Do not|Don[`’\']t) worry. I think (?:that(?: (?:that|this|it))?|this|it)|Someone is ringing the doorbell. I will get it. (?:Do not|Don[`’\']t) worry. I think (?:that(?: (?:that|this|it))?|this|it)|Somebody[`’\']s ringing the doorbell. I[`’\']ll get it. (?:Do not worry. I think (?:that )?this|Don[`’\']t worry. I think (?:that(?: (?:that|this|it))?|this|it))|Someone[`’\']s ringing the doorbell. I[`’\']ll get it. (?:Do not worry. I think (?:that )?this|Don[`’\']t worry. I think (?:that(?: (?:that|this|it))?|this|it))) is|(?:(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think that|(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think) that[`’\']s|(?:(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think that|(?:(?:(?:Somebody|Someone) is ringing the doorbell. I will|(?:Somebody|Someone)[`’\']s ringing the doorbell. I[`’\']ll) get it. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) ringing the doorbell. I(?: will|[`’\']ll) get it. Don[`’\']t) worry. I think) it[`’\']s) my sister/gm'
  },
  {
    rus: 'Что вы думаете о нём? Ну, я думаю, что у него слишком мало опыта для этой задачи, но он всегда готов учиться',
    eng: 'What do you think about him? Well, I think that he has too little experience for this task but he`s always ready to learn',
    regEng: '/What do you think about him\\? Well, I think(?: that)? he has too little experience for this task but he(?: is|[`’\']s) always ready to learn/gm'
  }
]
export default data