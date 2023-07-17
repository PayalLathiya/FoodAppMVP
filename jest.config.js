module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native||@?ptomasroos/react-native-multi-slider|@react-native-community|@react-navigation)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './setupTests.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
