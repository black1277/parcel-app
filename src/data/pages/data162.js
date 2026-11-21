// 10-14 > 11.4 > 4
const data = [
  {
    rus: 'Он знает, как починить это устройство? Да, он знает всё!',
    eng: 'Does he know how to fix this device? Yes, he knows everything',
    regEng: '/Does he know how to (?:repair the|fix this) device\\? Yes, he knows everything/gm'
  },
  {
    rus: 'Мой друг влюблён в ту девушку. Он без ума от неё',
    eng: 'My friend is in love with that girl. He is crazy about her',
    regEng: '/My friend is in love with that girl. He(?: is|[`’\']s) crazy about her/gm'
  },
  {
    rus: 'Кого вы хотите, чтобы я слушал?',
    eng: 'Who do you want me to listen to?',
    regEng: ''
  },
  {
    rus: 'Чем интересуется ваш муж? Он интересуется литературой и музыкой',
    eng: 'What is your husband interested in? He is interested in literature and music',
    regEng: '/What is your husband interested in\\? He(?: is|[`’\']s) interested in literature and music/gm'
  },
  {
    rus: 'Их навыки хуже, чем наши',
    eng: 'Their skills are worse than ours',
    regEng: ''
  }
]
export default data