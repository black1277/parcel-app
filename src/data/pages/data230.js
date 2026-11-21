// 15-16 > 15.1 > 3
const data = [
  {
    rus: 'Принеси мне воды, пожалуйста. Я так хочу пить',
    eng: 'Bring me some water, please. I`m so thirsty',
    regEng: '/(?:Bring me some water, please. I(?: am|[`’\']m)|Please bring me some water. I(?: am|[`’\']m)) so thirsty/gm'
  },
  {
    rus: 'Идёт дождь. Не забудь взять свой зонт',
    eng: 'It`s raining. Don`t forget to take your umbrella',
    regEng: '/It(?: is|[`’\']s) raining. (?:Do not|Don[`’\']t) forget to take your umbrella/gm'
  },
  {
    rus: 'Пожалуйста, поговори со мной. Я пытаюсь понять тебя',
    eng: 'Please talk to me. I`m trying to understand you',
    regEng: '/(?:Speak (?:with|to) me, please. I(?: am|[`’\']m)|Please (?:speak (?:with|to)|talk (?:with|to)) me. I(?: am|[`’\']m)|Talk (?:with|to) me, please. I(?: am|[`’\']m)) trying to understand you/gm'
  },
  {
    rus: 'Здесь так холодно. Давай закроем дверь',
    eng: 'It`s so cold here. Let`s close the door',
    regEng: '/It(?: is|[`’\']s) so cold(?: in)? here. Let(?: us|[`’\']s) close the door/gm'
  },
  {
    rus: 'Пожалуйста, поторопитесь! Темнеет',
    eng: 'Please hurry up! It`s getting dark',
    regEng: '/(?:Hurry(?: up)?, please|Please hurry up|Please hurry)! It(?: is|[`’\']s) getting dark/gm'
  },
  {
    rus: 'Зимой редко идёт снег в этой стране',
    eng: 'In winter it rarely snows in this country',
    regEng: '/(?:In winter it rarely snows in this country|It rarely snows in this country in winter)/gm'
  },
  {
    rus: 'Оставайтесь, где вы есть, пожалуйста. Мы уже идём!',
    eng: 'Stay where you are, please. We`re already coming!',
    regEng: '/(?:Stay where you are, please. We(?: are|[`’\']re)|Please stay where you are. We(?: are|[`’\']re)) already coming!/gm'
  },
  {
    rus: 'На улице тепло. Давайте пойдём пешком',
    eng: 'It`s warm outside. Let`s go on foot',
    regEng: '/It(?: is|[`’\']s) warm outside. Let(?: us|[`’\']s) go on foot/gm'
  }
]
export default data