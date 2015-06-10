'use strict';

var React = require('react/addons');
var <%= componentName %> = require('../../src/components/<%= componentDirectory %><%= componentName %>.jsx');

describe('<%= componentName %>', function() {
    it('should render successfully', function() {
        expect(React.render(<<%= componentName %> />, document.body)).to.not.be.undefined;
    });
});
