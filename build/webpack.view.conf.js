const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const utils = require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = (process.env.PORT && Number(process.env.PORT)) || 4000;

const devWebpackConfig = merge(baseWebpackConfig, {
  context: path.resolve(__dirname, '../'),
  output: {
    path: path.resolve(__dirname, '../_view'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? './'
      : '/',
    libraryTarget: 'var'
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      usePostCSS: true,
      extract: false
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: 'cheap-module-eval-source-map',
  // these devServer options should be customized in /config/index.tsx
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('/', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || '127.0.0.1',
    port: PORT || 4000,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env.NODE_ENV === 'development' ? 'development' : 'production')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'view/index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../view/static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ]
});

devWebpackConfig.entry = {
  app: './view/index'
};

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = PORT;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err);
    } else {
      // add port to devServer config
      devWebpackConfig.devServer.port = port;
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: undefined
      }));
      resolve(devWebpackConfig);
    }
  });
});
