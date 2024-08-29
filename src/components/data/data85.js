// 06-09 > 7.4 > 15 06-09 > 8.1 > 2
const data = [
  {
    rus: 'С кем он обычно ходит туда?',
    eng: 'Who does he usually go there with?',
    regEng: ''
  },
  {
    rus: 'Я очень хочу пить (испытываю жажду)',
    eng: 'I am very thirsty',
    regEng: '/(?:(?:I am|I’m) very thirsty)/gm'
  },
  {
    rus: 'Она не поедет туда со своей сестрой через месяц',
    eng: 'She will not go there with her sister in a month',
    regEng: '/(?:She (?:will not|won’t) go there with her sister in a month)/gm'
  },
  {
    rus: 'У кого есть зелёная ручка?',
    eng: 'Who has a green pen?',
    regEng: ''
  },
  {
    rus: 'Ваши дети хотят, чтобы вы поиграли с ними',
    eng: 'Your children want you to play with them',
    regEng: ''
  },
  {
    rus: 'Чья это сумка? Это сумка моей сестры',
    eng: 'Whose bag is this? This is my sister’s bag',
    regEng: ''
  },
  {
    rus: 'Это друзья их брата? Нет, это не друзья их брата',
    eng: 'Are these their brother`s friends? No, these are not their brother`s friends',
    regEng: '/(?:Are these their brother’s friends\\? No, these (?:are not|aren’t) their brother’s friends)/gm'
  },
  {
    rus: 'Чья это одежда? Это одежда её матери',
    eng: 'Whose clothes are these? These are her mother`s clothes',
    regEng: '/(?:Whose clothes are these\\? These are her (?:mother’s|mom’s|mum’s) clothes)/gm'
  },
  {
    rus: 'То были часы твоего отца? Нет, то были часы не моего отца',
    eng: 'Was that your father`s watch? No, that was not my father`s watch',
    regEng: '/(?:Was that your (?:father’s|dad’s|daddy’s) watch\\? No, that (?:was not|wasn’t) my father’s watch)/gm'
  }
]
export default data