// 17-20 > 19.1 > 5
const data = [
  {
    rus: 'Дорога скользкая. Так что мы будем держаться крепко и двигаться медленно',
    eng: 'The road is slippery. So we`re going to hold on tight and move slowly',
    regEng: '/The road is slippery. So we(?: are|[`’\']re) going to hold on tight and(?: to)? move slowly/gm'
  },
  {
    rus: 'Она удивительно красивая женщина. Я думаю, что она настоящая классическая красавица',
    eng: 'She`s an amazingly beautiful woman. I think that she`s a real classic beauty',
    regEng: '/She(?: is|[`’\']s) an amazingly beautiful woman. I think (?:that she(?: is|[`’\']s)|she is|she[`’\']s) a real classic beauty/gm'
  },
  {
    rus: 'О, Боже мой! Почему ты говоришь так громко? У меня уши болят!',
    eng: 'Oh my God! Why are you talking so loud? My ears hurt!',
    regEng: '/Oh my God! Why are you (?:speaking|talking) so loud\\? My ears (?:are (?:hurting|aching)|hurt|ache)!/gm'
  },
  {
    rus: 'Чем занимается его жена? Она фантастически успешная актриса. Она снимается в разных блокбастерах',
    eng: 'What does his wife do? - She`s a fantastically successful actress. She acts in different blockbusters',
    regEng: '/What does his wife do\\? (?:- She[`’\']s|She is|She[`’\']s) a fantastically successful actress. She acts in different blockbusters/gm'
  },
  {
    rus: 'Расслабься! Я веду быстро, но безопасно. Всё под контролем!',
    eng: 'Relax! I`m driving fast but safely. Everything`s under control!',
    regEng: '/(?:Take it easy|Relax)! I(?: am|[`’\']m) driving fast but safely. Everything(?: is|[`’\']s) under control!/gm'
  },
  {
    rus: 'Это невероятно мощные слова! Я хочу, чтобы ты прочитал их. Я обещаю, что они изменят твою жизнь!',
    eng: 'These are incredibly powerful words! I want you to read them. I promise that they`ll change your life!',
    regEng: '/These are (?:unbelievably|incredibly) powerful words! I want you to read them. I promise (?:that they(?: are going to|[`’\']re going to| will|[`’\']ll)|they are going to) change your life!/gm'
  },
  {
    rus: 'Он очень добрый человек. Он обращается с каждым вокруг себя очень хорошо. Он всегда ведёт себя вежливо и поступает правильно',
    eng: 'He`s a very kind person. He treats everyone around him very well. He always behaves politely and acts right',
    regEng: '/He(?: is|[`’\']s) a very kind person. He treats everyone around him very well. He always behaves politely and acts right/gm'
  },
  {
    rus: 'Это идеально написанное предложение! Твой английский становится лучше и лучше шаг за шагом!',
    eng: 'This is a perfectly written sentence! Your English is getting better and better step by step!',
    regEng: '/(?:(?:This|That|It) is|(?:That|It)[`’\']s) a perfectly written sentence! Your English is (?:becoming|getting) better and better step by step!/gm'
  }
]
export default data