// 17-20 > 19.4 > 1
const data = [
  {
    rus: 'Ты свободен сегодня вечером? Нет, я иду на вечеринку по случаю Дня Рождения моего брата',
    eng: 'Are you free tonight? No, I`m going to my brother`s Birthday party',
    regEng: '/Are you free tonight\\? No, I(?: am|[`’\']m) going to my brother[`’\']s Birthday party/gm'
  },
  {
    rus: 'Мой брат работает доктором. Он женат и у него есть ребёнок',
    eng: 'My brother works as a doctor. He is married and has a child',
    regEng: '/My brother works as a doctor. He(?: is|[`’\']s) married and(?: he)? has a (?:child|baby|kid)/gm'
  },
  {
    rus: 'Будь осторожен! Ты прольёшь свой кофе! Чашка слишком полная!',
    eng: 'Be careful! You`re going to spill your coffee! The cup is too full',
    regEng: '/Be careful! You(?: are|[`’\']re) going to spill your coffee! The cup(?: is|[`’\']s) too full/gm'
  },
  {
    rus: 'Как выглядит твоя знакомая? Она очень привлекательная женщина. Её волосы чёрные, её глаза зелёные, а лицо овальное. Она настоящая классическая красавица',
    eng: 'What does your acquaintance look like? She`s a very attractive woman. Her hair is black, her eyes are green, and her face is oval. She`s a real classic beauty',
    regEng: '/What does your acquaintance look like\\? She(?: is|[`’\']s) a very attractive woman. Her hair is black, her eyes are green, and her face is oval. She(?: is|[`’\']s) a real classic beauty/gm'
  },
  {
    rus: 'Кто принёс эти документы в понедельник? Я не знаю. Спроси Мэри. Она была здесь в понедельник',
    eng: 'Who brought these documents on Monday? I don`t know. Ask Mary. She was here on Monday',
    regEng: '/Who brought these documents on Monday\\? I (?:(?:do not|don[`’\']t) know. Ask Mary. She was here on Monday|(?:do not|don[`’\']t) know. Ask Mary. On Monday She was here)/gm'
  }
]
export default data