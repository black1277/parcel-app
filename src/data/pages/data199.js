// 10-14 > 13.2 > 7
const data = [
  {
    rus: 'Что ты обычно пьёшь? Обычно я пью кофе',
    eng: 'What do you usually drink? I usually drink coffee',
    regEng: '/What do you usually drink\\? (?:(?:I usually|Usually I) drink coffee|I drink coffee usually)/gm'
  },
  {
    rus: 'Что ты пьёшь сейчас? Сейчас я пью чёрный чай',
    eng: 'What are you drinking now? Now I`m drinking black tea',
    regEng: '/What are you drinking now\\? (?:Now I(?: am|[`’\']m) drinking black tea|I(?: am|[`’\']m) drinking black tea now)/gm'
  },
  {
    rus: 'Что дети делали в воскресенье? Они играли в игры и смотрели телевизор',
    eng: 'What did the children do on Sunday? They played games and watched TV',
    regEng: '/What did the (?:children|kids) do on Sunday\\? They played games and watched TV/gm'
  },
  {
    rus: 'Что дети делали между десятью и одиннадцатью часами вечера в воскресенье? Они спали',
    eng: 'What were the children doing between ten and eleven o`clock in the evening on Sunday? They were sleeping',
    regEng: '/What were the (?:(?:children|kids) doing between ten and eleven o[`’\']clock (?:in the evening|at night) on Sunday\\?|(?:children|kids) doing on Sunday between ten and eleven o[`’\']clock in the evening\\?|(?:children on Sunday doing|kids doing on Sunday) between ten and eleven o[`’\']clock at night\\?) They were sleeping/gm'
  },
  {
    rus: 'Куда она пойдёт завтра? Завтра она пойдёт на вечеринку',
    eng: 'Where will she go tomorrow? Tomorrow she`ll go to a party',
    regEng: '/Where will she go tomorrow\\? (?:Tomorrow she(?: will|[`’\']ll) go to a party|She(?: will|[`’\']ll) go to a party tomorrow)/gm'
  },
  {
    rus: 'Куда она будет идти завтра в семь часов утра? Она будет идти на работу',
    eng: 'Where will she be going tomorrow at seven o`clock in the morning? She`ll be going to work',
    regEng: '/Where will she be going tomorrow at seven o[`’\']clock in the morning\\? She(?: will|[`’\']ll) be going to work/gm'
  },
  {
    rus: 'Что он часто делаетна ужин? Он часто делает суп',
    eng: 'What does he often make for dinner? He often makes soup',
    regEng: '/What does he often (?:make for dinner\\? He often makes|cook for dinner\\? He often cooks) soup/gm'
  },
  {
    rus: 'Что он делает на ужин сегодня? Сегодня он делает кашу',
    eng: 'What is he making for dinner today? Today he`s making porridge',
    regEng: '/What is he (?:cooking for dinner today\\? (?:Today he(?: is|[`’\']s) cooking porridge|He(?: is|[`’\']s) cooking porridge today)|making for dinner today\\? (?:Today he(?: is|[`’\']s) making porridge|He(?: is|[`’\']s) making porridge today))/gm'
  }
]
export default data