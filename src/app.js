import {main} from './components/header.js'
import PackData from './components/locals.js'

document.addEventListener("DOMContentLoaded", ()=>{
  const dom = document.getElementById('main')
  init(dom)
})

function init(el){
  el.innerHTML = main()
  const search = document.getElementById('search')
  const fonts = document.getElementById('fontToggles')
  const showSearch = document.getElementById('showSearch')
  showSearch.checked = PackData.getData('showSearch') ?? true
  const showFonts = document.getElementById('showFonts')
  showFonts.checked = PackData.getData('showFonts') ?? true
  showSearch.addEventListener('input', (e) => {
    search.parentNode.style.display = e.target.checked ? 'flex' : 'none'
    PackData.setData('showSearch', e.target.checked)

  })

  showFonts.addEventListener('input', (e) => {
    fonts.style.display = e.target.checked ? 'flex' : 'none'
    PackData.setData('showFonts', e.target.checked)
  })

  const increaseButton = document.getElementById('increaseFont');
  const decreaseButton = document.getElementById('decreaseFont');

  // Функция для изменения размера шрифта в rem на body
  function adjustBodyFontSize(change) {
    const MIN_FONT_SIZE = 12;
    const MAX_FONT_SIZE = 30;
    const oldVal = getComputedStyle(document.documentElement).getPropertyValue('--max_size')
    let res = Number(oldVal) + change
    if (res < MIN_FONT_SIZE || res > MAX_FONT_SIZE) return;
    document.documentElement.style.setProperty('--max_size', Number(oldVal) + change);
    document.getElementById('fsize').innerHTML = Number(oldVal) + change
  }

  // Обработчики событий для кнопок
  increaseButton.addEventListener('click', () => adjustBodyFontSize(0.5)); // Увеличить шрифт
  decreaseButton.addEventListener('click', () => adjustBodyFontSize(-0.5)); // Уменьшить шрифт

  // Функция для получения текущего цвета фона страницы в формате HSL
  function getCurrentHSL() {
    const computedStyle = getComputedStyle(document.body);
    const bgColor = computedStyle.backgroundColor;


    // Преобразуем текущий цвет фона в HSL
    const rgb = bgColor.match(/\d+/g).map(Number);
    const r = rgb[0] / 255;
    const g = rgb[1] / 255;
    const b = rgb[2] / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return { h, s, l };
  }

  // Устанавливаем начальные значения ползунков из текущего цвета фона
  const { h, s, l } = PackData.getData('bgColor') ?? getCurrentHSL()

  const hueSlider = document.getElementById('hue');
  const saturationSlider = document.getElementById('saturation');
  const lightnessSlider = document.getElementById('lightness');
  const hueVal = document.getElementById('hueVal');
  const saturationVal = document.getElementById('saturationVal');
  const lightnessVal = document.getElementById('lightnessVal');
  hueSlider.value = h
  saturationSlider.value = s
  lightnessSlider.value = l
  hueVal.innerHTML = h
  saturationVal.innerHTML = s
  lightnessVal.innerHTML = l
  document.body.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`

  function SaveColor(){
    const h = hueSlider.value;
    const s = saturationSlider.value;
    const l = lightnessSlider.value;
    hueVal.innerHTML = h
    saturationVal.innerHTML = s
    lightnessVal.innerHTML = l
    PackData.setData('bgColor', { h, s, l })
    document.body.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`
  }

  // Добавляем обработчики событий для ползунков
  hueSlider.addEventListener('input', SaveColor);
  saturationSlider.addEventListener('input', SaveColor);
  lightnessSlider.addEventListener('input', SaveColor);
  document.querySelector('button[title="Delete"]').addEventListener('click', ()=>{
    PackData.clearData()
    location. reload()
  })

}

