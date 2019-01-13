module.exports = {
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/cssProxy.js'
  }
};
