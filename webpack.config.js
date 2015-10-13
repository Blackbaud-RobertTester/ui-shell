var webpack = require('webpack');

module.exports = {
    module: {
        disableLogging: true,
        loaders: [{
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loaders: ['babel']
        }],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /(src|bower_components|node_modules)/,
                loaders: ['babel']
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
    devtool: 'eval-source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};