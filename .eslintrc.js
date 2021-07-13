// @ts-check

/**@type {import('prettier').Options} */
const prettierConfig = {
  endOfLine: 'lf',
  arrowParens: 'avoid',
  trailingComma: 'all',
  printWidth: 100,
  singleQuote: true,
  tabWidth: 2,
};

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['warn', prettierConfig],
    complexity: ['warn', 10],
  },
};
