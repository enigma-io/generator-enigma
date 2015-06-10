'use strict';

var React = require('react/addons');
var Example = require('../../src/components/Example.jsx');

describe('Example', function() {
    it('should render successfully', function() {
        expect(React.render(<Example />, document.body)).to.not.be.undefined;
    });

    it('should accept a title', function() {
        var el = React.render(<Example title='Hello World!' />, document.body);
        var titleEl = el.refs.title;

        expect(titleEl).to.not.be.undefined;
        expect(React.findDOMNode(titleEl).textContent).to.equal('Hello World!');
    });

    it('should accept a description', function() {
        var el = React.render(<Example title='Hello World!' description='Party time!' />, document.body);
        var descEl = el.refs.description;

        expect(descEl).to.not.be.undefined;
        expect(React.findDOMNode(descEl).textContent).to.equal('Party time!');
    });
});
