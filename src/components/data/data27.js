// 01-05 > 3.2 > 5
const data = [
  {
    rus: 'Завтра мы дадим вам отличную идею',
    eng: 'Tomorrow we will give you an excellent idea',
    regEng: '/(?:Tomorrow we will give you an excellent idea)|(?:We will give you an excellent idea tomorrow)/gm'
  },
  {
    rus: 'Она никогда не носит длинных юбок',
    eng: 'She never wears long skirts',
    regEng: ''
  },
  {
    rus: 'Мои друзья редко смотрят телевизор',
    eng: 'My friends rarely watch TV',
    regEng: '/My friends (?:seldom|rarely) watch TV/gm'
  },
  {
    rus: 'Вчера он играл в теннис с моим сыном',
    eng: 'Yesterday he played tennis with my son',
    regEng: '/(?:Yesterday he played tennis with my son)|(?:He played tennis with my son yesterday)/gm'
  },
  {
    rus: 'Мы хотим, чтобы они пришли сюда завтра',
    eng: 'We want them to come here tomorrow',
    regEng: '/(?:We want them to come here tomorrow)|(?:Tomorrow we want them to come here)/gm'
  },
  {
    rus: 'У меня такая удивительная и счастливая жизнь!',
    eng: 'I have such an amazing and happy life!',
    regEng: ''
  },
  {
    rus: 'Эти мужчины принесли те документы вчера',
    eng: 'These men brought those documents yesterday',
    regEng: '/(?:These men brought those documents yesterday)|(?:Yesterday these men brought those documents)/gm'
  }
]
export default data