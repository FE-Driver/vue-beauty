// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'global-require':  0,
    'no-multi-assign': 0,
    'linebreak-style': 0,
    'indent': ["error", 4, { "SwitchCase": 1 }],
    'import/no-unresolved': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'guard-for-in': 0,
    'no-new': 0,
    'no-return-assign': 0,
    'consistent-return': 0,
    'no-mixed-operators': 0,
    'no-param-reassign': 0,
    'no-return-reassign': 0,
    'max-len': 0,
    'no-unused-expressions': 0,
    'import/no-dynamic-require': 0,
    'no-underscore-dangle': 0,
    'prefer-arrow-callback': 0,
    'no-continue': 0,
    'yoda': 1,
    'prefer-destructuring': 0,
    'no-restricted-globals': 0,
    'object-curly-newline': 0,
    'operator-assignment': 0,
    'no-prototype-builtins': 0,
    'no-case-declarations': 0,
    'prefer-rest-params': 0,
  }
}
