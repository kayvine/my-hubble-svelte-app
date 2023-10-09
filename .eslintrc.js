module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  extends: 'eslint:recommended',
  rules: {
    // ...
    'object-curly-spacing': ['error', 'always'],
  },
  root: true,
}
