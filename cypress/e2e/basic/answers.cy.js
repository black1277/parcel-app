/// <reference types="cypress" />

// Параметрические тесты по tests/variants.json (ключи data1.js ... data373.js).
//
// Из ключа отбрасываются "data" и ".js" — остаётся номер страницы, которую нужно открыть.
// Тестируются только страницы от START_PAGE до END_PAGE включительно.
//
// Запуск, из корня проекта (приложение должно работать: npm start):
//   npx cypress run --spec cypress/e2e/basic/regEng.cy.js
//
// Для каждой страницы открывается приложение (перевод с русского на английский), и в поле ответа
// каждой фразы по очереди вводятся ВСЕ варианты из variants.json (тот же файл, что у теста на Node).
// После каждого варианта поле должно получить класс done.
import fixture from '../../../tests/variants.json'

// Какие страницы тестировать (включительно)
const START_PAGE = 321
const END_PAGE = 373

// любой апостроф -> обычный '
const norm = (s) => s.replace(/[`’‘´]/g, "`");

// "data159.js" -> 159
const pageNumberOf = (key) => Number(key.replace(/^data|\.js$/g, ''))

describe('Варианты ответов из variants.json принимаются приложением (rus -> eng)', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  for (const [file, info] of Object.entries(fixture)) {
    const pageNumber = pageNumberOf(file)
    if (!(pageNumber >= START_PAGE && pageNumber <= END_PAGE)) continue

    it(`${file}  (${info.source})`, () => {
      // Переходим на страницу и ждём, пока она перерисуется: на время эффекта исчезновения
      // у body есть класс hide, после перерисовки приложение его снимает
      cy.contains('a.link-page', `${pageNumber}`).click()
      cy.get('body').should('not.have.class', 'hide')
      cy.get('#show').should('be.visible')

      // Число строк на странице совпадает с числом фраз в variants.json
      cy.get('#panel .el').should('have.length', info.items.length)

      // Какая фраза и какой вариант проверяются сейчас: добавляется к сообщению, если тест упадёт
      let current = ''
      cy.on('fail', (error) => {
        if (current) {
          error.message = `${current}\n\n${error.message}`
        }
        throw error
      })

      info.items.forEach((fx, i) => {
        const editor = () => cy.get('#panel .el', { log: false }).eq(i, { log: false }).find('span[contenteditable="true"]', { log: false })

        fx.variants.forEach((variant) => {
          editor().then(() => {
            current = `Фраза #${i + 1} «${fx.rus}», вариант «${variant}»`
          })
          const norm_variant = norm(variant)
          // Вводим вариант (parseSpecialCharSequences: false — чтобы "{" в тексте не считался командой)
          editor().clear({ log: false }).type(norm_variant, { delay: 0, parseSpecialCharSequences: false, log: false })

          // Проверяем, что поле стало «верным»
          editor().should('have.class', 'done', { log: false })
        })
      })
    })
  }
})