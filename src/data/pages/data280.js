// 15-16 > 16.2 > 4
const data = [
  {
    rus: 'Почему моя спина часто болит, когда я тренируюсь? Ну, я не уверен, но я думаю, что у тебя не очень серьёзная проблема',
    eng: 'Why does my back often ache when I exercise? Well, I`m not sure but I think that you don`t have a very serious problem',
    regEng: '/Why does my back often (?:ahurt che when I exercise\\? Well, I[`’\']m not sure but I think that you do not|ache when I (?:exercise|practice|train)\\? Well, I(?: am|[`’\']m) not sure but I think(?: that)? you (?:do not|don[`’\']t)|hurt when I (?:exercise|practice|train)\\? Well, I(?: am|[`’\']m) not sure but I think(?: that)? you (?:do not|don[`’\']t)) have a very serious problem/gm'
  },
  {
    rus: 'Они кажутся такими взволнованными. О чём они говорят? Они обсуждают свою следующую поездку',
    eng: 'They seem so excited. What are they talking about? They`re discussing their next trip',
    regEng: '/They seem so excited. What are they talking about\\? They(?: are|[`’\']re) discussing their next trip/gm'
  },
  {
    rus: 'Я чувствую себя замечательно, потому что я сдала все свои экзамены на прошлой неделе. Так что давай отпразднуем это вместе! Это звучит классно!',
    eng: 'I`m feeling great because I passed all my exams last week. So let`s celebrate it together! Sounds cool!',
    regEng: '/(?:I(?: am|[`’\']m) feeling|I feel) great because I passed all my exams last week. So let(?: us|[`’\']s) celebrate (?:this|that|it) together! (?:(?:This|That|It) sounds|Sounds) cool!/gm'
  },
  {
    rus: 'Ты всегда выглядишь так безупречно! Ну, нет никаких особых секретов. Это просто потому, что я всегда чувствую себя чудесно',
    eng: 'You always look so impeccable! Well, there are no special secrets. That`s just because I always feel wonderful',
    regEng: '/You always look so impeccable! Well, there (?:are (?:not any|no)|aren[`’\']t any) special secrets. (?:(?:That|This|It) is|(?:That|It)[`’\']s) just because I always feel wonderful/gm'
  },
  {
    rus: 'Вы наслаждаетесь вечеринкой? О, да, здесь так много интересных людей',
    eng: 'Are you enjoying the party? Oh yes, there are so many interesting people here',
    regEng: '/(?:Are you enjoying|Do you enjoy) the party\\? Oh yes, there are so many interesting people here/gm'
  },
  {
    rus: 'Что вы думаете о своей жизни, в общем? Я счастливый человек. Я наслаждаюсь каждым моментом',
    eng: 'What do you think about your life in general? I`m a happy person. I enjoy every moment',
    regEng: '/What do you think about your life in general\\? I(?: am|[`’\']m) a happy person. I enjoy every moment/gm'
  },
  {
    rus: 'Почему ты выглядишь таким расстроенным? Ты чувствуешь себя нормально? Нет, моя голова болит. У тебя есть какие-нибудь обезболивающие?',
    eng: 'Why are you looking so upset? Are you feeling alright? No, my head is hurting. Do you have any painkillers?',
    regEng: '/Why (?:are you looking so upset\\? (?:Are you feeling (?:alright\\? No, my head (?:(?:(?:is hurting.|is aching.|hurts.|aches.) Do you|is aching. Do) have any|(?:is hurting.|hurts.|aches.) Do you have)|okay\\? No, my head (?:is hurting.|is aching.|hurts.|aches.) Do you have(?: any)?|OK\\? No, my head (?:is hurting.|is aching.|hurts.|aches.) Do you have(?: any)?)|Do you feel (?:alright|okay|OK)\\? No, my head (?:is hurting.|is aching.|hurts.|aches.) Do you have(?: any)?)|do you look so upset\\? (?:Are you feeling (?:alright|okay|OK)\\? No, my head (?:is hurting.|is aching.|hurts.|aches.) Do you have(?: any)?|Do you feel (?:alright|okay|OK)\\? No, my head (?:is hurting.|is aching.|hurts.|aches.) Do you have(?: any)?)) painkillers\\?/gm'
  },
  {
    rus: 'Есть кое-какие удивительные новости, которыми я хочу поделиться с тобой. звучит захватывающе! Я вся внимание!',
    eng: 'There`s some amazing news that I want to share with you! Sounds exciting! I`m all ears!',
    regEng: '/There(?: is|[`’\']s) some amazing news(?: that)? I want to share with you! (?:(?:This|That|It) sounds|Sounds) exciting! I(?: am|[`’\']m) all ears!/gm'
  }
]
export default data