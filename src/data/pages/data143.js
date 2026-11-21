// 10-14 > 10.4 > 4
const data = [
  {
    rus: 'Они обычно завтракают рано',
    eng: 'They usually have breakfast early',
    regEng: ''
  },
  {
    rus: 'Твои волосы длиннее и темнее, чем у неё',
    eng: 'Your hair is longer and darker than hers',
    regEng: '/Your hair(?: is|[`’\']s) longer and darker than hers/gm'
  },
  {
    rus: 'С кем он хочет поговорить? Он хочет поговорить с вашей женой',
    eng: 'Who does he want to talk to? He wants to talk to your wife',
    regEng: '/Who does he want to (?:(?:speak|talk) with\\? He wants to speak with|(?:speak to\\? He wants to speak|talk to\\? He wants to talk) to) your wife/gm'
  },
  {
    rus: 'Мы более терпеливые, чем они',
    eng: 'We are more patient than them',
    regEng: '/We(?: are|[`’\']re) more patient than (?:they(?: are)?|them)/gm'
  },
  {
    rus: 'В комнате есть люди. Они друзья моего брата',
    eng: 'There are people in the room. They are my brother`s friends',
    regEng: '/There are people in the room. They(?: are|[`’\']re) my brother[`’\']s friends/gm'
  }
]
export default data