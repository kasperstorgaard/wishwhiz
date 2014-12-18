var config = require('../gulpconfig.json').less;

var gulp = require('gulp');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function() {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifycss())
    .pipe(rename(config.fileName))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
})
