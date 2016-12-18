var browserSync = require('browser-sync');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack-dev.config');
var bundler = webpack(webpackConfig);

browserSync({
    server: {
      baseDir: 'dist',
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackConfig.output.publicPath,
          stats: { colors: true }
        }),
        webpackHotMiddleware(bundler) // bundler should be the same as above
      ]
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
    //   'src/styles/**/*.scss', // commented out because dev phase can be including css to webpack
      'src/*.html'
    ]
});