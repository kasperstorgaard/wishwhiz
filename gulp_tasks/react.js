var config = require('../gulpconfig.json').react;

var gulp = require('gulp');
var react = require('gulp-react');
var rename = require('gulp-rename')

gulp.task('react', function () {
  gulp.src(config.src)
    .pipe(react())
    .pipe(rename(function(path){
      path.extname = '.js';
    }))
    .pipe(gulp.dest(config.dest));
})
