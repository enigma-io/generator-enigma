var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react/addons'],
        app: ['./src/main.js']
    },
    output: {
        path: path.join(__dirname, 'release/js'),
        publicPath: 'release/js',
        filename: 'bundle.js',
        chunkFilename: '[hash]/[id].js',
        hotUpdateMainFilename: 'artifacts/[hash]/update.json',
        hotUpdateChunkFilename: 'artifacts/[hash]/[id].update.js'
    },
    recordsOutputPath: path.join(__dirname, 'artifacts/records.json'),
    module: {
        loaders: [
            {test: /\.scss$/, loader: 'style!css!autoprefixer?{browsers:"> 5% in US"}!sass'},
            {test: /\.jsx$/, loader: 'jsx-loader'}
        ],
        noParse: ['react/addons']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: Infinity
        })
    ]
};
