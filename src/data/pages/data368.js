// 17-20 > 20.1 > 3
const data = [
  {
    rus: 'Что требуется, чтобы научиться новому навыку? Требуется время, усердная работа, преданность и позитивный образ мыслей, конечно же',
    eng: 'What does it take to learn a new skill? It takes time, hard work, dedication and a positive mindset, of course',
    regEng: ''
  },
  {
    rus: 'Какая разница между этими словами? Кажется, как будто нет никакой разницы вовсе',
    eng: 'What`s the difference between these words? It seems like there`s no difference at all',
    regEng: '/What(?: is|[`’\']s) the difference between these words\\? It seems like there(?: is not any|[`’\']s not any| isn[`’\']t any| is no|[`’\']s no) difference at all/gm'
  },
  {
    rus: 'Какое это чувство жить в тёплой стране? О, это фантастика! Я купаюсь в океане круглый год. Насколько это классно?!',
    eng: 'What does it feel like to live in a hot country? Oh, it feels fantastic. I swim in the ocean all year round. How cool is that?!',
    regEng: '/What(?: does it feel like to live in a hot country\\? Oh, it feels| does living in a hot country feel like\\? Oh, it feels| is it like to live in a hot country\\? Oh, it is| is it like to live in a hot country\\? Oh, it[`’\']s|[`’\']s it like to live in a hot country\\? Oh, it[`’\']s) fantastic. I swim in the ocean all year round. How cool is that\\?!/gm'
  },
  {
    rus: 'В чём дело? Я потеряла свои ключи несколько минут назад. Сейчас я пытаюсь найти их',
    eng: 'What`s the matter? I lost my keys a few minutes ago. Now I`m trying to find them',
    regEng: '/(?:What(?: is|[`’\']s) the matter\\? I lost my keys a few minutes ago. Now I(?: am|[`’\']m) trying to find them|What(?: is|[`’\']s) the matter\\? I lost my keys a few minutes ago. I(?: am|[`’\']m) trying to find them now)/gm'
  },
  {
    rus: 'Каким был твой дедушка? Он был очень добрым и великодушным человеком. Все любили его',
    eng: 'What was your grandpa like? He was a very kind and generous person. Everybody loved him',
    regEng: '/What was your (?:grandfather|grandpa) like\\? He was a very kind and generous person. (?:Everybody|Everyone) loved him/gm'
  },
  {
    rus: 'Какая будет погода завтра по прогнозу? Будет ли снег? Нет, завтра не будет снега по прогнозу',
    eng: 'What will the weather be like tomorrow according to the forecast? Will there be any snow? No, tomorrow there won`t be any snow according to the forecast',
    regEng: '/What will the weather be like (?:according to the forecast tomorrow\\? Will (?:(?:there be any snow\\? No, (?:there (?:will not|won[`’\']t) be any snow tomorrow|tomorrow there (?:will not|won[`’\']t) be any snow)|it snow\\? No, (?:tomorrow it(?: will not|[`’\']ll not| won[`’\']t) snow|it(?: will not|[`’\']ll not| won[`’\']t) snow tomorrow)) according to the forecast|(?:there be any snow\\? No, there (?:will not|won[`’\']t) be any|it snow\\? No, it(?: will not|[`’\']ll not| won[`’\']t)) snow according to the forecast tomorrow|there be any snow\\? No, there (?:will not|won[`’\']t) be any snow to the forecast tomorrow according)|tomorrow according to the forecast\\? Will (?:there be any snow\\? No, (?:tomorrow there (?:will not|won[`’\']t) be any snow|there (?:will not|won[`’\']t) be any snow tomorrow)|it snow\\? No, tomorrow it(?: will not|[`’\']ll not| won[`’\']t) snow) according to the forecast)/gm'
  },
  {
    rus: 'Ты выглядишь так обеспокоенно. В чём причина этого? Я просто спешу. Моя знакомая ждёт меня',
    eng: 'You look so worried. What`s the reason for that? I`m just in a hurry. My acquaintance is waiting for me',
    regEng: '/(?:You(?: are|[`’\']re) looking|You look) so worried. What(?: is|[`’\']s) the reason for that\\? I(?: am|[`’\']m) just in a hurry. My acquaintance is waiting for me/gm'
  },
  {
    rus: 'Что нужно, чтобы стать хорошим психологом? Нужно много терпения и сострадания к людям',
    eng: 'What does it take to become a good psychologist? It takes a lot of patience and compassion to people',
    regEng: '/What does it take to become a good psychologist\\? It takes (?:a lot|lots) of patience and compassion to people/gm'
  },
  {
    rus: 'Какая погода сейчас? Идёт дождь? Погода отличная. Дождя нет и солнечно',
    eng: 'What`s the weather like now? Is it raining? The weather is excellent. There`s no rain and it`s sunny',
    regEng: '/(?:What is the weather like now\\? Is it raining\\? The weather is excellent. (?:There[`’\']s (?:not any rain and it(?: is|[`’\']s)|no rain and it[`’\']s)|There (?:isn[`’\']t any|is no) rain and it(?: is|[`’\']s)|It (?:is not|isn[`’\']t) raining and it(?: is|[`’\']s)) sunny|What[`’\']s the weather like now\\? Is it raining\\? The weather is excellent. (?:(?:There(?:[`’\']s not any| isn[`’\']t any|[`’\']s no) rain|It[`’\']s not raining) and it[`’\']s|It[`’\']s not raining and it is) sunny)/gm'
  },
  {
    rus: 'Какого рода музыку он слушает? Он слушает рок музыку и классическую музыку',
    eng: 'What kind of music does he listen to? He listens to rock music and classical music',
    regEng: '/What (?:(?:kind|sort) of )?music does he listen to\\? He listens to rock music and classical music/gm'
  }
]
export default data