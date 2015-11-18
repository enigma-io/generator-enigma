/* eslint no-unused-expressions:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Example from './index';

describe('Example', () => {
    const testingRootNode = document.body.appendChild(document.createElement('div'));
    const render = vdom => ReactDOM.render(vdom, testingRootNode);

    it('should render successfully', () => {
        expect(render(<Example />)).to.not.be.undefined;
    });

    it('should accept a title', () => {
        const element = render(<Example title='Hello World!' />);

        expect(element.refs.title).to.not.be.undefined;
        expect(element.refs.title.textContent).to.equal('Hello World!');
    });

    it('should accept a description', () => {
        const element = render(<Example description='Party time!' />);

        expect(element.refs.description).to.not.be.undefined;
        expect(element.refs.description.textContent).to.equal('Party time!');
    });
});
