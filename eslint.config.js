import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: './tsconfig.json',
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    rules: {
      // General rules
      'no-console': ['error', { allow: ['error'] }],
      'no-debugger': 'warn',
      'no-dupe-else-if': 'warn',
      'no-irregular-whitespace': 'warn',
      'no-setter-return': 'warn',
      'no-unsafe-finally': 'warn',

      // Best Practices
      'accessor-pairs': 'error',
      'array-callback-return': 'warn',
      'dot-notation': 'warn',
      'no-eq-null': 'warn',
      'no-eval': 'error',
      'no-cond-assign': 'warn',
      'no-prototype-builtins': 'warn',
      'no-inner-declarations': 'warn',
      'no-implicit-globals': 'warn',
      'no-type-assertion/no-type-assertion': 'off',
      'no-implied-eval': 'error',
      'no-new-func': 'warn',
      'no-return-await': 'warn',
      'no-proto': 'warn',
      'no-useless-catch': 'warn',
      'no-with': 'error',
      'require-await': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-empty': 'off',
      'no-case-declarations': 'warn',
      'no-global-assign': 'warn',
      'linebreak-style': 0,
      'no-bitwise': 'warn',
      'no-nested-ternary': 'warn',
      'no-unneeded-ternary': 'warn',
      'spaced-comment': ['warn', 'always'],

      //ES6
      'no-var': 'warn',
      'prefer-const': 'warn',

      // TypeScript specific rules
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/ban-types': 'warn',
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-var-requires': 'warn',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Ignore no-unused-vars if prefixed with underscore
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
