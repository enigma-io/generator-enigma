/* eslint no-unused-expressions:0 */

import React from 'react/addons';
import Example from '../../src/components/Example';

describe('Example', () => {
	it('should render successfully', () => {
		expect(React.render(<Example />, document.body)).to.not.be.undefined;
	});

	it('should accept a title', () => {
		let el = React.render(<Example title='Hello World!' />, document.body);
		let titleEl = el.refs.title;

		expect(titleEl).to.not.be.undefined;
		expect(React.findDOMNode(titleEl).textContent).to.equal('Hello World!');
	});

	it('should accept a description', () => {
		let el = React.render(<Example title='Hello World!' description='Party time!' />, document.body);
		let descEl = el.refs.description;

		expect(descEl).to.not.be.undefined;
		expect(React.findDOMNode(descEl).textContent).to.equal('Party time!');
	});
});
