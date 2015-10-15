'use strict';

var gulp = require('gulp');
var karma = require('karma');

function runTests (singleRun, done) {
    var Server = karma.Server;

    new Server({
        configFile: __dirname + './../karma.conf.js',
        singleRun: singleRun,
        autoWatch: !singleRun
    }, done).start();

}

gulp.task('test', function(done) {
    runTests(true, done);
});

gulp.task('test:auto', function(done) {
    runTests(false, done);
});
