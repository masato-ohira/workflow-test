module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/warnings',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 1,
    'no-debugger': 1,
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'no-irregular-whitespace': 1,
    'max-len': 0,
  },
}
