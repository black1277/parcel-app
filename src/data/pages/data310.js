// 17-20 > 17.4 > 11
const data = [
  {
    rus: 'Мне не нужно ничего покупать поесть, потому что у меня много еды с собой',
    eng: 'I don`t need to buy anything to eat because I have a lot of food with me',
    regEng: '/I (?:don[`’\']t need to buy anything to eat because I(?: have a lot| have lots|[`’\']ve a lot|[`’\']ve lots) of|do not need to buy anything to eat because I(?: have a lot| have lots|[`’\']ve a lot|[`’\']ve lots)|need to buy nothing to eat because I(?: have a lot| have lots|[`’\']ve a lot|[`’\']ve lots) of) food with me/gm'
  },
  {
    rus: 'Мы будем готовиться пойти в школу, пока бабушка будет делать бутерброды для нас',
    eng: 'We`ll be getting ready to go to school while Grandma is making sandwiches for us',
    regEng: '/(?:While (?:(?:Grandmother|Grandma) is|(?:Grandmother|Grandma)[`’\']s) making sandwiches for us, we(?: will|[`’\']ll) be getting ready to go to school|We(?: will|[`’\']ll) be getting ready to go to school while (?:(?:Grandmother|Grandma) is|(?:Grandmother|Grandma)[`’\']s) making sandwiches for us)/gm'
  },
  {
    rus: 'Моя мечта – жить у моря, в месте, где солнце светит круглый год',
    eng: 'My dream is to live by the sea, in a place where the sun shines all year round',
    regEng: ''
  },
  {
    rus: 'С кем ты разговаривала, когда я принимала душ? Я разговаривала со своим парнем',
    eng: 'Who were you talking to when I was having a shower? I was talking to my boyfriend',
    regEng: '/Who were you (?:talking (?:with when I was (?:having|taking) a shower\\? I was talking with|to when I was (?:having|taking) a shower\\? I was talking to)|speaking (?:with|to) when I was (?:having|taking) a shower\\? I was speaking to) my boyfriend/gm'
  },
  {
    rus: 'Мне сложно понимать более длинные предложения сразу же. Так что я слушаю их и повторяю их вслух много раз',
    eng: 'It`s difficult for me to understand longer sentences at once. So I listen to them and repeat them out loud many times',
    regEng: '/(?:It is difficult for me to understand longer sentences at once. So I(?: am listening to them and I am repeating them out loud a lot of|[`’\']m listening to them and I am repeating them out loud a lot of| am listening to them and I[`’\']m repeating them out loud a lot of|[`’\']m listening to them and I[`’\']m repeating them out loud a lot of| am listening to them and I am repeating them out loud many|[`’\']m listening to them and I am repeating them out loud many| am listening to them and I[`’\']m repeating them out loud many|[`’\']m listening to them and I[`’\']m repeating them out loud many| listen to them and I repeat them out loud a lot of| listen to them and repeat them out loud a lot of| listen to them and I repeat them out loud many| listen to them and repeat them out loud many) times|It[`’\']s difficult for me to understand longer sentences at once. So I(?: am listening to them and I am repeating them out loud a lot of|[`’\']m listening to them and I am repeating them out loud a lot of| am listening to them and I[`’\']m repeating them out loud a lot of|[`’\']m listening to them and I[`’\']m repeating them out loud a lot of| am listening to them and I am repeating them out loud many|[`’\']m listening to them and I am repeating them out loud many| am listening to them and I[`’\']m repeating them out loud many|[`’\']m listening to them and I[`’\']m repeating them out loud many| listen to them and I repeat them out loud a lot of| listen to them and repeat them out loud a lot of| listen to them and I repeat them out loud many| listen to them and repeat them out loud many) times)/gm'
  }
]
export default data