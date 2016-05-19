import React from 'react';
import {render} from 'react-dom';
import Example from './example';

// Do bootstrapping here... perhaps add something like react-router?

render(
    <Example
        title='Hello World!'
        description='This is your first React component...' />, document.querySelector('main')
);
