'use strict';

var path = require('path');
var conf = require('./gulp/conf');

var _ = require('lodash');
var wiredep = require('wiredep');

var pathSrcHtml = [
    path.join(conf.paths.src, '/**/*.html')
];

function listFiles() {
    var wiredepOptions = _.extend({}, conf.wiredep, {
        dependencies: true,
        devDependencies: true
    });

    return wiredep(wiredepOptions).js
        .concat([
            path.join(conf.paths.src, '/app/**/*.module.js'),
            path.join(conf.paths.src, '/app/**/*.js'),
            path.join(conf.paths.src, '/**/*.spec.js')
        ])
        .concat(pathSrcHtml);
}

module.exports = function(config) {

    var configuration = {
        files: listFiles(),
        singleRun: true,
        autoWatch: false,
        ngHtml2JsPreprocessor: {
            stripPrefix: conf.paths.src + '/',
            moduleName: 'uiShell2'
        },
        logLevel: 'WARN',
        frameworks: ['jasmine', 'angular-filesort'],
        angularFilesort: {
            whitelist: [path.join(conf.paths.src, '/**/!(*.html|*.spec).js')]
        },
        browsers : ['PhantomJS'],
        plugins : [
            'karma-phantomjs-launcher',
            'karma-angular-filesort',
            'karma-coverage',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        reporters: ['progress', 'coverage']
    };

    configuration.preprocessors = {};
    pathSrcHtml.forEach(function(path) {
        configuration.preprocessors[path] = ['ng-html2js'];
    });

    config.set(configuration);
};
