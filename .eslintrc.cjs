module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
      'indent': ['error', 4],
      '@typescript-eslint/indent': ['error', 4],
      'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
      ],
      'prettier/prettier': ['error', { 'tabWidth': 4 }],
  },
};
