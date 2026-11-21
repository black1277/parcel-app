// 10-14 > 13.2 > 2
const data = [
  {
    rus: 'Ему нравится этот город, потому что здесь не много движения',
    eng: 'He likes this town because there isn`t much traffic here',
    regEng: '/He likes this (?:town|city) because there(?: is not a lot of| isn[`’\']t a lot of|[`’\']s not a lot of| is not much| isn[`’\']t much|[`’\']s not much) traffic here/gm'
  },
  {
    rus: 'В этом доме так много света и воздуха!',
    eng: 'There`s so much light and air in this house!',
    regEng: '/There(?: is|[`’\']s) so much light and air in this house!/gm'
  },
  {
    rus: 'У нас не много опций в такой ситуации',
    eng: 'We don`t have many options in such a situation',
    regEng: '/We (?:do not|don[`’\']t) have (?:a lot of|lots of|many) options in such a situation/gm'
  },
  {
    rus: 'У него много информации поделиться с нами?',
    eng: 'Does he have much information to share with us?',
    regEng: '/Does he have (?:a lot of|lots of|much) information to share with us\\?/gm'
  },
  {
    rus: 'Я так голоден! Ну, в кастрюле осталось много супа',
    eng: 'I`m so hungry! Well, there`s a lot of soup left in the saucepan',
    regEng: '/(?:I am so hungry! Well, there is (?:a lot|lots) of soup left in the saucepan|I[`’\']m so hungry! Well, there(?: is a lot|[`’\']s a lot| is lots|[`’\']s lots) of soup left in the saucepan)/gm'
  },
  {
    rus: 'Я обычно много не крашусь. Я предпочитаю естественную красоту',
    eng: 'I don`t usually wear much make-up. I prefer natural beauty',
    regEng: '/I (?:do not|don[`’\']t) usually wear (?:a lot of|lots of|much) make-up. I prefer natural beauty/gm'
  },
  {
    rus: 'Вам нужно пить много воды, чтобы быть здоровыми',
    eng: 'You need to drink a lot of water to be healthy',
    regEng: '/You need to drink (?:a lot|lots) of water to be healthy/gm'
  },
  {
    rus: 'Есть так много стран, в которые она просто влюблена',
    eng: 'There are so many countries that she`s just in love with',
    regEng: '/There are so many countries (?:that she(?: is|[`’\']s)|she is|she[`’\']s) just in love with/gm'
  }
]
export default data