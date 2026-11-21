// 10-14 > 11.2 > 9
const data = [
  {
    rus: 'Завтра я приду сюда и встречусь со своими друзьями',
    eng: 'Tomorrow I will come here and meet with my friends',
    regEng: '/Tomorrow I(?: will|[`’\']ll) come here and meet(?: with)? my friends/gm'
  },
  {
    rus: 'О чём ты беспокоишься? Я беспокоюсь о своих экзаменах',
    eng: 'What are you worried about? I am worried about my exams',
    regEng: '/What are you worried about\\? I(?: am|[`’\']m) worried about my exams/gm'
  },
  {
    rus: 'Он такой добрый и дружелюбный человек. Все его любят',
    eng: 'He is such a kind and friendly person. Everybody loves him',
    regEng: '/He(?: is|[`’\']s) such a kind and friendly person. Everybody loves him/gm'
  },
  {
    rus: 'Я думаю, что в этом предложении есть ошибка',
    eng: 'I think that there is a mistake in this sentence',
    regEng: '/I think (?:that there(?: is|[`’\']s)|there is|there[`’\']s) a mistake in this sentence/gm'
  },
  {
    rus: 'Она никогда не носит кольца, но всегда носит серёжки',
    eng: 'She never wears rings but always wears earrings',
    regEng: '/She never wears rings but (?:she )?always wears earrings/gm'
  },
  {
    rus: 'Они так устали от этой холодной погоды. Они хотят поехать в жаркую страну',
    eng: 'They are so tired of this cold weather. They want to go to a hot country',
    regEng: '/They(?: are|[`’\']re) so tired of this cold weather. They want to go to a hot country/gm'
  },
  {
    rus: 'Кто хочет посетить удивительный музей со мной?',
    eng: 'Who wants to visit an amazing museum with me?',
    regEng: ''
  },
  {
    rus: 'Ты голоден? Нет, я сыт. Но я хочу пить',
    eng: 'Are you hungry? No, I am full. But I am thirsty',
    regEng: '/Are you hungry\\? No, I(?: am|[`’\']m) full. But I(?: am|[`’\']m) thirsty/gm'
  }
]
export default data