/* eslint no-unused-expressions:0 */

import React from 'react';
import {render, unmountComponentAtNode as cleanup} from 'react-dom';
import Example from './index';

describe('Example', () => {
    const testingRootNode = document.body.appendChild(document.createElement('div'));
    const r = vdom => render(vdom, testingRootNode);

    afterEach(() => cleanup(testingRootNode));

    it('renders successfully', () => {
        expect(r(<Example />)).not.toBe(undefined);
    });

    it('accepts a title', () => {
        const element = r(<Example title='Hello World!' />);

        expect(element.refs.title).not.toBe(undefined);
        expect(element.refs.title.textContent).toBe('Hello World!');
    });

    it('accepts a description', () => {
        const element = r(<Example description='Party time!' />);

        expect(element.refs.description).not.toBe(undefined);
        expect(element.refs.description.textContent).toBe('Party time!');
    });
});
