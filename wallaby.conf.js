module.exports = function (wallaby) {
  return {
    files: [
      'components/**/*.js',
      // 'lib/**/*.js',
      'package.json',
      { pattern: 'test/**/*.snap', ignore: true }
    ],
    tests: [
      'test/**/*.test.js',
      'test/**/*.snap'
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel(require('./package.json').babel)
    },
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    setup: function () {
      const jestConfig = require('./package.json').jest
      wallaby.testFramework.configure(jestConfig)
    }
    // debug: true
  }
}
