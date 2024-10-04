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
        // Внутри каждого div.el, сначала делаем double click по первому span
        cy.wrap($el).find('span').first().dblclick();

        // Проверяем, что второй span получил класс done
        cy.wrap($el).find('span[contenteditable="true"]').should('have.class', 'done');

        // Изменяем содержимое второго span на "1"
        cy.wrap($el).find('span[contenteditable="true"]').clear().type('1');

        // Проверяем, что класс done исчез, а класс err появился
        cy.wrap($el).find('span[contenteditable="true"]')
          .should('not.have.class', 'done')
          .and('have.class', 'err');
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
        // Внутри каждого div.el, сначала делаем double click по первому span
        cy.wrap($el).find('span').first().dblclick();

        // Проверяем, что второй span получил класс done
        cy.wrap($el).find('span[contenteditable="true"]').should('have.class', 'done');

        // Изменяем содержимое второго span на "1"
        cy.wrap($el).find('span[contenteditable="true"]').clear().type('1');

        // Проверяем, что класс done исчез, а класс err появился
        cy.wrap($el).find('span[contenteditable="true"]')
          .should('not.have.class', 'done')
          .and('have.class', 'err');
      });
    }
  });

});