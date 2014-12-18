var config = require('../gulpconfig.json').react;

var gulp = require('gulp');
var react = require('gulp-react');
var rename = require('gulp-rename')
var reload = require('browser-sync').reload;
var handleError = require('./_handleError');

var TASK_NAME = 'react';

gulp.task(TASK_NAME, function () {
  gulp.src(config.src)
    .pipe(react())
    .on('error', handleError)
    .pipe(rename(function(path){
      path.extname = '.js';
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
})

function watcher () {
  gulp.watch(config.watch, [TASK_NAME]);
}

module.exports = { name: TASK_NAME, watcher: watcher};
