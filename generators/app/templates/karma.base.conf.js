var webpackConfig = require('./webpack.config');

module.exports = {
    browsers: ['PhantomJS'],

    coverageReporter: {
        type: 'html',
        dir: 'artifacts/coverage'
    },

    files: [
        'test/bind.js',   // phantom <2.0 breaks without this
        'test/unit.js'    // autodiscovery file
    ],

    frameworks: [
        'chai',     // `expect` library, more human-readable than the normal `assert`
        'mocha',    // unit testing framework
        'sinon'     // mock & stub library - absurdly useful
    ],

    preprocessors: {
        'src/**/*.js': ['webpack'],
        'src/**/*.jsx': ['webpack'],
        'test/unit.js': [
            'webpack',
            'sourcemap'
        ]
    },

    reporters: ['dots'],
    singleRun: true,

    phantomjsLauncher: {
        exitOnResourceError: true
    },

    webpack: { // similar to the normal configuration, but doesn't care about chunking or minification
        devtool: 'inline-source-map', // easier to debug with
        module: {
            preLoaders: webpackConfig.module.preLoaders,
            loaders: webpackConfig.module.loaders,
            noParse: ['react/addons', 'lodash']
        }
    }
};
