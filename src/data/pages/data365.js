// 17-20 > 19.4 > 18
const data = [
  {
    rus: 'Урок заканчивается через десять минут. Осталось немного времени, чтобы проверить домашнюю работу. Кто хочет пойти к доске? Я пойду!',
    eng: 'The class finishes in ten minutes. There`s a little time left to check the homework. Who wants to go to the blackboard? I`ll go!',
    regEng: '/The class (?:finishes|ends) in ten minutes. There(?: is a little|[`’\']s a little| is some|[`’\']s some) time left to check the homework. Who wants to go to the blackboard\\? I(?: will|[`’\']ll) go!/gm'
  },
  {
    rus: 'Её волосы гуще, чем твои? Нет, мои волосы более жидкие, чем у неё, но её волосы короче моих',
    eng: 'Is her hair thicker than yours? No, my hair is thinner than hers, but her hair is shorter than mine',
    regEng: '/Is her hair thicker than yours\\? No, my hair(?: is thinner than hers, but her hair is|[`’\']s thinner than hers, but her hair[`’\']s) shorter than mine/gm'
  },
  {
    rus: 'Он совсем не сфокусирован. Он сделает много ошибок в тесте',
    eng: 'He`s not focused at all. He`s going to make a lot of mistakes in the test',
    regEng: '/He(?: is not|[`’\']s not| isn[`’\']t) focused at all. He(?: is going to|[`’\']s going to| will|[`’\']ll) make (?:a lot of|lots of|many) mistakes in the test/gm'
  },
  {
    rus: 'Кто согласен со мной? Я согласна с тобой, но у меня есть некоторые пункты, чтобы добавить',
    eng: 'Who agrees with me? I agree with you but I have some points to add',
    regEng: '/Who agrees with me\\? I agree with you but I have (?:a few|some) points to add/gm'
  },
  {
    rus: 'Сколько гостей твои родители пригласили на вечеринку вчера?',
    eng: 'How many guests did your parents invite to the party yesterday?',
    regEng: ''
  }
]
export default data