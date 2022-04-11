import data from './data'
export function head() {
 return get_langToggle()
   + get_fontToggle(fonts)
   + '<div class="flexcol source" id="panel">'
   + get_row(data, 1)
   + '</div>'
   + get_links(data.length);
}

function get_langToggle() {
 return `
 <div class="flexrow">
  <span class="blk"><label for="rus">rus</label></span>
  <div class="flexcol">
   <span class="toggle-bg" id="langToggles">
       <input type="radio" name="toggle" value="rus" id="rus" onchange="prx.lang='rus'">
       <input type="radio" name="toggle" value="eng" id="eng" onchange="prx.lang='eng'"> 
       <span class="switch"></span>
   </span>
  </div>
  <span class="blk"><label for="eng">eng</label></span>
 </div>`
}

function get_fontToggle(fnt) {
 const li = fnt.map((el)=>{
  const ch = el === state.font ? 'checked' : ''
  return `
  <li><input type="radio" name="fonts" value="${el}" id="${el}" onchange="prx.font='${el}'" ${ch}>
    <label class="${el} flexrow" for="${el}">${el}</label>
  </li>`
 }).join('')

 return `
<div class="flexcol" id="fontToggles">
 <ul class="flexrow">
${li}
 </ul>
</div>`
}

function get_row(arr, page = 0) {
 let stranica = page > 0
   ? page - 1
   : 0
 if(stranica > arr.length || arr.length < 1) return `<div>Нет страницы или данных</div>`
 const part = arr[stranica]

 if(state.lang === 'rus') return part.map(ob=>make_row(ob.rus, ob.eng)).join('')
 else return part.map(ob=>make_row(ob.eng, ob.rus)).join('')
}

function make_row(vis, answer) {
 return `<div class="el" data-lang="${answer}">
<span ondblclick="dblHandler(this,'${answer}')">${vis}</span>
<input oninput="chHandler(this)" onblur="chHandler(this)" type="text" /></div>`
}
//  data-lang="${answer}"
function dblHandler(el, ans) {
 const thElement = el.parentNode.getElementsByTagName('input')[0];
 thElement.title = thElement.value;
 thElement.value = ans;
}
window.dblHandler = dblHandler
function chHandler(el) {
 if(el.value.trim()==='') {el.classList.remove('err'); return}
 el.parentNode.dataset.lang.trim().toLowerCase()===el.value.trim().toLowerCase()
   ? el.className='done'
   : el.className='err'
}
window.chHandler = chHandler

function get_links(len) {
 const cnt = new Array(len).fill(0).map((el, i)=>{
  const cl = (i+1)===state.currentPage ? 'link-page active' : 'link-page'
  return `<a class="${cl}" onclick="prx.currentPage=${i+1}">${i+1}</a>`
 }).join(' ');
 return `
<div class="flexrow" id="links">
  [${cnt}]
</div>`
}

const fonts = ['source', 'lora', 'philosopher', 'literata', 'vollkorn'];

const state = {
 lang: 'rus',
 font: fonts[0],
 currentPage: 1
}

const prx = new Proxy(state, {
 set(target, key, val){
  if(target[key] === val) return
  //console.log(target)
  target[key] = val
  const panel = document.getElementById('panel')
  if(key==='font') {
   panel.classList.remove(...fonts)
   panel.classList.add(val)
   return
  }

  panel.innerHTML = get_row(data, target.currentPage)

  if(key==='currentPage') {
   const lnk = document.getElementById('links')
   lnk.innerHTML = get_links(data.length)
  }


 }
})
window.prx = prx