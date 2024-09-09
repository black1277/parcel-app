import data from './data'
import PackData from './locals'
import {enableDisable, filterByString, mixArr, showProgress, show} from './utils'

let arrayPages = Array.from({ length: data.length }, (_, i) => i + 1)
const fonts = ['source', 'lora', 'philosopher', 'literata', 'vollkorn', 'firacode']

function getRandomPage() {// возвращает рандом номер страницы
  if (arrayPages.length < 1) arrayPages = Array.from({ length: data.length }, (_, i) => i + 1)
  return Math.floor(Math.random() * arrayPages.length)
}
function countObjects(arrays) {
  return arrays.reduce((total, array) => total + array.length, 0);
}
console.log('Всего', countObjects(data), ' выражений')
const state = {
  lang: 'rus',
  font: PackData.getData('font') ?? fonts[0],
  mix: false,
  currentPage: 1
}

const prx = new Proxy(state, {
  set(target, key, val) {

    if (target[key] === val) return

    target[key] = val
    const panel = document.getElementById('panel')

    if (key === 'font') {
      panel.classList.remove(...fonts, 'userfont')
      panel.classList.add(val)
      PackData.setData('font', val)
      return true
    }
const body = document.querySelector('body')
body.classList.add('hide')
setTimeout(function(){
  panel.innerHTML = get_rows(data, target.currentPage)
  body.classList.remove('hide')
}, 145);
    
    PackData.setData('page', target.currentPage)
    enableDisable(false)
    if (key === 'currentPage') {
      const lnk = document.getElementById('links')
      lnk.innerHTML = get_links(data.length)
    }
    return true
  }
})

export function main() {
  return get_langToggle()
    + get_searchPanel()
    + get_fontToggle(fonts)
    + get_panel()
    + get_links(data.length)
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
  <span class="blk">
    <label for="mix">перемешать </label><input type="checkbox" id="mix" onchange="prx.mix=this.checked">
  </span>
  <span class="blk">
    <input value="показать" type="button" id="show" onclick="show()">
  </span>
 </div>`
}

function get_searchPanel() {
  let flag = PackData.getData('showSearch')
  let style = 'style="display: flex"'
  if(flag === false) style = 'style="display: none"'
  return `<div class="flexrow w100" ${style}>
  <input type="text" name="search" id="search" class="search"><button class="go"
  onclick="goHandler()">GO</button></div>`
}

function goHandler() {
  const input = document.getElementById('search')
  const panel = document.getElementById('panel')
  let txt = input.value.trim()
  input.focus()
  if (txt.length < 3) {
    panel.innerHTML = 'Нужно минимум 3 символа для поиска!'
    return
  }
  let answ = filterByString(data, input.value, prx.lang)
  if (!answ.length) {
    panel.innerHTML = 'Ничего не найдено!'
    return
  }
  let dt = []
  dt.push(answ)
  panel.innerHTML = get_rows(dt)
  enableDisable(true)
}

function get_fontToggle(fnt) {
  let flag = PackData.getData('showFonts')
  let style = 'style="display: flex"'
  if (flag === false) style = 'style="display: none"'
  const li = fnt.map((el) => {
    const ch = el === state.font ? 'checked' : ''
    return `
  <li><input type="radio" name="fonts" value="${el}" id="${el}" onchange="prx.font='${el}'" ${ch}>
    <label class="${el} flexrow" for="${el}">${el}</label>
  </li>`
  }).join('')

  return `
<div class="flexcol" id="fontToggles" ${style}>
 <ul class="flexrow">
${li}
 </ul>
</div>`
}

function get_panel() {
  let page = PackData.getData('page') ?? 1 // номер страницы из локалсторадж или 1
  state.currentPage = Number(page)

  let rw = get_rows(data, page)
  let font = prx.font
  return `<div class="flexcol ${font}" id="panel">${rw}</div>`
}

function get_rows(arr, page = 0) {
  let stranica = page > 0
    ? page - 1
    : 0
  if (stranica > arr.length || arr.length < 1) return `<div>Нет страницы или данных</div>`
  const part = [...arr[stranica]]
  let btnShow = document.getElementById('show')
  if(btnShow) btnShow.disabled = false
  if (state.mix) mixArr(part)
  if (state.lang === 'rus') return part.map(ob => make_row(ob.rus, ob.eng, ob.regEng ? ob.regEng : null)).join('')
  else return part.map(ob => make_row(ob.eng, ob.rus, ob.regRus ? ob.regRus : null)).join('')
}

function make_row(vis, answer, pattern) {
  let pt = ''
  if (pattern) pt = `data-pattern="${pattern}"`
  return `<div class="el" data-lang="${answer}" ${pt}>
<span ondblclick="dblHandler(this,'${answer}')">${vis}</span>
<input oninput="chHandler(this)" onblur="chHandler(this)" type="text" /></div>`
}

function dblHandler(el, ans) {
  const thElement = el.parentNode.getElementsByTagName('input')[0]
  thElement.title = thElement.value
  thElement.value = ans
  chHandler(thElement)
  //thElement.readOnly = true
}

function chHandler(el) {
  if (el.value.trim() === '') {
    el.classList.remove('err')
    return
  } // если инпут пустой
  let input = el.value.trim().toLowerCase()
  input = input.replace(/\s+/g, ' ')
  if (el.parentNode.dataset.pattern) { // если есть шаблон работаем с ним
    let reg = el.parentNode.dataset.pattern.split('/')[1] // берем выражение между //
    reg = reg.trim().toLowerCase().replaceAll('’', '`') // меняем проклятый апостроф на нормальный
    const regExp = new RegExp(reg) // создаем шаблон регулярки
    regExp.test(input)
      ? el.className = 'done'
      : el.className = 'err'
  } else // нет шаблона сравниваем в лоб
    el.parentNode.dataset.lang.trim().toLowerCase() === input
      ? el.className = 'done'
      : el.className = 'err'
}

function get_links(len) {
  const cnt = new Array(len).fill(0).map((el, i) => {
    const cl = (i + 1) === state.currentPage ? 'link-page active' : 'link-page'
    return `<a class="${cl}" onclick="prx.currentPage=${i + 1}">${i + 1}</a>`
  }).join(' ')
  return `
<div class="flexrow" id="links">
  [${cnt}]
</div>`
}

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.altKey){
    if (event.key === 'ArrowLeft') {
      if (prx.currentPage > 1) prx.currentPage--
    } else if (event.key === 'ArrowRight') {
      if (prx.currentPage < data.length) prx.currentPage++
    } else if (event.code === 'Space'){
      event.preventDefault()// нужно - иначе пробелом нажимаются кнопки в фокусе
      let pg = getRandomPage()
      prx.currentPage = arrayPages[pg]
      arrayPages.splice(pg, 1) // страницы не должны повторяться
      showProgress(arrayPages, data)
    }
  }
})

window.goHandler = goHandler
window.show = show
window.dblHandler = dblHandler
window.chHandler = chHandler
window.prx = prx
