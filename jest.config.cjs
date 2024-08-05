module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './html-report',
      filename: 'report.html',
      expand: true,
    }],
  ],
  testEnvironment: 'node',
};