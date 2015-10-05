'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var fs = require('fs');
var debug = require('gulp-debug');
var path = require('path');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

//TODO: Need to come up with a better way of grabbing all the files inside of the module directories.
wrench.readdirSyncRecursive('./src/app/domain1/gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./src/app/domain1/gulp/' + file);
});

//TODO: Need to come up with a better way of grabbing all the files inside of the module directories.
wrench.readdirSyncRecursive('./src/app/ui-common/gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./src/app/ui-common/gulp/' + file);
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
