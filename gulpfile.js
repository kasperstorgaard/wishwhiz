var requireDir = require('require-dir');
var gulp = require('gulp');
var _ = require('lodash');

var tasks = requireDir('./gulp/tasks');

gulp.task('default', ['browserify', 'less', 'html', 'images']);

gulp.task('serve', ['less', 'html', 'images', 'browser-sync'], function watch() {
  _.invoke(tasks, 'watcher');
});

