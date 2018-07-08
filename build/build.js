const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.component.conf');

const spinner = ora({
  text: 'building for production...',
  spinner: {
    'interval': 80,
    'frames': [
      '⣾',
      '⣽',
      '⣻',
      '⢿',
      '⡿',
      '⣟',
      '⣯',
      '⣷'
    ]
  }
});
spinner.start();

rm(path.join('../dist'), err => {
  if (err) throw err;
  webpack(webpackConfig, (_err, stats) => {
    spinner.stop();
    if (_err) throw _err;
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }
    console.log(chalk.cyan('  Build complete.\n'));
  });
});
