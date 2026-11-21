// 17-20 > 17.1 > 7
const data = [
  {
    rus: 'Прости! Прямо сейчас у меня нет времени разговаривать с тобой. Мой автобус уезжает через три минуты',
    eng: 'Sorry! Right now I have no time to talk to you. My bus leaves in three minutes',
    regEng: '/(?:(?:(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to talk) with|(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! Right now I have no) time to talk) to) you.|(?:(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to talk) with|(?:(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to speak|(?:(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have any|(?:I(?: am|[`’\']m) sorry|Sorry)! I (?:do not|don[`’\']t) have|(?:I(?: am|[`’\']m) sorry|Sorry)! I have no) time to talk) to) you right now.) My bus leaves in three minutes/gm'
  },
  {
    rus: 'Ты свободен сегодня вечером? Нет, я иду на вечеринку по случаю Дня Рождения моего брата',
    eng: 'Are you free tonight? No, I`m going to my brother`s birthday party',
    regEng: '/Are you free tonight\\? No, I(?: am|[`’\']m) going to my brother[`’\']s birthday party/gm'
  },
  {
    rus: 'Моя жена выиграла лотерею вчера! Круто! Что она собирается делать с деньгами?',
    eng: 'My wife won a lottery yesterday! Awesome! What is she going to do with the money?',
    regEng: '/(?:My wife won a lottery yesterday! (?:It is (?:awesome|cool)|It[`’\']s (?:awesome|cool)|Awesome|Cool)! What(?: is|[`’\']s)|Yesterday my wife won a lottery! (?:It is (?:awesome|cool)|It[`’\']s (?:awesome|cool)|Awesome|Cool)! What(?: is|[`’\']s)) she going to do with the money\\?/gm'
  },
  {
    rus: 'Будь осторожен! Ты прольёшь свой кофе! Чашка слишком полная!',
    eng: 'Be careful! You`re going to spill your coffee! The cup is too full',
    regEng: '/Be careful! You(?: are|[`’\']re) going to spill your coffee! The cup(?: is|[`’\']s) too full/gm'
  },
  {
    rus: 'Фильм начинается в четыре или в пять? Я не помню. Давай посмотрим на билеты',
    eng: 'Does the film start at four or five? I don`t remember. Let`s look at the tickets',
    regEng: '/Does the (?:(?:movie|film) start|(?:movie|film) begin) at four or(?: at)? five\\? I (?:do not|don[`’\']t) remember. Let(?: us|[`’\']s) look at the tickets/gm'
  },
  {
    rus: 'Ей не нравится своя нынешняя работа совсем. Поэтому она будет искать новую работу',
    eng: 'She doesn`t like her present job at all. So she`s going to look for a new job',
    regEng: '/She (?:does not|doesn[`’\']t) like her present job at all. So she(?: is|[`’\']s) going to (?:search|look) for a new job/gm'
  },
  {
    rus: 'Мэри выходит замуж в июне! Ух ты! Какие замечательные новости! Я так счастлива за неё!',
    eng: 'Mary is getting married in June! Wow! What great news! I`m so happy for her!',
    regEng: '/(?:Mary[`’\']s getting married in June! (?:Wow|Gee)! What great news! I(?: am|[`’\']m) so happy for her!|Mary is getting married in June! (?:Wow|Gee)! What great news! I[`’\']m so happy for her!)/gm'
  },
  {
    rus: 'Её сын не готовится к своим экзаменам. Он провалит, конечно же',
    eng: 'Her son isn`t getting ready for his exams. He`s going to fail of course',
    regEng: '/(?:Her son(?: is not getting ready| isn[`’\']t getting ready|[`’\']s not getting ready| is not preparing| isn[`’\']t preparing|[`’\']s not preparing) for his exams. Of course (?:He is|he[`’\']s) going to fail|Her son(?: is not getting ready| isn[`’\']t getting ready|[`’\']s not getting ready| is not preparing| isn[`’\']t preparing|[`’\']s not preparing) for his exams. He(?: is|[`’\']s) going to fail of course)/gm'
  }
]
export default data