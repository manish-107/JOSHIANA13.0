module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2', // Replace with the appropriate React version you are using
    },
  },
  plugins: ['react-refresh'], // Add additional plugins as needed, like 'material-ui', 'framer-motion', 'three-js', etc.
  rules: {
    'react/jsx-no-target-blank': 'off', // Example of custom rule override
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // Add more rules specific to your project
  },
};
