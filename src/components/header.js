import data from './data'

const fonts = ['source', 'lora', 'philosopher', 'literata', 'vollkorn', 'firacode']

const state = {
  lang: 'rus',
  font: fonts[0],
  mix: false,
  currentPage: 1
}

export function head() {
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
  return `<div class="flexrow w100">
  <input type="text" name="search" id="search" class="search"><button class="go" onclick="goHandler()">GO</button></div>
  `
}

function goHandler() {
  console.log('goHandler');
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
  panel.innerHTML = get_row(dt)
  enableDisable(true)
}
window.goHandler = goHandler

function enableDisable(booln) {
  const rus = document.getElementById('rus')
  const eng = document.getElementById('eng')
  const mix = document.getElementById('mix')
  const blk = document.getElementsByClassName('blk')
  if(booln)
    for(let i = 0; i<=2; i++){
      blk[i].classList.add('grey')
    }
  else
    for (let i = 0; i <= 2; i++) {
      blk[i].classList.remove('grey')
    }
  rus.disabled = booln
  eng.disabled = booln
  mix.disabled = booln
}

function filterByString(array, searchString, lang) {
  let str=searchString.toLowerCase()
  return array
    .map(innerArray => innerArray.filter(item => item[lang].toLowerCase().includes(str)))
    .flat()
}

function get_fontToggle(fnt) {
  const li = fnt.map((el) => {
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

function get_panel() {
  let rw = get_row(data, 1)
  return `<div class="flexcol source" id="panel">${rw}</div>`
}

function get_row(arr, page = 0) {
  let stranica = page > 0
    ? page - 1
    : 0
  if (stranica > arr.length || arr.length < 1) return `<div>Нет страницы или данных</div>`
  const part = [...arr[stranica]]
  if (state.mix) mixArr(part)
  if (state.lang === 'rus') return part.map(ob => make_row(ob.rus, ob.eng, ob.regEng ? ob.regEng : null)).join('')
  else return part.map(ob => make_row(ob.eng, ob.rus, ob.regRus ? ob.regRus : null)).join('')
}

function show() {
  console.log('show');
  let elm = document.querySelectorAll('div.el span')
  let event = new MouseEvent('dblclick', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  })
  for (let i = 0; i < elm.length; i++) {
    elm[i].dispatchEvent(event)
  }
}

window.show = show

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
  //thElement.readOnly = true
}

window.dblHandler = dblHandler

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

window.chHandler = chHandler

function mixArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
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

const prx = new Proxy(state, {
  set(target, key, val) {

    if (target[key] === val) return

    target[key] = val
    const panel = document.getElementById('panel')

    if (key === 'font') {
      panel.classList.remove(...fonts)
      panel.classList.add(val)
      return true
    }

    panel.innerHTML = get_row(data, target.currentPage)
    enableDisable(false)
    if (key === 'currentPage') {
      const lnk = document.getElementById('links')
      lnk.innerHTML = get_links(data.length)
    }
    return true
  }
})
window.prx = prx

let arrayPages = Array.from({ length: data.length }, (_, i) => i + 1)

function getRandomPage() {// возвращает рандом номер страницы
  if (arrayPages.length < 1) arrayPages = Array.from({ length: data.length }, (_, i) => i + 1)
  return Math.floor(Math.random() * arrayPages.length)
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
      showProgress()
    }
  }
})
function showProgress(){
  const el = document.getElementById("progress")
  el.classList.remove('fadeOpacity')
  // Важно: принудительно перерисовать элемент, чтобы удалить предыдущую анимацию
  void el.offsetWidth;
  let str = data.length - arrayPages.length + "/" + data.length
  el.innerHTML = "<span>Random progress:</span><br>" + str
  el.classList.add('fadeOpacity')
}
