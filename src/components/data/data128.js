// 10-14 > 10.1 > 5
const data = [
  {
    rus: 'На полке лежат журналы',
    eng: 'There are magazines on the shelf',
    regEng: ''
  },
  {
    rus: 'Лежат ли на полке журналы?',
    eng: 'Are there magazines on the shelf?',
    regEng: ''
  },
  {
    rus: 'На диване была подушка',
    eng: 'There was a cushion on the sofa',
    regEng: '/There was a cushion on the (?:sofa|couch)/gm'
  },
  {
    rus: 'Была ли на диване подушка?',
    eng: 'Was there a cushion on the sofa?',
    regEng: '/Was there a cushion on the (?:sofa|couch)\\?/gm'
  },
  {
    rus: 'У стены будут ящики',
    eng: 'There will be boxes by the wall',
    regEng: '/There(?: will|`ll) be boxes by the wall/gm'
  },
  {
    rus: 'Будут ли у стены ящики?',
    eng: 'Will there be boxes by the wall?',
    regEng: ''
  },
  {
    rus: 'На потолке есть пятно',
    eng: 'There is a stain on the ceiling',
    regEng: '/There(?: is|`s) a stain on the ceiling/gm'
  },
  {
    rus: 'Есть ли пятно на потолке?',
    eng: 'Is there a stain on the ceiling?',
    regEng: ''
  }
]
export default data