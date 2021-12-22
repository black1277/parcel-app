import {head} from './components/header'

console.log('Hello world!');
document.addEventListener("DOMContentLoaded", ()=>{
  const dom = document.getElementById('sbm')
  init(dom)
})
function init(el){
  el.innerHTML = head()
}