var requireDir = require('require-dir');
var gulp = require('gulp');

var tasks = requireDir('./gulp_tasks');

gulp.task('default', ['react', 'browserify', 'less', 'html'])


