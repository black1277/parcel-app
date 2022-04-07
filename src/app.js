import {head} from './components/header'

document.addEventListener("DOMContentLoaded", ()=>{
  const dom = document.getElementById('main')
  init(dom)
})

function init(el){
  el.innerHTML = head()
}