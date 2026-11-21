// 17-20 > 17.4 > 8
const data = [
  {
    rus: 'Есть ли какие-нибудь рейсы в Москву? Нет, все рейсы отменены, потому что ветер слишком сильный и слишком опасно лететь',
    eng: 'Are there any flights to Moscow? No, all the flights are cancelled because the wind is too strong and it`s too dangerous to fly',
    regEng: '/Are there any flights to Moscow\\? No, all(?: the)? flights are cancel?led because the wind is too strong and it(?: is|[`’\']s) too dangerous to fly/gm'
  },
  {
    rus: 'Шёл ли дождь, когда ты проснулся? Ну, я не обратил внимания на это',
    eng: 'Was it raining when you woke up? Well, I didn`t pay attention to that',
    regEng: '/Was it raining when you woke up\\? Well, I (?:did not|didn[`’\']t) pay(?: any)? attention to (?:that|this|it)/gm'
  },
  {
    rus: 'Извини, но в твоих словах не много логики и смысла',
    eng: 'I`m sorry but there isn`t much logic and sense in your words',
    regEng: '/I(?: am|[`’\']m) sorry but there(?: is not a lot of| isn[`’\']t a lot of|[`’\']s not a lot of| is not lots of| isn[`’\']t lots of|[`’\']s not lots of| is not much| isn[`’\']t much|[`’\']s not much) logic and sense in your words/gm'
  },
  {
    rus: 'Я начинаю злиться, потому что нелегко найти твой дом, а на улице холодно',
    eng: 'I`m getting angry because it`s not easy to find your house and it`s cold outside',
    regEng: '/(?:I am getting angry because it(?: is not easy to find your house and it[`’\']s|[`’\']s not easy to find your house and it is| isn[`’\']t easy to find your house and it is|[`’\']s not easy to find your house and it[`’\']s| isn[`’\']t easy to find your house and it[`’\']s) cold outside|I[`’\']m getting angry because it(?: is not easy to find your house and it[`’\']s|[`’\']s not easy to find your house and it is|[`’\']s not easy to find your house and it[`’\']s) cold outside)/gm'
  },
  {
    rus: 'Почему ты нюхаешь мясо? Оно испорченное? Я не уверена насчет этого, но оно странно пахнет',
    eng: 'Why are you smelling the meat? Is it rotten? I`m not sure about that but it smells strange',
    regEng: '/Why are you smelling the meat\\? Is it rotten\\? I(?: am|[`’\']m) not sure (?:about (?:that|this|it)|of (?:that|this|it)) but it smells strange/gm'
  }
]
export default data