// 17-20 > 19.2 > 9
const data = [
  {
    rus: 'Я обычно очень сонный по утрам. Мне нелегко встать. Вот почему я часто просыпаю работу',
    eng: 'I`m usually very sleepy in the mornings. It`s not easy for me to get up. That`s why I often oversleep for work',
    regEng: '/(?:I am usually very sleepy in the mornings?. It is not easy for me to get up. (?:That|This) is why I often oversleep for work|I[`’\']m usually very sleepy in the (?:mornings?. It isn[`’\']t|mornings. It[`’\']s not) easy for me to get up. That[`’\']s why I often oversleep for work)/gm'
  },
  {
    rus: 'Ты наслаждаешься вечеринкой? Я не уверен. Музыка звучит слишком громко для меня и мне совсем не нравится еда. Вечеринка средняя, в лучшем случае',
    eng: 'Are you enjoying the party? - I`m not sure. The music sounds too loud for me and I don`t like the food at all. The party is average at best',
    regEng: '/(?:(?:Are you enjoying the party\\? (?:- I[`’\']m|I am|I[`’\']m)|Do you enjoy the party\\? I(?: am|[`’\']m)) not sure. The music sounds too loud for me and I don[`’\']t|(?:Are you enjoying the party\\? I(?: am|[`’\']m)|Do you enjoy the party\\? I(?: am|[`’\']m)) not sure. The music sounds too loud for me and I do not) like the food at all. The party is average at best/gm'
  },
  {
    rus: 'Мой дядя приезжает ко мне в гости в этом месяце! Ты придёшь на мой День Рождения, чтобы познакомиться с ним? Это чудесные новости! Конечно! Я приду с большим удовольствием!',
    eng: 'My uncle is coming to visit me this month! Will you come to my birthday party to meet him? That`s wonderful news! Of course! I`ll come with great pleasure!',
    regEng: '/My uncle is coming to visit me this month! Will you come to my birthday party to meet him\\? (?:(?:That|This|It) is wonderful news! Of course! I will|(?:This is|(?:That|It)[`’\']s) wonderful news! Of course! I[`’\']ll) come with great pleasure!/gm'
  },
  {
    rus: 'Он работал, когда ты позвонил ему. Вот почему он не ответил. В следующий раз просто пошли ему сообщение',
    eng: 'He was working when you called him. That`s why he didn`t answer. Next time just send him a message',
    regEng: '/He was working when you called him. (?:(?:That is|This is|That[`’\']s) why he (?:did not|didn[`’\']t) answer. Next time just send him a message|(?:That is|This is|That[`’\']s) why he (?:did not|didn[`’\']t) answer. Just send him a message next time)/gm'
  },
  {
    rus: 'Ты обычно много соли добавляешь в еду? Я обычно не много соли добавляю, но я кладу много сахара в сладкие блюда, потому что я сладкоежка',
    eng: 'Do you usually add much salt to food? I don`t usually add much salt, but I put a lot of sugar in sweet dishes, because I have a sweet tooth',
    regEng: '/Do you usually add (?:a lot of salt to food\\? I (?:do not|don[`’\']t) usually add a lot of salt, but I put (?:a lot|lots)|lots of salt to food\\? I (?:do not|don[`’\']t) usually add a lot of salt, but I put (?:a lot|lots)|much salt to food\\? I (?:do not|don[`’\']t) usually add much salt, but I put (?:a lot|lots)) of sugar in sweet dishes, because I have a sweet tooth/gm'
  },
  {
    rus: 'Я собираюсь пойти на прогулку. Ты присоединишься ко мне? Нет, на улице слишком холодно и идёт дождь. Я останусь внутри',
    eng: 'I`m going to go for a walk. Will you join me? - No, it`s too cold outside and it`s raining. I`ll stay inside',
    regEng: '/(?:I am going (?:(?:to go )?for a walk. Will you join me\\? No, it is too cold outside and it is|(?:to go )?for a walk. Will you join me\\? No, it[`’\']s too cold outside and it[`’\']s) raining. I will stay inside|I[`’\']m going (?:(?:(?:to go )?for a walk. Will you join me\\? No, it is|(?:to go )?for a walk. Will you join me\\? No, it[`’\']s) too cold outside and it[`’\']s raining. I will|(?:to go for a walk. Will you join me\\?(?: -)?|for a walk. Will you join me\\?) No, it[`’\']s too cold outside and it[`’\']s raining. I[`’\']ll) stay inside)/gm'
  },
  {
    rus: 'Когда ты в последний раз разговаривал с тем человеком и что он сказал обо мне? Я в последний раз разговаривал с ним три дня назад, и он не сказал ничего особенного о тебе',
    eng: 'When did you last talk to that person and what did he say about me? I last talked to him three days ago and he didn`t say anything special about you',
    regEng: '/When did you last talk to that person and what did he say about me\\? I last talked to him three days ago and he (?:did not|didn[`’\']t) say anything special about you/gm'
  },
  {
    rus: 'Замечательная работа! Молодец! Ты справляешься просто превосходно! Продолжай в том же духе и никогда не сдавайся, потому что оно того стоит! =',
    eng: 'Great job! Well done! You`re doing just fine! Keep it up and never give up, because it`s worth it! =)',
    regEng: '/(?:Great job! Well done! You[`’\']re doing just fine! Keep it up and never give up, because it[`’\']s worth it! =\\)|Great job! Well done! You(?: are|[`’\']re) doing just fine! Keep it up and never give up, because it(?: is|[`’\']s) worth it!)/gm'
  }
]
export default data