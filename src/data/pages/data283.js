// 15-16 > 16.2 > 7
const data = [
  {
    rus: 'За дверью кто-то есть. Я думаю, что это твой друг',
    eng: 'There`s somebody behind the door. I think that it`s your friend',
    regEng: '/(?:There is somebody behind the door. I think (?:(?:that(?: (?:that|this|it))?|this|it) is|that it[`’\']s|it[`’\']s) your friend|There[`’\']s somebody behind the door. I think (?:that (?:that is|this is|that[`’\']s|it is|it[`’\']s|is)|this is|that[`’\']s|it is|it[`’\']s) your friend)/gm'
  },
  {
    rus: 'В этом здании никого нет. Оно пустое',
    eng: 'There isn`t anybody in this building. It`s empty',
    regEng: '/There (?:is not|isn[`’\']t) anybody in this building. It(?: is|[`’\']s) empty/gm'
  },
  {
    rus: 'Нет никого, с кем я хочу говорить об этих вещах. Они слишком личные',
    eng: 'There`s nobody who I want to talk to about these things. They`re too personal',
    regEng: '/(?:There is nobody (?:(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They are|(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They[`’\']re) too personal|There[`’\']s nobody (?:(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They are|(?:(?:whom|that|who) I want to (?:speak|talk) with|(?:with|to) whom I want to speak|with whom I want to talk|(?:(?:whom|that|who) I want to speak|(?:(?:whom|that|who) I want to|to whom I want) talk) to) about these things. They[`’\']re) too personal)/gm'
  },
  {
    rus: 'Есть ли кто-нибудь, с кем тебе нужно встретиться днём? Да, я встречаюсь со своей сестрой',
    eng: 'Is there anybody who you need to meet with in the afternoon? Yes, I`m meeting with my sister',
    regEng: '/Is there (?:(?:(?:(?:anybody (?:that|whom|who)|anyone (?:that|whom|who)) you need to meet with|(?:anybody|anyone) with whom you need to meet) in the afternoon\\? Yes, I am|(?:(?:anybody whom?|anyone whom?) you need to meet with|(?:anybody|anyone) with whom you need to meet) in the afternoon\\? Yes, I[`’\']m) meeting with|(?:anybody whom?|anyone whom?) you need to meet in the afternoon\\? Yes, I(?: am|[`’\']m) meeting) my sister/gm'
  },
  {
    rus: 'Он ест что-то сладкое каждый день, потому что он сладкоежка',
    eng: 'He eats something sweet every day because he has a sweet tooth',
    regEng: '/(?:He eats something sweet every day|Every day he eats something sweet) because he has a sweet tooth/gm'
  },
  {
    rus: 'Он никогда не ест ничего солёного, потому что он думает, что соль не полезна',
    eng: 'He never eats anything salty because he thinks that salt isn`t healthy',
    regEng: '/He never eats anything salty because he thinks (?:(?:that salt(?: is|[`’\']s)|salt is|salt[`’\']s) not|(?:that )?salt isn[`’\']t) healthy/gm'
  },
  {
    rus: 'Он не ест ничего острого, потому что у него очень чувствительный желудок',
    eng: 'He eats nothing spicy because he has a very sensitive stomach',
    regEng: ''
  },
  {
    rus: 'Ест ли он что-нибудь кислое? Нет, он просто ненавидит кислую еду',
    eng: 'Does he eat anything sour? No, he just hates sour food',
    regEng: ''
  }
]
export default data