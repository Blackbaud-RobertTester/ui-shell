'use strict';

var conf = require('./gulp/conf');
var _ = require('lodash');
var wiredep = require('wiredep');
var webpackConfig = require('./webpack.config.js');

function listFiles() {
    var wiredepOptions = _.extend({}, conf.wiredep, {
        dependencies: true,
        devDependencies: true
    });

    var dependencies = wiredep(wiredepOptions).js;
    dependencies.push('node_modules/babel-core/browser-polyfill.min.js');
    dependencies.push('test-context.js');

    return dependencies;
}

module.exports = function(config) {

    var configuration = {
        files: listFiles(),
        logLevel: 'WARN',
        frameworks: ['jasmine'],
        browsers : ['PhantomJS'],
        plugins : [
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-jasmine',
            'karma-webpack'
        ],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'html' }
            ]
        }
    };

    config.set(configuration);
};