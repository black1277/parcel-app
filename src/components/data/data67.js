// 06-09 > 7.1 > 5
const data = [
  {
    rus: 'Этот мужчина всегда будет гордиться своей дочерью',
    eng: 'This man will always be proud of his daughter',
    regEng: ''
  },
  {
    rus: 'Этот мужчина не всегда будет гордиться своей дочерью',
    eng: 'This man will not always be proud of his daughter',
    regEng: '/This man (?:will not|won’t) always be proud of his daughter/gm'
  },
  {
    rus: 'Будет ли этот мужчина всегда гордиться своей дочерью?',
    eng: 'Will this man always be proud of his daughter?',
    regEng: ''
  },
  {
    rus: 'Кем этот мужчина будет всегда гордиться?',
    eng: 'Who will this man always be proud of?',
    regEng: ''
  },
  {
    rus: 'Эти люди будут часто беспокоиться о деньгах',
    eng: 'These people will often be worried about money',
    regEng: '/These people will often (?:be worried|worry) about money/gm'
  },
  {
    rus: 'Эти люди будут не часто беспокоиться о деньгах',
    eng: 'These people will not often be worried about money',
    regEng: '/These people (?:will not|won’t) often (?:be worried|worry) about money/gm'
  },
  {
    rus: 'Будут ли эти люди часто беспокоиться о деньгах?',
    eng: 'Will these people often be worried about money?',
    regEng: '/Will these people often (?:be worried|worry) about money\\?/gm'
  },
  {
    rus: 'О чём эти люди будут часто беспокоиться?',
    eng: 'What will these people often be worried about?',
    regEng: '/What will these people often (?:be worried|worry) about?/gm'
  }
]
export default data