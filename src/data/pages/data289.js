// 17-20 > 17.1 > 9
const data = [
  {
    rus: 'Я чувствую себя уставшей. Я думаю, что пойду спать скоро',
    eng: 'I feel tired. I think that I`ll go to bed soon',
    regEng: '/(?:(?:I (?:(?:am feeling|feel) tired. I think (?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) soon|(?:am feeling|feel) tired. I think(?: that)? soon I will|(?:am feeling|feel) tired. I think(?: that)? soon I[`’\']ll) go to|I[`’\']m feeling tired. I think (?:(?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) soon|(?:that )?soon I will|(?:that )?soon I[`’\']ll) go to) sleep|(?:I(?: am|[`’\']m) feeling|I feel) tired. I think (?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) go to (?:sleep|bed) soon|(?:I (?:(?:am feeling|feel) tired. I think (?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) soon|(?:am feeling|feel) tired. I think(?: that)? soon I will|(?:am feeling|feel) tired. I think(?: that)? soon I[`’\']ll) go to|I[`’\']m feeling tired. I think (?:(?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) soon|(?:that )?soon I will|(?:that )?soon I[`’\']ll) go to) bed)/gm'
  },
  {
    rus: 'Тот мужчина не смотрит, куда идёт. Он упадёт!',
    eng: 'That man isn`t looking where he`s going. He`s going to fall!',
    regEng: '/That man(?: is not| isn[`’\']t|[`’\']s not) looking where he(?: is|[`’\']s) going. He(?: is|[`’\']s) going to fall!/gm'
  },
  {
    rus: 'Я обещаю, что я никому не расскажу от твоём секрете. Пожалуйста, доверься мне! Моя цель – помочь тебе',
    eng: 'I promise that I won`t tell anybody about your secret. Please trust me! My goal is to help you',
    regEng: '/I promise (?:(?:(?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) not|(?:that )?I won[`’\']t) tell anybody|(?:that I(?: will|[`’\']ll)|I will|I[`’\']ll) tell nobody) about your secret. Please trust me! My goal is to help you/gm'
  },
  {
    rus: 'Твои ступни такие грязные! Да, я знаю. Я собираюсь помыть их. Где мыло?',
    eng: 'Your feet are so dirty! Yes, I know. I`m going to wash them. Where is the soap?',
    regEng: '/Your feet are so dirty! Yes, I know. I(?: am|[`’\']m) going to wash them. Where is the soap\\?/gm'
  },
  {
    rus: 'Мы не думаем, что она придёт на встречу. Она слишком занята на этой неделе',
    eng: 'We don`t think that she`ll come to the meeting. She`s too busy this week',
    regEng: '/We (?:(?:do not|don[`’\']t) think (?:that she(?: will|[`’\']ll)|she will|she[`’\']ll) come to the meeting. She(?: is|[`’\']s) too busy this week|(?:do not|don[`’\']t) think (?:that she(?: will|[`’\']ll)|she will|she[`’\']ll) come to the meeting. This week she(?: is|[`’\']s) too busy)/gm'
  },
  {
    rus: 'Солнце сияет и небо ясное. Так что дождь не пойдёт. Нет никакой нужды брать зонтик',
    eng: 'The sun is shining and the sky is clear. So it`s not going to rain. There`s no need to take the umbrella',
    regEng: '/The sun(?: is shining and the sky is clear. So it is not going to rain. There is not any need to take the| is shining and the sky is clear. So it isn[`’\']t going to rain. There is not any need to take the| is shining and the sky is clear. So it[`’\']s not going to rain. There is not any need to take the| is shining and the sky is clear. So it is not going to rain. There isn[`’\']t any need to take the|[`’\']s shining and the sky is clear. So it is not going to rain. There is not any need to take the| is shining and the sky is clear. So it is not going to rain. There is not any need to take an| is shining and the sky is clear. So it[`’\']s not going to rain. There isn[`’\']t any need to take the|[`’\']s shining and the sky is clear. So it isn[`’\']t going to rain. There is not any need to take the|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There is not any need to take the|[`’\']s shining and the sky is clear. So it is not going to rain. There isn[`’\']t any need to take the| is shining and the sky is clear. So it isn[`’\']t going to rain. There is not any need to take an| is shining and the sky is clear. So it[`’\']s not going to rain. There is not any need to take an| is shining and the sky is clear. So it is not going to rain. There isn[`’\']t any need to take an|[`’\']s shining and the sky is clear. So it is not going to rain. There is not any need to take an|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There isn[`’\']t any need to take the| is shining and the sky is clear. So it[`’\']s not going to rain. There isn[`’\']t any need to take an|[`’\']s shining and the sky is clear. So it isn[`’\']t going to rain. There is not any need to take an|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There is not any need to take an|[`’\']s shining and the sky is clear. So it is not going to rain. There isn[`’\']t any need to take an|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There isn[`’\']t any need to take an| is shining and the sky is clear. So it is not going to rain. There is no need to take the| is shining and the sky is clear. So it isn[`’\']t going to rain. There is no need to take the| is shining and the sky is clear. So it[`’\']s not going to rain. There is no need to take the| is shining and the sky is clear. So it is not going to rain. There[`’\']s no need to take the|[`’\']s shining and the sky is clear. So it is not going to rain. There is no need to take the| is shining and the sky is clear. So it is not going to rain. There is no need to take an| is shining and the sky is clear. So it[`’\']s not going to rain. There[`’\']s no need to take the|[`’\']s shining and the sky is clear. So it isn[`’\']t going to rain. There is no need to take the|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There is no need to take the|[`’\']s shining and the sky is clear. So it is not going to rain. There[`’\']s no need to take the| is shining and the sky is clear. So it isn[`’\']t going to rain. There is no need to take an| is shining and the sky is clear. So it[`’\']s not going to rain. There is no need to take an| is shining and the sky is clear. So it is not going to rain. There[`’\']s no need to take an|[`’\']s shining and the sky is clear. So it is not going to rain. There is no need to take an|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There[`’\']s no need to take the| is shining and the sky is clear. So it[`’\']s not going to rain. There[`’\']s no need to take an|[`’\']s shining and the sky is clear. So it isn[`’\']t going to rain. There is no need to take an|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There is no need to take an|[`’\']s shining and the sky is clear. So it is not going to rain. There[`’\']s no need to take an|[`’\']s shining and the sky is clear. So it[`’\']s not going to rain. There[`’\']s no need to take an) umbrella/gm'
  },
  {
    rus: 'Ты позвонил маме утром? О, я забыл это сделать. Я позвоню ей сейчас',
    eng: 'Did you call Mom in the morning? Oh, I forgot to do that. I`ll call her now',
    regEng: '/Did you (?:phone (?:Mother|Mom|Mum) in the morning\\? Oh, I forgot to do (?:(?:that.|this.|it.) I will|(?:that.|this.|it.) I[`’\']ll) phone|call (?:Mother|Mom|Mum) in the morning\\? Oh, I forgot to do (?:(?:that.|this.|it.) I will|(?:that.|this.|it.) I[`’\']ll) call) her now/gm'
  },
  {
    rus: 'Вы поможете мне с моим телефоном, пожалуйста? Да, конечно. Я починю его для Вас!',
    eng: 'Will you help me with my phone, please? Yes, of course. I`ll fix it for you!',
    regEng: '/Will you help me with my phone, please\\? Yes, of course. I(?: will repair|[`’\']ll repair| will fix|[`’\']ll fix) it for you!/gm'
  }
]
export default data