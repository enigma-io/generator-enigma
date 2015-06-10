'use strict';

var React = require('react/addons');
var Example = React.createClass({
    propTypes: process.env.NODE_ENV !== 'production' ? {
        title: React.PropTypes.string,
        description: React.PropTypes.string
    } : {},

    render: function() {
        return (
            <div className='ui-example'>
                {this.renderTitle()}
                {this.renderDescription()}
            </div>
        );
    },

    renderTitle: function() {
        if (this.props.title) {
            return (
                <h1 ref='title' className='ui-example-title'>{this.props.title}</h1>
            );
        }
    },

    renderDescription: function() {
        if (this.props.description) {
            return (
                <p ref='description' className='ui-example-desc'>{this.props.description}</p>
            );
        }
    }
});

require('../scss/components/example.scss');

module.exports = Example;
