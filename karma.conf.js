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
    dependencies.push({pattern: 'test-context.js'});

    return dependencies;
}

module.exports = function(config) {

    var configuration = {
        files: listFiles(),
        singleRun: true,
        autoWatch: false,
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
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'html' }
            ]
        }
    };

    config.set(configuration);
};