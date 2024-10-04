/// <reference types="cypress" />

import  data  from '../../../src/components/data/index'
const totalLinks = data.length; // Задаем количество ссылок
const LastTap = 10 // будем проверять последние n
const Start = LastTap > 0 ? totalLinks - LastTap : 1

describe('Test for clicking links and checking input class with rerender', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Clicks on each dynamically found link and checks input class ENG', () => {
    // Цикл по количеству ссылок
    for (let i = Start; i <= totalLinks; i++) {
      // Ищем ссылку с текстом, соответствующим текущему номеру итерации
      cy.contains('a.link-page', `${i}`).click();

      // Ждем, пока кнопка 'показать' станет видимой после клика
      cy.get('#show').should('be.visible');
      cy.wait(90)
      // Нажимаем на кнопку 'показать'
      cy.get('#show').click();
      cy.wait(90)
      // Проверяем, что все input с типом text, кроме input с id="search", имеют класс 'done'
      cy.get('input[type="text"]:not(#search)').should('have.class', 'done');
    }
  });

  it('Clicks on each dynamically found link and checks input class RUS', () => {
    // Сначала находим и переключаем радио-кнопку с id="eng"
    cy.get('input[type="radio"]#eng').check().should('be.checked');
    cy.wait(150)
    for (let i = Start; i <= totalLinks; i++) {
      // Ищем ссылку с текстом, соответствующим текущему номеру итерации
      cy.contains('a.link-page', `${i}`).click();

      // Ждем, пока кнопка 'показать' станет видимой после клика
      cy.get('#show').should('be.visible');
      cy.wait(90)
      // Нажимаем на кнопку 'показать'
      cy.get('#show').click();
      cy.wait(90)
      // Проверяем, что все input с типом text, кроме input с id="search", имеют класс 'done'
      cy.get('input[type="text"]:not(#search)').should('have.class', 'done');
    }
  });

});