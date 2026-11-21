// 17-20 > 19.2 > 3
const data = [
  {
    rus: 'Я ужасно голоден. Осталась еда какая-нибудь? Минутку! Я сделаю тебе бутерброд',
    eng: 'I`m terribly hungry. Is there any food left? Just a minute! I`ll make you a sandwich',
    regEng: '/(?:I(?: am|[`’\']m) terribly|I(?: am|[`’\']m) awfully) hungry. Is there any food left\\? Just a minute! I(?: will|[`’\']ll) make you a sandwich/gm'
  },
  {
    rus: 'Прямо сейчас все твои эмоции написаны у тебя на лице. Так что я легко читаю твои мысли',
    eng: 'Right now all your emotions are written on your face. So I`m reading your mind easily',
    regEng: '/(?:Right now all your emotions are written on your face. So I(?: am|[`’\']m)|All your emotions are written on your face right now. So I(?: am|[`’\']m)) reading your mind easily/gm'
  },
  {
    rus: 'Ты произносишь это слово неверно. Необходимо произносить его по-другому. Я покажу тебе как',
    eng: 'You`re pronouncing this word wrong. It`s necessary to pronounce it differently. I`ll show you how',
    regEng: '/(?:You are pronouncing this word (?:(?:incorrectly.|wrong.) It is necessary to pronounce it (?:differently.|otherwise.) I will|(?:incorrectly. It(?: is|[`’\']s)|wrong. It(?: is|[`’\']s)) necessary to pronounce it (?:differently.|otherwise.) I[`’\']ll) show you how|You[`’\']re pronouncing this word (?:(?:incorrectly.|wrong.) It[`’\']s necessary to pronounce it (?:differently.|otherwise.) I will|(?:(?:incorrectly. It is|wrong. It(?: is|[`’\']s)) necessary to pronounce it differently.|(?:incorrectly.|wrong.) It is necessary to pronounce it otherwise.) I[`’\']ll) show you how)/gm'
  },
  {
    rus: 'Это удивительно удобные туфли. Я ношу их весь день, и мои ступни никогда не болят',
    eng: 'These are amazingly comfortable shoes. I wear them all day long and my feet never hurt',
    regEng: '/These are amazingly comfortable shoes. I wear them all day(?: long)? and my feet never (?:hurt|ache)/gm'
  },
  {
    rus: 'В следующий раз не поступай так легкомысленно, пожалуйста. Это глупо и опасно',
    eng: 'Next time don`t act so carelessly, please. It`s stupid and dangerous',
    regEng: '/(?:Next time (?:do not|don[`’\']t) act so carelessly, please. It(?: is|[`’\']s)|Please (?:next time (?:do not|don[`’\']t) act so carelessly. It(?: is|[`’\']s)|do not act so carelessly next time. It(?: is|[`’\']s)|don[`’\']t act so carelessly next time. It(?: is|[`’\']s))) stupid and dangerous/gm'
  },
  {
    rus: 'Ты начинаешь нервничать. Пожалуйста, посиди здесь тихо и постарайся расслабиться',
    eng: 'You`re getting nervous. Please sit here quietly and try to relax',
    regEng: '/You(?: are|[`’\']re) getting nervous. (?:Please sit|Sit) here quietly and try to relax/gm'
  },
  {
    rus: 'Мой отец фантастически хороший повар. Все его блюда невероятно вкусные',
    eng: 'My father is a fantastically good cook. All his dishes are incredibly delicious',
    regEng: '/My (?:father|daddy|dad) is a fantastically good cook. All his dishes are (?:unbelievably (?:delicious|tasty)|incredibly (?:delicious|tasty))/gm'
  },
  {
    rus: 'Ух ты! Она так бегло говорит по-английски! Каков её секрет? Она просто не боится делать ошибки',
    eng: 'Wow! She speaks English so fluently! What`s her secret? - She`s just not afraid to make mistakes',
    regEng: '/(?:(?:(?:Wow! She speaks English so fluently! What[`’\']s her secret\\?(?: -)?|Gee! She speaks English so fluently! What[`’\']s her secret\\?) She[`’\']s|(?:Wow|Gee)! She speaks English so fluently! What is her secret\\? She is) just not|(?:Wow|Gee)! She speaks English so fluently! What(?: is|[`’\']s) her secret\\? She just isn[`’\']t) afraid to make mistakes/gm'
  }
]
export default data