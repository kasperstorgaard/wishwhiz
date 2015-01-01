var config = require('../config.json').browserify;
var env = require('../config.json').env;

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var reload  = require('browser-sync').reload;
var watchify = require('watchify');
var reactify = require('reactify');

var handleError = require('../utils/handle-error');
var bundleName = require('../utils/bundle-name');

var TASK_NAME = 'browserify';

var bundlerFactory = function(isWatching){
  return function(){
    var bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: true,
      // Specify the entry point of your app
      entries: config.src,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      debug: env.IS_DEV,
      transform: [reactify]
    });

    var bundle = function () {
      var updateStart = Date.now();
      console.log('-- browserify: update started --');
      bundler.bundle() // Create new bundle that uses the cache for high performance
      .pipe(source(getBundleName()))
      .pipe(gulp.dest(config.dest))
      .pipe(reload({stream: true}));
      console.log('-- browserify: update done | ', (Date.now() - updateStart) + 'ms');
    }

    if(isWatching){
      var bundler = watchify(bundler);
      bundler.on('update', bundle);
    }

    return bundle();
  };
};

gulp.task(TASK_NAME, bundlerFactory(false));

module.exports = {name: TASK_NAME, watcher: bundlerFactory(true)};
