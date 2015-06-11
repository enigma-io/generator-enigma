var _ = require('lodash');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var webpackProdConfig = _.merge({}, webpackConfig);

webpackProdConfig.devtool = null;
webpackProdConfig.output.pathinfo = false;

// Minification is only needed for "release" bundles, saves ~3s per build
webpackProdConfig.plugins.push(
	new webpack.DefinePlugin({
		'process.env': {
			// production env removes React.addons.TestUtils ~53kb savings
			NODE_ENV: JSON.stringify('production')
		}
	}),
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		},
		preserveComments: 'some',
		sourceMap: false
	})
);

module.exports = webpackProdConfig;
