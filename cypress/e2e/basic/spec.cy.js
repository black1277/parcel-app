/// <reference types="cypress" />

describe('Test localStorage with page reload', () => {

  beforeEach(() => {
    cy.visit('/'); // Используем baseUrl
  });
  it('Should store the clicked link in localStorage and keep it active after reload', () => {
    const linkToClick = 3; // Например, выберем третью ссылку для теста

    // 1. Кликаем по ссылке с текстом "3"
    cy.contains('a.link-page', `${linkToClick}`).click();

    // 2. Перезагружаем страницу
    cy.reload();

    // 3. Проверяем, что активная ссылка после перезагрузки страницы всё ещё "3"
    cy.contains('a.link-page', `${linkToClick}`).should('have.class', 'active'); // Здесь "active" — это пример класса для активной ссылки
  });
  it('Should select the "lora" radio button and verify it after reload', () => {
    // 1. Находим и выбираем радио-кнопку с id="lora"
    cy.get('input[type="radio"]#lora').check({ force: true }).should('be.checked')

    // 2. Перезагружаем страницу
    cy.reload();

    // 3. Проверяем, что радио-кнопка с id="lora" всё ещё выбрана после перезагрузки
    cy.get('input[type="radio"]#lora').should('be.checked');
  });
});

describe('Test search functionality', () => {
  beforeEach(() => {
    // Переходим на главную страницу перед каждым тестом
    cy.visit('/');
  });

  it('Should show an error message when the search text is less than 3 characters', () => {
    // Находим поле поиска и вводим текст из 2 символов
    cy.get('input[type="text"]#search').type('ab');

    // Нажимаем на кнопку "GO"
    cy.get('button.go').click();

    // Проверяем, что отображается сообщение об ошибке
    cy.get('section#panel').should('contain.text', 'Нужно минимум 3 символа для поиска!');
  });

  it('Should show "nothing found"', () => {
    // Находим поле поиска и вводим текст из 3 символов
    cy.get('input[type="text"]#search').type('abc');

    // Нажимаем на кнопку "GO"
    cy.get('button.go').click();

    // Проверяем, что появляется сообщение "Ничего не найдено!"
    cy.get('section#panel').then(($panel) => {
        cy.wrap($panel).should('contain.text', 'Ничего не найдено!');
    });
  });

  it('Should show elements with class .el when the search text is 3 or more characters', () => {
    // Находим поле поиска и вводим текст > 3 символов
    cy.get('input[type="text"]#search').type('жизнь');

    // Нажимаем на кнопку "GO"
    cy.get('button.go').click();

    // Проверяем, что есть элементы с классом .el и атрибутом data-lang
    cy.get('section#panel').then(($panel) => {
      cy.get('article.el[data-lang]').should('exist');
    });
  });
});

describe('Test checkbox and radio button disabled-enabled state after button click', () => {
  beforeEach(() => {
    // Переходим на главную страницу перед каждым тестом
    cy.visit('/');
    // Находим поле поиска и вводим текст > 3 символов
    cy.get('input[type="text"]#search').type('жизнь');
    // Нажимаем на кнопку "GO"
    cy.get('button.go').click();
  });

  it('Should disable the checkbox and radio button after clicking the GO button', () => {

    // Проверяем, что checkbox с id="mix" стал disabled
    cy.get('input[type="checkbox"]#mix').should('be.disabled');

    // Проверяем, что radio button с id="rus" стал disabled
    cy.get('input[type="radio"]#rus').should('be.disabled');

    // Проверяем, что radio button с id="eng" стал disabled
    cy.get('input[type="radio"]#eng').should('be.disabled');
  });

  it('Should enable the checkbox and radio button after clicking a random pagination link', () => {
    // Проверяем, что checkbox и radio button изначально disabled
    cy.get('input[type="checkbox"]#mix').should('be.disabled');
    cy.get('input[type="radio"]#rus').should('be.disabled');
    cy.get('input[type="radio"]#eng').should('be.disabled');

    // Генерируем случайное число от 2 до 15
    // если выпадет 1 - она не активна и тест провалится
    const randomPage = Math.floor(Math.random() * 15) + 2;

    // Кликаем по ссылке с текстом, равным случайному числу
    cy.contains('a.link-page', `${randomPage}`).click();

    // Проверяем, что checkbox с id="mix" стал enabled
    cy.get('input[type="checkbox"]#mix').should('not.be.disabled');

    // Проверяем, что radio button с id="rus" стал enabled
    cy.get('input[type="radio"]#rus').should('not.be.disabled');
    cy.get('input[type="radio"]#eng').should('not.be.disabled');
  });
});

