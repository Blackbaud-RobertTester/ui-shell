'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

function getInjectOptions(name) {
    var options = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    if(name)
        options.name = name;

    return options;
}

gulp.task('inject', ['scripts', 'styles'], function () {
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/app/**/*.css'),
        path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
    ], {read: false});

    //TODO: Come up with a better way of doing this
    var injectScripts = gulp.src([
        path.join(conf.paths.tmp, '/serve/app/**/*common.js'),
        path.join(conf.paths.tmp, '/serve/app/**/*domain1.js'),
        path.join(conf.paths.tmp, '/serve/app/**/*.module.js')
    ], {read: false});

    return gulp.src(path.join(conf.paths.src, '/*.html'))
        .pipe($.inject(injectStyles, getInjectOptions()))
        .pipe($.inject(injectScripts, getInjectOptions()))
        .pipe(wiredep(_.extend({}, conf.wiredep))) //looks at the bower dependencies
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
