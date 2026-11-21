// 17-20 > 17.4 > 10
const data = [
  {
    rus: 'Нет причины торопиться. У нас осталось немного времени',
    eng: 'There`s no reason to hurry. We have some time left',
    regEng: '/There(?: is not any|[`’\']s not any| isn[`’\']t any| is no|[`’\']s no) reason to (?:hurry.|rush.) We have (?:a little|some) time left/gm'
  },
  {
    rus: 'Эта юбка идёт мне? Я думаю, что она идёт тебе, но не подходит тебе по размеру, она слишком маленькая',
    eng: 'Does this skirt suit me? I think that it suits you but it doesn`t fit you, it`s too small',
    regEng: '/Does this skirt suit me\\? I think(?: that)? it suits you but it (?:does not|doesn[`’\']t) fit you, it(?: is|[`’\']s) too small/gm'
  },
  {
    rus: 'Дети будут играть в саду, в то время как мама будет готовиться идти на работу',
    eng: 'The children will be playing in the garden while Mom is getting ready to go to work',
    regEng: '/The children will be playing in the garden while (?:(?:Mother|Mom|Mum) is|(?:Mother|Mom|Mum)[`’\']s) getting ready to go to work/gm'
  },
  {
    rus: 'Нет ничего особенного касательно этого фильма. Он просто средний',
    eng: 'There isn`t anything special about this film. It`s just average',
    regEng: '/(?:There (?:is not|isn[`’\']t) anything|There(?: is|[`’\']s) nothing) special about this (?:movie. It(?: is|[`’\']s)|film. It(?: is|[`’\']s)) just average/gm'
  },
  {
    rus: 'Она нюхает соус и на её лице странное выражение. Поэтому я предполагаю, что он пахнет плохо',
    eng: 'She`s smelling the sauce and there`s a strange look on her face. So I suppose that it smells bad',
    regEng: '/She(?: is|[`’\']s) smelling the sauce and there(?: is|[`’\']s) a strange look on her face. So I suppose(?: that)? it smells bad/gm'
  }
]
export default data