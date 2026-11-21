import { STORAGE_KEY } from '../config/constants.js';

/**
 * Хранилище пользовательских настроек: один JSON-объект в localStorage.
 * @param {() => Storage} [getBackend] источник Storage (подменяется в тестах)
 */
export function createUserStorage(getBackend = () => globalThis.localStorage) {
  function readAll() {
    try {
      const raw = getBackend().getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed !== null && typeof parsed === 'object' ? parsed : {};
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      return {};
    }
  }

  return {
    /** @returns {unknown} сохранённое значение или undefined */
    get(key) {
      const data = readAll();
      return key in data ? data[key] : undefined;
    },

    set(key, value) {
      try {
        getBackend().setItem(STORAGE_KEY, JSON.stringify({ ...readAll(), [key]: value }));
      } catch {
        console.log('Error! localStorage not complete!');
      }
    },

    clear() {
      try {
        getBackend().removeItem(STORAGE_KEY);
      } catch (error) {
        console.error('Error clearing localStorage:', error);
      }
    },
  };
}

export const userStorage = createUserStorage();
