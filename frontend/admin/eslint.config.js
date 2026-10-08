import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],

    extends: [tseslint.configs.recommended],

    rules: {
      'no-unused-vars': 'warn',
    },
  },
]);
