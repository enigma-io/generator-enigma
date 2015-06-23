import React from 'react/addons';
import Example from './components/Example';

require('./scss/main.scss');

// Do bootstrapping here...

React.render(React.createElement(Example, {
    title: 'Hello World!',
    description: 'This is your first React component...'
}), document.body);
