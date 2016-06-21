import React from 'react';
import {render} from 'react-dom';

<% if (include_routing) { %>import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';<% } %>

import Example from './example';

<% if (include_routing) { %>class Application extends React.Component {
    render() {
        return (
            <main>
                {React.cloneElement(
                    this.props.children,
                    this.props.children.props.route,
                )}
            </main>
        );
    }
}

class NotFound extends React.Component {
    render() {
        return (
            <main>404</main>
        );
    }
}

const app = (
    <Router history={browserHistory}>
        <Route path='/' component={Application}>
            <IndexRoute
                component={Example}
                title='Hello World!'
                description='This is your first React component...' />

            <Route path='*' component={NotFound} />
        </Route>
    </Router>
);<% } else { %>const app = (
    <Example
        title='Hello World!'
        description='This is your first React component...' />
);<% } %>

// Do bootstrapping here...

render(app, document.getElementById('__root'));
