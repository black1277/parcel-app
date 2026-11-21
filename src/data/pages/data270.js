// 15-16 > 15.6 > 7
const data = [
  {
    rus: 'Давай закроем дверь и окна. Я начинаю мёрзнуть',
    eng: 'Let`s close the door and the windows. I`m getting cold',
    regEng: '/Let(?: us|[`’\']s) close the door and(?: the)? windows. I(?: am|[`’\']m) getting cold/gm'
  },
  {
    rus: 'Они будут завтракать, когда она проснётся утром',
    eng: 'They`ll be having breakfast when she wakes up in the morning',
    regEng: '/(?:When she wakes up in the morning, they(?: will|[`’\']ll) be having breakfast|They(?: will|[`’\']ll) be having breakfast when she wakes up in the morning)/gm'
  },
  {
    rus: 'Ты помнишь о вечеринке? Да, я буду там и я не опоздаю. Не беспокойся!',
    eng: 'Do you remember about the party? Yes, I`ll be there and I won`t be late. Don`t worry!',
    regEng: '/(?:Do you remember about the party\\? Yes, I(?: will be there and I will not be late. Do not| will be there and I will not be late. Don[`’\']t| will be there and will not be late. Do not| will be there and will not be late. Don[`’\']t|[`’\']ll be there and I won[`’\']t be late. Do not|[`’\']ll be there and I won[`’\']t be late. Don[`’\']t|[`’\']ll be there and won[`’\']t be late. Do not|[`’\']ll be there and won[`’\']t be late. Don[`’\']t) be worried!|(?:Do you remember about the party\\? Yes, I(?: will be there and I will not| will be there and will not|[`’\']ll be there and I won[`’\']t|[`’\']ll be there and won[`’\']t) be late. Do not|Do you remember about the party\\? Yes, I(?: will be there and I will not| will be there and will not|[`’\']ll be there and I won[`’\']t|[`’\']ll be there and won[`’\']t) be late. Don[`’\']t) worry!)/gm'
  },
  {
    rus: 'Чем ты занимаешься? Я делаю макароны и салат на ужин',
    eng: 'What are you doing? I`m making pasta and salad for dinner',
    regEng: '/What are you doing\\? I(?: am|[`’\']m) making pasta and salad for dinner/gm'
  },
  {
    rus: 'Я знаю кое-какие интересные факты о её жизни. Она живёт у моря и работает из дома',
    eng: 'I know some interesting facts about her life. She lives by the sea and works from home',
    regEng: ''
  }
]
export default data