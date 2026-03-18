const path = require('path');
const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: path.resolve(__dirname),
  reportPath: path.resolve(__dirname, 'html'),
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Cucumber Demo' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toString() }
    ]
  }
});
