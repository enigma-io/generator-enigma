'use strict';

(function() {
    var React = require('react/addons');
    var Example = require('./components/Example.jsx');

    function render() {
        React.render(React.createElement(Example, {
            title: 'Hello World!',
            description: 'This is your first React component...'
        }), document.body);
    }

    require('./scss/main.scss');

    // Do bootstrapping here...

    render();
})();
