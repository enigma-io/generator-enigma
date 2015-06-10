/* eslint-env node */

'use strict';

var _ = require('lodash');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {
    var webpackProdConfig = _.merge({}, webpackConfig);

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
            preserveComments: 'some',
            compress: {
                warnings: false
            }
        })
    );

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Get full error/warning stacks
    grunt.option('stack', true);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            all: [
                'artifacts/',
                'release/',
                'records.json'
            ]
        },

        eslint: {
            options: {
                quiet: true
            },

            dev: [
                'src/**/*.js',
                'src/**/*.jsx',
                'Gruntfile.js'
            ],

            unit: [
                'test/**/*.js',
                'test/**/*.jsx'
            ]
        },

        karma: {
            options: {
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
                    'sinon'     // amazing mock & stub library - absurdly useful
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
                        loaders: webpackConfig.module.loaders,
                        noParse: ['react/addons']
                    }
                },

                webpackServer: {
                    noInfo: true,
                    quiet: true
                }
            },

            coverage: {
                reporters: [
                    'dots',
                    'coverage'
                ],
                webpack: {
                    module: {
                        postLoaders: [{
                            test: /\.jsx?$/,
                            exclude: /(test|node_modules)\//,
                            loader: 'istanbul-instrumenter'
                        }]
                    }
                }
            },

            debug: {
                autoWatch: true,
                browsers: ['Chrome'],
                singleRun: false
            },

            unit: {}
        },

        webpack: {
            dev: webpackConfig,
            prod: webpackProdConfig
        }
    });

    grunt.registerTask('base:dev', ['eslint:dev', 'clean']);
    grunt.registerTask('base:prod', ['eslint:dev', 'clean']);

    grunt.registerTask('default', ['base:dev', 'webpack:dev']); // what happens when you type "grunt" in the terminal
    grunt.registerTask('release', ['base:prod', 'webpack:prod']);

    grunt.registerTask('unit', ['eslint:unit', 'karma:unit']);
    grunt.registerTask('debug', ['eslint:unit', 'karma:debug']);
    grunt.registerTask('coverage', ['default', 'karma:coverage']);
};
