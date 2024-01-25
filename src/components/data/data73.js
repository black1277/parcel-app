// 06-09 > 7.2 > 5
const data = [
  {
    rus: 'Мужчины всегда будут без ума от таких женщин',
    eng: 'Men will always be crazy about such women',
    regEng: ''
  },
  {
    rus: 'Мужчины не всегда будут без ума от таких женщин',
    eng: 'Men will not always be crazy about such women',
    regEng: '/Men (?:will not|won’t) always be crazy about such women/gm'
  },
  {
    rus: 'Будут ли мужчины всегда без ума от таких женщин?',
    eng: 'Will men always be crazy about such women?',
    regEng: ''
  },
  {
    rus: 'От кого мужчины всегда будут без ума?',
    eng: 'Who will men always be crazy about?',
    regEng: ''
  },
  {
    rus: 'Эти люди будут часто уставшими от работы',
    eng: 'These people will often be tired of work',
    regEng: ''
  },
  {
    rus: 'Эти люди не будут часто уставшими от работы',
    eng: 'These people will not often be tired of work',
    regEng: '/These people (?:will not|won’t) often be tired of work/gm'
  },
  {
    rus: 'Будут ли эти люди часто уставшими от работы?',
    eng: 'Will these people often be tired of work?',
    regEng: ''
  },
  {
    rus: 'От чего эти люди будут часто уставшими?',
    eng: 'What will these people often be tired of?',
    regEng: ''
  }
]
export default data