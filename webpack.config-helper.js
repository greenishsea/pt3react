'use strict';
const Path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin'); // install and add some manifest plugin when needed

module.exports = (options) => {

  // common
  let webpackConfig = {
    devtool: options.devtool,
    output: {
      path: Path.join(__dirname, 'dist'),
      publicPath: options.publicPath,
    //   filename: '[name]-[hash].js'
      filename: 'bundle.js'
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development')
        }
      }),
      new Webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ],
    module: { loaders: [] }
  };

  // js
  if (options.isProduction) {
    webpackConfig.entry = {
      vendor: [
        "babel-polyfill",
        "react",
        "react-dom",
        "react-redux",
        "react-router",
        "redux",
        "redux-form",
        "redux-logger",
        "redux-saga",
        "redux-thunk",
        "whatwg-fetch"
      ],
      app: './src/js/entry'
    };
    webpackConfig.plugins.push(
      new Webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    );
    webpackConfig.module.loaders.push({
        loaders: ['babel?presets[]=es2015,presets[]=stage-2,presets[]=react'],
        exclude: /node_modules/,
        test: /\.js[x]?$/
    });

  } else {
    webpackConfig.entry = [
         'webpack/hot/dev-server',
         'webpack-hot-middleware/client',
         './src/js/entry' ];
    webpackConfig.plugins.push(
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoErrorsPlugin()
    );
    webpackConfig.module.loaders.push({
        loaders: ['react-hot', 'babel?cacheDirectory=true,presets[]=es2015,presets[]=stage-2,presets[]=react'],
        exclude: /node_modules/,
        test: /\.js[x]?$/
    });

    // // lint
    // webpackConfig.module.loaders.push({
    //   test: /\.js$/,
    //   loader: 'eslint',
    //   exclude: /node_modules/
    // });
  }

  // assets
  webpackConfig.module.loaders.push(
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader',
      query: {
        name: ( options.isProduction ? 'assets/images/[hash].[ext]' : '[path][name].[ext]?[hash]' ),
        limit: 10000
      },
    },
    {
      test: /\.(eot|ttf|wav|mp3)$/,
      loader: 'file-loader',
      query: {
        name: ( options.isProduction ? 'assets/etc/[hash].[ext]' : '[path][name].[ext]?[hash]' ),
      },
  });

  // JSON
  webpackConfig.module.loaders.push({
    loaders: [ 'json' ],
    exclude: /node_modules/,
    test: /\.json/
  });

  // CSS/SASS
  if (options.needsExtractCssFile) {
    var ExtractSASS = new ExtractTextPlugin('bundle.css');
    webpackConfig.plugins.push(
      ExtractSASS
    );
    webpackConfig.module.loaders.push({
      test: /\.scss$/i,
      loader: ExtractSASS.extract(['css', 'sass'])
    });

  } else {
    webpackConfig.module.loaders.push({
      test: /\.scss$/i,
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
    });
  }

  return webpackConfig;
}
