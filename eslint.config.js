import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['public/**', 'dist/**', '.parcel-cache/**', 'node_modules/**', 'src/data/index.js'],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: globals.browser },
    rules: {
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['scripts/**', 'tests/**', 'eslint.config.js', 'cypress.config.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: globals.node },
  },
  {
    files: ['cypress/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.mocha, cy: 'readonly', Cypress: 'readonly' },
    },
  },
];
