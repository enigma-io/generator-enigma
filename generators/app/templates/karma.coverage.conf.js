var _ = require('lodash');
var path = require('path');

var karmaConfig = require('./karma.base.conf');
    karmaConfig.webpack.module.preLoaders.unshift({
        test: /\.jsx?$/,
        include: path.resolve('src/'),
        loader: 'isparta'
    });

module.exports = function(config) {
    var options = _.merge({}, karmaConfig);

    options.reporters = [
        'dots',
        'coverage'
    ];

    config.set(options);
};
