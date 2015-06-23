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

    frameworks: [ // see the README for more info on these frameworks
        'sinon-chai',
        'mocha'
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
            postLoaders: webpackConfig.module.postLoaders,
            noParse: webpackConfig.module.noParse
        },
        resolve: webpackConfig.resolve
    }
};
