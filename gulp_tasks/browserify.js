var config = require('../gulpconfig.json').browserify;
var env = require('../gulpconfig.json').env;

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reload  = require('browser-sync').reload;

function handleError(error){
    console.log(error.toString());
    this.emit('end');
};

var TASK_NAME = 'browserify';

var getBundleName = function () {
  var version = require(config.packageJSON).version;
  var name = require(config.packageJSON).name;
  return version + '.' + name + '.' + 'min';
};

gulp.task(TASK_NAME, function() {
  return browserify({
    entries: [config.src],
    debug: true
  }).bundle()
    .on('error', handleError)
    .pipe(source(getBundleName() + '.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      // Add transformation tasks to the pipeline here.
      .pipe(uglify({mangle: !env.IS_DEV }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream:true}));
});

function watcher () {
  gulp.watch(config.watch, [TASK_NAME])
}

module.exports = {name: TASK_NAME, watcher: watcher};
