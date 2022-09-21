import {head} from './components/header.js'

document.addEventListener("DOMContentLoaded", ()=>{
  const dom = document.getElementById('main')
  init(dom)
})



function init(el){
  el.innerHTML = head()
  const audi = document.getElementsByTagName('audio')[0]
  audi.currentTime = 60
  console.log(audi)
}