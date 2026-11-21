// 17-20 > 18.2 > 4
const data = [
  {
    rus: 'Ты думаешь, что Джон и Джейн поженятся? Ну, я не уверен насчёт этого. Их отношения сложные. Посмотрим',
    eng: 'Do you think that John and Jane will get married? Well, I`m not sure about that. Their relationship is complicated. We`ll see',
    regEng: '/Do you think that John and Jane (?:are going to|will) get married\\? Well, I(?: am|[`’\']m) not sure about (?:that.|this.|it.) Their relationship is (?:complicated. We(?: will|[`’\']ll)|difficult. We(?: will|[`’\']ll)) see/gm'
  },
  {
    rus: 'Бабуля каждый день смотрит это шоу. Она будет смотреть его завтра снова',
    eng: 'Grandma watches this show every day. She`ll watch it tomorrow again',
    regEng: '/(?:(?:(?:Grandmother|Grandma) watches this show every day. She(?: will|[`’\']ll) watch it tomorrow|(?:Grandmother|Grandma) watches this show every day. Tomorrow She(?: will|[`’\']ll) watch it) again|(?:Grandmother|Grandma) watches this show every day. She(?: will|[`’\']ll) watch it again tomorrow)/gm'
  },
  {
    rus: 'Я такой сонный. Мне нужна энергия. Я попью кофе',
    eng: 'I`m so sleepy. I need energy. I`m going to drink some coffee',
    regEng: '/I(?: am|[`’\']m) so sleepy. I need energy. I(?: am|[`’\']m) going to drink some coffee/gm'
  },
  {
    rus: 'Наши родственники приезжают к нам в гости в этом месяце. Мы в последний раз видели их четыре года назад. Мы будем так веселиться вместе!',
    eng: 'Our relatives are coming to visit us this month. We last saw them four years ago. We`re going to have so much fun together!',
    regEng: '/(?:Our relatives are coming to visit us this month. We (?:(?:last (?:time )?saw them|saw them last time) four years ago. We are|(?:last (?:time )?saw them|saw them last time) four years ago. We[`’\']re)|This month our relatives are coming to visit us. We (?:(?:last (?:time )?saw them|saw them last time) four years ago. We are|(?:last (?:time )?saw them|saw them last time) four years ago. We[`’\']re)) going to have so much fun together!/gm'
  },
  {
    rus: 'Ты сделаешь мне одолжение? Конечно, я сделаю всё возможное. С чем тебе нужно, чтобы я помог тебе?',
    eng: 'Will you do me a favour? Of course, I`ll do my best. What do you need me to help you with?',
    regEng: '/Will you do me a favou?r\\? Of course, I(?: will|[`’\']ll) do my best. What do you need me to help you with\\?/gm'
  },
  {
    rus: 'Когда начинается занятие? О, не переживай. У тебя ещё осталось кое-какое время, чтобы закончить свою домашнюю работу',
    eng: 'When does the class start? Oh, don`t worry. You still have some time left to finish your homework',
    regEng: '/When does the class start\\? Oh, (?:do not|don[`’\']t) worry. You still have some time left to finish your homework/gm'
  },
  {
    rus: 'Что ты будешь делать после работы сегодня? Я встречаюсь со своим новым знакомым, чтобы обсудить кое-какие бизнес идеи',
    eng: 'What are you going to do after work today? I`m meeting with my new acquaintance to discuss some business ideas',
    regEng: '/What are you going to do after work today\\? I(?: am going to meet|[`’\']m going to meet| am meeting|[`’\']m meeting) with my new acquaintance to discuss some business ideas/gm'
  },
  {
    rus: 'У меня серьёзные сомнения относительно тебя. Весь мой предыдущий опыт говорит мне, что неразумно доверять тебе. Правда? Нет, пожалуйста! Я обещаю, что не разочарую тебя!',
    eng: 'I have serious doubts about you. All my previous experience tells me that it`s not reasonable to trust you. Really? No, please! I promise that I won`t disappoint you!',
    regEng: '/I have serious doubts about you. All my previous experience tells me that it(?:[`’\']s not reasonable to trust you. Really\\? No, please! I promise that I will not| is unreasonable to trust you. Really\\? No, please! I promise that I will not|[`’\']s unreasonable to trust you. Really\\? No, please! I promise that I will not| is not reasonable to trust you. Really\\? No, please! I promise that I won[`’\']t|[`’\']s not reasonable to trust you. Really\\? No, please! I promise that I won[`’\']t| is unreasonable to trust you. Really\\? No, please! I promise that I won[`’\']t|[`’\']s unreasonable to trust you. Really\\? No, please! I promise that I won[`’\']t|[`’\']s not reasonable to trust you. Really\\? No, please! I promise I will not| is unreasonable to trust you. Really\\? No, please! I promise I will not|[`’\']s unreasonable to trust you. Really\\? No, please! I promise I will not| is not reasonable to trust you. Really\\? No, please! I promise I won[`’\']t|[`’\']s not reasonable to trust you. Really\\? No, please! I promise I won[`’\']t| is unreasonable to trust you. Really\\? No, please! I promise I won[`’\']t|[`’\']s unreasonable to trust you. Really\\? No, please! I promise I won[`’\']t) disappoint you!/gm'
  }
]
export default data