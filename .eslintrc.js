module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [0],
    'prettier/prettier': 'error',
  },
};