// Функция для применения шрифта по ссылке Google Fonts
function applyFontFromUrl(fontUrl) {
  if (!isValidGoogleFontUrl(fontUrl)) return
  PackData.setData('urlFonts', fontUrl)
  let fontLink = document.getElementById('googleFontLink');
  if (!fontLink) {
    fontLink = document.createElement('link');
    fontLink.id = 'googleFontLink';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  }
  fontLink.href = fontUrl;

  // Извлекаем имя шрифта из ссылки
  const fontName = extractFontName(fontUrl);
  applyUserFont(fontName)
}

function applyUserFont(userFont){
  // Применяем шрифт к элементам
  const panel = document.getElementById('panel')
  const fonts = ['source', 'lora', 'philosopher', 'literata', 'vollkorn', 'firacode']
  panel.classList.remove(...fonts)
  // https://fonts.googleapis.com/css2?family=Marmelad
  // https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Protest+Guerrilla&display=swap
  // https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap
  // https://fonts.googleapis.com/css2?family=Neucha&display=swap

  const styleSheet = document.styleSheets[0]; // Первая таблица стилей
  const bodyRule = Array.from(styleSheet.cssRules).find(rule => rule.selectorText === '.userfont');
  if (bodyRule) bodyRule.style.fontFamily = userFont
  panel.classList.add('userfont')
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
  });
}

// Функция для извлечения имени шрифта из ссылки Google Fonts
function extractFontName(fontUrl) {
  const url = new URL(fontUrl);
  const familyParam = url.searchParams.get('family');
  return familyParam ? familyParam.split(':')[0].replace(/\+/g, ' ') : 'sans-serif';
}
document.getElementById('fontUrlInput').value = PackData.getData('urlFonts') ?? ""
// Обработчик применения шрифта по ссылке
document.getElementById('applyFontUrl').addEventListener('click', function () {
  const fontUrl = document.getElementById('fontUrlInput').value;
  if (fontUrl) {
    applyFontFromUrl(fontUrl);
  }
});

function isValidGoogleFontUrl(url) {
  // Регулярное выражение для проверки валидности URL на шрифт Google Fonts
  const googleFontsRegex = /^https:\/\/fonts\.googleapis\.com\/css2\?family=[A-Za-z+:\&=\d,%\s\-]+$/;

  // Проверяем, является ли URL строкой и соответствует ли он шаблону
  if (typeof url !== 'string') {
    return false;
  }

  return googleFontsRegex.test(url);
}

// Функция для применения локального файла шрифта
function applyCustomFont(fontFile, fontName) {
      applyUserFont(fontName)
    // Проверяем, существует ли уже шрифт с таким fontName
    if (fontExists(fontName)) {
        console.log(`Шрифт ${fontName} уже добавлен`);
        return;
    }
    const fontUrl = URL.createObjectURL(fontFile);

    const style = document.createElement('style');
    style.textContent = `
        @font-face {
            font-family: '${fontName}';
            src: url('${fontUrl}');
        }
    `;
    document.head.appendChild(style);
}
function fontExists(fontName) {
    // Регулярное выражение для извлечения значения font-family из cssText
    const fontFamilyRegex = /font-family\s*:\s*['"]?([^'";]+)['"]?/;

    // Перебираем все стили на странице
    for (let sheet of document.styleSheets) {
        try {
            // Перебираем все правила в каждом стиле
            for (let rule of sheet.cssRules) {
                // Проверяем, является ли это правилом @font-face
                if (rule instanceof CSSFontFaceRule) {
                    const cssText = rule.cssText;

                    // Ищем в правиле font-family
                    const match = cssText.match(fontFamilyRegex);
                    if (match && match[1] === fontName) {
                        return true;
                    }
                }
            }
        } catch (e) {
            // Некоторые стили могут не поддерживать доступ из-за политики безопасности
            console.warn('Не удается получить доступ к стилю:', sheet.href);
        }
    }
    return false;
}
// Обработчик загрузки файла шрифта
document.getElementById('fontUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fontName = file.name.split('.')[0];
      applyCustomFont(file, fontName);
    }
});