var config = require('../gulpconfig.json').browserify;

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var getBundleName = function () {
  var version = require('../package.json').version;
  var name = require('../package.json').name;
  return version + '.' + name + '.' + 'min';
};

gulp.task('browserify', function() {
  return browserify({
    entries: [config.src],
    debug: true
  })
  .bundle()
    .pipe(source(getBundleName() + '.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      // Add transformation tasks to the pipeline here.
      .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest));
});
