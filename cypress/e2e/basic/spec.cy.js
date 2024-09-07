/// <reference types="cypress" />

import  data  from '../../../src/components/data/index'
const totalLinks = data.length; // Задаем количество ссылок

describe('Test for clicking links and checking input class with rerender', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Clicks on each dynamically found link and checks input class ENG', () => {
    // Цикл по количеству ссылок
    for (let i = 1; i <= totalLinks; i++) {
      // Ищем ссылку с текстом, соответствующим текущему номеру итерации
      cy.contains('a.link-page', `${i}`).click();

      // Ждем, пока кнопка 'показать' станет видимой после клика
      cy.get('#show').should('be.visible');

      // Нажимаем на кнопку 'показать'
      cy.get('#show').click();

      // Проверяем, что все input с типом text, кроме input с id="search", имеют класс 'done'
      cy.get('input[type="text"]:not(#search)').should('have.class', 'done');
    }
  });

  it('Clicks on each dynamically found link and checks input class RUS', () => {
    // Сначала находим и переключаем радио-кнопку с id="eng"
    cy.get('input[type="radio"]#eng').check().should('be.checked');

    for (let i = 1; i <= totalLinks; i++) {
      // Ищем ссылку с текстом, соответствующим текущему номеру итерации
      cy.contains('a.link-page', `${i}`).click();

      // Ждем, пока кнопка 'показать' станет видимой после клика
      cy.get('#show').should('be.visible');

      // Нажимаем на кнопку 'показать'
      cy.get('#show').click();

      // Проверяем, что все input с типом text, кроме input с id="search", имеют класс 'done'
      cy.get('input[type="text"]:not(#search)').should('have.class', 'done');
    }
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
});