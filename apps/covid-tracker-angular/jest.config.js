module.exports = {
  name: 'covid-tracker-angular',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/covid-tracker-angular',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
