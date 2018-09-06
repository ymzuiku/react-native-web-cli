const fs = require('fs-extra');
const tip = require('./webpack.tip')();
const resolve = require('path').resolve;
const webpack = require('webpack');
const isHaveDll = fs.existsSync(resolve(tip.paths.dll, 'dll.js'));

tip.isDev = tip.paths.output;

module.exports = {
  target: 'web',
  // bail: tip.isDev ? false : true,
  mode: tip.isDev ? tip.mode.development : tip.mode.production,
  devtool: tip.isDev ? tip.devtool.sourceMap : tip.devtool.none,
  // stats: 'errors-only',
  entry: {
    index: tip.paths.entry,
  },
  output: {
    path: tip.paths.output,
    // pathinfo: true,
    filename: '[name]_[hash:8].js',
    chunkFilename: '[name].chunk.js',
    // publicPath: '/',
  },
  resolve: {
    extensions: tip.resolve.extensions,
    alias: tip.resolve.alias,
    plugins: [],
  },
  externals: {},
  module: {
    rules: [
      tip.module.rules.eslint,
      tip.module.rules.cssLoader,
      tip.module.rules.stylusLoader,
      tip.module.rules.urlLoader,
      tip.module.rules.fileLoader,
      tip.module.rules.sourceMapLoader,
      tip.module.rules.tsLodaer,
      tip.module.rules.babelLoaderBuild,
    ],
  },
  devServer: tip.devServer,
  plugins: [
    tip.plugins.ProvidePlugin,
    tip.plugins.HtmlWebpackPlugin,
    tip.plugins.DefinePlugin,
    !tip.isDev ? tip.plugins.FastUglifyJsPluginProd : tip.plugins.null,
    !tip.isDev ? tip.plugins.HotModuleReplacementPlugin : tip.plugins.null,
    !tip.isDev ? tip.plugins.CleanWebpackPlugin : tip.plugins.null,
    !tip.isDev ? tip.plugins.CopyWebpackPlugin : tip.plugins.null,
    !tip.isDev ? tip.plugins.HashedModuleIdsPlugin : tip.plugins.null,
    isHaveDll ? tip.plugins.DllReferencePlugin : tip.plugins.null,
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
};
