module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', 'lib'],
  testEnvironment: 'node',
}
