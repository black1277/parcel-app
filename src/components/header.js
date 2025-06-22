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
let GlobalHistory = true
const state = {
  lang: 'rus',
  font: PackData.getData('font') ?? fonts[0],
  mix: false,
  links: PackData.getData('links') ?? false,
  currentPage: 1
}

const prx = new Proxy(state, {
  set(target, key, val) {
    if (target[key] === val) return
    target[key] = val
    if(key === 'links'){
      const lnk = document.getElementById('links')
      lnk.innerHTML = get_links(data.length)
      return true
    }
    const panel = document.getElementById('panel')

    if (key === 'font') {
      panel.classList.remove(...fonts, 'userfont')
      panel.classList.add(val)
      PackData.setData('font', val)
      return true
    }
    const body = document.querySelector('body')
    if (fade.checked){
      body.classList.add('hide')
      setTimeout(function(){
        panel.innerHTML = get_rows(data, target.currentPage)
        body.classList.remove('hide')
      }, 145);
    } else panel.innerHTML = get_rows(data, target.currentPage)
    PackData.setData('page', target.currentPage)
    enableDisable(false)
    if (key === 'currentPage') {
      const lnk = document.getElementById('links')
      lnk.innerHTML = get_links(data.length)
      if (GlobalHistory) {
        history.pushState({ page: target.currentPage }, "", "#" + target.currentPage)
      }
      GlobalHistory = true
    }
    return true
  }
})

export function main() {
  return get_langToggle()
    + get_searchPanel()
    + get_fontToggle(fonts)
    + get_panel()
    + get_full_links(data.length)
}

function get_langToggle() {
  return `
 <section class="flexrow" aria-label="опции">
  <span class="blk"><label for="rus" tabindex="0" title="переключить на русский" aria-label="переключить на русский">rus</label></span>
  <div class="flexcol">
   <span role="radiogroup" class="toggle-bg" id="langToggles">
     <input type="radio" name="toggle" value="rus" id="rus" onchange="prx.lang='rus'" tabindex="-1">
     <input type="radio" name="toggle" value="eng" id="eng" onchange="prx.lang='eng'" tabindex="-1">
     <span class="switch"></span>
   </span>
  </div>
  <span class="blk"><label for="eng" tabindex="0" title="переключить на английский" aria-label="переключить на английский">eng</label></span>
  <span class="blk">
    <label for="mix">перемешать <input type="checkbox" id="mix" onchange="prx.mix=this.checked"></label>
  </span>
  <span class="blk">
    <button type="button" id="show" onclick="show()">показать</button>
  </span>
 </section>`
}

function get_searchPanel() {
  let flag = PackData.getData('showSearch')
  let style = 'style="display: flex"'
  if(flag === false) style = 'style="display: none"'
  return `<section class="flexrow w100" ${style}>
  <input autocomplete="off" type="text" name="search" id="search" class="search" aria-label="Введите текст для поиска" title="Введите текст для поиска"><button class="go"
  onclick="goHandler()" aria-label="Поиск">GO</button></section>`
}

