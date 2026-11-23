import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:1234',
    viewportHeight: 720,
    viewportWidth: 1200,
    numTestsKeptInMemory: 0,
  },
});
