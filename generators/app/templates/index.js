import React from 'react';
import ReactDOM from 'react-dom';
import Example from './example';

// Do bootstrapping here...

ReactDOM.render(
    <Example
        title='Hello World!'
        description='This is your first React component...' />, document.querySelector('main')
);