describe('Test search input and button visibility based on checkbox state', () => {
  beforeEach(() => {
    // Переход на страницу перед каждым тестом
    cy.visit('/');
  });

  it('Should show search input and button when checkbox is checked', () => {
    // Находим чекбокс и устанавливаем его в checked, если он не установлен
    cy.get('input[type="checkbox"]#showSearch')
      .check({ force: true }) // { force: true } используется, если чекбокс может быть скрыт или отключен
      .should('be.checked');

    // Проверяем, что поле ввода и кнопка GO видны
    cy.get('input[type="text"]#search').should('be.visible');
    cy.get('button.go').should('be.visible');
  });

  it('Should hide search input and button when checkbox is unchecked', () => {
    // Находим чекбокс и снимаем его состояние checked, если он установлен
    cy.get('input[type="checkbox"]#showSearch')
      .uncheck({ force: true }) // { force: true } используется, если чекбокс может быть скрыт или отключен
      .should('not.be.checked');

    // Проверяем, что поле ввода и кнопка GO не видны
    cy.get('input[type="text"]#search').should('not.be.visible');
    cy.get('button.go').should('not.be.visible');
  });
});

describe('Test visibility of font toggles based on checkbox state', () => {
  beforeEach(() => {
    // Переход на страницу перед каждым тестом
    cy.visit('/');
  });

  it('Should show the font toggles div when checkbox is checked', () => {
    // Находим чекбокс и устанавливаем его в checked, если он не установлен
    cy.get('input[type="checkbox"]#showFonts')
      .check({ force: true }) // { force: true } используется, если чекбокс может быть скрыт или отключен
      .should('be.checked');

    // Проверяем, что элемент с id="fontToggles" виден
    cy.get('section#fontToggles').should('be.visible');
  });

  it('Should hide the font toggles div when checkbox is unchecked', () => {
    // Находим чекбокс и снимаем его состояние checked, если он установлен
    cy.get('input[type="checkbox"]#showFonts')
      .uncheck({ force: true }) // { force: true } используется, если чекбокс может быть скрыт или отключен
      .should('not.be.checked');

    // Проверяем, что элемент с id="fontToggles" не виден
    cy.get('section#fontToggles').should('not.be.visible');
  });
});

describe('Test font change when radio button is checked', () => {
  const fonts = [
    { id: 'lora', name: 'Lora' },
    { id: 'philosopher', name: 'Philosopher' },
    { id: 'literata', name: 'Literata' },
    { id: 'vollkorn', name: 'Vollkorn' },
    { id: 'firacode', name: 'Fira Code' },
  ];

  beforeEach(() => {
    // Переход на страницу перед каждым тестом
    cy.visit('/');
  });

  fonts.forEach((font) => {
    it(`Should apply "${font.name}" font to text in the element with data-lang when the radio button is checked`, () => {
      // Находим и выбираем радио-кнопку по id
      cy.get(`input[type="radio"]#${font.id}`)
        .check({ force: true }) // Используем { force: true } если элемент скрыт или отключен
        .should('be.checked');

      // Проверяем, что элемент <div class="el" data-lang> имеет шрифт
      cy.get('article.el[data-lang]')
        .should('have.css', 'font-family')
        .and('include', font.name);
    });
  });
});


describe('Test page reload and active state of the first link after clicking the Delete button', () => {
  beforeEach(() => {
    // Переход на страницу перед каждым тестом
    cy.visit('/');
  });

  it('Should reload the page and set the first link as active after clicking the Delete button', () => {
    // Сохраняем текущее состояние URL страницы
    cy.url().as('initialUrl');

    // Находим и нажимаем на кнопку "Delete"
    cy.get('button.icon-button.yellow[title="Delete"]').click({ force: true });

    // Проверяем, что URL не изменился после перезагрузки, что подтверждает обновление страницы
    cy.get('@initialUrl').then((url) => {
      cy.url().should('eq', url);
    });

    // Проверяем, что первая ссылка активна
    cy.get('a.link-page')
      .first()
      .should('have.class', 'active');
  });
});
