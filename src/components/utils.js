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
  const str = searchString.toLowerCase();
  return array
    .map((innerArray, ind) =>
      innerArray
        .filter(item => item[lang].toLowerCase().includes(str))
        .map(el => {
          // Создаем поверхностную копию объекта, чтобы не мутировать оригинал
          const newEl = { ...el };
          newEl[lang] = newEl[lang] + ` <small>[${ind + 1}]</small>`;
          return newEl;
        })
    )
    .flat();
}

function mixArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

function showProgress(arrayPages,data){
  const el = document.getElementById("progress")
  el.classList.remove('fadeOpacity')
  // Важно: принудительно перерисовать элемент, чтобы удалить предыдущую анимацию
  void el.offsetWidth;
  let str = data.length - arrayPages.length + "/" + data.length
  el.innerHTML = "<span>Random progress:</span><br>" + str
  el.classList.add('fadeOpacity')
}

function show() {
  let elm = document.querySelectorAll('div.el span')
  let btnShow = document.getElementById('show')
  btnShow.disabled = true
  let event = new MouseEvent('dblclick', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  })
  for (let i = 0; i < elm.length; i++) {
    elm[i].dispatchEvent(event)
  }
}

export {enableDisable, filterByString, mixArr, showProgress, show}