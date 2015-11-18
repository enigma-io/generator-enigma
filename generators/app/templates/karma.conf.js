module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS2'],

        files: [
            './!(dist|node_modules)/**/unit.js'
        ],

        frameworks: [
            'browserify',
            'chai-sinon',
            'mocha',
            'source-map-support'
        ],

        preprocessors: {
            './!(dist|node_modules)/**/{index,unit}.js': ['browserify']
        },

        reporters: ['mocha'],
        singleRun: true,

        phantomjsLauncher: {
            exitOnResourceError: true
        },

        browserify: {
            debug: true,
            transform: [
                "eslintify"
            ]
        },

        reportSlowerThan: 10
    });
};
