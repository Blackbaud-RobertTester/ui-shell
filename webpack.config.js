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
                include: /(src)/
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