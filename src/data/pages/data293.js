// 17-20 > 17.2 > 3
const data = [
  {
    rus: 'С этим устройством что-то неисправно. Тебе лучше проверить его',
    eng: 'There`s something wrong with this device. It`s better for you to check it',
    regEng: '/There(?: is|[`’\']s) something wrong with this device. It(?: is|[`’\']s) better for you to check it/gm'
  },
  {
    rus: 'С этим устройством нет ничего неисправного. Просто необходимо установить программное обеспечение, прежде всего',
    eng: 'There isn`t anything wrong with this device. It`s just necessary to install the software first',
    regEng: '/(?:There (?:is not anything wrong with this device. (?:(?:(?:First it is|It is|It[`’\']s) just necessary to first|First it[`’\']s just necessary to) install the software|It(?: is|[`’\']s) just necessary to install the software first)|isn[`’\']t anything wrong with this device. (?:It[`’\']s just necessary to (?:install the software first|first install the software)|First it[`’\']s just necessary to install the software))|There[`’\']s not anything wrong with this device. (?:(?:It(?: is|[`’\']s) just necessary to first|First it(?: is|[`’\']s) just necessary to) install the software|It(?: is|[`’\']s) just necessary to install the software first))/gm'
  },
  {
    rus: 'Нет ничего неисправного с этим устройством. Ты просто не знаешь, как им пользоваться',
    eng: 'There`s nothing wrong with this device. You just don`t know how to use it',
    regEng: '/There(?: is|[`’\']s) nothing wrong with this device. You just (?:do not|don[`’\']t) know how to use it/gm'
  },
  {
    rus: 'Есть ли что-то неисправное с этим устройством? Ну, кажется, что батарея села. Тебе просто нужно его зарядить',
    eng: 'Is there anything wrong with this device? Well, it seems that the battery is low. You just need to charge it',
    regEng: '/Is there (?:something|anything) wrong with this device\\? Well, it seems that the battery(?: is|[`’\']s) low. You just need to charge it/gm'
  },
  {
    rus: 'Она хочет, чтобы кто-то послушал её. Пожалуйста, обратите внимание на её слова',
    eng: 'She wants somebody to listen to her. Please pay attention to her words',
    regEng: '/She wants somebody to listen to her. (?:Pay attention to her words, please|Please pay attention to her words)/gm'
  },
  {
    rus: 'Она не хочет, чтобы кто-либо слушал её, потому что у неё нет ничего важного сказать',
    eng: 'She doesn`t want anybody to listen to her because she doesn`t have anything important to say',
    regEng: '/She (?:(?:(?:(?:does not|doesn[`’\']t) want anybody|wants nobody) to listen to her because she does not|(?:doesn[`’\']t want anybody to listen|wants nobody to (?:listen|tell)) to her because she doesn[`’\']t) have anything important to tell|(?:(?:(?:does not|doesn[`’\']t) want anybody|wants nobody) to listen to her because she (?:does not|doesn[`’\']t) have anything|wants nobody to listen to her because she has nothing) important to say)/gm'
  },
  {
    rus: 'Она не хочет, чтобы кто-либо её слушал, потому что она боится говорить вслух',
    eng: 'She wants nobody to listen to her because she`s afraid to speak out loud',
    regEng: '/She wants nobody to listen to her because she(?: is|[`’\']s) afraid (?:of speaking|of talking|to speak|to talk) out loud/gm'
  },
  {
    rus: 'Хочет ли она, чтобы кто-нибудь послушал её? Да, но вы вскоре устанете от неё, потому что она слишком разговорчивая',
    eng: 'Does she want anybody to listen to her? Yes, but you`ll soon get tired of her because she`s too talkative',
    regEng: '/Does she want anybody to listen to her\\? Yes, but (?:(?:(?:(?:(?:soon you(?: are|[`’\']re)|you are soon|you[`’\']re soon) going to|you(?: will|[`’\']ll) soon|soon you will|soon you[`’\']ll) get tired of|you will get tired of soon) her|(?:you(?: are|[`’\']re) going to|you[`’\']ll) get tired of her soon) because she is|(?:(?:(?:soon you(?: are|[`’\']re)|you are soon|you[`’\']re soon) going to|you(?: will|[`’\']ll) soon|soon you will|soon you[`’\']ll) get tired of her|you(?: are going to|[`’\']re going to| will|[`’\']ll) get tired of her soon) because she[`’\']s) too talkative/gm'
  }
]
export default data