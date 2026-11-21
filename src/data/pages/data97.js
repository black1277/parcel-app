// 06-09 > 9.1 > 2
const data = [
  {
    rus: 'Квартира моих друзей больше, чем моя',
    eng: 'My friends` flat is bigger than mine',
    regEng: '/(?:My friends` (?:flat|apartment) is (?:bigger|larger) than mine)/gm'
  },
  {
    rus: 'Чьи это письма? Они его',
    eng: 'Whose letters are these? They are his',
    regEng: '/(?:Whose letters are these\\? (?:They are|They’re) his)/gm'
  },
  {
    rus: 'Это одежда наших детей, не ваша',
    eng: 'These are our children`s clothes, not yours',
    regEng: ''
  },
  {
    rus: 'История наших родственников интереснее, чем её',
    eng: 'Our relatives` story is more interesting than hers',
    regEng: ''
  },
  {
    rus: 'Чьи это деньги? Они их',
    eng: 'Whose money is this? It is theirs',
    regEng: '/(?:Whose money is this\\? (?:It is|It’s) theirs)/gm'
  },
  {
    rus: 'Идеи тех мужчин лучше, чем наши',
    eng: 'Those men`s ideas are better than ours',
    regEng: ''
  },
  {
    rus: 'Её брови тоньше ваших',
    eng: 'Her eyebrows are thinner than yours',
    regEng: ''
  },
  {
    rus: 'Сумки моих родителей тяжелее, чем мои',
    eng: 'My parents` bags are heavier than mine',
    regEng: ''
  }
]
export default data