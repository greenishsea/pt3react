module.exports = require('./webpack.config-helper')({
  isProduction: false,
  // devtool: 'eval',
  // devtool: 'inline-source-map',
  devtool: 'source-map',
  port: 3000,
  publicPath: 'http://localhost:3000/',
  needsExtractCssFile: false
});
