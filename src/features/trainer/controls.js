import { elements } from '../../ui/elements.js';
import { bindRowInteractions } from './answerRow.js';

/**
 * Связывает элементы тренажёра с контроллером.
 * @param {ReturnType<typeof import('./trainer.js').createTrainer>} trainer
 */
export function bindTrainerControls(trainer) {
  elements.langToggles.addEventListener('change', (event) => trainer.setLang(event.target.value));
  elements.mix.addEventListener('change', (event) => trainer.setMix(event.target.checked));
  elements.fontToggles.addEventListener('change', (event) => {
    if (event.target.name === 'fonts') trainer.setFont(event.target.value);
  });

  elements.searchButton.addEventListener('click', () => trainer.search());
  elements.show.addEventListener('click', () => trainer.revealAll());

  elements.navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a.link-page');
    if (!link) return;
    event.preventDefault();
    trainer.goToPage(Number(link.dataset.page));
  });

  bindRowInteractions(elements.panel);
}
