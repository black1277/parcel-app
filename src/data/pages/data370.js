// 17-20 > 20.1 > 7
const data = [
  {
    rus: 'Сделают ли они это упражнение к четырём часам? Нет, они не сделают его к этому времени',
    eng: 'Will they have done this exercise by four o`clock? No, they won`t have done it by that time',
    regEng: '/Will they have done this exercise by four o[`’\']clock\\? No, they(?: will not|[`’\']ll not| won[`’\']t) have done it by that time/gm'
  },
  {
    rus: 'Ты когда-нибудь бывал в Африке? О, да! Я бывал там много раз',
    eng: 'Have you ever been to Africa? Oh, yes! I`ve been there a lot of times',
    regEng: '/Have you ever been to Africa\\? Oh, yes! I(?: have|[`’\']ve) been there (?:a lot of|lots of|many) times/gm'
  },
  {
    rus: 'Она уже слышала об этом до того, как я рассказал ей? Нет, она не слышала об этом ранее',
    eng: 'Had she already heard about it before I told her? No, she hadn`t heard about it before',
    regEng: '/Had she already heard about (?:this before I told her\\? No, she (?:had not|hadn[`’\']t) heard about (?:this|that)|it before I told her\\? No, she (?:had not|hadn[`’\']t) heard about it) before/gm'
  },
  {
    rus: 'Когда ты позвонишь мне? Я позвоню тебе после того, как вернусь домой',
    eng: 'When are you going to call me? I`m going to call you after I`ve come back home',
    regEng: '/When (?:(?:are you going to (?:phone me\\? I(?: am|[`’\']m) going to phone|call me\\? I(?: am|[`’\']m) going to call)|will you (?:phone me\\? I(?: will|[`’\']ll) phone|call me\\? I(?: will|[`’\']ll) call)) you after I have|(?:are you going to (?:phone me\\? I(?: am|[`’\']m) going to phone|call me\\? I(?: am|[`’\']m) going to call)|will you (?:phone me\\? I(?: will|[`’\']ll) phone|call me\\? I(?: will|[`’\']ll) call)) you after I[`’\']ve) come back home/gm'
  },
  {
    rus: 'Твой сын когда-нибудь бывал в Лондоне до того, как вы поехали туда в прошлом году? Не, он никогда не бывал там ранее',
    eng: 'Had your son ever been to London before you went there last year? No, he`d never been there before',
    regEng: '/Had your son ever been to London before you went there last year\\? No, he(?: had|[`’\']d) never been there before/gm'
  },
  {
    rus: 'Вы закончите свой разговор к тому времени, как я прибуду? Мы не закончим наш разговор к тому времени, потому что у нас слишком много вещей, о которых поговорить',
    eng: 'Will you have finished your conversation by the time I arrive? We won`t have finished our conversation by that time, because we have too many things to talk about',
    regEng: '/Will you have finished your conversation by the time I arrive\\? We (?:will not|won[`’\']t) have finished our conversation by that time, because we have too many things to talk about/gm'
  },
  {
    rus: 'Она уже прислала тебе информацию? Да, она прислала мне информацию прямо после того, как ты попросил её об этом',
    eng: 'Has she already sent you the information? Yes, she sent me the information right after you`d asked her about it',
    regEng: '/Has she (?:already sent you the information\\? Yes, she sent me the information right after you(?: you[`’\']d asked her about this| you[`’\']d asked her about that| had asked her about this| had asked her about that| had asked her about it|[`’\']d asked her about it)|sent you the information yet\\? Yes, she sent me the information right after you (?:you[`’\']d|had) asked her about (?:this|that|it))/gm'
  },
  {
    rus: 'Он когда-нибудь бывал в Испании? Нет, он никогда не бывал в Испании, но он бывал в Италии несколько раз',
    eng: 'Has he ever been to Spain? No, he`s never been to Spain, but he`s been to Italy a few times',
    regEng: '/Has he ever been to Spain\\? No, he(?:[`’\']s never been to Spain, but he has| has never been to Spain, but he[`’\']s|[`’\']s never been to Spain, but he[`’\']s) been to Italy a few times/gm'
  },
  {
    rus: 'Когда она сделает завтрак? Она сделает завтрак после того, как примет душ',
    eng: 'When is she going to make breakfast? She`s going to make breakfast after she`s had a shower',
    regEng: '/When (?:(?:(?:is she going to make breakfast\\? She(?: is|[`’\']s) going to|will she make breakfast\\? She(?: will|[`’\']ll)) make breakfast after she has|(?:is she going to make breakfast\\? She(?: is|[`’\']s) going to|will she make breakfast\\? She(?: will|[`’\']ll)) make breakfast after she[`’\']s) taken|(?:(?:is she going to make breakfast\\? She(?: is|[`’\']s) going to|will she make breakfast\\? She(?: will|[`’\']ll)) make breakfast after she has|(?:is she going to make breakfast\\? She(?: is|[`’\']s) going to|will she make breakfast\\? She(?: will|[`’\']ll)) make breakfast after she[`’\']s) had) a shower/gm'
  },
  {
    rus: 'Ты уже приготовил суп? Нет, я еще его не приготовил. Я начал только что',
    eng: 'Have you cooked the soup yet? No, I haven`t cooked it yet. I`ve just started',
    regEng: '/Have you (?:already cooked the soup\\? No, I (?:have not|haven[`’\']t) cooked it yet. I(?: have|[`’\']ve) just (?:started|begun)|cooked the soup yet\\? No, I (?:have not|haven[`’\']t) cooked it yet. I(?: have|[`’\']ve) just (?:started|begun))/gm'
  }
]
export default data