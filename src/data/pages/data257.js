// 15-16 > 15.4 > 14
const data = [
  {
    rus: 'Что он делает на ужин сегодня? Сегодня он делает кашу',
    eng: 'What is he making for dinner today? Today he`s making porridge',
    regEng: '/What is he (?:cooking for dinner today\\? (?:Today he(?: is|[`’\']s) cooking porridge|He(?: is|[`’\']s) cooking porridge today)|making for dinner today\\? (?:Today he(?: is|[`’\']s) making porridge|He(?: is|[`’\']s) making porridge today))/gm'
  },
  {
    rus: 'Мои дети обычно не едят много фруктов, они предпочитают овощи',
    eng: 'My children don`t usually eat much fruit, they prefer vegetables',
    regEng: '/My (?:(?:children|kids) do not|(?:children|kids) don[`’\']t) usually eat (?:a lot of|lots of|much) fruit, they prefer vegetables/gm'
  },
  {
    rus: 'Я хочу, чтобы мы поужинали вместе. Ты свободна сегодня вечером?',
    eng: 'I want us to have dinner together. Are you free tonight?',
    regEng: ''
  },
  {
    rus: 'Мы делали свою домашнюю работу, когда они позвонили',
    eng: 'We were doing our homework when they called',
    regEng: ''
  },
  {
    rus: 'Я согласен с тем человеком',
    eng: 'I agree with that person',
    regEng: ''
  }
]
export default data