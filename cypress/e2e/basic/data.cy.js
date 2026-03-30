/// <reference types="cypress" />
import { Start, totalLinks } from './constants'

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
      cy.wait(100)
      // Нажимаем на кнопку 'показать'
      cy.get('#show').click();
      cy.wait(100)
      // Проверяем, что все последние span, имеют класс 'done'
      cy.get('.el span:last-child').should('have.class', 'done');
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
      cy.wait(100)
      // Нажимаем на кнопку 'показать'
      cy.get('#show').click();
      cy.wait(100)
      // Проверяем, что все последние span, имеют класс 'done'
      cy.get('.el span:last-child').should('have.class', 'done');
    }
  });

});