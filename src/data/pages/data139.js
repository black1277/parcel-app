// 10-14 > 10.2 > 9
const data = [
  {
    rus: 'Он знает, как починить это устройство? Да, он знает всё!',
    eng: 'Does he know how to fix this device? Yes, he knows everything',
    regEng: '/Does he know how to (?:repair the|fix this) device\\? Yes, he knows everything/gm'
  },
  {
    rus: 'На прошлой неделе мы услышали такую смешную историю!',
    eng: 'Last week we heard such a funny story!',
    regEng: ''
  },
  {
    rus: 'У вас есть машина? Нет, нам не нужна машина. У нас есть велосипед',
    eng: 'Do you have a car? No, we do not need a car. We have a bicycle',
    regEng: '/Do you have a car\\? No, we (?:do not|don[`’\']t) need a car. We have a bicycle/gm'
  },
  {
    rus: 'Они готовы идти? Нет, нам нужно подождать их',
    eng: 'Are they ready to go? No, we need to wait for them',
    regEng: ''
  },
  {
    rus: 'После школы наш сын обычно играет в видео игры',
    eng: 'After school our son usually plays video games',
    regEng: ''
  },
  {
    rus: 'У той семьи была большая и удобная квартира',
    eng: 'That family had a big and comfortable flat',
    regEng: '/That family had a (?:large|big) and comfortable (?:apartment|flat)/gm'
  },
  {
    rus: 'Твой брат женат? Нет, он холост',
    eng: 'Is your brother married? No, he is single',
    regEng: '/Is your brother married\\? No, he(?: is|[`’\']s) single/gm'
  },
  {
    rus: 'Мой друг влюблён в ту девушку. Он без ума от неё',
    eng: 'My friend is in love with that girl. He is crazy about her',
    regEng: '/My friend is in love with that girl. He(?: is|[`’\']s) crazy about her/gm'
  }
]
export default data