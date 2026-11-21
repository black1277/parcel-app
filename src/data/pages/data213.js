// 10-14 > 13.4 > 12
const data = [
  {
    rus: 'Я думаю, что в этом предложении есть ошибка',
    eng: 'I think that there`s a mistake in this sentence',
    regEng: '/I think (?:that there(?: is|[`’\']s)|there is|there[`’\']s) a mistake in this sentence/gm'
  },
  {
    rus: 'Их еда жирнее, чем наша',
    eng: 'Their food is fatter than ours',
    regEng: ''
  },
  {
    rus: 'Почему мне так жарко?',
    eng: 'Why am I so hot?',
    regEng: ''
  },
  {
    rus: 'Чья это одежда?',
    eng: 'Whose clothes are these?',
    regEng: ''
  },
  {
    rus: 'Она хочет жить у моря',
    eng: 'She wants to live by the sea',
    regEng: '/She wants to live (?:near|by) the sea/gm'
  }
]
export default data