import param from './js/index'

console.log('Hello world!');
document.addEventListener("DOMContentLoaded", ()=>{
  const dom = document.getElementById('main')
  init(dom)
})
function init(el){
  el.innerHTML = 'All ok! ' + param[1].name +
    '<hr/><button class="squreBtn philosopher">BUTTON</button>' +
    '<hr/><button class="squreBtn vollkorn">BUTTON</button>'
}