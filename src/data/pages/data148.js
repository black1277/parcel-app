// 10-14 > 11.1 > 7
const data = [
  {
    rus: 'Где зонт? Он на диване',
    eng: 'Where is the umbrella? It is on the sofa',
    regEng: '/Where(?: is|[`’\']s) the umbrella\\? It(?: is|[`’\']s) on the sofa/gm'
  },
  {
    rus: 'Я хочу путешествовать по миру и видеть разные красивые места',
    eng: 'I want to travel the world and see different beautiful places',
    regEng: '/I want to travel (?:around )?the world and see different beautiful places/gm'
  },
  {
    rus: 'Это девушка, которую я встретил вчера',
    eng: 'This is the girl that I met yesterday',
    regEng: '/This is the girl (?:that )?I met yesterday/gm'
  },
  {
    rus: 'Солнце за облаками сейчас',
    eng: 'The sun is behind the clouds now',
    regEng: ''
  },
  {
    rus: 'Нам не нравится быть снаружи, когда ветер такой сильный',
    eng: 'We do not like to be outside when the wind is so strong',
    regEng: '/We (?:do not|don[`’\']t) like to be outside when the wind is so strong/gm'
  },
  {
    rus: 'Это цветы, которые он принёс в понедельник',
    eng: 'These are the flowers that he brought on Monday',
    regEng: '/These are the flowers (?:that )?he brought on Monday/gm'
  },
  {
    rus: 'Кто готов встретить гостей?',
    eng: 'Who is ready to meet the guests?',
    regEng: '/Who(?: is|[`’\']s) ready to meet the guests\\?/gm'
  },
  {
    rus: 'Под кроватью есть ящик. Ящик чёрный',
    eng: 'There is a box under the bed. The box is black',
    regEng: '/There(?: is|[`’\']s) a box under the bed. The box is black/gm'
  }
]
export default data