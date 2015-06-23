var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',

    entry: {
        vendor: ['react/addons'],
        app: ['./src']
    },

    output: {
        path: path.join(__dirname, 'release/js'),
        pathinfo: true,
        publicPath: 'release/js',
        filename: '[name].js',
        chunkFilename: '[hash]/[id].js',
        hotUpdateMainFilename: 'artifacts/[hash]/update.json',
        hotUpdateChunkFilename: 'artifacts/[hash]/[id].update.js'
    },

    recordsOutputPath: path.join(__dirname, 'artifacts/records.json'),

    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint',
            exclude: /(node_modules|bower_components|test\/unit|test\/bind)/
        }],

        loaders: [{
            test: /\.scss$/,
            loader: 'style!css!autoprefixer?{browsers:"> 5% in US"}!sass'
        }],

        postLoaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
        }],

        noParse: [/react/]
    },

    plugins: [
        new webpack.PrefetchPlugin('react/addons'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ],

    resolve: {
        alias: {
            'react/addons': __dirname + '/node_modules/react/dist/react-with-addons.min.js'
        },
        extensions: ['', '.js', '.jsx']
    },
};
