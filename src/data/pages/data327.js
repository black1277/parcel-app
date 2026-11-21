// 17-20 > 18.2 > 3
const data = [
  {
    rus: 'Послушай! Кто-то стучится в дверь. Не беспокойся! Я открою!',
    eng: 'Listen! Somebody`s knocking on the door. Don`t worry! I`ll get it!',
    regEng: '/Listen! (?:(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) knocking on the door. (?:Do not|Don[`’\']t) worry! I will|(?:(?:Somebody is|Somebody[`’\']s|Someone is) knocking on the door. Do not|(?:(?:Somebody|Someone) is|(?:Somebody|Someone)[`’\']s) knocking on the door. Don[`’\']t) worry! I[`’\']ll) get it!/gm'
  },
  {
    rus: 'Моя дочь болеет. Вот почему она не идёт в школу на следующей неделе',
    eng: 'My daughter is sick. That`s why she`s not going to school next week',
    regEng: '/(?:My daughter(?: is sick. That is| is sick. This is| is sick. That[`’\']s|[`’\']s sick. That is|[`’\']s sick. This is| is ill. That is| is ill. This is|[`’\']s sick. That[`’\']s| is ill. That[`’\']s|[`’\']s ill. That is|[`’\']s ill. This is|[`’\']s ill. That[`’\']s) why she(?: is not|[`’\']s not| isn[`’\']t) going to(?: go to)? school next week|My daughter(?: is sick. That is| is sick. This is| is sick. That[`’\']s|[`’\']s sick. That is|[`’\']s sick. This is| is ill. That is| is ill. This is|[`’\']s sick. That[`’\']s| is ill. That[`’\']s|[`’\']s ill. That is|[`’\']s ill. This is|[`’\']s ill. That[`’\']s) why next week she(?: is not|[`’\']s not| isn[`’\']t) going to(?: go to)? school)/gm'
  },
  {
    rus: 'Я так запутался! Ты знаешь, как пользоваться этим устройством? Не парься по этому поводу, я помогу тебе через несколько минут. Всё будет в порядке! У меня много опыта в этой области',
    eng: 'I`m so confused! Do you know how to use this device? Take it easy, I`ll help you in a few minutes. Everything`s going to be alright! I have a lot of experience in this field',
    regEng: '/(?:(?:I am so confused! Do you know how to use this device\\? Take it easy, I will help you in a few minutes. Everything(?:[`’\']ll be all right! Take it easy, I have a lot| is going to be all right! I have a lot| is going to be all right! I have lots|[`’\']s going to be all right! I have lots| is going to be alright! I have a lot|[`’\']s going to be alright! I have a lot| is going to be alright! I have lots|[`’\']s going to be alright! I have lots| is going to be fine! I have a lot| is going to be okay! I have a lot|[`’\']s going to be fine! I have a lot|[`’\']s going to be okay! I have a lot| is going to be fine! I have lots| is going to be okay! I have lots|[`’\']s going to be fine! I have lots|[`’\']s going to be okay! I have lots| is going to be OK! I have a lot| will be all right! I have a lot|[`’\']s going to be OK! I have a lot| is going to be OK! I have lots| will be all right! I have lots|[`’\']s going to be OK! I have lots| will be alright! I have a lot|[`’\']ll be all right! I have lots| will be alright! I have lots|[`’\']ll be alright! I have a lot|[`’\']ll be alright! I have lots| will be fine! I have a lot| will be okay! I have a lot| will be fine! I have lots| will be okay! I have lots|[`’\']ll be fine! I have a lot|[`’\']ll be okay! I have a lot| will be OK! I have a lot|[`’\']ll be fine! I have lots|[`’\']ll be okay! I have lots| will be OK! I have lots|[`’\']ll be OK! I have a lot|[`’\']ll be OK! I have lots) of experience in this|I[`’\']m so confused! Do you know how to use this device\\? (?:(?:Take it easy, I[`’\']ll help you in a few minutes. Everything(?: is going to be all right!| is going to be alright!|[`’\']s going to be alright!| is going to be fine!| is going to be okay!|[`’\']s going to be fine!| is going to be OK!| will be all right!|[`’\']s going to be OK!|[`’\']ll be all right!| will be alright!|[`’\']ll be alright!| will be fine!| will be okay!|[`’\']ll be fine!|[`’\']ll be okay!| will be OK!|[`’\']ll be OK!)|I[`’\']ll help you in a few minutes. Everything[`’\']s going to be okay!) I have a lot|Take it easy, I[`’\']ll help you in a few minutes. Everything(?: is going to|[`’\']s going to| will|[`’\']ll) be (?:all right|alright|fine|okay|OK)! I have lots) of experience in this) area|(?:I am so confused! Do you know how to use this device\\? Take it easy, I will help you in a few minutes. Everything(?: is going to be all right! I have a lot|[`’\']s going to be all right! I have a lot| is going to be all right! I have lots|[`’\']s going to be all right! I have lots| is going to be alright! I have a lot|[`’\']s going to be alright! I have a lot| is going to be alright! I have lots|[`’\']s going to be alright! I have lots| is going to be fine! I have a lot| is going to be okay! I have a lot|[`’\']s going to be fine! I have a lot|[`’\']s going to be okay! I have a lot| is going to be fine! I have lots| is going to be okay! I have lots|[`’\']s going to be fine! I have lots|[`’\']s going to be okay! I have lots|[`’\']ll o be all right! I have a lot| is going to be OK! I have a lot| will be all right! I have a lot|[`’\']s going to be OK! I have a lot| is going to be OK! I have lots| will be all right! I have lots|[`’\']ll o be alright! I have a lot|[`’\']s going to be OK! I have lots| will be alright! I have a lot|[`’\']ll be all right! I have lots| will be alright! I have lots|[`’\']ll be alright! I have lots|[`’\']ll o be fine! I have a lot|[`’\']ll o be okay! I have a lot| will be fine! I have a lot| will be okay! I have a lot| will be fine! I have lots| will be okay! I have lots|[`’\']ll o be OK! I have a lot| will be OK! I have a lot|[`’\']ll be fine! I have lots|[`’\']ll be okay! I have lots| will be OK! I have lots|[`’\']ll be OK! I have lots) of experience in this|I[`’\']m so (?:confused! Do you know how to use this device\\? Take it easy, I[`’\']ll help you in a few minutes. Everything(?: is going to|[`’\']s going to|[`’\']ll o| will) be (?:all right|alright|fine|okay|OK)! I have a lot|(?:confused! Do you know how to use this device\\? Take it easy, I[`’\']ll help you in a few minutes. Everything(?: is going to be all right!|[`’\']s going to be all right!| is going to be alright!|[`’\']s going to be alright!| is going to be fine!| is going to be okay!|[`’\']s going to be fine!|[`’\']s going to be okay!| is going to be OK!| will be all right!|[`’\']s going to be OK!|[`’\']ll be all right!| will be alright!|[`’\']ll be alright!| will be okay!|[`’\']ll be fine!|[`’\']ll be okay!| will be OK!|[`’\']ll be OK!)|confused Do you know how to use this device\\? Take it easy, I[`’\']ll help you in a few minutes. Everything will be fine!) I have lots) of experience in this) field)/gm'
  },
  {
    rus: 'Поторопись! Представление начинается через несколько минут, а ты всё ещё собираешься. Мы опоздаем!',
    eng: 'Hurry up! The performance starts in a few minutes and you`re still getting ready. We`re going to be late!',
    regEng: '/Hurry(?: up)?! The performance (?:starts|begins) in a few minutes and you(?: are|[`’\']re) still getting ready. We(?: are|[`’\']re) going to be late!/gm'
  },
  {
    rus: 'Ты поможешь мне найти решение к этой проблеме? Конечно, я помогу тебе с большим удовольствием!',
    eng: 'Will you help me find a solution to this problem? Of course, I`ll help you with great pleasure!',
    regEng: '/Will you help me(?: to)? find (?:the|a) solution to this problem\\? Of course, I(?: will|[`’\']ll) help you with great pleasure!/gm'
  },
  {
    rus: 'Будь осторожен! Ступеньки скользкие. Ты упадёшь!',
    eng: 'Be careful! The steps are slippery. You`re going to fall!',
    regEng: '/Be careful! The steps are slippery. You(?: are|[`’\']re) going to fall!/gm'
  },
  {
    rus: 'Я не знаю почему, но у меня чувство, что она не сдержит своё обещание и глупо ей доверять',
    eng: 'I don`t know why but I have a feeling that she won`t keep her promise and it`s stupid to trust her',
    regEng: '/I (?:do not|don[`’\']t) know why but I have (?:the|a) feeling that she (?:will not|won[`’\']t) keep her promise and it(?: is stupid|[`’\']s stupid| is silly|[`’\']s silly) to trust her/gm'
  },
  {
    rus: 'Машина сломана. Это обязанность Фрэнка её починить. Я не собираюсь делать это за него!',
    eng: 'The car is broken. It`s Frank`s duty to fix it. I`m not going to do it for him!',
    regEng: '/The car(?: is|[`’\']s) broken. (?:(?:This|It) is|(?:That|It)[`’\']s) Frank[`’\']s (?:responsibility|duty) to (?:repair|fix) it. I(?: am|[`’\']m) not going to do (?:this|that|it) for him!/gm'
  }
]
export default data