var config = require('../gulpconfig.json').html;

var gulp = require('gulp');

gulp.task('html', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
})
