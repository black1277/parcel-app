// 10-14 > 11.2 > 2
const data = [
  {
    rus: 'Руки Марка сильнее, чем Джона',
    eng: 'Mark`s arms are stronger than John`s',
    regEng: ''
  },
  {
    rus: 'Платья этих женщин более стильные, чем ваши',
    eng: 'These women`s dresses are more stylish than yours',
    regEng: ''
  },
  {
    rus: 'Я более серьёзный, чем они',
    eng: 'I am more serious than they are',
    regEng: '/I(?: am|[`’\']m) more serious than (?:they(?: are)?|them)/gm'
  },
  {
    rus: 'Голос его девушки более громкий, чем у него',
    eng: 'His girlfriend`s voice is louder than his',
    regEng: ''
  },
  {
    rus: 'Чьи это журналы? Они моих коллег',
    eng: 'Whose magazines are these? They are my colleagues`',
    regEng: '/Whose magazines are these\\? They(?: are|[`’\']re) my colleagues[`’\']/gm'
  },
  {
    rus: 'Её парень терпеливее, чем она',
    eng: 'Her boyfriend is more patient than her',
    regEng: '/Her boyfriend is more patient than (?:she is|her|she)/gm'
  },
  {
    rus: 'То ботинки твоего брата? Нет, они моего отца',
    eng: 'Are those your brother`s shoes? No, they are my father`s',
    regEng: '/Are those your brother[`’\']s shoes\\? No, they(?: are|[`’\']re) my (?:father|daddy|dad)[`’\']s/gm'
  },
  {
    rus: 'Идея тех людей лучше, чем наша',
    eng: 'Those people`s idea is better than ours',
    regEng: ''
  }
]
export default data