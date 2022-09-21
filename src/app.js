import {head} from './components/header.js'

document.addEventListener("DOMContentLoaded", ()=>{
  const dom = document.getElementById('main')
  init(dom)
})



function init(el){
  el.innerHTML = head()
}
