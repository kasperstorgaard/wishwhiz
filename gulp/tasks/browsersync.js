var config = require('../config.json').browserSync;
var _ = require('lodash');

var gulp = require('gulp');
var browserSync = require('browser-sync');

var TASK_NAME = 'browser-sync';

gulp.task(TASK_NAME, function() {
    browserSync({
        server: {
            baseDir: config.baseDir
        }
    });
});

module.exports = {name: TASK_NAME, watcher: _.noop };
