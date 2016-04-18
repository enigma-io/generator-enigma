/* eslint no-unused-expressions:0 */

import React from 'react';
import ReactDOM from 'react-dom';
import Example from '../../example';

describe('Example', () => {
    const testingRootNode = document.body.appendChild(document.createElement('div'));
    const render = vdom => ReactDOM.render(vdom, testingRootNode);

    it('should render successfully', () => {
        expect(render(<Example />)).not.toBe(undefined);
    });

    it('should accept a title', () => {
        const element = render(<Example title='Hello World!' />);

        expect(element.refs.title).not.toBe(undefined);
        expect(element.refs.title.textContent).toBe('Hello World!');
    });

    it('should accept a description', () => {
        const element = render(<Example description='Party time!' />);

        expect(element.refs.description).not.toBe(undefined);
        expect(element.refs.description.textContent).toBe('Party time!');
    });
});
