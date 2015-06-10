'use strict';

var _ = require('lodash');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

function copy(mapping, data) {
    _.each(mapping, function(value, key) {
        this.fs.copyTpl(
            this.templatePath(key),
            this.destinationPath(value),
            data
        );
    }, this);
}

function formatPrompt(pieces) {
    return (Array.isArray(pieces) ? pieces : [pieces]).concat(': ').join('\n');
}

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        this.log(yosay(
            'Let\'s roll a component, shall we?'
        ));

        var prompts = [{
            type: 'input',
            name: 'componentName',
            message: formatPrompt([
                chalk.bold.white('What should this component be called?'),
                chalk.yellow('The name should be written in PascalCase, e.g. DataBrowser'),
                chalk.gray('You may also add folders before it like: viewers/DataBrowser which will make this structure: components/viewers/DataBrowser.jsx')
            ])
        }];

        this.prompt(prompts, function(answers) {
            var name = answers.componentName;
            var idx = name.lastIndexOf('/');

            this.answers = answers;
            this.answers.componentDirectory = idx !== -1 ? name.slice(0, idx + 1) : '';
            this.answers.componentName = _.startCase(idx !== -1 ? name.slice(idx + 1) : name).replace(/\s/g, '');

            done();
        }.bind(this));
    },

    writing: function() {
        var copier = copy.bind(this);
        var name = this.answers.componentName;
        var directory = this.answers.componentDirectory;

        copier({
            'ComponentTemplate.jsx': 'src/components/' + directory + name + '.jsx',
            'ComponentTestTemplate.jsx': 'test/components/' + directory + name + '-test.jsx'
        }, this.answers);
    }
});
