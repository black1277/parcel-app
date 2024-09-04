// 06-09 > 8.1 > 9
const data = [
  {
    rus: 'Ваша кожа светлее, чем моя',
    eng: 'Your skin is lighter than mine',
    regEng: ''
  },
  {
    rus: 'Мои руки сильнее, чем его',
    eng: 'My arms are stronger than his',
    regEng: ''
  },
  {
    rus: 'Их еда жирнее, чем наша',
    eng: 'Their food is fatter than ours',
    regEng: ''
  },
  {
    rus: 'Лицо её матери красивее, чем её',
    eng: 'Her mother’s face is more beautiful than hers',
    regEng: '/(?:Her (?:mother’s|mom’s|mum’s) face is (?:more beautiful|prettier) than hers)/gm'
  },
  {
    rus: 'Ваш вопрос лучше, чем наш',
    eng: 'Your question is better than ours',
    regEng: ''
  },
  {
    rus: 'Его сообщения более важные, чем их',
    eng: 'His messages are more important than theirs',
    regEng: ''
  },
  {
    rus: 'Мои руки горячее, чем твои',
    eng: 'My hands are hotter than yours',
    regEng: ''
  },
  {
    rus: 'Их бутерброды вкуснее, чем мои',
    eng: 'Their sandwiches are tastier than mine',
    regEng: '/(?:Their sandwiches are (?:tastier|more delicious) than mine)/gm'
  }
]
export default data