function goHandler() {
  const input = document.getElementById('search')
  const panel = document.getElementById('panel')
  let txt = input.value.trim()
  if (!txt.length) return
  input.focus()
  if (txt.length < 3) {
    panel.innerHTML = '<span>Нужно минимум 3 символа для поиска!</span>'
    return
  }
  let answ = filterByString(data, input.value, prx.lang)
  if (!answ.length) {
    panel.innerHTML = '<span>Ничего не найдено!</span>'
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
    <label class="${el} flexrow" for="${el}" tabindex="0">${el}</label>
  </li>`
  }).join('')

  return `
<section class="flexcol" id="fontToggles" ${style}>
 <ul class="flexrow">
${li}
 </ul>
</section>`
}

function get_panel() {
  let page = PackData.getData('page') ?? 1 // номер страницы из локалсторадж или 1
  state.currentPage = Number(page)

  let rw = get_rows(data, page)
  let font = prx.font
  return `<section class="flexcol ${font}" id="panel">${rw}</section>`
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

  return state.lang === 'rus'
    ? part.map(ob => make_row(ob.rus, ob.eng, ob.regEng ? ob.regEng : null)).join('')
    : part.map(ob => make_row(ob.eng, ob.rus, ob.regRus ? ob.regRus : null)).join('');
}

function make_row(vis, answer, pattern) {
  let pt = ''
  if (pattern) pt = `data-pattern="${pattern}"`
  return `<article class="el" data-lang="${answer}" ${pt}>
<span ondblclick="dblHandler(this,'${answer}')">${vis}</span>
<span class="editor" contenteditable="true" oninput="chHandler(this)" onblur="chHandler(this)" spellcheck="false" /></span></article>`
}

function dblHandler(el, ans) {
  const thElement = el.parentNode.getElementsByTagName('span')[1]
  thElement.title = thElement.innerText
  thElement.innerText = ans
  chHandler(thElement)
  //thElement.readOnly = true
}

function chHandler(el) {
  if (el.innerText.trim() === '') { // если инпут пустой
    el.classList.remove('err')
    el.classList.remove('done')
    return
  }
  let input = el.innerText.trim().toLowerCase()
  input = input.replace(/\s+/g, ' ')
  let condition = el.parentNode.dataset.lang.trim().toLowerCase() === input
  if (el.parentNode.dataset.pattern) { // если есть шаблон работаем с ним
    let reg = el.parentNode.dataset.pattern.split('/')[1] // берем выражение между //
    reg = reg.trim().toLowerCase().replaceAll('’', '`') // меняем проклятый апостроф на нормальный
    const regExp = new RegExp(reg) // создаем шаблон регулярки
    condition = regExp.test(input)
  }
  // нет шаблона сравниваем в лоб
  el.className = condition
    ? 'done'
    : 'err'
  el.classList.add('editor')
}
function get_full_links(len){
  const links = get_links(len)
  return `
<nav class="flexrow" id="links" aria-label="Панель навигации" role="navigation">
  ${links}
</nav>`
}
function get_links(len) {
  if (!prx.links) return long_navigatio(len)
  else return short_navigatio(len)
}

function long_navigatio(len){
  const cnt = new Array(len).fill(0).map((el, i) => {
    const activePage = (i + 1) === state.currentPage
    return createLink(i + 1, activePage)
  }).join('')
  return cnt
}

  const createLink = (page, isActive = false) => {
    let cls = '', aria = ''
    if (isActive){
      cls = ' active'
      aria = 'aria-current="page"'
    }
    return `<a href="#" class="link-page${cls}" onclick="prx.currentPage=${page}" ${aria} aria-label="Страница ${page}">${page}</a>`;
  }

function short_navigatio(totalPages) {
  const currentPage = prx.currentPage
  const links = [];
  const visiblePages = 4;



  const addRangeLinks = (start, end, activePage) => {
    for (let i = start; i <= end; i++) {
      links.push(createLink(i, i === activePage));
    }
  };

  if (totalPages <= 4 * visiblePages - 1) {
    addRangeLinks(1, totalPages, currentPage);
  } else {
    if (currentPage < visiblePages * 2) {
      addRangeLinks(1, visiblePages + currentPage - 1, currentPage);
      links.push('<span class="ellipsis">...</span>');
      addRangeLinks(totalPages - visiblePages + 1, totalPages);
    } else if (currentPage > totalPages - visiblePages * 2) {
      addRangeLinks(1, visiblePages);
      links.push('<span class="ellipsis">...</span>');
      addRangeLinks(currentPage - visiblePages + 1, totalPages, currentPage);
    } else {
      addRangeLinks(1, visiblePages);
      links.push('<span class="ellipsis">...</span>');
      addRangeLinks(currentPage - visiblePages + 1, currentPage + visiblePages - 1, currentPage);
      links.push('<span class="ellipsis">...</span>');
      addRangeLinks(totalPages - visiblePages + 1, totalPages);
    }
  }

  return links.join("");
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
    return
  }
  if (event.key === 'Enter' && event.target.id === "search"){
    goHandler()
    return
  }
  if (event.key === ' ' || event.key === 'Enter'){
    const labelFor = ['eng', 'rus', ...fonts]
    const attrFor = event.target.getAttribute('for')
    if (labelFor.includes(attrFor)){
      event.target.click();
      event.preventDefault();
    }
    return
  }

})

window.goHandler = goHandler
window.show = show
window.dblHandler = dblHandler
window.chHandler = chHandler
window.prx = prx
window.onpopstate = function (event) {
  if (event.state && event.state.page) {
    GlobalHistory = false // чтобы не добавлять в историю еще раз
    prx.currentPage = event.state.page
  }
}
const showLinks = document.getElementById('showLinks')
showLinks.checked = PackData.getData('links') ?? false
showLinks.addEventListener('change', function (event) {
  PackData.setData('links', event.target.checked)
  prx.links = event.target.checked
})