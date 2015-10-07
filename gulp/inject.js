'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var debug = require('gulp-debug');
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

function getInjectOptions(name) {
    var options = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    if (name)
        options.name = name;

    return options;
}

//TODO: There needs to be a more generic way of doing this
/*Copy all deployed files from the different modules into place*/
gulp.task('copyFiles', function () {

    var appFilesToCopy = [
        path.join(conf.paths.src, '/app/domain1/.tmp/serve/app/domain1.js'),
        path.join(conf.paths.src, '/app/ui-common/.tmp/serve/app/common.js')
    ];

    var templateFilesToCopy = [
        path.join(conf.paths.src, '/app/domain1/.tmp/partials/templateCacheHtml-domain1.js'),
        path.join(conf.paths.src, '/app/ui-common/.tmp/partials/templateCacheHtml-common.js')
    ];

    gulp.src(appFilesToCopy)
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));

    gulp.src(templateFilesToCopy)
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/partials')));
});

gulp.task('inject', ['prepForInjection'], function () {

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

gulp.task('prepForInjection', function(cb) {
    runSequence('copyFiles', 'scripts', 'styles', cb);
});
