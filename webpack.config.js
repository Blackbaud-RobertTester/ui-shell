var webpack = require('webpack');

module.exports = {
    node: {
      fs: 'emtpy'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loaders: ['babel?stage=0']
        }],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(src|bower_components|node_modules)/,
                loaders: ['isparta']
            },
            {
                test: /\.js$/,
                include: /(src)/,
                exclude: function(absPath) {
                    return (absPath.indexOf('.spec.js') > -1)
                        || (absPath.indexOf('.module.js') > -1)
                        || (absPath.indexOf('test-context.js') > -1);
                },
                loaders: ['isparta']
            }
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js'
        ]
    },
    devtool: 'inline-source-map'
};