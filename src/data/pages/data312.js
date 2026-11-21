// 17-20 > 17.4 > 13
const data = [
  {
    rus: 'Нет ничего неправильного с тем человеком. Он просто другой',
    eng: 'There`s nothing wrong with that person. He`s just different',
    regEng: '/(?:There (?:(?:(?:is not|isn[`’\']t) anything|is nothing) wrong with that person. He is|(?:isn[`’\']t anything|is nothing) wrong with that person. He[`’\']s) just different|There[`’\']s (?:not anything|nothing) wrong with that person. He(?: is|[`’\']s) just different)/gm'
  },
  {
    rus: 'О чём ты думаешь? О, я мечтаю о своём следующем отпуске',
    eng: 'What are you thinking about? Oh, I`m dreaming about my next holiday',
    regEng: '/What are you thinking about\\? Oh, I(?: am|[`’\']m) dreaming about my next (?:vacation|holiday)/gm'
  },
  {
    rus: 'Чьи то игрушки? То игрушки моих детей. Я купила их вчера',
    eng: 'Whose toys are those? Those are my children`s toys. I bought them yesterday',
    regEng: '/Whose toys are those\\? Those are my children[`’\']s toys. (?:I bought them yesterday|Yesterday I bought them)/gm'
  },
  {
    rus: 'Слушай! Твой телефон звонит. Нет, то не мой, то твой',
    eng: 'Listen! Your phone is ringing. No, that`s not mine, that`s yours',
    regEng: '/Listen! Your phone(?: is ringing. No, that is not mine, that is| is ringing. No, this is not mine, this is| is ringing. No, that isn[`’\']t mine, that is|[`’\']s ringing. No, that is not mine, that is| is ringing. No, this isn[`’\']t mine, this is|[`’\']s ringing. No, this is not mine, this is| is ringing. No, that[`’\']s not mine, that[`’\']s| is ringing. No, that isn[`’\']t mine, that[`’\']s|[`’\']s ringing. No, that isn[`’\']t mine, that is|[`’\']s ringing. No, this isn[`’\']t mine, this is|[`’\']s ringing. No, that[`’\']s not mine, that[`’\']s|[`’\']s ringing. No, that isn[`’\']t mine, that[`’\']s| is ringing. No, it is not mine, it is| is ringing. No, it isn[`’\']t mine, it is|[`’\']s ringing. No, it is not mine, it is| is ringing. No, it[`’\']s not mine, it[`’\']s| is ringing. No, it isn[`’\']t mine, it[`’\']s|[`’\']s ringing. No, it isn[`’\']t mine, it is|[`’\']s ringing. No, it[`’\']s not mine, it[`’\']s|[`’\']s ringing. No, it isn[`’\']t mine, it[`’\']s) yours/gm'
  },
  {
    rus: 'Нет никого, с кем я хочу говорить об этих вещах. Они слишком личные',
    eng: 'There`s nobody who I want to talk to about these things. They`re too personal',
    regEng: '/(?:There (?:(?:(?:is (?:not anybody whom?|nobody (?:whom|that|who))|isn[`’\']t anybody whom?) I want to (?:speak|talk) with|(?:is (?:not anybody (?:with|to)|nobody (?:with|to))|isn[`’\']t anybody (?:with|to)) whom I want to speak|(?:(?:is not|isn[`’\']t) anybody|is nobody) with whom I want to talk|(?:(?:is (?:not anybody whom?|nobody (?:whom|that|who))|isn[`’\']t anybody whom?) I want to speak|(?:(?:is (?:not anybody who|nobody (?:whom|that|who))|isn[`’\']t anybody who) I want to|is nobody to whom I want) talk) to) about these things. They are|(?:(?:is (?:not anybody whom?|nobody (?:whom|that|who))|isn[`’\']t anybody whom?) I want to (?:speak|talk) with|(?:is (?:not anybody (?:with|to)|nobody (?:with|to))|isn[`’\']t anybody (?:with|to)) whom I want to speak|(?:(?:is not|isn[`’\']t) anybody|is nobody) with whom I want to talk|(?:(?:is (?:not anybody whom?|nobody (?:whom|that|who))|isn[`’\']t anybody whom?) I want to speak|(?:(?:is (?:not anybody who|nobody (?:whom|that|who))|isn[`’\']t anybody who) I want to|is nobody to whom I want) talk) to) about these things. They[`’\']re) too personal|There[`’\']s (?:(?:(?:not anybody whom?|nobody (?:whom|that|who)) I want to (?:speak|talk) with|(?:not anybody (?:with|to)|nobody (?:with|to)) whom I want to speak|(?:not anybody|nobody) with whom I want to talk|(?:(?:not anybody whom?|nobody (?:whom|that|who)) I want to speak|(?:(?:not anybody who|nobody (?:whom|that|who)) I want to|nobody to whom I want) talk) to) about these things. They are|(?:(?:not anybody whom?|nobody (?:whom|that|who)) I want to (?:speak|talk) with|(?:not anybody (?:with|to)|nobody (?:with|to)) whom I want to speak|(?:not anybody|nobody) with whom I want to talk|(?:(?:not anybody whom?|nobody (?:whom|that|who)) I want to speak|(?:(?:not anybody who|nobody (?:whom|that|who)) I want to|nobody to whom I want) talk) to) about these things. They[`’\']re) too personal)/gm'
  }
]
export default data