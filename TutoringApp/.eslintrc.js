/* eslint-disable quotes */
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}', 'babel.config.js', 'App.js'
      ],
      rules: {
        'filenames/match-regex': 'off'
      },
      parserOptions: {
        sourceType: 'module'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react', 'filenames'
  ],
  rules: {
    semi: 'off',
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    quotes: [2, 'double'], // double quotes for text
    'react/jsx-key': 'off',
    'filenames/match-regex': ['error', '^[a-z]+(-[a-z]+)*$'], // kebab-case
    "react/jsx-pascal-case": ["error", { allowAllCaps: true, ignore: [] }], // PascalCase for .jsx components
    'spaced-comment': 'off',
    'multiline-ternary': 'off',
    'prefer-const': 'off',
    'import/no-duplicates': 'warn',
    'comma-dangle': 'off'
    // Rule not included here: camelCase for variable names; it is a default rule
  }
}
