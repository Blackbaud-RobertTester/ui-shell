'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var karma = require('karma');

//var pathSrcHtml = [
//    path.join(conf.paths.src, '/**/*.html')
//];
//
//var pathSrcJs = [
//    path.join(conf.paths.tmp, '/serve/app/index.module.js')
//];


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
