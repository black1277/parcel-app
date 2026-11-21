// 10-14 > 10.4 > 2
const data = [
  {
    rus: 'Почему ты никогда не ужинаешь там? Мне не нравится то место',
    eng: 'Why do you never have dinner there? I do not like that place',
    regEng: '/Why do you never have dinner there\\? I (?:do not|don[`’\']t) like that place/gm'
  },
  {
    rus: 'Её муж нашёл новую работу в прошлом году',
    eng: 'Her husband found a new job last year',
    regEng: ''
  },
  {
    rus: 'Мой чай горячее твоего',
    eng: 'My tea is hotter than yours',
    regEng: '/My tea(?: is|[`’\']s) hotter than yours/gm'
  },
  {
    rus: 'Куда он поехал месяц назад? Он поехал в Англию',
    eng: 'Where did he go a month ago? He went to England',
    regEng: ''
  },
  {
    rus: 'Платье моей матери белое, а моё синее',
    eng: 'My mother`s dress is white and mine is blue',
    regEng: '/My (?:mother|mom|mum)[`’\']s dress is white and mine is blue/gm'
  }
]
export default data