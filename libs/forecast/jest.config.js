module.exports = {
  name: 'forecast',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/forecast',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
