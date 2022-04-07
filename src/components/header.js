
export function head() {
 return get_langToogle()
   + get_fontToogle(fonts)
   + get_row(data, 1)
   + get_links();
}

function get_langToogle() {
 return `
 <div class="flexrow">
  <span class="blk"><label for="rus">rus</label></span>
  <div class="flexcol">
   <span class="toggle-bg">
       <input type="radio" name="toggle" value="off" id="rus">
       <input type="radio" name="toggle" value="on" id="eng"> 
       <span class="switch"></span>
   </span>
  </div>
  <span class="blk"><label for="eng">eng</label></span>
 </div>`
}

const fonts = ['source', 'lora', 'philosopher', 'literata']
function get_fontToogle(fnt) {
 const li = fnt.map((el)=>{
  return `
  <li><input type="radio" name="fonts" value="${el}" id="${el}"><label class="${el} flexrow" for="${el}"> ${el}</label></li>`
 }).join('')
 return `
<div class="flexcol">
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
 console.log('arr lenght', arr.length)
 const part = arr[stranica]
 console.log(part)
/* const s = arr.map(dt => {
  return dt.map(ob=>{
   return `<div class="el" data-lang="${ob.eng}"><span onclick="this.parentNode.getElementsByTagName('input')[0].value ='${ob.eng}' ">${ob.rus}</span>
    <input onchange="(this.parentNode.dataset.lang===this.value ? this.className='done' : this.className='err' )" type="text" /></div>`
  }).join('')
 }).join('')*/

 return part.map(ob=>{
  return `<div class="el" data-lang="${ob.eng}"><span onclick="this.parentNode.getElementsByTagName('input')[0].value ='${ob.eng}' ">${ob.rus}</span>
    <input onchange="(this.parentNode.dataset.lang===this.value ? this.className='done' : this.className='err' )" type="text" /></div>`
 }).join('')
}

function get_links() {
 return `
<div class="flexrow">
  <a href="#">1</a> <a href="#">2</a>
</div>`
}


const data1 = [
 {
  rus: 'Эта женщина иногда смотрит телевизор.',
  eng: 'This woman sometimes watches TV.'
 },
 {
  rus: 'Эти женщины иногда смотрят телевизор.',
  eng: 'These women sometimes watch TV.'
 },
 {
  rus: 'Её ребёнок всегда слушает её.',
  eng: 'Her child always listens to her'
 },
 {
  rus: 'Её дети всегда слушают её.',
  eng: 'Her children always listen to her.'
 },
 {
  rus: 'Тот мужчина никогда не играет в видео игры.',
  eng: 'That man never plays video games.'
 },
 {
  rus: 'Те мужчины никогда не играют в видео игры.',
  eng: 'Those men never play video games.'
 },
 {
  rus: 'Наш ребёнок никогда не ест гамбургеры.',
  eng: 'Our child never eats hamburgers.|Our kid never eats hamburgers.'
 },
 {
  rus: 'Наши дети никогда не едят гамбургеры.',
  eng: 'Our children never eat hamburgers.|Our kids never eat hamburgers.'
 },
 {
  rus: 'Этот человек часто читает газеты и журналы.',
  eng: 'This person often reads newspapers and magazines.'
 },
 {
  rus: 'Эти люди часто читают газеты и журналы.',
  eng: 'These people often read newspapers and magazines.'
 },
 {
  rus: 'Тот мужчина обычно покупает дорогие костюмы.',
  eng: 'That man usually buys expensive suits.'
 },
 {
  rus: 'Те мужчины обычно покупают дорогие костюмы.',
  eng: 'Those men usually buy expensive suits.'
 }
]
const data2 = [
 {
  rus: 'Эта женщина иногда смотрит телевизор.',
  eng: 'This woman sometimes watches TV.'
 },
 {
  rus: 'Эти женщины иногда смотрят телевизор.',
  eng: 'These women sometimes watch TV.'
 },
 {
  rus: 'Её ребёнок всегда слушает её.',
  eng: 'Her child always listens to her'
 },
 {
  rus: 'Её дети всегда слушают её.',
  eng: 'Her children always listen to her.'
 },
 {
  rus: 'Тот мужчина никогда не играет в видео игры.',
  eng: 'That man never plays video games.'
 },
 {
  rus: 'Те мужчины никогда не играют в видео игры.',
  eng: 'Those men never play video games.'
 },
 {
  rus: 'Наш ребёнок никогда не ест гамбургеры.',
  eng: 'Our child never eats hamburgers.|Our kid never eats hamburgers.'
 },
 {
  rus: 'Наши дети никогда не едят гамбургеры.',
  eng: 'Our children never eat hamburgers.|Our kids never eat hamburgers.'
 },
 {
  rus: 'Этот человек часто читает газеты и журналы.',
  eng: 'This person often reads newspapers and magazines.'
 },
 {
  rus: 'Эти люди часто читают газеты и журналы.',
  eng: 'These people often read newspapers and magazines.'
 },
 {
  rus: 'Тот мужчина обычно покупает дорогие костюмы.',
  eng: 'That man usually buys expensive suits.'
 },
 {
  rus: 'Те мужчины обычно покупают дорогие костюмы.',
  eng: 'Those men usually buy expensive suits.'
 }
]
const data = []
data.push(data1)
data.push(data2)