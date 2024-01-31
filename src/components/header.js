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
  if (arrayPages.length < 2) arrayPages = Array.from({ length: data.length }, (_, i) => i + 1)
  return Math.floor(Math.random() * arrayPages.length)
}
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.altKey){
    if (event.key === 'ArrowLeft') {
      if (prx.currentPage > 1) prx.currentPage--
    } else if (event.key === 'ArrowRight') {
      if (prx.currentPage < data.length) prx.currentPage++
    } else if (event.code === 'Space'){
      let pg = getRandomPage()
      prx.currentPage = arrayPages[pg]
      arrayPages.splice(pg, 1) // страницы не должны повторяться
    }
  }
})