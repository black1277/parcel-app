// 10-14 > 12.2 > 5
const data = [
  {
    rus: 'У меня всегда много энергии',
    eng: 'I always have a lot of energy',
    regEng: '/I always have (?:a lot|lots) of energy/gm'
  },
  {
    rus: 'Они не часто делают много ошибок',
    eng: 'They do not often make many mistakes',
    regEng: '/They (?:do not|don[`’\']t) often make (?:a lot of|lots of|many) mistakes/gm'
  },
  {
    rus: 'В твоих словах так много мудрости',
    eng: 'There is so much wisdom in your words',
    regEng: '/There(?: is|[`’\']s) so much wisdom in your words/gm'
  },
  {
    rus: 'В вашей квартире много мебели?',
    eng: 'Is there much furniture in your flat?',
    regEng: '/Is there (?:a lot of|lots of|much) furniture in your (?:apartment|flat)\\?/gm'
  },
  {
    rus: 'Она никогда не обращает много внимания на детали',
    eng: 'She never pays much attention to details',
    regEng: '/She (?:does not ever pay (?:a lot of|lots of|much)|doesn[`’\']t ever pay (?:a lot of|lots of|much)|never pays (?:a lot of|lots of|much)) attention to details/gm'
  },
  {
    rus: 'Об этом событии не много новостей',
    eng: 'There isn`t much news about this event',
    regEng: '/(?:There (?:is not (?:a lot of|lots of|much)|isn[`’\']t (?:a lot of|lots of|much))|There[`’\']s not (?:a lot of|lots of|much)) news about this event/gm'
  },
  {
    rus: 'Я думаю, что ты ешь слишком много мороженого',
    eng: 'I think that you eat too much ice-cream',
    regEng: '/I think(?: that)? you eat too much (?:ice-cream|ice cream)/gm'
  },
  {
    rus: 'В мире так много красивых мест',
    eng: 'There are so many beautiful places in the world',
    regEng: ''
  }
]
export default data