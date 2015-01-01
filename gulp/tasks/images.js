var config = require('../config.json').images;

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var TASK_NAME = 'images';

gulp.task(TASK_NAME, function () {
    return gulp.src(config.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(config.dest));
});

function watcher () {
  gulp.watch(config.watch, [TASK_NAME]);
}

module.exports = {name: TASK_NAME, watcher: watcher};
