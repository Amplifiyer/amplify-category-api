/**
 * README if you have come here because you are sick and tired of some rule being on your case all the time:
 * If you are trying to modify a rule for normal code, see the docs for each of the lint plugins we are using in the "rules" section.
 * If you are trying to ignore certain files from spellchecking, see the "overrides" section
 * If you are trying to modify rules that run in test files, see the "overrides" section
 * If you are trying to ignore certain files from linting, see "ignorePatterns" at the bottom of the file
 */
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      arrowFunctions: true,
      modules: true,
      module: true,
    },
    project: ['tsconfig.base.json'],
  },
  plugins: ['@typescript-eslint', 'spellcheck', 'import', 'jsdoc', 'prefer-arrow'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    // NOTE: This config should only specify rules as "errors" or "off". Over time "warnings" invariably become the same as "off".

    // Disables double quote error when using single quotes within string for readability
    // https://eslint.org/docs/rules/quotes#avoidescape
    'quotes': ['error', 'single', { 'avoidEscape': true }],

    // Typescript rules
    // Extends recommended rules here: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    '@typescript-eslint/naming-convention': [ 'error',
      // Add to this block to enforce naming conventions on different identifiers
      // Docs here: https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/packages/eslint-plugin/docs/rules/naming-convention.md
      {
        selector: ['enumMember'],
        format: ['UPPER_CASE'],
      },
      {
        selector: ['typeLike'],
        format: ['PascalCase'],
      },
      {
        selector: 'default',
        format: null,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    // Some ESLint rules conflict with the corresponding TS rule. These ESLint rules are turned off in favor of the corresponding TS rules
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'all', argsIgnorePattern: '^_$' }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    // Import Rules
    // Extends recommended rules here: https://github.com/import-js/eslint-plugin-import/blob/6c957e7df178d1b81d01cf219d62ba91b4e6d9e8/config/recommended.js
    'import/no-dynamic-require': 'error',
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/order': 'error',
    'import/first': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-useless-path-segments': 'error',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    // JSDoc Rules
    // Docs here: https://www.npmjs.com/package/eslint-plugin-jsdoc
    'jsdoc/require-jsdoc': ['warn', {
      publicOnly: true,
      require: {
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
      },
      contexts: [
        'MethodDefinition:not([accessibility=/(private|protected)/]) > FunctionExpression', // Require JSDoc on public methods
        'TSInterfaceDeclaration',
        'TSTypeAliasDeclaration',
        'TSEnumDeclaration',
      ],
      checkConstructors: false
    }],
    'jsdoc/require-description': ['error', { contexts: ['any'] }
    ],
    'jsdoc/require-param': 'warn',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-returns': 'warn',
    'jsdoc/require-returns-description': 'error',
    'jsdoc/check-param-names': 'error',

    // ESLint Rules
    // These rules override the AirBnb rules here: https://github.com/airbnb/javascript
    // as well as the recommended ESLint rules here: https://eslint.org/docs/rules/

    // this is the same as the AirBnb rule, but with length of 140 instead of 100
    'max-len': ['error', 140, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'no-use-before-define': 'off',
    'consistent-return': 'error',
    'no-bitwise': 'error',
    'yoda': 'error',
    'no-var': 'error',
    'strict': 'error',
    'spaced-comment': ['error', 'always'],
    'no-new': 'error',
    'no-underscore-dangle': 'error',
    'no-template-curly-in-string': 'error',
    'no-plusplus': 'off',

    // same as air-bnb default with the exception of allowing for...of
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // function style
    'arrow-parens': ['error', 'always'],
    'func-style': ['error', 'expression'],
    'prefer-arrow/prefer-arrow-functions': ['error', { disallowPrototype: true }],
    // yes I know these are all supposed to be errors, but this one requires too much functional refactoring at the moment
    // we should still aim to keep functions small moving forward
    'max-lines-per-function': ['warn', {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-depth': ['error', 4],
  },
  overrides: [
    {
      // edit rules here to modify test linting
      files: ['__tests__/**', '*.test.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
      }
    }
  ],
  // Files / paths / globs that shouldn't be linted at all
  // (note that only .js, .jsx, .ts, and .tsx files are linted in the first place)
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules',
    'dist',
    'build',
    '__mocks__',
    '__tests__',
    'coverage',

    // Forked package
    'amplify-velocity-template',

    // Project specific excludes
    '/packages/amplify-appsync-simulator/public',

    // Ignore project/file templates
    'function-template-dir',
    '/packages/graphql-predictions-transformer/lambdaFunction',

    // Ignore override resource test files
    '/packages/amplify-e2e-tests/overrides',

    // Ignore lib directory of typescript packages until all packages are migrated to typescript
    '/packages/*/lib',

    // Ignore CHANGELOG.md files
    '/packages/*/CHANGELOG.md',
  ],
};
