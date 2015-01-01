var config      = require('../config.json').browserify;
var env         = require('../config.json').env;

var _           = require('lodash');
var browserify  = require('browserify');
var gulp        = require('gulp');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer')
var uglify      = require('gulp-uglify');
var reload      = require('browser-sync').reload;
var watchify    = require('watchify');
var reactify    = require('reactify');
var sourcemaps  = require('gulp-sourcemaps');

var handleError = require('../utils/handle-error');
var bundleName  = require('../utils/bundle-name');

var TASK_NAME   = 'browserify';

var bundlerFactory = function(isWatching){
  return function(){
    var bundler = browserify({
      cache: {}, packageCache: {}, fullPaths: true,
      entries: config.src,
      extensions: config.extensions,
      debug: env.IS_DEV,
      transform: [reactify]
    });

    var bundle = function () {
      bundler.bundle()
        .on('error', handleError)
        .pipe(source(bundleName + '.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('js'))
        .pipe(gulp.dest(config.dest))
        .pipe(reload({stream: true}));
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
