var webpack = require('webpack');

module.exports = {
    node: {
      fs: 'emtpy'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'isparta',
                include: /(src)/,
                exclude: function(absPath) {
                    return (absPath.indexOf('.spec.js') > -1)
                        || (absPath.indexOf('.module.js') > -1)
                        || (absPath.indexOf('test-context.js') > -1)
                        || (absPath.indexOf('.config.js') > -1)
                        || (absPath.indexOf('.module.js') > -1)
                        || (absPath.indexOf('.route.js') > -1)
                        || (absPath.indexOf('.run.js') > -1);
                }
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                include: /(src)/,
                loader: 'babel?stage=0'
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