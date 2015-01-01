var config = require('../config.json').html;

var gulp = require('gulp');
var reload  = require('browser-sync').reload;

var TASK_NAME = 'html';

gulp.task(TASK_NAME, function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});

function watcher () {
  gulp.watch(config.watch, [TASK_NAME]);
}

module.exports = {name: TASK_NAME, watcher: watcher};
