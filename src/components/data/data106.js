// 06-09 > 9.2 > 5
const data = [
  {
    rus: 'На столе стоит ящик',
    eng: 'There is a box on the table',
    regEng: '/(?:There(?:`s| is) a box on the table)/gm'
  },
  {
    rus: 'Стоит ли ящик на столе?',
    eng: 'Is there a box on the table?',
    regEng: ''
  },
  {
    rus: 'У окна стояли стулья',
    eng: 'There were chairs by the window',
    regEng: ''
  },
  {
    rus: 'Стояли ли стулья у окна?',
    eng: 'Were there chairs by the window?',
    regEng: ''
  },
  {
    rus: 'В ящике будут чашки',
    eng: 'There will be cups in the box',
    regEng: '/(?:There(?:`ll| will) be cups in the box)/gm'
  },
  {
    rus: 'Будут ли в ящике чашки?',
    eng: 'Will there be cups in the box?',
    regEng: ''
  },
  {
    rus: 'Под мостом стояла машина',
    eng: 'There was a car under the bridge',
    regEng: ''
  },
  {
    rus: 'Стояла ли под мостом машина?',
    eng: 'Was there a car under the bridge?',
    regEng: ''
  }
]
export default data