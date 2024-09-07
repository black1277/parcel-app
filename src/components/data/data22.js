// 01-05 > 3.1 > 6
const data = [
  {
    rus: 'они всегда начинают новый проект весной',
    eng: 'They always start a new project in spring',
    regEng: '/(?:They always (?:start|begin) a new project in spring)|(?:In spring they always (?:start|begin) a new project)/gm'
  },
  {
    rus: 'они начали новый проект прошлой весной',
    eng: 'They started a new project last spring',
    regEng: '/(?:They (?:started|began) a new project last spring)|(?:Last spring they (?:started|began) a new project)/gm'
  },
  {
    rus: 'они начнут новый проект следующей весной',
    eng: 'They will start a new project next spring',
    regEng: '/(?:(?:They will|They’ll) (?:start|begin) a new project next spring)|(?:Next spring (?:they will|they’ll) (?:start|begin) a new project)/gm'
  },
  {
    rus: 'они всегда заканчивают свою работу летом',
    eng: 'They always finish their work in summer',
    regEng: '/(?:They always finish their work in summer)|(?:In summer they always finish their work)/gm'
  },
  {
    rus: 'они закончили свою работу прошлым летом',
    eng: 'They finished their work last summer',
    regEng: '/(?:They finished their work last summer)|(?:Last summer they finished their work)/gm'
  },
  {
    rus: 'они закончат свою работу следующим летом',
    eng: 'They will finish their work next summer',
    regEng: '/(?:(?:They will|They’ll) finish their work next summer)|(?:Next summer (?:they will|they’ll) finish their work)/gm'
  }
]
export default data