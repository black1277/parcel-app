// 17-20 > 17.2 > 5
const data = [
  {
    rus: 'Мы идём на интересную выставку в субботу. Ты пойдёшь с нами? Конечно! Я присоединюсь к вам с большим удовольствием!',
    eng: 'We`re going to an interesting exhibition on Saturday. Will you go with us? Of course! I`ll join you with great pleasure!',
    regEng: '/We(?: are|[`’\']re) going to an interesting exhibition on Saturday. Will you (?:come|go) with us\\? Of course! I(?: will|[`’\']ll) join you with great pleasure!/gm'
  },
  {
    rus: 'Нашей дочке исполнится шестьчерез месяц. Мы подарим ей новый компьютер в качестве подарка на день рождение',
    eng: 'Our daughter will turn six in a month. We`re going to give her a new computer as a birthday present',
    regEng: '/Our daughter will turn six in a month. We(?: are|[`’\']re) going to give her a new computer as a birthday (?:present|gift)/gm'
  },
  {
    rus: 'В небе чёрные облака. Я думаю, что пойдёт дождь скоро',
    eng: 'There are black clouds in the sky. I think that it`s going to rain soon',
    regEng: '/There are black clouds in the sky. I think (?:(?:(?:(?:that it(?: is|[`’\']s)|it is|it[`’\']s) soon|(?:that )?soon it is|(?:that )?soon it[`’\']s) going to|(?:that it(?: will|[`’\']ll)|it will|it[`’\']ll) soon|(?:that )?soon it will|(?:that )?soon it[`’\']ll) rain|(?:(?:that it(?: is|[`’\']s)|it is|it[`’\']s) going to|(?:that )?it will|that it[`’\']ll|it[`’\']ll) rain soon)/gm'
  },
  {
    rus: 'Кто хочет ответить на этот вопрос? Я отвечу на него!',
    eng: 'Who wants to answer this question? I`ll answer it!',
    regEng: '/Who wants to (?:reply to|answer) this question\\? I(?: will|[`’\']ll) answer it!/gm'
  },
  {
    rus: 'Где твой брат? Я не знаю. Я собираюсь позвонить ему сейчас. Я надеюсь, что он вернётся скоро',
    eng: 'Where is your brother? I don`t know. I`m going to call him now. I hope that he`ll be back soon',
    regEng: '/Where is your brother\\? I (?:(?:(?:(?:(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope) he will|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope) he[`’\']ll) soon|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope) soon he will|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope) soon he[`’\']ll) come|(?:(?:(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope) he will|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope) he[`’\']ll) soon|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope) soon he will|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope) soon he[`’\']ll) be) back|(?:(?:(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope) he will|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope) he[`’\']ll) come|(?:(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I am) going to call him now. I hope) he will|(?:(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope that|(?:do not know. I(?: am|[`’\']m)|don[`’\']t know. I[`’\']m) going to call him now. I hope) he[`’\']ll) be) back soon)/gm'
  },
  {
    rus: 'Ты думаешь, что экзамен будет сложным? Нет, я думаю, что он будет лёгким, но всё же необходимо подготовиться к нему',
    eng: 'Do you think that the exam will be difficult? No, I think that it`ll be easy, but it`s still necessary to get ready for it',
    regEng: '/Do you think (?:(?:(?:(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but it is|(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but it[`’\']s) still|(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but still it is|(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but still it[`’\']s) necessary to get ready|(?:(?:(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but it is|(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but it[`’\']s) still|(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but still it is|(?:(?:that )?the exam will be difficult\\? No, I think that it will|(?:that )?the exam will be difficult\\? No, I think that it[`’\']ll) be easy, but still it[`’\']s) necessary to prepare) for it/gm'
  },
  {
    rus: 'Ты поможешь мне решить эту проблему? Не беспокойся. Тебе не нужно ничего делать вообще. Я позабочусь обо всём',
    eng: 'Will you help me solve this problem? Don`t worry. You don`t need to do anything at all. I`ll take care of everything!',
    regEng: '/Will you help me (?:(?:(?:(?:to )?solve this problem\\? Do not be worried.|(?:to )?solve this problem\\? Do not worry.) You do not need to do anything|(?:(?:to )?solve this problem\\? Do not be worried.|(?:to )?solve this problem\\? Do not worry.) You need to do nothing) at all. I will|(?:(?:(?:to )?solve this problem\\? Don[`’\']t be worried.|(?:to )?solve this problem\\? Don[`’\']t worry.) You don[`’\']t need to do anything|(?:(?:to )?solve this problem\\? Don[`’\']t be worried.|(?:to )?solve this problem\\? Don[`’\']t worry.) You need to do nothing) at all. I[`’\']ll) take care of everything!/gm'
  },
  {
    rus: 'Я обещаю, что сделаю всё от меня зависящее, чтобы помочь вам добиться успеха! Вам просто нужно сохранять спокойствие и всегда быть готовыми учиться',
    eng: 'I promise that I`ll do my best to help you succeed! You just need to keep calm and always be ready to learn',
    regEng: '/I promise that I(?: will|[`’\']ll) do my best to help you (?:achieve success|succeed)! You just need to keep calm and(?: to)? always be ready to learn/gm'
  }
]
export default data