// 15-16 > 15.4 > 5
const data = [
  {
    rus: 'У нас нет никаких вопросов вообще. Всё ясно!',
    eng: 'We have no questions at all. Everything is clear!',
    regEng: '/We (?:(?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions at all. Everything is|(?:do not have(?: any)?|don[`’\']t have(?: any)?|have no) questions at all. Everything[`’\']s) clear!/gm'
  },
  {
    rus: 'Что дети будут делать в восемь часов вечера завтра?',
    eng: 'What will the children be doing at eight o`clock in the evening tomorrow?',
    regEng: '/What will the children be doing (?:at eight o[`’\']clock in the evening tomorrow\\?|tomorrow at eight o[`’\']clock in the evening\\?)/gm'
  },
  {
    rus: 'Мои дети приносят мне много любви и счастья',
    eng: 'My children bring me a lot of love and happiness',
    regEng: '/My (?:children|kids) bring me (?:a lot|lots) of love and happiness/gm'
  },
  {
    rus: 'Я буду принимать душ, когда они придут',
    eng: 'I`ll be having a shower when they come',
    regEng: '/(?:When they (?:came, I will|come, I[`’\']ll) be having a shower|I will be having a shower when they came|I[`’\']ll be having a shower when they come)/gm'
  },
  {
    rus: 'Он спал, когда она позвонила',
    eng: 'He was sleeping when she called',
    regEng: '/(?:When she called, he was sleeping|He was sleeping when she called)/gm'
  }
]
export default data