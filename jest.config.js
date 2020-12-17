module.exports = {
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/cssProxy.js',
    global: '<rootDir>/test/cssProxy.js' // has to point to an existing file
  },
  collectCoverageFrom: [
    'src/**/*.js',
    'server/**/*.js',
    '!build/*',
    '!test/*'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0
    }
  }
};
