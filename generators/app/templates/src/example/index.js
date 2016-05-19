import React from 'react';

export default class Example extends React.Component {
    static propTypes = {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
    }

    renderTitle() {
        if (this.props.title) {
            return (
                <h1 ref='title' className='ui-example-title'>
                    {this.props.title}
                </h1>
            );
        }
    }

    renderDescription() {
        if (this.props.description) {
            return (
                <p ref='description' className='ui-example-desc'>
                    {this.props.description}
                </p>
            );
        }
    }

    render() {
        return (
            <div className='ui-example'>
                {this.renderTitle()}
                {this.renderDescription()}
            </div>
        );
    }
}
