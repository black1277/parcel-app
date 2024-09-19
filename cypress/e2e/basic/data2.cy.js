/// <reference types="cypress" />

import  data  from '../../../src/components/data/index'
const totalLinks = data.length; // Задаем количество ссылок
const LastTap = 6 // будем проверять последние n
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
      cy.wait(100)
      // Ждем, пока кнопка 'показать' станет видимой после клика
      cy.get('#show').should('be.visible');

      // Проходим по всем элементам .el
      cy.get('#panel .el').each(($el) => {
        // Двойной клик по span внутри .el
        cy.wrap($el).find('span').dblclick();

        // Проверяем, что в input появился класс 'done'
        cy.wrap($el).find('input').should('have.class', 'done');

        // Заменяем значение в input на цифру
        cy.wrap($el).find('input').clear().type('1');

        // Проверяем, что появился класс 'err' и исчез 'done'
        cy.wrap($el).find('input')
          .should('have.class', 'err')
          .should('not.have.class', 'done');
      });


    }
  });

  it('Clicks on each dynamically found link and checks input class RUS', () => {
    // Сначала находим и переключаем радио-кнопку с id="eng"
    cy.get('input[type="radio"]#eng').check().should('be.checked');
    cy.wait(120)
    for (let i = Start; i <= totalLinks; i++) {
      // Ищем ссылку с текстом, соответствующим текущему номеру итерации
      cy.contains('a.link-page', `${i}`).click();
      cy.wait(100)
      // Ждем, пока кнопка 'показать' станет видимой после клика
      cy.get('#show').should('be.visible');

      // Проходим по всем элементам .el
      cy.get('#panel .el').each(($el) => {
        // Двойной клик по span внутри .el
        cy.wrap($el).find('span').dblclick();

        // Проверяем, что в input появился класс 'done'
        cy.wrap($el).find('input').should('have.class', 'done');

        // Заменяем значение в input на цифру
        cy.wrap($el).find('input').clear().type('1');

        // Проверяем, что появился класс 'err' и исчез 'done'
        cy.wrap($el).find('input')
          .should('have.class', 'err')
          .should('not.have.class', 'done');
      });
    }
  });

});