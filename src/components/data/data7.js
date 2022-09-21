// 01-05 > 1.2 > 4
const data = [
  {
    rus: 'Он хочет найти новую работу',
    eng: 'He wants to find a new job'
  },
  {
    rus: 'Нам нравится смотреть эти чудесные фильмы',
    eng: 'We like to watch these wonderful films',
    regEng: '/(?:We like to watch these wonderful (?:films|movies))/gm'
  },
  {
    rus: 'Чтобы зарабатывать деньги, тебе нужно работать',
    eng: 'To earn money you need to work',
    regEng: '/(?:To earn money you need to work)|(?:You need to work to earn money)/gm'
  },
  {
    rus: 'Кто хочет услышать отличную историю?',
    eng: 'Who wants to hear an excellent story?'
  },
  {
    rus: 'Ей нужно взять ручку, чтобы писать',
    eng: 'She needs to take a pen to write',
    regEng: '/(?:She needs to take a pen to write)|(?:To write she needs to take a pen)/gm'
  },
  {
    rus: 'Мне нужно видеть своих друзей каждый день',
    eng: 'I need to see my friends every day'
  }
]
export default data