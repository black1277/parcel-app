/**
 * Позволяет «нажимать» элемент (например, label) клавишами Enter и Space.
 * @param {HTMLElement} element
 */
export function bindKeyboardActivation(element) {
  element.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      element.click();
      // без этого пробел прокручивает страницу
      event.preventDefault();
    }
  });
}
