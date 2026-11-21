// 10-14 > 14.2 > 5
const data = [
  {
    rus: 'Он спал, когда она позвонила',
    eng: 'He was sleeping when she called',
    regEng: '/(?:When she called, he was sleeping|He was sleeping when she called)/gm'
  },
  {
    rus: 'Он будет спать, когда она позвонит',
    eng: 'He`ll be sleeping when she calls',
    regEng: '/(?:When she calls, he(?: will|[`’\']ll) be sleeping|He(?: will|[`’\']ll) be (?:sleeping|asleep) when she calls|When she calls, he(?: will|[`’\']ll) be asleep)/gm'
  },
  {
    rus: 'Они работали, когда вы позвонили',
    eng: 'They were working when you called',
    regEng: '/(?:When you called, they were working|They were working when you called)/gm'
  },
  {
    rus: 'Они будут работать, когда вы позвоните',
    eng: 'They`ll be working when you call',
    regEng: '/(?:When you call, they(?: will|[`’\']ll) be working|They(?: will|[`’\']ll) be working when you call)/gm'
  },
  {
    rus: 'Я принимал душ, когда они пришли',
    eng: 'I was having a shower when they came',
    regEng: '/(?:When they came, I was (?:having|taking) a shower|I was (?:having|taking) a shower when they came)/gm'
  },
  {
    rus: 'Я буду принимать душ, когда они придут',
    eng: 'I`ll be having a shower when they come',
    regEng: '/(?:When they (?:came, I will be (?:having|taking)|come, I[`’\']ll be (?:having|taking)) a shower|I will be (?:having|taking) a shower when they came|I[`’\']ll be (?:having|taking) a shower when they come)/gm'
  },
  {
    rus: 'Мы пели, когда он пришёл',
    eng: 'We were singing when he came',
    regEng: '/(?:When he came, we were singing|We were singing when he came)/gm'
  },
  {
    rus: 'Мы будем петь, когда он придёт',
    eng: 'We`ll be singing when he comes',
    regEng: '/(?:When he comes, we(?: will|[`’\']ll) be singing|We(?: will|[`’\']ll) be singing when he comes)/gm'
  }
]
export default data