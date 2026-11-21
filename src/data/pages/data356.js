// 17-20 > 19.4 > 9
const data = [
  {
    rus: 'Её сын не готовится к своим экзаменам. Он провалит, конечно же',
    eng: 'Her son isn`t getting ready for his exams. He`s going to fail of course',
    regEng: '/(?:Her son(?: is not getting ready| isn[`’\']t getting ready|[`’\']s not getting ready| is not preparing| isn[`’\']t preparing|[`’\']s not preparing) for his exams. Of course (?:He is|he[`’\']s) going to fail|Her son(?: is not getting ready| isn[`’\']t getting ready|[`’\']s not getting ready| is not preparing| isn[`’\']t preparing|[`’\']s not preparing) for his exams. He(?: is|[`’\']s) going to fail of course)/gm'
  },
  {
    rus: 'Какие твои любимые предметы в школе? Мои любимые предметы – математика, физика, химия и история',
    eng: 'What are your favourite subjects in school? My favourite subjects are Mathematics, Physics, Chemistry and History',
    regEng: '/What are your (?:favourite subjects in school\\? My favourite subjects are (?:Mathematics|Maths|Math),|favorite subjects in school\\? My favorite subjects are (?:Mathematics|Maths|Math),) Physics, Chemistry and History/gm'
  },
  {
    rus: 'Над чем он работает в этом году? Он работает над крутой книгой. Я думаю, что она будет бестселлером',
    eng: 'What is he working on this year? He`s working on an awesome book. I think that it`ll be a best-seller',
    regEng: '/(?:What is he working on this year\\? He(?: is|[`’\']s) working on an awesome book. I think (?:(?:that it(?: is|[`’\']s)|it is|it[`’\']s) going to|(?:that )?it will|that it[`’\']ll|it[`’\']ll) be a best-seller|What[`’\']s he working on this year\\? He(?: is|[`’\']s) working on an awesome book. I think (?:(?:that it(?: is|[`’\']s)|it is|it[`’\']s) going to|(?:that )?it will|that it[`’\']ll|it[`’\']ll) be a bestseller)/gm'
  },
  {
    rus: 'У них есть немного информации об этом человеке',
    eng: 'They have a little information about this person',
    regEng: ''
  },
  {
    rus: 'Этот отель ужасный. Нам нужно найти более хорошее место, чтобы остановиться. Я согласен',
    eng: 'This hotel is awful. We need to find a better place to stay. I agree',
    regEng: '/This hotel is (?:terrible.|horrible.|awful.) We need to find a better place to stay. I agree/gm'
  }
]
export default data