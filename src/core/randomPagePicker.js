/**
 * Выдаёт случайные номера страниц без повторов, пока не пройден полный круг.
 * После последней страницы круга новый круг начинается не раньше, чем через `cooldownMs`.
 */
export class RandomPagePicker {
  #total;
  #random;
  #cooldownMs;
  #now;
  #remaining = [];
  #completedAt = null;

  /**
   * @param {number} total количество страниц
   * @param {() => number} [random] источник случайных чисел из [0, 1)
   * @param {object} [options]
   * @param {number} [options.cooldownMs] пауза между кругами, мс (по умолчанию без паузы)
   * @param {() => number} [options.now] часы в миллисекундах (для тестов)
   */
  constructor(total, random = Math.random, { cooldownMs = 0, now = () => performance.now() } = {}) {
    this.#total = total;
    this.#random = random;
    this.#cooldownMs = cooldownMs;
    this.#now = now;
    this.#reset();
  }

  /**
   * @returns {number | null} номер страницы (с единицы) или null, если круг пройден
   *   и пауза перед следующим ещё не закончилась
   */
  next() {
    if (this.#remaining.length < 1) {
      if (this.#isCoolingDown()) {
        return null;
      }
      this.#reset();
    }
    const index = Math.floor(this.#random() * this.#remaining.length);
    const [page] = this.#remaining.splice(index, 1);
    if (this.#total > 0 && this.#remaining.length < 1) {
      this.#completedAt = this.#now();
    }
    return page;
  }

  /** @returns {{ done: number, total: number }} сколько страниц уже показано в текущем круге */
  get progress() {
    return { done: this.#total - this.#remaining.length, total: this.#total };
  }

  /** @returns {boolean} true, если все страницы текущего круга уже показаны */
  get isCycleComplete() {
    return this.#total > 0 && this.#remaining.length < 1;
  }

  #isCoolingDown() {
    return this.#completedAt !== null && this.#now() - this.#completedAt < this.#cooldownMs;
  }

  #reset() {
    this.#remaining = Array.from({ length: this.#total }, (_, i) => i + 1);
    this.#completedAt = null;
  }
}
