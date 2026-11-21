// 15-16 > 16.1 > 12
const data = [
  {
    rus: 'Через два часа она встречается с кем-то с работы, чтобы обсудить какие-то важные детали',
    eng: 'In two hours she`s meeting with somebody from work to discuss some important details',
    regEng: '/(?:In two hours she(?: is|[`’\']s) meeting (?:with (?:somebody|someone)|somebody|someone) from work to discuss some important details|She(?: is|[`’\']s) meeting (?:with (?:somebody|someone)|somebody|someone) from work to discuss some important details in two hours)/gm'
  },
  {
    rus: 'Она ни с кем не встречается в понедельник, потому что она слишком занята',
    eng: 'She`s not meeting with anybody on Monday because she`s too busy',
    regEng: '/(?:(?:She(?: is not|[`’\']s not| isn[`’\']t) meeting (?:with (?:anybody|anyone)|anybody|anyone) on Monday|On Monday she(?: is not|[`’\']s not| isn[`’\']t) meeting(?: with)? anybody|On Monday she(?: is not|[`’\']s not| isn[`’\']t) meeting(?: with)? anyone) because she is|(?:She(?: is not|[`’\']s not| isn[`’\']t) meeting (?:with (?:anybody|anyone)|anybody|anyone) on Monday|On Monday she(?: is not|[`’\']s not| isn[`’\']t) meeting(?: with)? anybody|On Monday she(?: is not|[`’\']s not| isn[`’\']t) meeting(?: with)? anyone) because she[`’\']s) too busy/gm'
  },
  {
    rus: 'Она ни с кем не встречается на следующей неделе, потому что у неё слишком много дел делать',
    eng: 'She`s meeting with nobody next week because she has too many things to do',
    regEng: '/(?:She(?: is|[`’\']s) meeting (?:(?:with )?no one|with nobody|nobody) next week|Next week she(?: is|[`’\']s) meeting(?: with)? nobody|Next week she(?: is|[`’\']s) meeting(?: with)? no one) because she has too many things to do/gm'
  },
  {
    rus: 'Встречается ли она с кем-нибудь завтра? Да, завтра она встречается со своими родственниками',
    eng: 'Is she meeting with anybody tomorrow? Yes, tomorrow she`s meeting with her relatives',
    regEng: '/Is she meeting (?:(?:with (?:anybody|anyone) tomorrow\\? Yes, tomorrow she(?: is|[`’\']s) meeting with|(?:anybody|anyone) tomorrow\\? Yes, tomorrow she(?: is|[`’\']s) meeting) her relatives|(?:with (?:anybody|anyone) tomorrow\\? Yes, she(?: is|[`’\']s) meeting with|(?:anybody|anyone) tomorrow\\? Yes, she(?: is|[`’\']s) meeting) her relatives tomorrow)/gm'
  },
  {
    rus: 'Мне нужно купить что-то поесть, потому что я становлюсь голодным',
    eng: 'I need to buy something to eat because I`m getting hungry',
    regEng: '/I need to buy something to eat because I(?: am|[`’\']m) getting hungry/gm'
  },
  {
    rus: 'Мне не нужно ничего покупать поесть, потому что у меня много еды с собой',
    eng: 'I don`t need to buy anything to eat because I have a lot of food with me',
    regEng: '/I (?:don[`’\']t need to buy anything to eat because I have (?:a lot|lots) of|do not need to buy anything to eat because I have (?:a lot|lots)) food with me/gm'
  },
  {
    rus: 'Мне не нужно ничего покупать поесть, потому что я уже сыт',
    eng: 'I need to buy nothing to eat because I`m already full',
    regEng: '/I need to buy nothing to eat because I(?: am|[`’\']m) already full/gm'
  },
  {
    rus: 'Нужно ли мне покупать что-нибудь поесть? Нет, дедушка делает суп для тебя',
    eng: 'Do I need to buy anything to eat? No, Grandpa is making soup for you',
    regEng: '/Do I need to buy anything to eat\\? No, (?:(?:Grandfather|Grandpa) is|(?:Grandfather|Grandpa)[`’\']s) making soup for you/gm'
  }
]
export default data