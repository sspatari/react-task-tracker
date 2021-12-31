module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
  },
};
