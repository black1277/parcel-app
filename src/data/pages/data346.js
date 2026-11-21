// 17-20 > 19.2 > 8
const data = [
  {
    rus: 'Что ты будешь делать, пока я буду спать? Я буду готовиться к собеседованию по приёму на работу',
    eng: 'What will you be doing while I`m sleeping? I`ll be getting ready for a job interview',
    regEng: '/What will you be doing while I(?: am|[`’\']m) sleeping\\? I(?: will|[`’\']ll) be getting ready for (?:the|my|a) job interview/gm'
  },
  {
    rus: 'Кто стучится в дверь? Это мой дедушка. Я открою',
    eng: 'Who is knocking on the door? It`s my grandpa. I`ll get it',
    regEng: '/(?:Who is knocking on the door\\? It(?: is my grandfather. I will| is my grandfather. I[`’\']ll| is my grandpa. I will| is my grandpa. I[`’\']ll|[`’\']s my grandpa. I[`’\']ll) get it|Who[`’\']s knocking on the door\\? It is my (?:grandfather. I(?: will|[`’\']ll)|grandpa. I(?: will|[`’\']ll)) get it)/gm'
  },
  {
    rus: 'Она относится ко всем вокруг себя с уважением. Вот почему у неё так много друзей. Люди восхищаются её добротой и состраданием',
    eng: 'She treats everyone around her with respect. That`s why she has so many friends. People admire her kindness and compassion',
    regEng: '/She treats everyone around her with respect. (?:That is|This is|That[`’\']s) why she has so many friends. People admire her kindness and compassion/gm'
  },
  {
    rus: 'У нас не осталось никакой еды. Я знаю. Я закажу что-нибудь поесть',
    eng: 'We have no food left. I know. I`m going to order something to eat',
    regEng: '/We (?:(?:(?:do not|don[`’\']t) have any|have no) food left. I know. I am|(?:(?:do not|don[`’\']t) have any|have no) food left. I know. I[`’\']m) going to order something to eat/gm'
  },
  {
    rus: 'Когда начинается представление? И есть ли какие-то скидки для студентов? Представление начинается в три часа дня и никаких скидок нет. Это потому, что билеты очень дешёвые',
    eng: 'When does the performance start? And are there any discounts for students? The performance starts at three o`clock in the afternoon and there are no discounts. That`s because the tickets are very cheap',
    regEng: '/When does the performance start\\? And are there any discounts for students\\? The performance starts at (?:three|3) o[`’\']clock in the afternoon and there (?:are (?:not any|no)|aren[`’\']t any) discounts. (?:That is|This is|That[`’\']s) because the tickets are very cheap/gm'
  },
  {
    rus: 'Ты сделаешь мне одолжение? Переведёшь этот текст к завтрашнему дню? Я боюсь, что невозможно выполнить эту задачу к завтрашнему дню. Текст слишком длинный',
    eng: 'Will you do me a favour? Will you translate this text by tomorrow? I`m afraid that it`s impossible to complete this task by tomorrow. The text is too long',
    regEng: '/Will you do me a (?:favou?r\\? Will you translate this text by tomorrow\\? I(?: am|[`’\']m) afraid that it (?:is not|isn[`’\']t) possible|(?:favou?r\\? Will you translate this text by tomorrow\\? I(?: am|[`’\']m) afraid that it is|(?:favou?r\\? Will you translate this text by tomorrow\\? I am|favour\\? Will you translate this text by tomorrow\\? I[`’\']m) afraid that it[`’\']s) impossible) to complete this task by tomorrow. The text is too long/gm'
  },
  {
    rus: 'Я не хочу никуда идти сегодня вечером, потому что я чувствую себя подавленно. Другими словами, мне просто нужно провести кое-какое время одному',
    eng: 'I don`t want to go anywhere tonight because I feel down. In other words, I just need to spend some time alone',
    regEng: '/I (?:do not want to go anywhere tonight because I(?: am feeling|[`’\']m feeling| feel)|don[`’\']t want to go anywhere tonight because I(?: am feeling|[`’\']m feeling| feel)|want to go nowhere tonight because I(?: am feeling|[`’\']m feeling| feel)) down. In other words, I just need to spend some time alone/gm'
  },
  {
    rus: 'Что за таблетки ты принимаешь? Я принимаю обезболивающие и витамин C. У меня голова болит и я чувствую, как будто я заболеваю',
    eng: 'What pills are you taking? I`m taking some painkillers and vitamin C. My head is aching and I feel like I`m getting sick',
    regEng: '/What pills are you taking\\? I(?: am|[`’\']m) taking some painkillers and vitamin C. My head (?:is hurting|is aching|aches|hurts) and I(?: am feeling|[`’\']m feeling| feel) like I(?: am|[`’\']m) getting sick/gm'
  }
]
export default data