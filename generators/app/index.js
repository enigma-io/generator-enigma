'use strict';

var _ = require('lodash');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

function copy(paths, data) {
    paths = Array.isArray(paths) ? paths : [paths];

    paths.forEach(function(path) {
        var src;
        var dest;

        if (Array.isArray(path)) {
            src = path[0];
            dest = path[1];
        } else {
            src = path;
            dest = path;
        }

        this.fs[data ? 'copyTpl' : 'copy'](
            this.templatePath(src),
            this.destinationPath(dest),
            data
        );
    }, this);
}

function formatPrompt(pieces) {
    return (Array.isArray(pieces) ? pieces : [pieces]).concat('  : ').join('\n');
}

module.exports = yeoman.Base.extend({
    prompting: function() {
        var done = this.async();

        this.log(yosay([
            chalk.bold.white('It\'s app time!'),
            chalk.gray('You\'re 4 questions from a fully-functional React app, built with best practice enforcement, integrated testing, and more.')
        ].join('\n')));

        // fix yosay doing weird stuff in Node 6+
        setTimeout(() => {
            var prompts = [{
                type: 'input',
                name: 'appName',
                message: formatPrompt([
                    chalk.bold.white('What should this webapp be called?'),
                    chalk.gray('  This should conform to the npm "kebab-case" naming, e.g. google-maps')
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
            }, {
                type: 'confirm',
                name: 'include_routing',
                message: formatPrompt(chalk.bold.white('Would you like routing to be set up? (via react-router)')),
            }];

            this.prompt(prompts, function(answers) {
                this.answers = answers;
                this.answers.appName = _.kebabCase(this.answers.appName);

                this.answers.currentDate = (new Date()).toLocaleDateString();
                this.answers.currentYear = (new Date()).getFullYear();

                done();
            }.bind(this));
        }, 0);
    },

    writing: function() {
        var copier = copy.bind(this);

        mkdirp('public/assets');
        mkdirp('scripts');
        mkdirp('src/example/__tests__');
        mkdirp('src/static/assets/images');

        copier([
            ['_eslintignore', '.eslintignore'],
            ['_eslintrc', '.eslintrc'],
            ['_gitignore', '.gitignore'],
            'CONTRIBUTING.md',
            'scripts/budo.js',
            'scripts/parallelize.sh',
            'src/example/index.js',
            'src/example/style.styl',
            'src/example/__tests__/index.js',
            'src/style.styl',
        ]);

        copier([
            'CHANGELOG.md',
            'package.json',
            'README.md',
            'src/index.js',
            'src/static/index.html'
        ], this.answers);
    },

    install: function() {
        this.npmInstall();
    }
});
