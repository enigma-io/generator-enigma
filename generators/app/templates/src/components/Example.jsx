import React from 'react/addons';

require('../scss/components/Example.scss');

export default class Example extends React.Component {
    render() {
        return (
            <div className='ui-example'>
                {this.renderTitle()}
                {this.renderDescription()}
            </div>
        );
    }

    renderTitle() {
        if (this.props.title) {
            return (
                <h1 ref='title' className='ui-example-title'>{this.props.title}</h1>
            );
        }
    }

    renderDescription() {
        if (this.props.description) {
            return (
                <p ref='description' className='ui-example-desc'>{this.props.description}</p>
            );
        }
    }
}

Example.propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string
};
