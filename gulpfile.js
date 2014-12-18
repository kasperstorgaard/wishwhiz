var requireDir = require('require-dir');
var gulp = require('gulp');
var _ = require('lodash');

var tasks = requireDir('./gulp_tasks');

gulp.task('default', ['react', 'browserify', 'less', 'html']);

gulp.task('serve', ['default', 'browser-sync'], function watch() {
  _.each(tasks, function (task) {
    if(task.watcher){
      task.watcher();
    }
  });
});


