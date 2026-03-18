const fs = require('fs');
const path = require('path');
const report = require('multiple-cucumber-html-reporter');

// Detect environment
const isCI = process.env.GITHUB_ACTIONS === 'true';
const isDocker = fs.existsSync('/.dockerenv');

let deviceName;
let platformName;
let platformVersion;

if (isCI) {
  deviceName = 'GitHub Actions Runner';
  platformName = 'linux';
  platformVersion = 'ubuntu-latest';
} else if (isDocker) {
  deviceName = 'Docker Container';
  platformName = 'linux';
  platformVersion = 'alpine';
} else {
  deviceName = 'Local Machine';
  platformName = 'windows';
  platformVersion = '10';
}

report.generate({
  jsonDir: path.resolve(__dirname, '../test-results'),
  reportPath: path.resolve(__dirname, '../test-results/html'),
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: deviceName,
    platform: {
      name: platformName,
      version: platformVersion
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
