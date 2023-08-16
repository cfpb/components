import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginJsdoc from 'eslint-plugin-jsdoc';
import eslintPluginJsx from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.{ts,js}'],
    ignores: ['dist', 'loader', 'www'],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      eslintPluginImport: eslintPluginImport,
      eslintPluginJsdoc: eslintPluginJsdoc,
      eslintPluginJsx: eslintPluginJsx,
      eslintConfigPrettier: eslintConfigPrettier,
      eslintPluginTypescript,
      eslintPluginTypescript,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.ts', '.d.ts', '.tsx'],
          moduleDirectory: ['node_modules'],
        },
      },
    },
    // Some plugins are automatically included.
    // Run `yarn eslint --print-config foo.js > bar.json` to see included plugins.
    // plugins: [],
    rules: {
      'eslintPluginJsdoc/require-hyphen-before-param-description': [
        'warn',
        'always',
      ],
      'no-console': ['warn'],
      'no-use-before-define': ['error'],
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      'no-var': ['error'],
      'prefer-const': ['error'],
      radix: ['error'],
      // TODO: remove this and fix definition order.
      'no-use-before-define': 0,
    },
  },
];
