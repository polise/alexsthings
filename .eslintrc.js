var eslint = {
    extends: [
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  rules: {
    'complexity': ['error', 8 ],
    'import/no-unresolved': [2],
    'import/default': 2,
    'import/no-commonjs': 2,
    'import/no-duplicates': 2,
    'a11y/anchor-is-valid': 0,
  },
  env: {
    'browser': true,
    'node': true,
    'jest': true
  }
};

module.exports = eslint;
