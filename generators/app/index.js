'use strict';

var _ = require('lodash');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

function copy(paths, data) {
    paths = Array.isArray(paths) ? paths : [paths];

    paths.forEach(function(path) {
        this.fs[data ? 'copyTpl' : 'copy'](
            this.templatePath(path),
            this.destinationPath(path),
            data
        );
    }, this);
}

function formatPrompt(pieces) {
    return (Array.isArray(pieces) ? pieces : [pieces]).concat('  : ').join('\n');
}

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        this.log(yosay([
            chalk.bold.white('It\'s app time!'),
            chalk.gray('You\'re 4 questions from a fully-functional React app, built with ') + chalk.cyan('enigma.io ') + chalk.gray('standards.')
        ].join('\n')));

        var prompts = [{
            type: 'input',
            name: 'appName',
            message: formatPrompt([
                chalk.bold.white('What should this webapp be called?'),
                chalk.gray('  This should conform to the npm "kebab-case" naming, e.g. enigma-web-app')
            ]),
        }, {
            type: 'input',
            name: 'appDescription',
            message: formatPrompt([
                chalk.bold.white('What will the app be used for?'),
                chalk.gray('  A one-liner - the elevator pitch!')
            ])
        }, {
            type: 'input',
            name: 'authorName',
            message: formatPrompt(chalk.bold.white('What is your first and last name?')),
            default: this.user.git.name()
        }, {
            type: 'input',
            name: 'authorEmail',
            message: formatPrompt(chalk.bold.white('What is your email?')),
            default: this.user.git.email()
        }];

        this.prompt(prompts, function(answers) {
            this.answers = answers;
            this.answers.appName = _.kebabCase(this.answers.appName);

            this.answers.currentDate = (new Date()).toLocaleDateString();
            this.answers.currentYear = (new Date()).getFullYear();

            done();
        }.bind(this));
    },

    writing: function() {
        var copier = copy.bind(this);

        mkdirp('src');
        mkdirp('release');
        mkdirp('test');

        copier([
            '.eslintignore',
            '.eslintrc',
            '.gitignore',
            'INSTALL',
            'Gruntfile.js',
            'webpack.config.js',
            'src/main.js',
            'src/components/Example.jsx',
            'src/scss/_sanitize.scss',
            'src/scss/main.scss',
            'src/scss/components/example.scss',
            'test/bind.js',
            'test/unit.js',
            'test/components/Example-test.jsx'
        ]);

        copier([
            'package.json',
            'index.html',
            'CHANGELOG.md',
            'LICENSE.md',
            'README.md'
        ], this.answers);
    },

    install: function() {
        this.npmInstall();
    }
});
