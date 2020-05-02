module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'error',
    'no-console': 'error',
    'prettier/prettier': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    eqeqeq: 'error',
    'id-length': [
      'error',
      {
        min: 2,
        exceptions: ['e'],
      },
    ],
    'no-alert': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'require-await': 'error',
    indent: 'off',
    'max-lines': ['error', 100],
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-duplicate-imports': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
