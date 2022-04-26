import data from './data'
import page from './audio'
import {audioDate} from './audio'

const fonts = ['source', 'lora', 'philosopher', 'literata', 'vollkorn']

const state = {
  lang: 'rus',
  font: fonts[0],
  mix: false,
  currentPage: 1
}
//const downloadUrl = new URL('../Amour.mp3', import.meta.url)

export function head() {
  return get_audio(state.currentPage)
    + get_langToggle()
    + get_fontToggle(fonts)
    + '<div class="flexcol source" id="panel">'
    + get_row(data, 1)
    + '</div>'
    + get_links(data.length)
}

function get_audio() {
  return `
 <div class="flexrow">
   <audio controls>
    <source src="${audioDate[0]}" type="audio/mpeg">
    Тег audio не поддерживается вашим браузером. 
    <a href="${audioDate[0]}">Скачайте файл</a>.
  </audio>
</div> 
 `
}

function get_langToggle() {
  //console.log(audioDate)
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

function make_row(vis, answer, pattern) {
  let pt = ''
  if (pattern) pt = `data-pattern="${pattern}"`
  return `<div class="el" data-lang="${answer}" ${pt}>
<span ondblclick="dblHandler(this,'${answer}')">${vis}</span>
<input oninput="chHandler(this)" onblur="chHandler(this)" type="text" /></div>`
}

//  data-lang="${answer}"
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
  const input = el.value.trim().toLowerCase()
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
    //console.log(target)
    if (target[key] === val) return

    target[key] = val
    const panel = document.getElementById('panel')

    if (key === 'font') {
      panel.classList.remove(...fonts)
      panel.classList.add(val)
      return
    }

    panel.innerHTML = get_row(data, target.currentPage)

    if (key === 'currentPage') {
      const lnk = document.getElementById('links')
      lnk.innerHTML = get_links(data.length)
    }


  }
})
window.prx = prx