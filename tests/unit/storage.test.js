import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createUserStorage } from '../../src/services/storage.js';

function fakeBackend(initial = {}) {
  const data = new Map(Object.entries(initial));
  return {
    getItem: (k) => (data.has(k) ? data.get(k) : null),
    setItem: (k, v) => data.set(k, v),
    removeItem: (k) => data.delete(k),
  };
}

test('хранит значения одним JSON-объектом под ключом userData', () => {
  const backend = fakeBackend();
  const storage = createUserStorage(() => backend);
  storage.set('page', 7);
  storage.set('fade', false);
  assert.deepEqual(JSON.parse(backend.getItem('userData')), { page: 7, fade: false });
  assert.equal(storage.get('page'), 7);
  assert.equal(storage.get('missing'), undefined);
});

test('битый JSON не ломает чтение', () => {
  const storage = createUserStorage(() => fakeBackend({ userData: '{oops' }));
  const original = console.error;
  console.error = () => {};
  assert.equal(storage.get('page'), undefined);
  console.error = original;
});

test('clear удаляет все настройки', () => {
  const storage = createUserStorage(() => fakeBackend());
  storage.set('page', 3);
  storage.clear();
  assert.equal(storage.get('page'), undefined);
});
