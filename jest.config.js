module.exports = {
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/test/setup.js'],
  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/cssProxy.js',
    global: '<rootDir>/test/cssProxy.js' // has to point to an existing file
  }
};
