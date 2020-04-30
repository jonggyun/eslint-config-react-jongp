module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugin: ['react', 'prettier', 'react-hooks', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'error',
    '@typescript-eslint/indent': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
