// 17-20 > 18.2 > 6
const data = [
  {
    rus: 'Она очень профессионально делает свою работу. Я всегда рассчитываю на неё, когда дело касается каких-то серьёзных задач',
    eng: 'She does her job very professionally. I always count on her when it comes to some serious tasks',
    regEng: ''
  },
  {
    rus: 'Не торопитесь! Пожалуйста, двигайтесь медленно и держитесь крепко, потому что дорога скользкая',
    eng: 'Don`t rush! Please move slowly and hold on tight because the road is slippery',
    regEng: '/(?:Do not (?:hurry|rush)|Don[`’\']t (?:hurry|rush))! Please move slowly and hold on tight because the road is slippery/gm'
  },
  {
    rus: 'Моя сестра проходит важный экзамен скоро. Вот почему она ужасно занята сейчас. Она усердно учится в этом месяце',
    eng: 'My sister is taking an important exam soon. That`s why she`s terribly busy now. She`s studying hard this month',
    regEng: '/My sister(?: is taking an important exam soon. That is why she is terribly busy now. She is| is taking an important exam soon. This is why she is terribly busy now. She is| is taking an important exam soon. That[`’\']s why she is terribly busy now. She is| is taking an important exam soon. That is why she[`’\']s terribly busy now. She is| is taking an important exam soon. That is why she is terribly busy now. She[`’\']s| is taking an important exam soon. This is why she[`’\']s terribly busy now. She is| is taking an important exam soon. This is why she is terribly busy now. She[`’\']s|[`’\']s taking an important exam soon. That is why she is terribly busy now. She is|[`’\']s taking an important exam soon. This is why she is terribly busy now. She is| is taking an important exam soon. That is why she is awfully busy now. She is| is taking an important exam soon. This is why she is awfully busy now. She is| is taking an important exam soon. That[`’\']s why she[`’\']s terribly busy now. She is| is taking an important exam soon. That[`’\']s why she is terribly busy now. She[`’\']s| is taking an important exam soon. That is why she[`’\']s terribly busy now. She[`’\']s| is taking an important exam soon. This is why she[`’\']s terribly busy now. She[`’\']s|[`’\']s taking an important exam soon. That[`’\']s why she is terribly busy now. She is|[`’\']s taking an important exam soon. That is why she[`’\']s terribly busy now. She is|[`’\']s taking an important exam soon. This is why she[`’\']s terribly busy now. She is|[`’\']s taking an important exam soon. This is why she is terribly busy now. She[`’\']s| is taking an important exam soon. That[`’\']s why she is awfully busy now. She is| is taking an important exam soon. That is why she[`’\']s awfully busy now. She is| is taking an important exam soon. That is why she is awfully busy now. She[`’\']s| is taking an important exam soon. This is why she[`’\']s awfully busy now. She is| is taking an important exam soon. This is why she is awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. That is why she is awfully busy now. She is|[`’\']s taking an important exam soon. This is why she is awfully busy now. She is| is taking an important exam soon. That[`’\']s why she[`’\']s terribly busy now. She[`’\']s|[`’\']s taking an important exam soon. That[`’\']s why she[`’\']s terribly busy now. She is|[`’\']s taking an important exam soon. That[`’\']s why she is terribly busy now. She[`’\']s|[`’\']s taking an important exam soon. That is why she[`’\']s terribly busy now. She[`’\']s|[`’\']s taking an important exam soon. This is why she[`’\']s terribly busy now. She[`’\']s| is taking an important exam soon. That[`’\']s why she[`’\']s awfully busy now. She is| is taking an important exam soon. That[`’\']s why she is awfully busy now. She[`’\']s| is taking an important exam soon. That is why she[`’\']s awfully busy now. She[`’\']s| is taking an important exam soon. This is why she[`’\']s awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. That[`’\']s why she is awfully busy now. She is|[`’\']s taking an important exam soon. That is why she[`’\']s awfully busy now. She is|[`’\']s taking an important exam soon. That is why she is awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. This is why she[`’\']s awfully busy now. She is|[`’\']s taking an important exam soon. This is why she is awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. That[`’\']s why she[`’\']s terribly busy now. She[`’\']s| is taking an important exam soon. That[`’\']s why she[`’\']s awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. That[`’\']s why she[`’\']s awfully busy now. She is|[`’\']s taking an important exam soon. That[`’\']s why she is awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. That is why she[`’\']s awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. This is why she[`’\']s awfully busy now. She[`’\']s|[`’\']s taking an important exam soon. That[`’\']s why she[`’\']s awfully busy now. She[`’\']s) studying hard this month/gm'
  },
  {
    rus: 'Пожалуйста, не веди машину так быстро! Это слишком опасно! Я начинаю нервничать',
    eng: 'Please don`t drive so fast! It`s too dangerous! I`m getting nervous',
    regEng: '/(?:Do not drive so (?:quickly|fast), please! (?:(?:That|This|It) is|(?:That|It)[`’\']s) too dangerous! I(?: am|[`’\']m)|Please (?:do not|don[`’\']t) drive so (?:quickly|fast)! (?:(?:That|This|It) is|(?:That|It)[`’\']s) too dangerous! I(?: am|[`’\']m)|Don[`’\']t drive so (?:quickly|fast), please! (?:(?:That|This|It) is|(?:That|It)[`’\']s) too dangerous! I(?: am|[`’\']m)) getting nervous/gm'
  },
  {
    rus: 'Почему она так злобно разговаривает со мной? У неё просто плохой день. Не принимай это лично',
    eng: 'Why is she talking to me so angrily? She`s just having a bad day. Don`t take it personally',
    regEng: '/Why is she (?:speaking (?:with|to)|talking (?:with|to)) me so angrily\\? She[`’\']s just having a bad day. (?:Do not|Don[`’\']t) take (?:that|this|it) personally/gm'
  },
  {
    rus: 'Я уже иду! Не волнуйся. Мы терпеливо ждём тебя. Не торопись!',
    eng: 'I`m already coming! Don`t worry. We`re waiting for you patiently. Take your time!',
    regEng: '/(?:I am already coming! (?:Do not worry. We are|Don[`’\']t worry. We[`’\']re) waiting for you patiently. Take your time!|I[`’\']m already coming! (?:Do not worry. We are|(?:Do not|Don[`’\']t) worry. We[`’\']re) waiting for you patiently. Take your time!)/gm'
  },
  {
    rus: 'Я верно ответил на тот вопрос в тесте на прошлой неделе? Нет, ты неверно ответил на него',
    eng: 'Did I answer that question right in the test last week? No, you answered it wrong',
    regEng: '/Did I answer that question (?:correctly in the test last week\\? No, you answered it (?:incorrectly|wrong)|right in the test last week\\? No, you answered it wrong)/gm'
  }
]
export default data